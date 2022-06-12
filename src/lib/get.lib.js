const libJWT = require('./jwt.lib.js');
const libCrypt = require('./crypt.lib');

const libs={};

libs+=libJWT;
libs+=libCrypt;

module.exports=libs;