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

### hot-module-replacement api

> accept

```
module.hot.accept(
  dependencies, // 字符串或字符串数组，表示引入（import）的依赖文件
  callback // 回调函数，用于执行将要更新的操作
)
```

```
module.hot.accept(self) // self 是一个函数名，表示自己模块内将要更新的函数
```


## Tree Shaking （摇树）

- 构建时删除未使用的代码（dead-code）

- `package.json`中配置`sideEffects`（副作用）属性，值为 `false`时表示一切代码都没有副作用，构建时可以任意删除未使用的代码；有副作用的代码需要配置`sideEffects`值为数组，在数组中添加有副作用的文件，构建时不会被删除。

- 副作用：对构建代码产生影响的代码，如 polyfill, .css 文件。


## Code Splitting （代码分离）

> 代码分离的三种方式

- 入口起点：使用`entry`手动配置不同的入口文件实现代码分离。 缺点：不同chunk引入的公共的模块会被重复打包。

- SplitChunksPlugin

- 动态导入：通过模块调用模块的内联函数实现代码分离。

```
async function getComponent() {
  const element = docuemnt.createElement('div');
  // 动态导入，使用webpackChunkName给chunk命名 
  const { default: _ } = await import(/* webpackChunkName: 'lodash' */ 'lodash');
  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
});
```

> Prefetching（预抓取）/Preloading（预加载）

- prefetch: 资源在将来会被使用

- preload: 资源现在被使用


#### prefetch 和 preloading 的差异

- preload chunk 和 parent chunk 并行加载；prefetch chunk 在 parent chunk 加载完成后加载。

- preload chunk 有中等优先级，并且立刻下载；prefetch chunk 在浏览器空闲时下载。

- parent chunk 应该立即请求 preload chunk; parent chunk 会在将来任意时间使用 prefetch chunk。

- 浏览器支持不同。

