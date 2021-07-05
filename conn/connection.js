
var MongoClient = require('mongodb').MongoClient;

function connectionDatabase() {
    return new Promise((resolve, reject) => {
        // var url = 'mongodb://localhost/crypto_stock';
        var url = 'mongodb://127.0.0.1/crypto_stock';
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
            if (err) {
                // db.close();
                reject(err);
            } else {
                const db = client.db('crypto_stock');
                resolve(db)
            }//End of  connection success
        });//End of Db Connection
    })//End of promise object
}//End of connectionDatabase

module.exports = connectionDatabase()
