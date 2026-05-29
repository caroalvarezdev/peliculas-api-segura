const verifyRole = (...rolesPermitidos) => {
  return (req, res, next) => {
    if (!req.user || !req.user.rol) {
      return res.status(401).json({
        msg: 'Acceso denegado: usuario no autenticado'
      });
    }

    if (!rolesPermitidos.includes(req.user.rol)) {
      return res.status(403).json({
        msg: 'Acceso denegado: no tiene permisos para esta acción'
      });
    }

    next();
  };
};

module.exports = verifyRole;