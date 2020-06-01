const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    // 启用热模块替换
    hot: true,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      // {
      //   // 加载 css
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: '../',
      //         esModule: true,
      //       },
      //     },
      //     'css-loader', // style-loader
      //   ]
      // },
      {
        // 加载图片
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          'file-loader'
        ],
      },
      {
        // 加载字体
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ],
      },
      {
        // 加载文件
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ],
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
    new CleanWebpackPlugin({
      // 运行watch后不移除index.html文件
      cleanStaleWebpackAssets: false,
    }),
  ]
};