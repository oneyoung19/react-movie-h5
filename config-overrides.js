// 安装react-app-rewired 以及customize-cra之后，可以手动修改默认配置。之所以需要customize-cra,是因为react-app-rewired已经是2.0版本。
const { override, fixBabelImports, addPostcssPlugins } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  // 使用postcss-px2rem 实现移动端适配  postcss-px2rem-exclude可以排除第三方库受rem的影响

  // 该插件会自动将css文件中的px单位转化为rem单位, 37.5指的是750设计稿下的html元素的font-size大小。如果设计稿是640,就改成对应的font-size大小即可。这样的话，在写页面时直接根据设计稿的尺寸来写就可以。另外根元素的font-size是由lib-flexbile自动检测的。
  addPostcssPlugins([require("postcss-px2rem")({ remUnit: 37.5 })])
  // addPostcssPlugins([require("postcss-px2rem-exclude")({ remUnit: 75, exclude: /node_modules/i })])
)
  