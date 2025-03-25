const CODESPACE_NAME = process.env.CODESPACE_NAME || 'localhost';
const BACKEND_URL = `https://${CODESPACE_NAME}-8080.app.github.dev`;

module.exports = {
    REACT_APP_BACKEND_URL: BACKEND_URL
};