// console.log('Starting')

// setTimeout(()=>{
// console.log('2 seconds timer')
// },2000)

// setTimeout(()=>{
// console.log("Hello")
// },0)

// console.log('Stopping')


const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=74555444d471133459d4504d1c472e77&query=New York'

request({ url: url,json:true }, (error, response) => {
   
    console.log(response.body.current.temperature)
})