function Airport() {
  this.landedPlanes = []
};

Airport.prototype.land = function(plane) {
  this.landedPlanes.push(plane);
};

Airport.prototype.takeoff = function() {
  this.landedPlanes.pop();
  return "the plane took off"
};
