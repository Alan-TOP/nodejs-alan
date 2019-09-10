安装koa2
安装koa2脚手架；-g 全局安装；--registry 指定镜像，使用淘宝镜像会更快一些
npm install koa-generator -g --registry=https://registry.npm.taobao.org
koa2 nodejs-koa2  创建koa2项目
npm install/i --registry=https://registry.npm.taobao.org  安装package.json中携带的插件
npm start 启动项目

$ koa2 nodejs-koa2

   create : nodejs-koa2
   create : nodejs-koa2/package.json
   create : nodejs-koa2/app.js
   create : nodejs-koa2/views
   create : nodejs-koa2/views/index.pug
   create : nodejs-koa2/views/layout.pug
   create : nodejs-koa2/views/error.pug
   create : nodejs-koa2/routes
   create : nodejs-koa2/routes/index.js
   create : nodejs-koa2/routes/users.js
   create : nodejs-koa2/public
   create : nodejs-koa2/bin
   create : nodejs-koa2/bin/www
   create : nodejs-koa2/public/images
   create : nodejs-koa2/public/stylesheets
   create : nodejs-koa2/public/stylesheets/style.css

   install dependencies:
     $ cd nodejs-koa2 && npm install

   run the app:
     $ DEBUG=nodejs-koa2:* npm start

   create : nodejs-koa2/public/javascripts