import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import api from "../../utils/api";

const MyOrders = () => {
  const { token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await api.get("/api/orders/userorders");
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.lenght}</p>
              <p>
                <span>&#x25cf;</span>
                <b>{order.status}</b>
              </p>
              <button>Print Invoice</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
