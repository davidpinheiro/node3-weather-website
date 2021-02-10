const request = require("request");

const forecast = (lon, lat, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=af086714fdfb5ac29016d92f049fbb76&query=" +
    lat +
    "," +
    lon;
  //      + "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service");
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      const current = body.current;
      callback(undefined, {
        description: current.weather_descriptions[0],
        temperature: current.temperature,
        feelslike: current.feelslike,
      });
    }
  });
};

module.exports = forecast;
