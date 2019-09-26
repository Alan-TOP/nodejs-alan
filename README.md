# nodejs-alan
简单的说 Node.js 就是运行在服务端的 JavaScript

该项目主要包含三个模块

nodejsBase
主要用于记录基本的nodejs使用信息
搭建基础的nodejs项目

nodejs-express
构建基础的express框架nodejs项目

nodejs-koa2
构建基础的koa2框架的nodejs项目


nodejs项目的运行与启动
    node ***.js     node后面跟文件名，直接运行该单个文件；或者单个文件为明确入口的

    框架类的运行与启动：
    Demo：
         "scripts":  {
                "test": "echo \"Error: no test specified\" && exit 1",
                "dev": "cross-env NODE_ENV=dev nodemon ./bin/www.js",
                "prd": "cross-env NODE_ENV=production nodemon ./bin/www.js"
            }
        cross-env：设置环境变量插件
        nodemon：Node自动重启工具   nodemon ***.js  类似于node ***.js启动
    npm run dev
    npm run后面跟script中设置的变量名；执行后面的脚本
    npm run是npm run-script的简写，顾名思义就是执行脚本。执行的脚本配置在package.json中的scripts对象。

node --save可以省略掉手动修改package.json的步骤
    当你为你的模块安装一个依赖模块时，正常情况下你得先安装他们（在模块根目录下npm install module-name），然后连同版本号手动将他们添加到模块配置文件package.json中的依赖里（dependencies）。

    -save和save-dev可以省掉你手动修改package.json文件的步骤。
    npm install module-name -save 自动把模块和版本号添加到dependencies部分
    npm install module-name -save-dve 自动把模块和版本号添加到devdependencies部分

    通过这些命令，我们会得到一个新的package.json。然后再做一个试验就懂得了区别：删除node_modules目录，然后执行 npm install --production，可以看到，npm只帮我们自动安装package.json中dependencies部分的模块；如果执行npm install ，则package.json中指定的dependencies和devDependencies都会被自动安装进来。



NPM 使用介绍
$ npm -v        版本查看
2.3.0

使用淘宝镜像的命令：
npm install -g cnpm --registry=https://registry.npm.taobao.org

使用 npm 命令安装模块
    npm 安装 Node.js 模块语法格式如下：
    $ npm install <Module Name>

    以下实例，我们使用 npm 命令安装常用的 Node.js web框架模块 express:
    $ npm install express

    安装好之后，express 包就放在了工程目录下的 node_modules 目录中，因此在代码中只需要通过 require('express') 的方式就好，无需指定第三方包路径。
    var express = require('express');

全局安装与本地安装
    npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如
    npm install express          # 本地安装
    npm install express -g   # 全局安装

本地安装
    1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
    2. 可以通过 require() 来引入本地安装的包。
全局安装
    1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
    2. 可以直接在命令行里使用。
如果你希望具备两者功能，则需要在两个地方安装它或使用 npm link。


接下来我们使用全局方式安装 express
    $ npm install express -g
    安装过程输出如下内容，第一行输出了模块的版本号及安装位置。
查看安装信息
    你可以使用以下命令来查看所有全局安装的模块：
    $ npm list -g
如果要查看某个模块的版本号，可以使用命令如下：
    $ npm list grunt
使用 package.json
    package.json 位于模块的目录下，用于定义包的属性。
    接下来让我们来看下 express 包的 package.json 文件，位于 node_modules/express/package.json
Package.json 属性说明
    name - 包名。
    version - 包的版本号。
    description - 包的描述。
    homepage - 包的官网 url 。
    author - 包的作者姓名。
    contributors - 包的其他贡献者姓名。
    dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
    repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
    main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
    keywords - 关键字
卸载模块
    我们可以使用以下命令来卸载 Node.js 模块。
    $ npm uninstall express
    卸载后，你可以到 ./node_modules/ 目录下查看包是否还存在，或者使用以下命令查看：
    $ npm ls
更新模块
    我们可以使用以下命令更新模块：
    $ npm update express
搜索模块
    使用以下来搜索模块：
    $ npm search express
创建模块
    创建模块，package.json 文件是必不可少的。我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果。
    $ npm init
    以上的信息，你需要根据你自己的情况输入。在最后输入 "yes" 后会生成 package.json 文件。
    如果想直接生成默认的package.json 文件，不需要自定义设置，则可以用如下命令直接生成
    $ npm init -y

接下来我们可以使用以下命令在 npm 资源库中注册用户（使用邮箱注册）：
    $ npm adduser
    Username: mcmohd
    Password:
    Email: (this IS public) mcmohd@gmail.com
接下来我们就用以下命令来发布模块：
    $ npm publish
    如果你以上的步骤都操作正确，你就可以跟其他模块一样使用 npm 来安装。

版本号
    使用NPM下载和发布代码时都会接触到版本号。NPM使用语义版本号来管理代码，这里简单介绍一下。

    语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。
    如果只是修复bug，需要更新Z位。
    如果是新增了功能，但是向下兼容，需要更新Y位。
    如果有大变动，向下不兼容，需要更新X位。
    版本号有了这个保证后，在申明第三方包依赖时，除了可依赖于一个固定版本号外，还可依赖于某个范围的版本号。例如"argv": "0.0.x"表示依赖于0.0.x系列的最新版argv。

NPM支持的所有版本号范围指定方式可以查看官方文档。

NPM 常用命令
    除了本章介绍的部分外，NPM还提供了很多功能，package.json里也有很多其它有用的字段。
    除了可以在npmjs.org/doc/查看官方文档外，这里再介绍一些NPM常用命令。
    NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
    NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
    使用npm help <command>可查看某条命令的详细帮助，例如npm help install。
    在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
    使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
    使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
    使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
    使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。

使用淘宝 NPM 镜像
    大家都知道国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。
    淘宝 NPM 镜像是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。
    你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:
    $ npm install -g cnpm --registry=https://registry.npm.taobao.org
    这样就可以使用 cnpm 命令来安装模块了：
    $ cnpm install [name]
    更多信息可以查阅：http://npm.taobao.org/。

如果你遇到了使用 npm 安 装node_modules 总是提示报错：报错: npm resource busy or locked.....。
    可以先删除以前安装的 node_modules :
    npm cache clean
    npm install