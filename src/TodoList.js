import React from "react"
import axios from "axios"

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            todos: [],
            newTodo: ""
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

        this.setState({todos: todos});
        this.setState({newTodo: ""});
    }

    render() {
        const todos = this.state.todos.map((todo, index) =>
            <tr key={index}>
                <td>{todo.title}</td>
            </tr>
        );

        return <div>
            Todo list of {this.state.name}
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