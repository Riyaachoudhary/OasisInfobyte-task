import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get("http://localhost:5000/api/orders");
      setOrders(res.data);
    };
    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    const res = await axios.patch(`http://localhost:5000/api/orders/status/${id}`, { status });
    setOrders(orders.map(o => o._id===id ? res.data : o));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>User</th>
            <th>Pizza</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o._id}>
              <td>{o.user.name}</td>
              <td>{o.pizza.name}</td>
              <td>{o.status}</td>
              <td>
                <select onChange={e=>updateStatus(o._id, e.target.value)} value={o.status}>
                  <option>Order Received</option>
                  <option>In Kitchen</option>
                  <option>Sent to Delivery</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
