const query = require("../utils/deasyncSQL.js");
const sessionUtils = require("../routes/session.js");

const cp = require("child_process");
const Entity = require("./Entity.js");

class Event extends Entity {
  constructor(values) {
    super({ type: "event", id: id });
    var id = values.event_id;

    this.values = { values };
  }

  static async getEvent(id) {
    var values = super.get("event", id);
    return new Event(values);
  }
  /**returns a list of events. will return events in DESC order
  by date
  num - int- the number of eveents you would lie returned
  */
  static async getEvents(num) {
    var retEvents = await Entity.getMultiple("event", num);

    return response;
  }
  async update(fields) {
    return await super.update(fields);
  }

  async delete() {
    return await super.deleteRow();
  }
}

module.exports = Event;
