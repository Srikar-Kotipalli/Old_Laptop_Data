/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unused-modules */
/*
 * Copyright 2022 Agnostiq Inc.
 * Note: This file is subject to a proprietary license agreement entered into between
 * you (or the person or organization that you represent) and Agnostiq Inc. Your rights to
 * access and use this file is subject to the terms and conditions of such agreement.
 * Please ensure you carefully review such agreements and, if you have any questions
 * please reach out to Agnostiq at: [support@agnostiq.com].
 */

import axios from 'axios';
import api from '../customAxios';
import ENVIRONMENTSAXIOS from '../environmentsAxios';

// get batch experiments
// eslint-disable-next-line camelcase
export const getBatchEnvironments = (count, page, name, sort, sortDirection, is_active = true) => {
	return api
		.get(
			// eslint-disable-next-line camelcase
			`${
				process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND
				// eslint-disable-next-line camelcase
			}/v2/envs?count=${count}&page=${page}&sort=${sort}&direction=${sortDirection}&is_active=${is_active}${
				name && name !== '' ? `&name=${name}` : ''
			}`
		)
		.then(payload => {
			return payload;
		});
};

// get env info
export const getEnvironment = envId => {
	return api
		.get(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/envs/${envId}`)
		.then(payload => {
			return payload;
		});
};

// add new environment
export const addEnvironment = (file, name) => {
	const formData = new FormData();
	formData.append('definition', file);
	formData.append('name', name);
	// if (variables && variables?.length > 0) {
	// 	formData.append('variables', JSON.stringify(variables));
	// }
	return ENVIRONMENTSAXIOS.post(
		`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/envs`,
		formData
	).then(payload => {
		return payload;
	});
};

// edit env info
export const editEnvironment = (envId, file) => {
	const formData = new FormData();
	formData.append('definition', file);
	// if (variables && variables?.length > 0) {
	// 	formData.append('variables', JSON.stringify(variables));
	// }
	return ENVIRONMENTSAXIOS.post(
		`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/envs/${envId}`,
		formData
	).then(payload => {
		return payload;
	});
};

export const getYamlFile = url => {
	const newAxios = axios.create();
	newAxios.defaults.headers.common = {};
	return newAxios.get(url).then(payload => {
		return payload;
	});
};

// replicate environment
export const replicateEnvironment = (envId, user) => {
	return api
		.get(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/envs/${envId}/replicate`, {
			user_id: user
		})
		.then(payload => {
			return payload;
		});
};

// set as default environment
export const setDefaultEnvironment = envName => {
	return api
		.put(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/default-envs`, {
			environment_name: envName
		})
		.then(payload => {
			return payload;
		});
};

// get default environment
export const getDefaultEnvironment = () => {
	return api
		.get(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/default-envs`)
		.then(payload => {
			return payload;
		});
};

// delete environment

export const deleteEnivronment = envId => {
	return api
		.delete(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/envs/${envId}`)
		.then(payload => {
			return payload;
		});
};

export const rebuildEnvironment = envId => {
	return api
		.put(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/envs/${envId}/rebuild`)
		.then(payload => {
			return payload;
		});
};

export const enivronmentLogs = (envId, nextToken) => {
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/envs/${envId}/logs?next_token=${nextToken}`
			// get secrets
		)
		.then(payload => {
			return payload;
		});
};
export const getSecrets = () => {
	return api
		.get(
			// eslint-disable-next-line camelcase
			`${
				process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND
				// eslint-disable-next-line camelcase
			}/v2/secrets`
		)
		.then(payload => {
			return payload;
		});
};

export const deleteSecrets = name => {
	return api
		.delete(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/secrets/${name}`)
		.then(payload => {
			return payload;
		});
};

export const createSecrets = bodyParameters => {
	return api
		.post(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/secrets/`, bodyParameters)
		.then(payload => {
			return payload;
		});
};
