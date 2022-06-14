import { types } from "../Types/types";

const state = {
    name: 'Marlon', 
    logged: true
}



export const AuthReducer = (state = { }, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
            
            case types.logout: {
                return { 
                    logged: false
                }
            }

        default:
           return state;
    }

}