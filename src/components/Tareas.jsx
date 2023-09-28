import React, { Component } from "react";
import './Tareas.css';

class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: ''
        };
    }

    componentDidMount() {};
    componentDidUpdate(prevProps, prevState) {};
    componentWillUnmount() {};

    handleInputChange = (event) => {
        this.setState({ newTask: event.target.value });
    };

    addTask = () => {
        const { tasks, newTask } = this.state;
        if (newTask.trim() !== '') {
            const updatedTasks = [...tasks, { name: newTask, completed: false }];
            this.setState({ tasks: updatedTasks, newTask: '' });
        }
    };

    toggleTaskCompletion = (index) => {
        const { tasks } = this.state;
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        this.setState({ tasks: updatedTasks });
    };

    deleteTask = (index) => {
        const { tasks } = this.state;
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        this.setState({ tasks: updatedTasks });
    };

    render() {
        const { tasks, newTask } = this.state;

        return (
            <div className="container">
                <h1>Administrador de tareas</h1>
                <input type="text" value={newTask} onChange={this.handleInputChange} />
                <button onClick={this.addTask}>Add Task</button>

                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <input type="checkbox" checked={task.completed} onChange={() => this.toggleTaskCompletion(index)} />
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span>
                            <button onClick={() => this.deleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TasksList;
