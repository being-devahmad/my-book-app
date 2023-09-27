const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_BOOKS":
      return {
        ...state,
        myData: action.payload,
      };
    case "SEARCH_BOOK":
      return {
        ...state,
        query: action.query,
        myData: state.myData.filter((book) =>
          book.title.toLowerCase().includes(action.query.toLowerCase())
        ),
      };
  }
};
export default reducer;
