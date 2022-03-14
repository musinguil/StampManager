const StamplistModel = {
    Stamp : require('./stamp_model.js'),
    Database : require('./database_model.js'),

    current_date : new Date(),
    stamp : new this.Stamp(0, 0, this.current_date.getFullYear(), '', '', '', 0, []),
    stamplist : [],
    database : new this.Database(),
    get getStamplist(){
        return this.stamplist;
    },
    addStamp : function(stamp){
        if(typeof(stamp) == true){
            this.stamplist.push(stamp);
        }
    },
    delStamp : function(ref){
        for(var i = 0; i < this.stamplist.lengt ; i++){
            if(this.stamplist[i].getRef() == ref){
                this.stamplist.splice(i, i);
                break;
            }
        }
    },
    set modifyStamp({
        id,
        stamp}
        ){
        for(var i = 0; i < this.stamplist.lengt ; i++){
            if(this.stamplist[i].getID() == id){
                this.stamplist.splice[i] = stamp;
                break;
            }
        }
    },
}


module.exports = {
    StamplistModel
};