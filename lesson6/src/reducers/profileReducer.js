import { SET_NAME } from '../actions/profileActions';

const initialState = {
    userName: '',
};

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NAME: {
            return {
                ...state,
                userName: action.payload.name,
            };
        }
        default:
            return state;
    }
}
