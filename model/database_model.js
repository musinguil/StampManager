const { result } = require('lodash');
const { SQLite } = require('sqlite3');

class Database{
    __constructor(){
        db_path = 'database.db'
    }
    getStampList(){
        database = new this.SQLite.Database(this.db_path);
        query = 'SELECT * FROM Main';
        result = [];
        database.each(query, [], (err, row) => {
            if(err){
                throw err;
            }
            result.push([row.id,
            row.ref,
            row.year,
            row.color,
            row.person_name,
            row.place,
            row.price]);
        });

        database.close();
        return result;
    }
    insertStamp(ref, year, color, person_name, place, price){
        query = 'INSERT INTO Main(ref, year, color, person_name, place, price) VALUES (' + 
        ref +
        year +
        color +
        person_name +
        place +
        price +
        ')';
        database = new this.SQLite.Database(this.db_path);
        database.run(query, [], function(err){
            if(err){
                throw err;
            }
            console.log('The stamp with the reference ' + ref + ' was inserted to the database');
        });
        database.close();
    }
    modifyStamp(id, ref, year, color, person_name, place, price){
        query = `UPDATE Main
        SET year = ` + year +
        `, color = ` + color +
        `, person_name = ` + person_name +
        `, place = ` + place +
        `, price = ` + price +
        `WHERE id = ` + id ;
        database = new this.SQLite.Database(this.db_path);
        database.run(query, [], function(err){
            if(err){
                throw err;
            }
            console.log('The stamp with the reference ' + ref + ' was inserted to the database');
        });
        database.close();
    }
    getCharacteristics(){
        database = new this.SQLite.Database(this.db_path);
        query = 'SELECT * FROM Characteristics';
        result = [];
        database.each(query, [], (err, row) => {
            if(err){
                throw err;
            }
            result.push([row.id, row.name]);
        });
        database.close();
        return result;
    }
    getTags(){
        database = new this.SQLite.Database(this.db_path);
        query = 'SELECT * FROM Tags';
        result = [];
        database.each(query, [], (err, row) => {
            if(err){
                throw err;
            }
            result.push([row.id, row.ref]);
        });
        database.close();
        return result;
    }
}

module.exports.Database = Database;