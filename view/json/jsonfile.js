const JSONFile = {
    constructor : function(file_path){
        fs = require('fs');
        fs.readFile(file_path, 'utf-8', (err, jsonstring) => {
            if(err){
                console.log('Failed to load file ' + file_path);
            }
            else{
                file_content = JSON.parse(jsonstring);
            }
        })
    },
    get getInfo(){
        return file_content;
    }
}
module.exports = { 
    JSONFile
};