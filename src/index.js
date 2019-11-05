import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
// store
import store from './redux/store';
// 内置组件国际化
import { ConfigProvider } from 'antd';
// import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment'; // antd 框架中内置了 moment依赖库
import 'moment/locale/zh-cn';
// 引入修改主题less文件
import './theme/theme.less';
moment.locale('zh-cn'); 

ReactDOM.render(
	<Provider store={store}>
		<ConfigProvider locale={zhCN}>
			<App />
		</ConfigProvider>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
