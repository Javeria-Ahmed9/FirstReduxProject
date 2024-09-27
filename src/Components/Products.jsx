import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { fechdata, STATUS } from "../Store/ProductSlice";
import { AddItem } from "../Store/AddCartSlice";
export function Products() {
  let dispatch = useDispatch();
  let { data, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fechdata());
  }, []);
  let addtocart = (product) => {
    dispatch(AddItem(product));
  };

  if (status == STATUS.PENDING) {
    return (
      <h3 style={{ display: "flex", justifyContent: "center" }}>
        <Oval
          visible={true}
          height="50"
          width="50"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </h3>
    );
  }
  if (status == STATUS.IDLE) {
    return (
      <div id="content">
        {data.map((val, ind) => (
          <div id="pdiv" key={ind}>
            <img id="imgid" src={val.image} />
            <h6>{val.title}</h6>
            <h6>{val.price}</h6>
            <button onClick={() => addtocart(val)}>Add to cart</button>
          </div>
        ))}
      </div>
    );
  }
}
