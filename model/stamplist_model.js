const { Stamp } = require('./stamp_model.js');
const { Database } = require('./database_model.js');

class StampList{
    current_date = new Date();
    stamp = new this.Stamp(0, 0, this.current_date.getFullYear(), '', '', '', 0, []);
    stamplist = [];
    database = new this.Database();
    getStamplist(){
        return this.stamplist;
    }
    addStamp(stamp){
        if(typeof(stamp) == true){
            this.stamplist.push(stamp);
        }
    }
    delStamp(ref){
        for(var i = 0; i < this.stamplist.lengt ; i++){
            if(this.stamplist[i].getRef() == ref){
                this.stamplist.splice(i, i);
                break;
            }
        }
    }
    modifyStamp(id, stamp){
        for(var i = 0; i < this.stamplist.lengt ; i++){
            if(this.stamplist[i].getID() == id){
                this.stamplist.splice[i] = stamp;
                break;
            }
        }
    }
}