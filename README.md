# 🎬 Películas API Segura

API REST segura desarrollada con Node.js, Express y MongoDB.  
Implementa autenticación de usuarios mediante JWT y protección de contraseñas utilizando bcryptjs.

---

# 🚀 Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Postman

---

# 🔐 Funcionalidades de Seguridad

• Registro de usuarios  
• Contraseñas protegidas mediante hashing con bcrypt  
• Login de usuarios  
• Generación de token JWT  
• Expiración de token  
• Manejo de roles:
- administrador
- docente

---

# 📂 Endpoints Principales

## 1. Crear Usuario

### POST

```http
/api/users
```

### Body

```json
{
  "nombre": "Juan",
  "email": "juan@gmail.com",
  "password": "123456",
  "rol": "administrador"
}
```

---

## 2. Obtener Usuarios

### GET

```http
/api/users
```

---

## 3. Login de Usuario

### POST

```http
/api/users/login
```

### Body

```json
{
  "email": "juan@gmail.com",
  "password": "123456"
}
```

### Respuesta

```json
{
  "msg": "Login correcto",
  "token": "JWT_TOKEN"
}
```

---

# 🔑 JWT - JSON Web Token

El sistema genera tokens JWT para autenticar usuarios.

Los tokens contienen:

- ID del usuario
- Rol del usuario
- Tiempo de expiración

Tiempo de expiración configurado:

```text
2 horas
```

---

# Instalación del Proyecto

## Clonar repositorio

```bash
git clone https://github.com/caroalvarezdev/peliculas-api-segura.git
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar servidor

```bash
node index.js
```

---

# Pruebas

Las pruebas de autenticación y endpoints fueron realizadas utilizando Postman.

---

# Autores

- Carolina Álvarez
- XXXXXXXX
- XXXXXXXX
- XXXXXXXX

---

# Asignatura

ꄗ Desarrollo de Software Seguro ꄗ
