import React, { useState } from 'react';
import { connect } from "react-redux";

import {addTodo} from "../redux/actions/actions";

import "./Display.css";

const mapStateToProps = state => (state);

let Display = (props) => {

	let [input, setInput] = useState("");

	let updateInput = (e) => {

		setInput(e.target.value);
	}

	let handleClick = () => {

		props.addTodo(input);

		setInput("");
	}


	return (

	        <div className="display">

		        <div className="input-container">
			    	<input className="input" onChange={updateInput} value={input} /> 

			    	<div className="addtodo-btn" onClick={handleClick}>
			    		Add todo
			    	</div>

		    	</div>

		    	<div className="todo-list">

			    	<h3>List</h3>

			    	<div>

			      	{props.allTodos.map(todo => (

			      		<div className="todo-item" key={todo.id}>{todo.content}</div>
			      		))}

			      	</div>

		      	</div>
		    </div>


	)

}

export default connect(
  mapStateToProps,
  {addTodo}
)(Display);