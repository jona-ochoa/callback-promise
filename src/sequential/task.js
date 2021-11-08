const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskOne() {
        return 'ONE VALUE';
    },

    async taskTwo(){
         return 'TWO VALUE';
    } 
};