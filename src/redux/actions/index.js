
// Partes de la guía

export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    }
}


export const newHookId = (comp) => {
    return {
        type: 'NEWHOOKID',
        payload: comp
    }
}

export const CurrentClassId = (comp) => {
    return {
        type: 'NEWCLASSID',
        payload: comp
    }
}

// Usando actions de Redux en Clases

export const Counter = (comp) => {
    return {
        type: 'COUNTER',
        payload: comp
    }
}

