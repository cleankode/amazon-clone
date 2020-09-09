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
      id: "11",
      title: "Armani Exchange Hampton Stainless Steel Watch",
      price: 11.99,
      rating: 5,
      image:
        "https://m.media-amazon.com/images/I/81Yvt7PGUtL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: "2",
      title: "Armani Exchange Hampton Stainless Steel Watch",
      price: 11.99,
      rating: 5,
      image:
        "https://m.media-amazon.com/images/I/81Yvt7PGUtL._AC_UL480_FMwebp_QL65_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket)=>
    basket?.reduce((amount, item)=>item.price+amount, 0);

const reducer = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic to add to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // logic to remove from basket
      // Method 1:
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

    // Method 2:
    //   const newBasket = state.basket.filter((p) => p.id !== action.id);
    //   return {
    //     ...state,
    //     basket: newBasket
    //   };
    default:
      return state;
  }
};

export default reducer;
