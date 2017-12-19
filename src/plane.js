function Plane() {
  this.flying = false
}
Plane.prototype.land = function() {
   this.flying = false
}

Plane.prototype.takeoff = function() {
  this.flying = true
}
