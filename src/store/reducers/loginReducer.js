const meghdarAvalie = {
    username: null,
    family: null,
    email: null,
    password: null,
    logined: false,
};

export default function loginReducer(state = meghdarAvalie, action) {
    switch (action.type) {
        case "logined":
            return action.payload;

        default:
            return state;
    }
}