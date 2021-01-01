const initialState = {
    tasks: [
        {
            taskId: 1,
            goalId: 1,
            taskName: 'Test Task',
            taskComplete: true
        },

        {
            taskId: 2,
            goalId: 1,
            taskName: 'Test Task',
            taskComplete: true
        },

        {
            taskId: 3,
            goalId: 1,
            taskName: 'Test Task',
            taskComplete: false
        },

        {
            taskId: 4,
            goalId: 2,
            taskName: 'Test Task',
            taskComplete: false
        }
    ]
}

export const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_task':
            return {
                ...state,
                tasks: state.tasks.concat(action.payload)
            };

            default: return state;
    }
}