class Order {
  constructor(id, customerId, items, totalAmount) {
    this.id = id;
    this.customerId = customerId;
    this.items = items;
    this.totalAmount = totalAmount;
  }
}

module.exports = new Order();





// CREATE TABLE orders (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     customer_id INT NOT NULL,
//     items TEXT NOT NULL,
//     total_amount DECIMAL(10, 2) NOT NULL,
//     payment_method ENUM('COD', 'Online') NOT NULL,
//     FOREIGN KEY (customer_id) REFERENCES customer(id)
// );