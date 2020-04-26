import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/todoListActions';
// import { initialState } from '../reducers/todoListReducer';

class ToDoList extends React.Component {
    state = {
        newTask: ''
    };

    handleChanges = e => {
        this.setState({ newTask: e.target.value });
    };

    render() {
        return (
            <div>
                <div className='the-task'>
                    {this.props.tasks.map((task, index) => (
                        <div style={task.completed ? {color: 'red', textDecoration: 'line-through'} : {color: 'black'}} key={index}>
                            <h3>
                                <span>#{task.id}-</span>
                                Task: {task.task} | 
                                <span onClick>
                                {task.completed ? <i className="fas fa-circle" /> : <i className="far fa-circle" />}
                                </span>
                            </h3>
                        </div>
                    ))}
                </div>
                <div className='add-task'>
                    <input type="text" value={this.state.newTask} onChange={this.handleChanges} placeholder="Add new task" />
                    <button onClick={() => this.props.addTask(this.state.newTask)}>
                    Add Task
                    </button>
                    <button onClick={() => null}>Cancel</button>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
      tasks: state.todoListReducer.tasks
    };
  };
  
  export default connect(
    mapStateToProps,
    { addTask }
  )(ToDoList);

