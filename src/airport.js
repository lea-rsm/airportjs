function Airport() {
  this.landedPlanes = []
};

Airport.prototype.land = function(plane, weather) {
  if (weather.stormy === true) {
    return "bad conditions"
  } else {
    this.landedPlanes.push(plane);
    plane.isLanded()
  }
};

Airport.prototype.takeoff = function(plane, weather) {
  if (weather.stormy === true) {
    return "bad conditions"
  } else {
    this.landedPlanes.pop();
    plane.isFlying()
    return "the plane took off"
  }
};
