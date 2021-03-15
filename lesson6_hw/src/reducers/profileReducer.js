import { CHANGE_NAME } from '../actions/profileActions';

const initialState = {
  profileName: 'Derp',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_NAME: {
      return {
        ...state,
        profileName: action.payload.name,
      };

    }

    default:
      return state;
  }
};
