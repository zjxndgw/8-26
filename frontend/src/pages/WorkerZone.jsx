import React, { useState } from "react";
import SectionCard from "../components/SectionCard";

function WorkerZone() {
  const [workerStatus, setWorkerStatus] = useState("off");
  const [credit, setCredit] = useState(100); // 假设初始信誉分

  const handleStartWork = () => {
    if (credit >= 110) {
      setWorkerStatus("on");
      alert("你已开始工作！");
    } else {
      alert("信誉分不足，无法开始工作！");
    }
  };

  const handleStopWork = () => {
    setWorkerStatus("off");
    alert("你已下班！");
  };

  return (
    <SectionCard title="接单员功能">
      <div>
        <p>当前状态: {workerStatus === "on" ? "上班中" : "下班中"}</p>
        <button onClick={handleStartWork} disabled={workerStatus === "on"}>
          上班
        </button>
        <button onClick={handleStopWork} disabled={workerStatus === "off"}>
          下班
        </button>
        <p>当前信誉分：{credit}</p>
        <p>
          注意：信誉分低于90分无法接单，高于110分将接到大额订单。
        </p>
      </div>
    </SectionCard>
  );
}

export default WorkerZone;
