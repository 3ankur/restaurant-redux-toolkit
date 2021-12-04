import DiningList from "../components/diningList";
import ReservationList from "../components/reservationList";

const HomePage = () => {
  return (
    <div className="app-restaurant">
      <div className="reservation-section">
        <ReservationList />
      </div>
      <div className="dining-section">
        <DiningList />
      </div>
    </div>
  );
};

export default HomePage;
