const { Router } = require('express');
const router = Router();

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Importar librería JWT que genera tokens



// Creación de GET, ruta para Obtener Usuarios

router.get('/', async (req, res) => {

    try {

        const usuarios = await User.find();

        res.json({
            usuarios
        });

    } catch (error) {

        res.status(500).json({
            msg: 'Error al obtener usuarios'
        });

    }

});



// Creación de POST, Ruta para Crear Usuario

router.post('/', async (req, res) => {

    try {

        const { nombre, email, password, rol } = req.body;

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const usuario = new User({
            nombre,
            email,
            password: hashedPassword,
            rol
        });

        await usuario.save();

        res.json({
            msg: 'Usuario creado correctamente',
            usuario
        });

    } catch (error) {

        res.status(500).json({
            msg: 'Error al crear usuario'
        });

    }

});



// Creación de POST, Ruta para hacer el Login

router.post('/login', async (req, res) => {

    try {

        const { email, password } = req.body;

        // Buscar usuario por email
        const usuario = await User.findOne({ email });

        // Validar si usuario existe
        if (!usuario) {

            return res.status(400).json({
                msg: 'Usuario no encontrado'
            });

        }

        // Comparar contraseña
        const validPassword = bcrypt.compareSync(
            password,
            usuario.password
        );

        // Validar contraseña
        if (!validPassword) {

            return res.status(400).json({
                msg: 'Contraseña incorrecta'
            });

        }

        // Generar token JWT
        const token = jwt.sign(
            {
                uid: usuario._id,
                rol: usuario.rol
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '2h'
            }
        );

        res.json({
            msg: 'Login correcto',
            token
        });

    } catch (error) {

        res.status(500).json({
            msg: 'Error en login'
        });

    }

});

module.exports = router;