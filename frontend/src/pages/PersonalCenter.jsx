import React, { useState, useEffect } from "react";
import SectionCard from "../components/SectionCard";

function PersonalCenter() {
  const [userInfo, setUserInfo] = useState({
    nickname: "初音未来",
    signature: "我的签名",
    id: 12345,
  });

  const handleSave = () => {
    // 这里可以写成实际的API调用
    alert("修改成功！");
  };

  return (
    <SectionCard title="个人中心">
      <div>
        <p>用户ID: {userInfo.id}</p>
        <label>
          昵称：
          <input
            type="text"
            value={userInfo.nickname}
            onChange={(e) =>
              setUserInfo({ ...userInfo, nickname: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          签名：
          <input
            type="text"
            value={userInfo.signature}
            onChange={(e) =>
              setUserInfo({ ...userInfo, signature: e.target.value })
            }
          />
        </label>
        <br />
        <button onClick={handleSave}>保存修改</button>
      </div>
    </SectionCard>
  );
}

export default PersonalCenter;
