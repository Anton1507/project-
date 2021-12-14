const initialState = {
    user_reg : false,
}

const USER_REG = "USER_REG"

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_REG":
            return { ...state, user_reg:!state.user_reg}
        default: return state
    }

};

export const userReg = () => ({ type: USER_REG });

