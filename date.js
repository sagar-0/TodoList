//jshint esversion:6

module.exports.getDate=()=>{
  var today = new Date();
  var currentDay = today.getDay();
  var option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  var day = today.toLocaleDateString("en-US", option);
  return day;
};

module.exports.getDay=getDay;
function getDay() {
  var today = new Date();
  var currentDay = today.getDay();
  var option = {
    weekday: "long",

  };

  return today.toLocaleDateString("en-US", option);

}
