// 安装react-app-rewired 以及customize-cra之后，可以手动修改默认配置
const { override, fixBabelImports } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
)
  