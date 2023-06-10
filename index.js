const  chalk  = require('chalk');
const getNotes=require('./notes.js');
const validator=require('validator');
const msg=getNotes()

const command=process.argv[2];
console.log(process.argv);
if(command==='add'){
    console.log('Adding note');
}
else if(command==='remove')
{
    console.log('Removing note');
}

// console.log(msg);
// console.log(chalk.green('Success'));
// console.log(validator.isEmail('shivani@email.com'));