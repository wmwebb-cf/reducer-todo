
export const initialState = { 
    tasks: [
        {
            task: 'Learn about longboard dancing',
            completed: true,
            id: 1
        },
        {
            task: 'Learn about roller skating',
            completed: false,
            id: 2
        },
        {
            task: 'Learn about skateboarding',
            completed: false,
            id: 3
        }
    ]
}


export const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const newTask = { task: action.payload, completed: false, id: Date.now()};
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            };
        case 'TOGGLE_COMPLETE':
            // conditional statement that compares "id" and toggles completed prop boolean
            // console.log({...state.tasks.map((task) => {
            //     return task}
            // )});
            return {
                ...state.tasks, 
                tasks: [...state.tasks.map((task) => task === task ? {...task, completed: !task.completed} : task)]
            };
        case 'CLEAR_COMPLETED':
            console.log("clear btn clicked")
            return {
                ...state.tasks,
                tasks: [...state.tasks.filter(task => !task.completed)]
            }
        default:
            return state;
    }

}


