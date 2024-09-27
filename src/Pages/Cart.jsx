import { useDispatch, useSelector } from "react-redux";
import { RemoveItem } from "../Store/AddCartSlice";

export function Cart() {
  let data = useSelector((state) => state.cartData);
  let dispatch = useDispatch();
  let removefun = (ind) => {
    dispatch(RemoveItem(ind));
  };
  return (
    <div id="content1" className="container">
      {data.length <= 0 ? (
        <div id="cart" className="container text-center">
          Cart is empty.
        </div>
      ) : (
        data.map((val, ind) => (
          <div id="pdiv" key={ind}>
            <img id="imgid" src={val.image} />
            <h6>{val.title}</h6>
            <h6>{val.price}</h6>
            <button onClick={() => removefun(ind)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}
