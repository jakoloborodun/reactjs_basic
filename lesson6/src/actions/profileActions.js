export const SET_NAME = '@@profile/SET_NAME';

export const setName = (name) => {
    return {
        type: SET_NAME,
        payload: {
            name,
        },
    };
};
