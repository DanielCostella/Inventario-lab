const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    console.log('No se proporcionó token de autenticación');
    return res.status(401).json({ error: 'No se proporcionó token de autenticación' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error('Error al verificar el token:', err);
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token expirado' });
      }
      return res.status(403).json({ error: 'Token inválido' });
    }

    console.log('Usuario autenticado:', user);
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;