/*
 * Copyright 2022 Agnostiq Inc.
 * Note: This file is subject to a proprietary license agreement entered into between
 * you (or the person or organization that you represent) and Agnostiq Inc. Your rights to
 * access and use this file is subject to the terms and conditions of such agreement.
 * Please ensure you carefully review such agreements and, if you have any questions
 * please reach out to Agnostiq at: [support@agnostiq.com].
 */
import api from '../customAxios';

// Billing Account APIs
export const getBillingAccounts = () => {
	return api
		.get(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v1/billing-accounts`)
		.then(payload => {
			return payload;
		});
};

export const updateBillingAccounts = (billingAccountID, bodyParameters) => {
	return api
		.put(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v1/billing-accounts/${billingAccountID}`,
			bodyParameters
		)
		.then(payload => {
			return payload;
		});
};

// Payment Method APIs
export const getPaymentMethods = () => {
	return api
		.get(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v1/payment-methods?is_default=true`)
		.then(payload => {
			return payload;
		});
};

export const addPaymentMethods = () => {
	return api
		.post(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v1/payment-methods`)
		.then(payload => {
			return payload;
		});
};

// Invoice APIs

export const getAllInvoices = (sortColumn, sortDirection, page, count) => {
	return api
		.get(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v1/invoices?sort=${sortColumn}&direction=${sortDirection}&count=${count}&page=${page}`
		)
		.then(payload => {
			return payload;
		});
};

export const downloadInvoiceDetails = invoiceId => {
	return api
		.get(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v1/invoices/${invoiceId}/download`, {
			responseType: 'blob'
		})
		.then(payload => {
			return payload;
		});
};

export const getUserCharges = userId => {
	return api
		.get(`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v2/users/${userId}/charges`)
		.then(payload => {
			return payload;
		});
};

export const setDefaultPaymentMethod = externalSetupIntent => {
	return api
		.put(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v1/payment-methods/by-intent/${externalSetupIntent}/default`
		)
		.then(payload => {
			return payload;
		});
};

export const detachPaymentMethod = externalPaymentMethodId => {
	return api
		.delete(
			`${process.env.REACT_APP_ENDPOINT_URL_AQ_BACKEND}/v1/payment-methods/${externalPaymentMethodId}`
		)
		.then(payload => {
			return payload;
		});
};
