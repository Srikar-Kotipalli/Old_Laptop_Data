/* eslint-disable import/no-unused-modules */
/*
 * Copyright 2022 Agnostiq Inc.
 * Note: This file is subject to a proprietary license agreement entered into between
 * you (or the person or organization that you represent) and Agnostiq Inc. Your rights to
 * access and use this file is subject to the terms and conditions of such agreement.
 * Please ensure you carefully review such agreements and, if you have any questions
 * please reach out to Agnostiq at: [support@agnostiq.com].
 */
/* eslint-disable max-len */
import axios from 'axios';
import api from '../customAxios';

// Get Lattices Batch
export const getLatticesBatch = bodyParameters => {
	return api
		.get(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/lattices`, {
			params: {
				page: bodyParameters?.page,
				sort: bodyParameters?.sortColumn,
				direction: bodyParameters?.sortOrder,
				count: 20,
				compute_cost: true,
				generate_presigned_urls: true,
				...(bodyParameters?.status && {
					status: bodyParameters?.status
				}) // conditional spread operator
			}
		})
		.then(payload => {
			return payload;
		});
};

// edit Lattice name - AQ's API

export const editLatticeName = (dispatchId, bodyParameters) => {
	return api
		.put(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/lattices/${dispatchId}`,
			bodyParameters
		)
		.then(payload => {
			return payload;
		});
};

export const getAssetFromUrl = req => {
	const newAxios = axios.create();
	return newAxios.get(req).then(payload => {
		return payload;
	});
};
