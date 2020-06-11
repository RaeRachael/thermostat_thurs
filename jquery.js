
var thermostat = new Thermostat;

$(document).ready(function(){
  $("#Temperature").html(thermostat.currentTemp());

  $("#temperature-up").click(function() {
    thermostat.up();
    $("#Temperature").html(thermostat.currentTemp());
  });

  $("#temperature-down").click(function() {
    thermostat.down();
    $("#Temperature").html(thermostat.currentTemp());
  });

  $("#temperature-reset").click(function() {
    thermostat.reset();
    $("#Temperature").html(thermostat.currentTemp());
  });

  $("#powersaving-on").click(function() {
    thermostat.turnPowerSaverOn();
    $("#Temperature").html(thermostat.currentTemp());
  });

  $("#powersaving-off").click(function() {
    thermostat.turnPowerSaverOff();
  });

});
