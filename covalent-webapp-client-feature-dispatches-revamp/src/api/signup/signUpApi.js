import axios from 'axios';

const newAxios = axios.create();
newAxios.defaults.headers.common = {};
export const googleRecaptchaVerification = bodyParameters => {
	return newAxios
		.post(`${process.env.REACT_APP_ENDPOINT_URL}/sign-up/verify-google-captcha`, bodyParameters)
		.then(payload => {
			return payload;
		});
};

export const hubSpotLink = bodyParameters => {
	return newAxios
		.post(`${process.env.REACT_APP_ENDPOINT_URL}/sign-up/hubspot-contact`, bodyParameters)
		.then(payload => {
			return payload?.status;
		})
		.catch(error => {
			return error?.response?.status;
		});
};
