# webpack-demo

## 起步

`npm init -y`: 生成 `package.json`文件

`npm install webpack webpack-cli -D`: 安装依赖， `webpack-cli`使我们可以在命令行执行webpack命令


## 加载资源文件

### css

css-loader、style-loader

### image/字体

file-loader

### 数据资源

webpack内置支持打包JSON文件

csv/tsv: csv-loader

xml: xml-loader


## 管理输出

### html-webpack-plugin

webpack的index.html不能自动更新引入的入口文件名称，`html-webpack-plugin`插件用于解决这个问题，可以向 index.html 动态添加 bundle


### clean-webpack-plugin

每次重新打包构建前清理无用文件


## 开发 develpoment

### source-map | devtool

> source-map 追踪代码错误和警告，将编译后的代码映射到源代码位置

> source-map 配置项说明

- 打包后的代码：所有代码生成一大块代码，看不到相互分离的模块。

- 生成的代码：模块间相互分离，并用模块名注释。webpack转换后的代码。

- 转换过的代码：模块间相互分离，并用模块名注释。webpack转换前，loader转译后的代码。

- 原始源代码：模块间相互分离，并用模块名注释。loader转译前的源代码。

- 无源代码：无源代码。

- 仅限行：每行代码一个映射。


### 开发工具

> webpack --watch

- 监听打包文件的变化，有文件更新，代码自动重新编译

- 注意：需要配置以下参数才不会让 index.html 消失

```
  new CleanWebpackPlugin({
    // 运行watch后不移除index.html文件
    cleanStaleWebpackAssets: false,
  })
```

> webpack-dev-server、webpack-dev-middleware

- webpack-dev-server 内部使用了 webpack-dev-middleware

- webpack-dev-middleware 本事是一个容器，把webpack处理后的文件传递给一个服务器。需要配合服务器使用。


## Hot Module ReplaceMent（HMR）: 热模块替换

- webpack 内置插件

- 局部更新

- 不适用于生产环境

