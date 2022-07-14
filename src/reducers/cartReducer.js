const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return [...state, [action.payload]]
    case "remove":
      return state.filter(({ id }) => id !== action.payload.id)
    default:
      return state
  }
}

export default reducer;