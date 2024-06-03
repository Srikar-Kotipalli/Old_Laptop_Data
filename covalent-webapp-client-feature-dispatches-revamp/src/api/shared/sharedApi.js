/*
 * Copyright 2022 Agnostiq Inc.
 * Note: This file is subject to a proprietary license agreement entered into between
 * you (or the person or organization that you represent) and Agnostiq Inc. Your rights to
 * access and use this file is subject to the terms and conditions of such agreement.
 * Please ensure you carefully review such agreements and, if you have any questions
 * please reach out to Agnostiq at: [support@agnostiq.com].
 */
import api from '../customAxios';

export const allSharedItemsList = bodyParameters => {
	return api
		.post(`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-overview/shared`, bodyParameters)
		.then(payload => {
			return payload;
		});
};

export const sharedUserDetails = dispatchID => {
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-organization/dispatches/shared/user-details?dispatch_id=${dispatchID}`
		)
		.then(payload => {
			return payload;
		});
};

export const shareDispatch = bodyParameters => {
	return api
		.post(
			`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-organization/dispatches/share`,
			bodyParameters
		)
		.then(payload => {
			return payload;
		});
};

export const unShareDispatch = bodyParameters => {
	return api
		.post(
			`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-organization/dispatches/unshare`,
			bodyParameters
		)
		.then(payload => {
			return payload;
		});
};
