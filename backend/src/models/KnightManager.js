const AbstractManager = require("./AbstractManager");

class KnightManager extends AbstractManager {
  constructor() {
    super({ table: "knight" });
  }

  insert(knight) {
    return this.connection.query(
      `insert into ${this.table} (name, age) values (?, ?)`,
      [knight.name, knight.age]
    );
  }

  update(knight) {
    return this.connection.query(
      `update ${this.table} set name = ?, age = ?, is_dubbed = ? where id = ?`,
      [knight.name, knight.age, knight.is_dubbed, knight.id]
    );
  }
}

module.exports = KnightManager;
