var orm = require("../config/orm");

var burger={
    all: function (bc){
        orm.selectAll("burgers", function(res){
           bc(res);
        });
    },
    create: function (valInput, valOfCol,bc){
        orm.insertOne("burgers", valInput, valOfCol, function (res){
            bc(res);
        });
    },
    update: function (pastValOfCol,bc){
        orm.updateOne("burgers", "devoured", "true", pastValOfCol, function (res){
            bc(res);
        });
    }

}

module.exports = burger;


//UPDATE burgers SET devoured=true WHERE burger_name=Italian;