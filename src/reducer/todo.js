const initialState = {
  data: [],
  load: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "@TODO/ADD_TODO":
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};
