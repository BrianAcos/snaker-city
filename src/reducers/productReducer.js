const initialState = { products: {}, product: {}, loading: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "request_product":
      return { ...state, loading: true }
    case "set_products":
      return { ...state, products: action.payload, loading: false }
    case "set_product":
      return { ...state, product: action.payload, loading: false }
    default:
      return state
  }
}

export default reducer;