const query = require("../utils/deasyncSQL.js");
const sessionUtils = require("../routes/session.js");
const cp = require("child_process");

class Entity {
  //Type
  //
  constructor(values) {
    this.type = values.type;
    this.id = values.id;
  }
  static async get(type, id) {
    console.log("entity get hit hit " + type);
    var conn = await query(
      "SELECT * FROM " + type + " WHERE " + type + "_id= ?",
      [id]
    );
    console.log("conn=" + conn);
    return conn[0];
  }
  static async getMultiple(type, num) {
    var values = await query("SELECT * FROM " + type + " LIMIT ? ", [num]);
    console.log("THESE ARE THE VALUES" + values);
    return values;
  }
  static async create(table, values) {
    var insert = prepareUpdateValues(values);
    var conn = await query("insert into ? (?) VALUES(?) ", [
      table,
      insert.fields,
      insert.values
    ]);
    return conn;
  }
  static prepareUpdateValues(values) {
    var fields = "";
    var values = "";
    var insert = {
      fields: fields,
      values: values
    };

    (comma = ""), (count = 0);
    for (key in values) {
      if (count > 0) {
        comma = ",";
      }
      insert.fields += MySQL.escape(comma + key);
      insert.values += comma + values;
    }
    return insert;
  }
  /*
  prepares values in a given object to be inserter into a Database
  fields - int - an object with key-value pairs, where the keys are matched to DB field names
  */
  static prepareValues(fields) {
    var updates = fields; //setting fields to a local variable
    var fields = ""; //the generated string that gets appended with key-value pairs to bi inserted
    var counter = 0; //sets commas if the number of key-value pairs exceeds 1
    var commas = ""; //dynamically insert commas between fields when necessary

    //generates the string for the sql statemenet
    for (var key in updates) {
      if (counter > 0) {
        commas = ",";
      }
      console.log(key);
      fields +=
        commas + MySQL.excape(key) + "=" + MySQL.escape(updates[key]) + " ";
      counter++;
    }
    return fields;
  }
  /*
updates fields in a table. prepareValues retuens escaped vars, so it's safe
  */
  async update(values) {
    console.log("update hit");
    var conn = null; //query await
    var fields = super.prepareValues(fields);
    var addition =
      "UPDATE " + this.type + " SET " + fields + "WHERE user_id = 80";
    conn = await query(addition, [fields, this.values.user_id]);
    return conn;
  }
  async deleteRow(values) {
    return await connection("DELETE FROM ? WHERE user_id = ?", [
      this.type,
      this.id
    ]);
  }
}
module.exports = Entity;
