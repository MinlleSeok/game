const INITIALIZE_INPUT = "auth/INITIALIZE_INPUT";
const CHANGE_INPUT = "auth/CHANGE_INPUT";

export const initializeInput = () => ({
    type: INITIALIZE_INPUT
});

export const changeInput = ({ name, value }) => ({
    type: CHANGE_INPUT,
    payload: {
        name,
        value
    }
});

const initialState = {
    form: {
        username: "",
        password: ""
    }
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_INPUT:
            return {
                ...state,
                form: {
                    username: ""
                }
            };
        case CHANGE_INPUT:
            let newForm = state.form;
            newForm[action.payload.name] = action.payload.value;
            return {
                ...state,
                form: newForm
            };
        default:
            return state;
    }
};