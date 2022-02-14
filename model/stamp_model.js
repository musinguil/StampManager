class Stamp{
    id = 0;
    ref = 0;
    year = 0;
    color = '';
    person_name = '';
    place = '';
    price = '';
    characteristics = [];
    __constructor(id, ref, year, color, person_name, place, price, characteristics){
        if(this.isPositive(id) &&
        this.isPositive(ref) &&
        this.validYear(year) &&
        this.isString(color) &&
        this.isString(person_name) &&
        this.isString(place) &&
        this.isPositive(price) &&
        Array.isArray(characteristics)){
            this.id = id;
            this.ref = ref;
            this.year = year;
            this.color = color;
            this.person_name = person_name;
            this.place = place;
            this.price = price;
            this.characteristics = characteristics;
            console.log('The Stamp ' + ref + ' was created.')
        }
        else{
            console.log('Error : Impossibility to create the stamp due to invalid data.')
        }
    }
    get getID(){
        return this.id;
    }
    get getRef(){
        return this.ref;
    }
    set setRef(ref){
        if(this.isPositive(ref)){
            this.ref = ref;
        }
        else{
            console.log('FAILED to modify the reference.')
        }
    }
    get getYear(){
        return this.year;
    }
    set setYear(year){
        if(this.validYear(year)){
            return this.year;
        }
        else{
            console.log('FAILED to modify the year.');
        }
    }
    get getColor(){
        return this.color;
    }
    set setColor(color){
        if(this.isString(color)){
            this.color = color;
        }
        else{
            console.log('FAILED to modify the color.');
        }
    }
    get getPersonName(){
        return this.person_name;
    }
    set setPersonName(person_name){
        if(this.isString(person_name)){
            this.person_name = person_name;
        }
        else{
            console.log('FAILED to modify the name of the personnality who figures in the stamp.');
        }
    }
    get getPlace(){
        return this.place;
    }
    set setPlace(place){
        if(this.isString(place)){
            this.place = place;
        }
        else{
            console.log('FAILED to modify the place.')
        }
    }
    get getPrice(){
        return this.price;
    }
    set setPrice(price){
        if(this.isPositive(price)){
            this.price = price;
        }
        else{
            console.log('FAILED to modify the price.');
        }
    }
    get getCharacteritics(){
        return this.characteristics;
    }
    set setCharacteristics(characteristics){
        if(Array.isArray(characteristics)){
            this.characteristics = characteristics;
        }
        else{
            console.log('FAILED to modify the characteristics.');
        }
    }
    isPositive(integer){
        if(integer > 0){
            return true;
        }
        else{
            console.log('The integer ' + integer + ' is not positive.');
            return false;
        }
    }
    validYear(year){
        current_date = new Date();
        if(year > 1800 && year < current_date.getFullYear()){
            return true;
        }
        else{
            if(year < 1800){
                console.log('None stamp was created before the 8\'s.');
            }
            else{
                console.log('The stamp won\'t be created in the future.');
            }
            return false;
        }
    }
    isString(str){
        if(typeof(str) == 'string'){
            return true;
        }
        else{
            console.log('We expected a String data and ' + str + ' is not a string.');
            return false;
        }
    }
}

module.exports.Stamp = Stamp;