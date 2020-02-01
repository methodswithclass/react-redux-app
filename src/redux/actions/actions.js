import { INCREMENT, ADD_TODO } from "../constants.js";

let todoID = 0;

export let increment = amount => {

	// console.log("input", amount);

	return {

		type:INCREMENT,
		payload:amount
	}

}


export let addTodo = content => {

	return {
		type:ADD_TODO,
		payload:{
			id:++todoID,
			content
		}
	}
}