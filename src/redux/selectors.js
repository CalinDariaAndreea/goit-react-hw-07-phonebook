import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state) => state.myContacts.contacts;
export const selectFilter = (state) => state.myContacts.filter;
export const selectLoader = (state) => state.myContacts.isLoading;
export const selectError = (state) => state.myContacts.error;
export const selectAlert = (state) => state.alert.value;

export const selectFilteredContacts = createSelector(
	[selectContacts, selectFilter],
	(contacts, filter) => {
		return filter.length > 1
			? contacts.filter((el) => el.name.toLowerCase().includes(filter))
			: contacts;
	}
);
