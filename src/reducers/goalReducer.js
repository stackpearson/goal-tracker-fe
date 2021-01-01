export const initialState = {
    goals: [
        {
            goalId: 1,
            goalName: 'Test Goal',
            goalCategory: ['test category'],
            goalTasks: [
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
                }
            ]
        },
        {
            goalId: 2,
            goalName: 'Test Goal 2',
            goalCategory: ['test category 2'],
            goalTasks: [
                {
                    taskId: 4,
                    goalId: 2,
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