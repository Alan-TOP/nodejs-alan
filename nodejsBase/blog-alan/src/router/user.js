const querystring = require('querystring')

const handleUserRouter = (req, res) => {
    const method = req.method // GET POST
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    // 登录验证的测试
    if (method === 'GET' && path === '/api/user/login-test') {
        return{
            msg: 'ddddd'+query
        }
    }
}

module.exports = handleUserRouter
