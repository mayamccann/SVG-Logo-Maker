
const questions = [
    {

    type: 'list', 
    message: 'What is the shape of the logo?',
    name: 'shape',
    choices: ['Triangle', 'Square', 'Circle'],
    },

{
    type: 'list', 
    message: 'What is the shape color?', 
    name: 'shapecolorchoice',
    choices: ['color keyword', 'hexadecimal']
}, 

{

    type: "input",
    message: "Enter shape color",
    name: "shapecolor",
    when: (answers) => {
        if(answers.shapecolorchoice === 'color keyword') {
            return true;
        }
        return false;
    }, 

    validate: (answer) => {
        let answerlowercase = answer.tolowercase();
        for (var i = 0, len = colorkeywords.length; i < len; ++i) {
            if (answerlowercase.indexOf(colorkeywords[i]) != -1) {
                return true;
            }} 
            return console.log("Enter color keyword")
       
}
}, 

{

    type: "input", 
    name: "shapecolor",
    message: "Enter shape hexadecimal number",
    when: (answers) => {
        if(answers.shapecolorchoice === 'hexadecimal') {
            return true;
        }
        return false;
    }, 
    validate: (answer) => {
        const hexregex = '^#[A-Fa-f0-9]{6}$'
        if (!answer.match(hexregex)) {
            return console.log("Enter hexadecimal")
        }
        return true;
}
}, 
]