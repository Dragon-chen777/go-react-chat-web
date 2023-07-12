import request from '../request'

function apiUserLogin(data) {
	return request({
		url: '/user/login',
		data,
	})
}
function apiUserRegister(data) {
	return request({
		url: '/user/register',
		data,
	})
}
export { apiUserLogin, apiUserRegister }
