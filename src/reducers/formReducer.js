const defaultState = {
    selection: null,
    visible: false
}

const formReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'RESET_FORM':
            const emptyState = { selection: null, visible: false }
            return emptyState
        case 'EDIT_FORM':
            return {...state, selection: action.data}
        case 'FORM_VIEW':
            return {...state, visible: !state.visible }
        default:
            return state
    }
}

const resetForm = () => {
    return {
        type: 'RESET_FORM',
    }
}

const editForm = (selection) => {
    return {
        type: 'EDIT_FORM',
        data: selection
    }
}

const formView = () => {
    return {
        type: 'FORM_VIEW',
    }
}

export { resetForm , editForm , formView }

export default formReducer