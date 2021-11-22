import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type customerEntity = {
    name: string,
    id: string,
    food: string[]
}

type customerState={
     dinings: Array<customerEntity>
};

type customerFood= {
    customerId: string, 
    name: string
}

const initialState : customerState= {
    dinings:[]
}
export const customerSlice = createSlice({
    name:"customer",
    initialState,
    reducers:{
        addCustomerDining:(state, action : PayloadAction<customerEntity>)=>{
            console.log(state.dinings, action.payload)
            state.dinings.push(action.payload);
            
        }, 
        addCustomerFood: (state, action: PayloadAction<customerFood> )=>{
            let index = state.dinings.findIndex((customer)=>customer.id === action.payload.customerId);
            if(index>-1){
                state.dinings[index].food.push(action.payload.name)
            }
        }
    }
});

export const {addCustomerDining, addCustomerFood} = customerSlice.actions;

export default customerSlice.reducer;