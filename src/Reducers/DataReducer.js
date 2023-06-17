export const initialState = {
  searchValue: null,
  CurrentlyReading: [],
  wantToRead: [],
  read: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCT":
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};
