import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EVENT } from '../../constants/routes';
import axios from 'axios';

const apiCall = async (endpoint, method, thunkApi, options) => {
	console.log('apiCall', { endpoint, method, thunkApi, options });

	const { fulfillWithValue, rejectWithValue, dispatch } = thunkApi;
	const { id, data, params, extraCalls, meta } = options ?? {};
	const { withLoading, showError, updateTable } = meta ?? {};
	/* let { message } = meta ?? {}; */

	const url = id ? `${endpoint}/${id}` : endpoint;
	const config = { method, data, params };

	try {
		const response = await axios(url, config);

		console.log('response', response);

		const Data = response.data;

		// TODO
		// console.log('response', response);
		const message = '';
		const type = '';
		//const { Data, Message, type } = response.data;
		//if (message === 'internal' && Message) message = Message;

		if (extraCalls) extraCalls.forEach(api => dispatch(api));

		return fulfillWithValue(Data, { message, withLoading, type, updateTable });
	} catch (err) {
		return rejectWithValue(err.response.data.Message, { withLoading, showError });
	}
};

export const getShowsInPage = createAsyncThunk('projects/getShowsInPage', (data, thunkApi) => {
	/* const [[q, order]] = data.ordering;
	return Utils.apiCall(
		`${PROJECTS}/findAllInPage?order=${order}&page=${data.page}&take=${data.take}&q=${q}`,
		'GET',
		thunkApi,
		{ meta: { withLoading: true } }
	); */

	return apiCall(`${EVENT}/events`, 'GET', thunkApi);
});

const initialState = {
	currentShows: []
};

const eventSlice = createSlice({
	name: 'event',
	initialState: initialState,
	reducers: {},
	extraReducers: {
		[getShowsInPage.fulfilled]: (state, { payload }) => {
			console.log('payload', payload);
			// return { ...state, currentShows: payload };
		}
	}
});

export default eventSlice.reducer;
