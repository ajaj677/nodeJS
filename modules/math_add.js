function add(a,b){
    return a + b;
}   

function subt(a,b){
    return a - b;
}   

//multiple export
module.exports = {
    add,
    subt,
}

exports.add = (a, b) => a+b;