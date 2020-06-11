
var thermostat = new Thermostat;

$(document).ready(function(){
  $("#Temperature").html(thermostat.currentTemp());
});
