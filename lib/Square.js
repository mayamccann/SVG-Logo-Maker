const Shape = require('./shape.js');
const Square = require ('./shape.js')

class Square extends Shape {
    constructor(shapecolor, text, textcolor) {
        super(shapecolor, text, textcolor);
    };

    render() {
        return 
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="${this.shapecolor}"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
        </svg>

    };
};

module.exports = Square;