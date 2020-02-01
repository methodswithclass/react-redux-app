import { INCREMENT, ADD_TODO } from "../constants";

const initialState = {
	allCounts:[],
	allTodos:[]
};

export default (state = initialState, action) => {

	switch(action.type) {

		case INCREMENT: {

			return {
				...state,
				allCounts: [...state.allCounts, action.payload]
			}
		}
		case ADD_TODO: {

			return {
				...state,
				allTodos:[ ...state.allTodos, action.payload]
			}
		}
		default:
			return state;
	}
}