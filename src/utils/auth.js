const TOKEN_KEY = 'loginToken';

export const auth = {
	getToken(tokenKey = TOKEN_KEY) {
		const token = sessionStorage.getItem(tokenKey);
		return !!token ? true : false;
	},
	setToken(token) {
		sessionStorage.setItem(TOKEN_KEY, token);
		return true;
	},
	clearToken(tokenKey = TOKEN_KEY) {
		sessionStorage.removeItem(tokenKey);
	}
};
