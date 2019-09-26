const http = require('http')

const PORT = 6666
const serverHandle = require('../app')

const server = http.createServer(serverHandle)
server.listen(PORT)