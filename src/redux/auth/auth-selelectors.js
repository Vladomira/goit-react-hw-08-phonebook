const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.auth.user.name;

const getIsFetchingCurrrent = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrrent,
};
export default authSelectors;
