import { createSlice, current } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{

            // vanilla(older) Redux => Don't Mutate STATE, returning was Mandatory 
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // Redux Toolkit uses immer BTS 
            // we have to mutate the State
             state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            // state=["Arman"];
            // console.log(state); // [pizza]
            // console.log(current(state));
            // state=[];
            // console.log(state); // []

            //  state.items.length = 0;

             return {items:[]}; // this new []  will bbe replaced inside originalState = []

        },
    },
});

export const {addItem,removeItem,clearCart} = CartSlice.actions;

export default CartSlice.reducer;