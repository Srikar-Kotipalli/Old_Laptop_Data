/*
 * Copyright 2022 Agnostiq Inc.
 * Note: This file is subject to a proprietary license agreement entered into between
 * you (or the person or organization that you represent) and Agnostiq Inc. Your rights to
 * access and use this file is subject to the terms and conditions of such agreement.
 * Please ensure you carefully review such agreements and, if you have any questions
 * please reach out to Agnostiq at: [support@agnostiq.com].
 */
/* eslint-disable max-len */
import api from '../customAxios';

export const highlightedDispatchesList = (count, type) => {
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-overview/recents?&count=${count}&type=${type}`
		)
		.then(payload => {
			return payload.recents;
		});
};

export const dispatchOverview = (startdatetime, enddatetime) => {
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-overview/overview?&startdatetime=${startdatetime}&enddatetime=${enddatetime}`
		)
		.then(payload => {
			return payload;
		});
};

export const experimentsOverview = id => {
	return api
		.get(`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-organization/experiment/details?&id=${id}`)
		.then(payload => {
			return payload;
		});
};

export const pinDispatches = bodyParameters => {
	return api
		.post(`${process.env.REACT_APP_ENDPOINT_URL}/dispatches/pin`, bodyParameters)
		.then(payload => {
			return payload.pinMessage;
		});
};

export const unPinDispatches = bodyParameters => {
	return api
		.post(`${process.env.REACT_APP_ENDPOINT_URL}/dispatches/unpin`, bodyParameters)
		.then(payload => {
			return payload.pinMessage;
		});
};

export const allItemsList = (bodyParameters, signal) => {
	return api
		.post(`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-overview/summary`, bodyParameters, {
			signal
		})
		.then(payload => {
			return payload;
		});
};

export const hierarchyList = (
	objectId,
	objectType,
	direction,
	sort,
	searchkey,
	count,
	showArchived
) => {
	const bodyParameters = {
		search: searchkey,
		sort,
		direction,
		objectId,
		objectType,
		count,
		offset: 0,
		showArchived
	};
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-overview/details?&id=${bodyParameters.objectId}&objectType=${bodyParameters.objectType}&sort=${bodyParameters.sort}&direction=${bodyParameters.direction}&count=${bodyParameters.count}&offset=${bodyParameters.offset}&search=${bodyParameters.search}&showArchived=${bodyParameters.showArchived}`,
			bodyParameters
		)
		.then(payload => {
			return payload;
		});
};

export const addEditProject = bodyParameters => {
	return api
		.put(`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-organization/project`, bodyParameters)
		.then(payload => {
			return payload;
		});
};

export const addEditExperiment = bodyParameters => {
	return api
		.put(`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-organization/experiment`, bodyParameters)
		.then(payload => {
			return payload;
		});
};

export const moveListItems = (type, bodyParameters) => {
	return api
		.post(
			`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-organization/${type}/move`,
			bodyParameters
		)
		.then(payload => {
			return payload.message;
		});
};

export const addEditDeleteTags = bodyParameters => {
	return api
		.put(`${process.env.REACT_APP_ENDPOINT_URL}/tags/actions`, bodyParameters)
		.then(payload => {
			return payload;
		});
};

export const getNotes = bodyParameters => {
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-organization/${bodyParameters.name}/notes?&id=${bodyParameters.id}`
		)
		.then(payload => {
			return payload;
		});
};

export const addNotes = bodyParameters => {
	return api
		.put(
			`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-organization/${bodyParameters.name}/notes`,
			bodyParameters
		)
		.then(payload => {
			return payload;
		});
};

export const deleteOrArchiveItems = (type, bodyParameters, action) => {
	if (type !== 'dispatches') {
		return api
			.post(
				`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-organization/${type}/${action}`,
				bodyParameters
			)
			.then(payload => {
				return payload;
			});
	}
	return api
		.post(`${process.env.REACT_APP_ENDPOINT_URL}/${type}/${action}`, bodyParameters)
		.then(payload => {
			return payload;
		});
};

// get notes by dispatchid
export const getNotesByDispatch = dispatchID => {
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-organization/dispatches/notes?id=${dispatchID}
  `
		)
		.then(payload => {
			return payload;
		});
};

// ppost notes by dispatchid
export const postNotesByDispatch = bodyParameters => {
	return api
		.put(`${process.env.REACT_APP_ENDPOINT_URL}/dispatches/notes`, bodyParameters)
		.then(payload => {
			return payload;
		});
};

// electron API
export const getElectronInput = (dispatchID, nodeID, representation) => {
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL}/dispatches/electron-input?id=${dispatchID}&node=${nodeID}&representation=${representation}
  `
		)
		.then(payload => {
			return payload;
		});
};

// edit dispatch name

export const editDispatchTitle = bodyParameters => {
	return api
		.put(`${process.env.REACT_APP_ENDPOINT_URL}/dispatch-organization/dispatch`, bodyParameters)
		.then(payload => {
			return payload;
		});
};
