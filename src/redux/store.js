import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
// redux-thunk 处理异步
import thunk from 'redux-thunk';

import reducers from './reducers';


// 调用日志打印方法 collapsed是让action折叠，看着舒服点
const logger = createLogger({
    collapsed: true
});

// 创建一个中间件集合
const middlewares = [thunk, logger];

// redux-devtools-extention
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

//创建store
const store = createStore(reducers, enhancer);

store.subscribe(() => {
    console.log(store.getState());
});

export default store;
