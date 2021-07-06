/*
 * @Author: your name
 * @Date: 2021-07-05 10:55:38
 * @LastEditTime: 2021-07-06 11:48:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun/qiankun-blogreact/config-overrides.js
 */
const { override, addLessLoader } = require("customize-cra");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  webpack: override(
    /**
     * @Descripttion: 配置less
     * @modifyVars: 主题配置
     * @return:
     */
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
      },
    }),
    // fixBabelImports("import",{
    //     "style":"css",
    // }),
    (config) => {
      config.plugins = [...config.plugins, new MiniCssExtractPlugin()];
      config.output.library = "reactAppBlog";
      config.output.libraryTarget = "umd";
      config.output.jsonpFunction=`webpackJsonp_reactAppBlog`;
      config.output.publicPath = "/childapps/reactAppBlog/";
      config.output.globalObject = 'window';
      //   config.css.extract = false;
      return config;
    }
  ),
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.headers = {
        "Access-Control-Allow-Origin": "*",
      };
      return config;
    };
  },
};

// const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require("customize-cra");
// const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent"); // 直接这么引入就可以，他在create-app-react包里 这个就是getLocalIdent属性要设置的值

// const getStyleLoaders = (cssOptions, preProcessor, lessOptions) => {
//   // 这个是use里要设置的，封装了下
//   const loaders = [
//     require.resolve("style-loader"),
//     {
//       loader: require.resolve("css-loader"),
//       options: cssOptions,
//     },
//     {
//       // Options for PostCSS as we reference these options twice
//       // Adds vendor prefixing based on your specified browser support in
//       // package.json
//       loader: require.resolve("postcss-loader"),
//       options: {
//         // Necessary for external CSS imports to work
//         // https://github.com/facebook/create-react-app/issues/2677
//         ident: "postcss",
//         plugins: () => [
//           require("postcss-flexbugs-fixes"),
//           require("postcss-preset-env")({
//             autoprefixer: {
//               flexbox: "no-2009",
//             },
//             stage: 3,
//           }),
//         ],
//       },
//     },
//   ];
//   if (preProcessor) {
//     loaders.push({
//       loader: require.resolve(preProcessor),
//       options: lessOptions,
//     });
//   }
//   return loaders;
// };

// module.exports = override(
//   addLessLoader({
//     javascriptEnabled: true,
//     modifyVars: { "@primary-color": "#16a951" },
//     sourceMap: false,
//   }),
//   (config) => {
//     // 增加处理less module配置 customize-cra 不提供 less.module 只提供css.module
//     const oneOf_loc = config.module.rules.findIndex((n) => n.oneOf); // 这里的config是全局的
//     config.plugins=[...config.plugins,new MiniCssExtractPlugin()]
//     config.module.rules[oneOf_loc].oneOf = [
//       {
//         test: /\.module\.less$/,
//         use: getStyleLoaders(
//           {
//             importLoaders: 2,
//             modules: {
//               getLocalIdent: getCSSModuleLocalIdent,
//             },
//           },
//           "less-loader"
//         ),
//       },
//       ...config.module.rules[oneOf_loc].oneOf,
//     ];

//     return config;
//   }
// );
