const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };

    case "GET_HOME_CONTENTS":
      return { ...state, homeContents: action.homeContents };

    case "TOGGLE_SIDEBAR":
      return { ...state, isOpenSidebar: !state.isOpenSidebar };

    case "SEARCH_RESULTS":
      return { ...state, searchResults: action.payload };

    case "GET_CURRENT_CHANNEL_DETAILS":
      return { ...state, currentChannelDetails: action.details };

    case "IS_OPEN_SEARCH":
      return { ...state, isOpenSearch: !state.isOpenSearch };
    default:
      return state;
  }
};

export default reducer;
