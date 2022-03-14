
const DatabaseModel = {
    result : require('lodash'),
    SQLite : require('sqlite3'),

    db_path : 'database.db',

    get getStampList(){
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
    },
    insertStamp : function(ref, year, color, person_name, place, price){
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
    },
    modifyStamp : function(id, ref, year, color, person_name, place, price){
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
    },
    get getCharacteristics(){
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
        },
    get getTags(){
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

module.exports = {
    DatabaseModel
}