
const initialState = { 
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
        default:
            return state;
    }

}


