// normal js approach
let colors = ['white', 'red', 'green', 'blue', 'black'];
let resut = '';
colors.forEach(function (color) {
    resut += `${color} `;
});
console.log(resut);

// load npm module
let _ = require('lodash');
resut = 'loadesh approach :';
_.forEach(colors, function (value) {
    resut += `${value} `;
});

console.log(resut);


// mixed array with normal javascript
let array = [100, 'test', 123, 'abc', 4564];
let countElements = (array) => {
    let numberCount = 0, stringCount = 0;
    array.forEach(function (element) {
        if(typeof element === 'number') numberCount++;
        if(typeof element === 'string') stringCount++;
    });
    return {numberCount, stringCount};
}
console.log(countElements(array));


// mixed array with lodash module
let lodashapproach = function(array) {
    let countLodashNumbers = 0, countLodashString = 0;
    _.forEach(array, function (element) {
        _.isNumber(element)? countLodashNumbers++ : countLodashNumbers;
        _.isString(element)? countLodashString++ : countLodashString;
    });
    return {countLodashString, countLodashNumbers};
}

console.log(lodashapproach(array));