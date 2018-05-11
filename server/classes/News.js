const query = require("../utils/deasyncSQL.js");
const sessionUtils = require("../routes/session.js");

const cp = require("child_process");
const Entity = require("./Entity.js");

class News extends Entity {
  constructor(values) {
    super({ type: "news", id: id });
    var id = values.news_id;

    this.values = { values };
  }

  static async getNews(id) {
    var values = super.get("news", id);
    return new News(values);
  }
  /**returns a list of news. will return news in DESC order
  by date
  num - int- the number of eveents you would lie returned
  */
  static async create(values) {
    return await super.create(values);
  }
  static async getNewslist(num) {
    var retNews = await Entity.getMultiple("news", num);

    return retNews;
  }
  async update(fields) {
    return await super.update(fields);
  }

  async delete(id) {
    return await super.deleteRow();
  }
}

module.exports = News;
