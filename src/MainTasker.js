import { useState, useRef } from "react";

function MainTasker() {

    const taskInput = useRef();
    const dueDateInput = useRef();

    const [tasks, setTasks] = useState([{}]);

    const submitTask = () => {

        const currTask = taskInput.current.value;
        const currDate = dueDateInput.current.value;
        let newTask;

        if (currTask === '') {
            alert('Please enter a task')
            return;
        } else if (currDate === '') {
            alert('Please enter a due date')
            return;
        } else {
            newTask = 
                {
                    id: tasks.length + 1,
                    taskName: currTask,
                    dueDate: currDate
                };
        }

        setTasks(prevState => {
           return(
            [ ...prevState,
            newTask
           ]
           )
        });

        taskInput.current.value = '';        
        
    }

    const showTasks = () => {

        return tasks.map((task) => {
                return (
                    
                    task.id > 0 ?
                    <div className="task-list">
                        <span className="indiv-task">
                        <p id={task.id} onClick={() => handleRemoveTask(task.id)}
                            className="remove-task-btn">&#x2705;</p>
                        <h3>{task.taskName} due on {task.dueDate}</h3> 
                        </span>
                    </div>
                    : null
                    
                )
            })
    }

    const handleRemoveTask = (id) => {
        console.log("clicked")
        setTasks(tasks.filter(item => item.id !== id))
    }

    return (
        <div className="main-task-container">
            <h1>Task Manager</h1>
            <div className="input-field-container">
                <h4>Enter task: </h4> <input type="text" id="taskInput" name="taskInput" ref={taskInput}></input>
                <h4>Enter due date: </h4><input type="date" id="dueDateInput" name="dueDateInput" ref={dueDateInput}></input>
            </div>
            <button id="submit-task-btn" onClick={submitTask}>Create Task</button>
            {tasks ? showTasks() : null}
            {console.log(tasks)}
        </div>
        
    )
};

export default MainTasker;