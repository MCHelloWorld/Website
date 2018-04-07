
class User = {
  construct(id){
    var init = this.initialize
    for(var i in init){
      if i
    }
  }

  initialize(id){
    var query = "Select * FROM USER WHERE UserID = ?"
    response = Query.prepare(query, id);

}
