
export const Counter = (state = 0,
    action) => {
    switch (action.type) {
        case 'COUNTER':
            return action.payload;
        default:
            return state;
    }
}