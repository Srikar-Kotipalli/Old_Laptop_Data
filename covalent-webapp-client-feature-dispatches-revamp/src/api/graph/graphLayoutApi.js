/* eslint-disable import/no-unused-modules */
/* eslint-disable import/prefer-default-export */
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
import qelectronapi from '../qelectronAxios';

// lattice api
export const getLatticeByDispatchID = dispatchID => {
	return api
		.get(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/lattices/${dispatchID}`)
		.then(payload => {
			return payload;
		});
};

// Graph details get api
export const getGraphDetails = dispatchID => {
	return api
		.get(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/graph/${dispatchID}`)
		.then(payload => {
			return payload;
		});
};

// electron get by node id
export const getElectronByNode = (dispatchID, NodeID) => {
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/lattices/${dispatchID}/electrons/${NodeID}`
		)
		.then(payload => {
			return payload;
		});
};

// get all electrons from dispatchid
export const getAllElectrons = (dispatchID, count) => {
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/lattices/${dispatchID}/electrons?count=${count}`
		)
		.then(payload => {
			return payload;
		});
};

// get all status based electrons from dispatchid
export const getAllStatusBasedElectrons = (dispatchID, status) => {
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/lattices/${dispatchID}/electrons?status=${status}`
		)
		.then(payload => {
			return payload;
		});
};

// sublattices by dispatchid
export const getSublatticesByDispatchID = parameter => {
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/lattices/${parameter.dispatch_Id}/sublattices?sort=${parameter.sort}
			&direction=${parameter.direction}&count=${parameter.count}&page=${parameter.pageValue}`
		)
		.then(payload => {
			return payload;
		});
};

// sublattices by dispatchid
export const getExecutorByExecutorID = executorID => {
	return api
		.get(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/executors/${executorID}`)
		.then(payload => {
			return payload;
		});
};

// input result by dispatchid
export const getDispatchByInput = (dispatchID, params, representation) => {
	const representationUrl = representation ? `?representation=${representation}` : '';
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/lattices/${dispatchID}/assets/dispatch/${params}/presigned${representationUrl}`
		)
		.then(payload => {
			return payload;
		});
};

// code lattice by dispatchid
export const getCodeByLattice = (dispatchID, params, representation) => {
	const representationUrl = representation ? `?representation=${representation}` : '';
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/lattices/${dispatchID}/assets/lattice/${params}/presigned${representationUrl}`
		)
		.then(payload => {
			return payload;
		});
};

// get nodes
export const getNodeAssetsById = (dispatchID, nodeID, key, representation) => {
	const representationUrl = representation ? `?representation=${representation}` : '';
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/lattices/${dispatchID}/assets/node/${nodeID}/${key}/presigned${representationUrl}`
		)
		.then(payload => {
			return payload;
		});
};

export const getBatchElectronsById = (dispatchID, count, page) => {
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/lattices/${dispatchID}/electrons?count=${count}&page=${page}`
		)
		.then(payload => {
			return payload;
		});
};

export const getQElectronNodeJobs = (dispatchID, nodeID) => {
	return qelectronapi
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND_QELECTRON}/v1/circuits/dispatches/${dispatchID}/electrons/${nodeID}`
		)
		.then(payload => {
			return payload;
		});
};

export const getQelectronAssetsUrl = (circuitId, key) => {
	return qelectronapi
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND_QELECTRON}/v1/circuits/${circuitId}/assets/${key}/url?action=get`
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

export const getJobExecutors = circuitId => {
	return qelectronapi
		.get(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND_QELECTRON}/v1/circuits/${circuitId}`)
		.then(payload => {
			return payload;
		});
};

export const getQelectronJobOverview = circuitId => {
	return qelectronapi
		.get(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND_QELECTRON}/v1/circuits/${circuitId}`)
		.then(payload => {
			return payload;
		});
};

export const getLatticeCost = dispatchID => {
	return api
		.get(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v1/lattices/${dispatchID}/charges`)
		.then(payload => {
			return payload;
		});
};

export const getNodeCost = jobID => {
	return api
		.get(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v1/jobs/${jobID}/charges`)
		.then(payload => {
			return payload;
		});
};
