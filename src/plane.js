function Plane() {
  this.flying = false
}
Plane.prototype.isLanded = function() {
   this.flying = false
}

Plane.prototype.isFlying = function() {
  this.flying = true
}
