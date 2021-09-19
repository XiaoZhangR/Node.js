const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=2b2d8f65b287703496d4ed549efbf6e0&query=42.3605,-71.0596'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})