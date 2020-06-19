export const addTask = newTask => {
    return { 
        type: 'ADD_TASK', 
        payload: newTask
    };
};

export const completed = (id) => {
    return {
        type: "TOGGLE_COMPLETE",
        payload: id
    }
}

export const clear = () => {
    return {
        type: "CLEAR_COMPLETED"
    }
}

