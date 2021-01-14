import React from "react"
import axios from "axios"

import "../css/TodoList.css"

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            todos: [],
            newTodo: "",
            message: ""
        }
    }
    
    componentDidMount() {
        this.setState({name: "Martin"});

        axios.get("http://localhost:5000/todos")
        .then(todos => {
            this.setState({todos: todos.data});
        })
        .catch(error => {
            console.log(error);
        });
    }

    handelSubmit() {
        // console.log("click on the button");
        let todos = this.state.todos;
        todos.push({title: this.state.newTodo});

        axios.post("http://localhost:5000/todos", { title: this.state.newTodo, content: "" })
        .then(res => {
            // console.log(res.data.message);
            this.setState({message: res.data.message});
        })
        .catch(error => {
            console.log(error);
        });

        this.setState({todos: todos});
        this.setState({newTodo: ""});
    }

    render() {
        const todos = this.state.todos.map((todo, index) =>
            <tr key={index}>
                <td>{todo.title}</td>
            </tr>
        );

        return <div className="TodoList">
            <h1>Todo list of {this.state.name}</h1>
            <div>
                {this.state.message}
            </div>
            <table className="table">
                <thead>
                    <tr><th>Todos</th></tr>
                </thead>
                <tbody>
                    {todos}
                </tbody>
            </table>

            <form>
                <input type="text" value={this.state.newTodo} placeholder="Add a todo" onChange={(e)=>{
                    this.setState({newTodo: e.target.value})
                }} />
                <input type="submit" value="Add" onClick={(e)=>{ 
                    e.preventDefault();
                    this.handelSubmit();
                }} />
            </form>
        </div>
    }
}

export default TodoList;