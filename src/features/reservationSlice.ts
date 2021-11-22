import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ReservationEntity = {
    name: string,
    id: string
}

 type ReservationType = {
    value: Array<ReservationEntity>,
};

const initialState : ReservationType = {
    value:[]
};
export const reservationSlice = createSlice({
    name:"reservations",
    initialState,
    reducers:{
        addReservation : (state, action: PayloadAction<ReservationEntity>) =>{
       state.value.push(action.payload)
        },
        removeReservation:(state, action: PayloadAction<ReservationEntity>)=>{
           const idx = state.value.findIndex((item)=>item.id===action.payload.id);
           state.value.splice(idx,1);
        }
    }
})

export const {addReservation, removeReservation} = reservationSlice.actions;

export default reservationSlice.reducer;