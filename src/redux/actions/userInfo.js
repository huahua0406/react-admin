
import * as constants from '@/redux/constants/constants';

export const setUserInfo = (info) => ({
    type: constants.SET_USER_INFO,
    info
});


export const login = (accout, password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account=' + accout + '&password=' + password).then((res) => {
			const result = res.data.data;
			if (result) {
				dispatch(setUserInfo(result))
			}else {
				alert('登陆失败')
			}
		})
	}
}