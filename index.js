const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions,js');
const fileName = "logo.svg";
const setShape = require('./lib/setShape.js')

function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}