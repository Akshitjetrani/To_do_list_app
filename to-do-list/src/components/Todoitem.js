import React from 'react';

function Todoitem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id);
    }

    return (
        <div className='to-do-list'>
            <input
                type="checkbox" 
                checked={task.completed} 
                onChange={handleChange} 
            />
            <p>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}> {/* Corrected case of "task.id" */}
                X
            </button>
        </div>
    );
}

export default Todoitem;


// import React from 'react'


// function Todoitem({task, deleteTask, toggleCompleted} ) {
    
//     function handleChange(){
//         toggleCompleted(task.id);
//     }

//   return (
//     <div className='to-do-list' >
//             <INPUT 
//                 TYPE = "CHACKBOX"
//                 CHACKED = {task.completed}
//                 ONCHANGED = {handleChange}
//             />

//             <p>  {task.text} </p>
//             <button onClick={()=> deleteTask(TASK.ID) }> 
//                 X 
//             </button>
//     </div>
//   )
// }

// export default Todoitem