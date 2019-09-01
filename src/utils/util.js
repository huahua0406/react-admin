import pathToRegexp from 'path-to-regexp';

// 处理sider菜单相关方法
export const formatMenuPath = (data, parentPath = '/') => {
    data.map((item, index) => {
        const result = {
            ...item,
            path: `${parentPath}${item.path}`
        };
        if (item.children) {
            result.children = formatMenuPath(
                item.children,
                `${parentPath}${item.path}/`
            );
        }
        return result;
    });
};

export const getMeunMatchKeys = (flatMenuKeys, paths) => {
    return paths.reduce((matchKeys, path) => {
        return matchKeys.concat(
            flatMenuKeys.filter(item => pathToRegexp(item).test(path))
        );
    }, []);
};

export const getFlatMenuKeys = menuData => {
    return menuData.reduce((keys, item) => {
        keys.push(item.path);
        if (item.children) {
            return keys.concat(getFlatMenuKeys(item.children));
        }
        return keys;
    }, []);
};

export const urlToList = url => {
    if (url) {
        const urlList = url.split('/').filter(i => i);
        return urlList.map(
            (urlItem, index) => `/${urlList.slice(0, index + 1).join('/')}`
        );
    } else {
        return [];
    }
};
