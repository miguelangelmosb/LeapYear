const isLeap = (year) => {
    
    if (year >= 1900  && year <= 10 ** 5){  
        return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    }
    return false;
}

module.exports=isLeap;
