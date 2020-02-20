let moment = require('moment');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format('YYYY [escaped] YYYY'));
console.log(moment("19881228", "YYYYMMDD").fromNow());


// locale hi
moment.locale('hi')
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
