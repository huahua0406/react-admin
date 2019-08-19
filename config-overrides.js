const { override, disableEsLint, fixBabelImports, addLessLoader, addWebpackAlias, addBundleVisualizer, addDecoratorsLegacy } = require('customize-cra')

/**
 * build 不生成.map文件 => 请在GENERATE_SOURCEMAP环境变量设置为的情况下运行构建false
 * package.json -> "scripts"-> "build" -> "GENERATE_SOURCEMAP=false react-scripts build"
 */

module.exports = override(
  disableEsLint(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: true    // `style: true` 会加载 less 文件 这里不注释掉就无法使用less修改主题
  }),
  addLessLoader({
    javascriptEnabled: true,  //允许通过js调用antd组件
    localIdentName: '[local]--[hash:base64:5]',  // 默认 [path][name]-[local]--[hash:base64:5]
    // modifyVars: { '@primary-color': '#1DA57A' }, // 这里不注释掉，那你的无法使用less修改主题色primary-color
  }),
  addWebpackAlias({
    "@": require('path').resolve(__dirname, "src"),
  }),
  addBundleVisualizer({}, true), // yarn run build --analyze
  addDecoratorsLegacy()
)



