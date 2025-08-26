// 订单评价接口
router.post('/rating', async (req, res) => {
  const { orderId, userRating, userComment } = req.body;
  await pool.execute('UPDATE orders SET user_rating=?, user_comment=? WHERE id=?', [userRating, userComment, orderId]);
  res.json({ success: true, msg: '评论已提交' });
});
