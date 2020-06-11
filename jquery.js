
var thermostat = new Thermostat;

$(document).ready(function(){
  updateTemp();
  $("#power-saving-status").html('on').css("background-color", "green");

  $("#temperature-up").click(function() {
    thermostat.up();
    updateTemp();
  });

  $("#temperature-down").click(function() {
    thermostat.down();
    updateTemp();
  });

  $("#temperature-reset").click(function() {
    thermostat.reset();
    updateTemp();
  });

  $("#powersaving-on").click(function() {
    thermostat.turnPowerSaverOn();
    $("#power-saving-status").html('on').css("background-color", "green");
    updateTemp();
  });

  $("#powersaving-off").click(function() {
    thermostat.turnPowerSaverOff();
    $("#power-saving-status").html('off').css("background-color", "red");;
  });
});

function updateTemp() {
  $("#Temperature").html(thermostat.currentTemp());
  if (thermostat.energyUsage() === "Low usage") {
    $("#Temperature").css("background-color", "green")
  }
}
