const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((cur_elm) => {
          return cur_elm.objectID !== action.payload;
        }),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };

    case "NEXT_PAGE":
      var pageNum = state.page + 1;
      if (pageNum >= state.nbPages) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNum,
      };
    case "PREV_PAGE":
      var pageNum = state.page - 1;
      if (pageNum <= 0) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNum,
      };
  }
  return state;
};

export default reducer;
