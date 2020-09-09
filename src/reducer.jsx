export const initialState = {
  basket: [
    {
      id: "56",
      title: "Armani Exchange Hampton Stainless Steel Watch",
      price: 11.99,
      rating: 5,
      image:
        "https://m.media-amazon.com/images/I/81Yvt7PGUtL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: "67",
      title: "Dell UltraSharp U3415W 34-Inch Curved LED-Lit Monitor",
      price: 614.99,
      rating: 5,
      image:
        "https://m.media-amazon.com/images/I/71br6lyzhuL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: "2",
      title:
        "500PCS 3 ply black disposable face shield filter protection breathable dust proof",
      price: 119.0,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/617D0j72B1L._AC_SY400_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in the basket.`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
