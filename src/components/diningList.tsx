import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import CustomerCard from "./customerCard";

function DiningList() {

    const diningList = useSelector((state: RootState) => state.customers.dinings)
    console.log(diningList)
    return (
        <div className="dining-list">
            {
                diningList.map((diningDetails) => {

                    return (
                        <CustomerCard details={diningDetails} />
                    )

                })
            }


        </div>
    )

}
export default DiningList;