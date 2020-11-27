

export const CurrentHookId = (state = 0,
    action) => {
    switch (action.type) {
        case 'NEWHOOKID':
            return action.payload;
        default:
            return state;
    }
}

export const CurrentClassId = (state = 0,
    action) => {
    switch (action.type) {
        case 'NEWCLASSID':
            return action.payload;
        default:
            return state;
    }
}