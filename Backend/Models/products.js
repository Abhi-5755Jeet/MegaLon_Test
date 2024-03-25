class Products {
  constructor(id,name, price,restroId) {
    this.id=id;
    this.restroId= restroId;
    this.name = name;
    this.price = price;
  }
}

module.exports = new Products();



// CREATE TABLE products (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   restaurant_id INT NOT NULL,
//   name VARCHAR(255) NOT NULL,
//   price DECIMAL(10, 2) NOT NULL,
//   FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
// );
