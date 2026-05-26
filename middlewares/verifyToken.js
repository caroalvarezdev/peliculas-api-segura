const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Extraer la cabecera Authorization
    const authHeader = req.header('Authorization');
    
    // Validar si existe la cabecera
    if (!authHeader) {
        return res.status(401).json({ msg: 'Acceso denegado: No se proporcionó un token' });
    }

    // El token debe venir en formato "Bearer <token>"
    const parts = authHeader.split(' ');
    
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
         return res.status(401).json({ msg: 'Acceso denegado: Formato de token inválido' });
    }

    const token = parts[1];

    try {
        // Verificar la autenticidad del token
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        
        // Agregar el payload del token a la petición para uso futuro
        req.user = payload;
        
        next();
    } catch (error) {
        // Manejar errores de expiración o firma alterada
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ msg: 'Acceso denegado: El token ha expirado' });
        }
        return res.status(401).json({ msg: 'Acceso denegado: Token inválido o alterado' });
    }
};

module.exports = verifyToken;
