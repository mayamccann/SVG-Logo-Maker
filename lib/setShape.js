const Triangle = require('./Triangle.js');
const Circle = require('./Circle.js');
const Square = require('./Square.js');

function setShape (response) {

    if (response.shape === 'Circle') {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }