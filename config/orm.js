var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, bc) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            bc(result);
        });
    },
    insertOne: function (tableInput, valInput, valOfCol,bc) {
        var queryString = "INSERT INTO " + tableInput + " (" + valInput + ") VALUES ('" + valOfCol + "');";
        connection.query(queryString, function (err, result) {
            if (err) {
				throw err;
			}
			bc(result);
        });
    },
    updateOne: function (tableInput, colUpdate, newValOfCol, pastValOfCol,bc) {
        var queryString = "UPDATE "+tableInput+" SET "+ colUpdate+ " =" +newValOfCol + " WHERE "+pastValOfCol;
       // var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, function (err, result) {
            if (err) {
				throw err;
			}
			bc(result);
        });
    }
}
//"burgers", "devoured", "true", "id", pastValOfCol,
module.exports = orm;

//UPDATE burgers SET devoured=true WHERE burger_name=Italian;