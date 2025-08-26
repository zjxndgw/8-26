import React from "react";
import SectionCard from "../components/SectionCard";

function OrderHall() {
  const demoOrders = [
    { id: 1, game: "LOL", type: "护航", status: "未付款" },
    { id: 2, game: "原神", type: "陪玩", status: "已付款" }
  ];

  return (
    <SectionCard title="订单大厅">
      <ul>
        {demoOrders.map(o => (
          <li key={o.id}>
            {o.game} | {o.type} | 状态: {o.status} 
            <button style={{marginLeft:"10px"}}>接单</button>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}

export default OrderHall;
