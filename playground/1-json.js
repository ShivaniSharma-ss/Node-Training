const fs=require('fs');
// const book={
//    title:'Ego is the enemy',
//    author:'Ryan Holiday',
// }
// const bookJSON=JSON.stringify(book);//to covert object into JSONstring
// console.log(bookJSON);

// const parseData=JSON.parse(bookJSON); //convert string into JSON object
// console.log(parseData.author);

// fs.writeFileSync('1-json.json',bookJSON);
// const dataBuffer=fs.readFileSync('1-json.json');
// const dataJSON=dataBuffer.toString();
// const data=JSON.parse(dataJSON);
// console.log(data.title);



//challenge

const dataBuffer=fs.readFileSync('1-json.json');
const dataJson=dataBuffer.toString();
const user=JSON.parse(dataJson);


user.name='Shivani';
user.age=22;

const userJSON=JSON.stringify(user);
fs.writeFileSync('1-json.json',userJSON);



