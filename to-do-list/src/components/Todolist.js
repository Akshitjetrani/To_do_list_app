import React, { useState } from 'react';
import Todoitem from './Todoitem';

function Todolist() {
    // State to manage tasks
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Go to Office',
            completed: true
        },
        {
            id: 2,
            text: 'Go to Meeting',
            completed: true
        },
        {
            id: 3,
            text: 'Go to Lunch',
            completed: true
        },
        {
            id: 4,
            text: 'Go to Dinner with friends',
            completed: true
        }
    ]);

    // State to manage input text for new tasks
    const [text, setText] = useState('');

    // Function to add a new task
    function addTask() {
        if (text.trim() !== '') {
            const newTask = {
                id: Date.now(),
                text: text,
                completed: false
            };
            setTasks([...tasks, newTask]);
            setText('');
        }
    }

    // Function to delete a task
    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    // Function to toggle task completion
    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    }

    return (
        <div className='to-do-list'>
            {tasks.map(task => (
                <Todoitem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                />
            ))}

            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
        </div>
    );
}

export default Todolist;

// import React, { useState } from 'react'
// import Todoitem from './Todoitem';

// function Todolist() {
//     // Create A Event List in Object
//     const [tasks, setTasks] = useState(
//         [
//             {
//                 id: 1,
//                 text:'Go to Office',
//                 completed:  true
//             },
//             {
//                 id: 2,
//                 text:'Go to Meeting',
//                 completed:  true
//             },
//             {
//                 id: 3,
//                 text:'Go to Lanch',
//                 completed:  true
//             },
//             {
//                 id: 4,
//                 text:'Go to Dinner with frinds',
//                 completed:  true
//             }
//         ]
//     )

//     const [text, setText] = useState('')

//     //  To Add A task In App
//     function addTask(text) {
//         const newTask = {
//             id: Date.now(),
//             text,
//             completed: false
//         };
//         setTasks([...tasks, newTask]);
//         setText('');
//     }

//     // To Delet A task In App
//     function deleteTask(text) {
//         setTasks(tasks.filter(task => task.id !== id));
//     }

//     function toggleCompleted(id) {
//         setTasks(tasks.map(task =>{
//             if(task.id === id){
//                 return {...task , completed: !task.completed}
//             }
            
//             else 
//             {
//                 return task;
//             }
//         }
//         )
     
//     )
// }

//   return (
//     <div className='to-do-list'>
//         {tasks.map(task =>(
//             <Todoitem 
//             KEY = {task.id}
//             TASK ={TASK}
//             DELETTASK ={DELETTASK}
//             toggleCompleted = {toggleCompleted}

//             /> 

//         ))}

//         <INPUT
//         VALUE ={TESK}
//         ONCHANGE = {E => SETTEXT(E.TRAGET.VALUE)} />

//         <button 
//         onClick={()=> ADDTASK(TEXT) }>
//             Add
//         </button>
//     </div>
//   )
// }

// export default Todolist
