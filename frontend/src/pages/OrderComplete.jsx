import React, { useState } from 'react';
import { submitRating } from '../api/orderApi';

function OrderComplete({ orderId }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = async () => {
    await submitRating(orderId, rating, comment);
    alert('评价已提交');
  };

  return (
    <div>
      <h2>订单完成</h2>
      <label>
        打分:
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
      <div>
        <label>评论:</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>提交评价</button>
    </div>
  );
}

export default OrderComplete;
