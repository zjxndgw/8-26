import React, { useState, useEffect } from "react";
import SectionCard from "../components/SectionCard";

function AdminZone() {
  const [pendingWorkers, setPendingWorkers] = useState([]);
  const [dailyIncome, setDailyIncome] = useState([]);

  useEffect(() => {
    // 获取待审核的接单员（假数据）
    setPendingWorkers([
      { id: 1, nickname: "接单员A", phone: "1234567890" },
      { id: 2, nickname: "接单员B", phone: "0987654321" },
    ]);

    // 获取每日佣金统计（假数据）
    setDailyIncome([
      { worker_id: 1, nickname: "接单员A", total_income: 300, order_count: 5 },
      { worker_id: 2, nickname: "接单员B", total_income: 200, order_count: 4 },
    ]);
  }, []);

  const handleApproveWorker = (workerId) => {
    // 假数据，实际上这里可以通过API进行操作
    alert(`接单员 ${workerId} 已通过审核`);
  };

  const handleRejectWorker = (workerId) => {
    // 假数据，实际上这里可以通过API进行操作
    alert(`接单员 ${workerId} 被拒绝`);
  };

  const handleUpdateIncome = (workerId, status) => {
    // 更新佣金状态（已结/未结）
    alert(`接单员 ${workerId} 佣金状态更新为 ${status}`);
  };

  return (
    <SectionCard title="管理员后台">
      <div>
        <h3>待审核接单员</h3>
        <ul>
          {pendingWorkers.map((worker) => (
            <li key={worker.id}>
              {worker.nickname} - {worker.phone}
              <button onClick={() => handleApproveWorker(worker.id)}>
                通过审核
              </button>
              <button onClick={() => handleRejectWorker(worker.id)}>
                拒绝审核
              </button>
            </li>
          ))}
        </ul>

        <h3>每日佣金结算</h3>
        <ul>
          {dailyIncome.map((worker) => (
            <li key={worker.worker_id}>
              {worker.nickname} - 收入: {worker.total_income} - 订单数:{" "}
              {worker.order_count}
              <button
                onClick={() => handleUpdateIncome(worker.worker_id, "已结")}
              >
                结单
              </button>
              <button
                onClick={() => handleUpdateIncome(worker.worker_id, "未结")}
              >
                未结
              </button>
            </li>
          ))}
        </ul>
      </div>
    </SectionCard>
  );
}

export default AdminZone;
