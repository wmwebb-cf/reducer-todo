export const addTask = newTask => {
    return { 
        type: 'ADD_TASK', 
        payload: newTask
    };
};

export const completed = () => {
    return {
        type: "TOGGLE_COMPLETE"
    }
}

export const clear = () => {
    return {
        type: "CLEAR_COMPLETED"
    }
}

