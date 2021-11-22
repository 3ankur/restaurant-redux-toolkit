import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomerFood } from "../features/customerSlice";

type CustomerPropsType = {
    id: string,
    name: string,
    food: string[]
}

type props = {
    details: CustomerPropsType
}



function CustomerCard(data: props) {
    const { id, name, food } = data?.details;
    const [foodName, setFoodName] = useState("");
    const dispatch = useDispatch();

    const addFood = (id: string, name: string) => {
        dispatch(addCustomerFood({
            customerId: id,
            name
        }));
        setFoodName("");
    }

    return (
        <div className="customer-card">
            <div className="customer-card-body">
                <div key={id}>{name}</div>
                <div><input value={foodName} onChange={(e) => setFoodName(e.target.value)} type="text" /><button onClick={() => addFood(id, foodName)}>+Add</button></div>

            </div>
            {
                food?.length > 0  && (
                    <div className="food-item">
                        <h6>Food</h6>
                        {
                            food.map((foodItem, idx) => {
                                return (<div key={idx}>{foodItem}</div>)
                            })
                        }

                    </div>
                )
            }
        </div>
    )

}
export default CustomerCard;