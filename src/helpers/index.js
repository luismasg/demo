export const findSelectedUser = (state, props) =>
  state.users.find(
    userItem => `/${userItem.username}` === props.location.pathname
  );
