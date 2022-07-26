import { createSlice, createSeletor, current } from "@reduxjs/toolkit";

const initialState = {
  list: []
};

const drinksSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {
    addDrink: (state, action) => {
      console.log("before", current(state));
      state.list.push(action.payload);
      console.log("after", current(state));
    }
  }
});

// we can also add a getter function to get a computed state
export const allDrinksSeletor = (state) => state.drinks.list;
export const duplicatedDrinkSeletor = (state) =>
  state.drinks.list.filter(
    (item, index) => state.drinks.list.indexOf(item) !== index
  );

// or use createSelector to memorize the cash
// export const duplicatedDrinkSeletor = () =>
//   createSeletor(
//     (state) => state.drink.list,
//     (drinks) => drinks.filter((item, index) => drinks.indexOf(item) !== index)
//   );

// With createSlice, the action creators are generated automatically for each case reducer function
export const { addDrink } = drinksSlice.actions;
export default drinksSlice.reducer;
