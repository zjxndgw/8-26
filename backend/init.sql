CREATE DATABASE IF NOT EXISTS wm_market;
USE wm_market;

CREATE TABLE users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  phone VARCHAR(20),
  password VARCHAR(100),
  nickname VARCHAR(50),
  signature VARCHAR(100),
  role ENUM('user','worker','admin') DEFAULT 'user',
  credit INT DEFAULT 100,
  worker_status ENUM('on','off') DEFAULT 'off',
  is_worker_pending BOOLEAN DEFAULT FALSE
);

CREATE TABLE orders(
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  assigned_worker INT DEFAULT NULL,
  type ENUM('护航','陪玩'),
  game_name VARCHAR(50),
  game_id VARCHAR(50),
  description TEXT,
  payment_amount DECIMAL(10,2),
  status ENUM('未付款','已付款') DEFAULT '未付款',
  user_rating INT DEFAULT NULL,
  user_comment VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(assigned_worker) REFERENCES users(id)
);

CREATE TABLE worker_income(
  id INT AUTO_INCREMENT PRIMARY KEY,
  worker_id INT,
  order_id INT,
  income DECIMAL(10,2),
  status ENUM('未结','已结') DEFAULT '未结',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(worker_id) REFERENCES users(id),
  FOREIGN KEY(order_id) REFERENCES orders(id)
);
