import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addCustomerDining } from "../features/customerSlice";
import {
  addReservation,
  removeReservation,
  ReservationEntity,
} from "../features/reservationSlice";

const list = [
  {
    name: "Salena Gomez",
  },
  {
    name: "Ryan Mitchel",
  },
];
function ReservationList() {
  const nameText = useRef<HTMLInputElement>(null);
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const dispatch = useDispatch();
  console.log(reservations);

  const addNewReservation = () => {
    console.log(nameText?.current?.value);
    if (nameText?.current?.value) {
      dispatch(
        addReservation({
          name: nameText?.current?.value,
          id: new Date().getTime().toString(),
        })
      );
      nameText.current.value = "";
    }
  };

  const addDining = (reservation: ReservationEntity) => {
    console.log(reservation);
    dispatch(removeReservation(reservation));
    dispatch(
      addCustomerDining({
        ...reservation,
        food: [],
      })
    );
  };

  return (
    <div className="reservation-list-container">
      {reservations.map((item) => {
        return (
          <div
            key={item?.id}
            onClick={() => addDining(item)}
            className="reservation-name"
          >
            {item.name}
          </div>
        );
      })}
      <div className="add-reservation">
        <input data-testid="username" type="text" ref={nameText} />
        <button className="addReservation" onClick={addNewReservation}>
          Add
        </button>
      </div>
    </div>
  );
}
export default ReservationList;
