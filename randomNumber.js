function randomNumber(){
    return Math.ceil(Math.random()*1000+Date.now());
}

module.exports = randomNumber;