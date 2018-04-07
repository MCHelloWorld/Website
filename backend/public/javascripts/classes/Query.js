class Query = {
  public static function prepare(Statement, Params ){
    connection.query(Statement, Params, function(error, result, fields){
      if (error) {
        console.log("error ocurred: ",error);
        res.send("a connection error has occurred");
      } else {
        console.log('Successful Query: ', result);
        return result;
      });
    }
  }
}
