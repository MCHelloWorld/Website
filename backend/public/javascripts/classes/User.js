
class User = {
  this._Id,
  this._FirstName,
  this._LastName,
  this._Email,
  this.
  construct(id){
    var init = this.initialize
    for(var i in init){
      if i
    }
  },

  initialize(id){
    var query = "Select * FROM USER WHERE UserID = ?"
    response = Query.prepare(query, id);
    return response;
}
}
