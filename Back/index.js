//En este archivo levanta el sv.
const server = require('./src/server')

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server listening on port: http://localhost:${PORT}`)
 });