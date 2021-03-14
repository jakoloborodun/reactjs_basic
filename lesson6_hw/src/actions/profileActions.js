export const CHANGE_NAME = '@@profile/CHANGE_NAME';

export const changeName = (name) => ({
  type: CHANGE_NAME,
  payload: {
    name,
  },
});
