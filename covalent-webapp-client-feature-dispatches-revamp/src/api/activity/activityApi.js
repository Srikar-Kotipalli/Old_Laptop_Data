/* eslint-disable import/no-unused-modules */
/*
 * Copyright 2022 Agnostiq Inc.
 * Note: This file is subject to a proprietary license agreement entered into between
 * you (or the person or organization that you represent) and Agnostiq Inc. Your rights to
 * access and use this file is subject to the terms and conditions of such agreement.
 * Please ensure you carefully review such agreements and, if you have any questions
 * please reach out to Agnostiq at: [support@agnostiq.com].
 */

import api from '../customAxios';

export const getActivityList = count => {
	return api
		.get(`${process.env.REACT_APP_ENDPOINT_URL}/activity-tracker/list?count=${count}`)
		.then(payload => {
			return payload;
		});
};

export const getActivityListByExperiment = (id, count) => {
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL}/activity-tracker/details?experiment_id=${id}&count=${count}`
		)
		.then(payload => {
			return payload;
		});
};
