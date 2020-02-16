// load / import any module
const os = require('os');

// total memory
let totalMemory = os.totalmem();
console.log(`total Memory ${totalMemory}`);

// free meomory
let freeMemory = os.freemem();
console.log(`free memory : ${freeMemory}`);

// Hmoe directory
let homeDirectory = os.homedir();
console.log(`Home directory ${homeDirectory}`);

// host name
let hostName = os.hostname();
console.log(`Host Name: ${hostName}`);

// user Info
console.log(os.userInfo().username);

