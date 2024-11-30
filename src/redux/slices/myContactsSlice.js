import { createSlice } from '@reduxjs/toolkit';
import { fetchAPI, addContact, deleteContact } from '../../services/fetchAPI';

const myContactsSlice = createSlice({
	name: 'myContacts',
	initialState: {
		contacts: [],
		isLoading: false,
		error: null,
		filter:'',
	},
	reducers: {
		setSearch(state, action) {
			state.filter = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAPI.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchAPI.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.contacts = action.payload;
			})
			.addCase(fetchAPI.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(addContact.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.contacts.push(action.payload);
			})
			.addCase(addContact.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(deleteContact.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				const index = state.contacts.findIndex(
					(contact) => contact.id === action.payload
				);
				state.contacts.splice(index, 1);
			})
			.addCase(deleteContact.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const {setSearch} = myContactsSlice.actions
export const myContactsReducer = myContactsSlice.reducer;
