const bcrypt = require('bcrypt');
const bCrypt = {};

const salt=12;

/**
 * Encrypt a String
 * @param {String} text 
 * @returns A string hashed
 */
bCrypt.encrypt=(text)=>{
    return bcrypt.hashSync(text,salt);
};

/**
 * Compare password
 * @param {String} pwdHashed 
 * @param {String} pwdText 
 * @returns True if the password is equals the hashed
 */
bCrypt.validate=(pwdText, pwdHashed)=>{
    return bcrypt.compareSync(pwdText, pwdHashed);
};

module.exports=bCrypt;