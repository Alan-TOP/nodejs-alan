

const handleBlogRouter = (req, res) => {
    const method = req.method // GET POST
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    // 获取博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        return{
            msg: 'ddddd'+query
        }
    }

    // 获取博客详情
    if (method === 'GET' && path === '/api/blog/detail') {
        return{
            msg: 'ddddd'+query
        }
    }

    // 新建一篇博客
    if (method === 'POST' && req.path === '/api/blog/new') {
        return{
            msg: 'ddddd'+query
        }
    }

    // 更新一篇博客
    if (method === 'POST' && path === '/api/blog/update') {
        return{
            msg: 'ddddd'+query
        }
    }

    // 删除一篇博客
    if (method === 'POST' && path === '/api/blog/del') {
        return{
            msg: 'ddddd'+query
        }
    }
}

module.exports = handleBlogRouter