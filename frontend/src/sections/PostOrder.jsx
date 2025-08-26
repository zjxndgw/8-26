import React, { useState } from "react";
import SectionCard from "../components/SectionCard";

function PostOrder() {
  const [order, setOrder] = useState({
    game: "",
    type: "护航",
    desc: "",
    gameId: ""
  });

  return (
    <SectionCard title="发布订单">
      <div>
        <input placeholder="游戏名称" 
          value={order.game} 
          onChange={e => setOrder({...order, game: e.target.value})}
          style={{margin:"5px", padding:"8px"}} />

        <select 
          value={order.type} 
          onChange={e => setOrder({...order, type: e.target.value})}
          style={{margin:"5px", padding:"8px"}}
        >
          <option value="护航">护航</option>
          <option value="陪玩">陪玩</option>
        </select>

        <textarea placeholder="任务描述"
          value={order.desc}
          onChange={e => setOrder({...order, desc: e.target.value})}
          style={{margin:"5px", padding:"8px", width:"100%"}}
        />

        <input placeholder="游戏ID"
          value={order.gameId}
          onChange={e => setOrder({...order, gameId: e.target.value})}
          style={{margin:"5px", padding:"8px"}}
        />

        <button onClick={() => alert("请联系管理员付款，QQ:2463512659")}>
          提交订单
        </button>
      </div>
    </SectionCard>
  );
}

export default PostOrder;
