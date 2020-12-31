export const initialState = {
    goals: [
        {
            goalId: 1,
            goalName: 'Test Goal',
            goalCategory: ['test category'],
            goalTasks: [
                {
                    taskId: 1,
                    taskName: 'Test Task',
                    taskComplete: false
                }
            ]
        }
    ]
}

export const goalReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_GOAL':
            return {
                ...state,
                goals: state.goals.concat(action.payload)
            };

            default: return state;
    }
}