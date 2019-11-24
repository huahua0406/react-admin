const {
	override,
	disableEsLint,
	fixBabelImports,
	addLessLoader,
	addWebpackAlias,
	addBundleVisualizer,
    addDecoratorsLegacy,
    addWebpackPlugin
} = require('customize-cra');

const WebpackBar = require('webpackbar');

// 自定义配置：参考 https://juejin.im/post/5cf08504e51d4510624f975c

/**
 * build 不生成.map文件 => 请在GENERATE_SOURCEMAP环境变量设置为的情况下运行构建false
 * package.json -> "scripts"-> "build" -> "GENERATE_SOURCEMAP=false react-scripts build"
 */

// Todo：
// 1 webpackBar  https://juejin.im/post/5b6be6c7e51d4519044ad684#heading-1
// 2 去除console https://www.cnblogs.com/luguiqing/p/11341058.html
// 3.打包桌面提醒 https://www.cnblogs.com/EnSnail/p/11122333.html
            //  https://www.jianshu.com/p/c4adfcc21aad
// 4.生成 .gz后缀的文件 https://www.jianshu.com/p/9cf72b1f3f8b

// const isProduction = process.env.NODE_ENV === 'production';


module.exports = override(
	disableEsLint(),
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es'
		// style: true    // `style: true` 会加载 less 文件 这里不注释掉就无法使用less修改主题
	}),
	addLessLoader({
		javascriptEnabled: true, //允许通过js调用antd组件
		localIdentName: '[local]--[hash:base64:5]' // 默认 [path][name]-[local]--[hash:base64:5]
		// modifyVars: { '@primary-color': '#1DA57A' }, // 这里不注释掉，那你的无法使用less修改主题色primary-color
	}),
	addWebpackAlias({
		'@': require('path').resolve(__dirname, 'src')
	}),
	addBundleVisualizer({}, true), // 分析打包文件 yarn run build --analyze
    addDecoratorsLegacy(), // 装饰器
    addWebpackPlugin(new WebpackBar())
);
