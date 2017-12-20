function Weather () {
  this.conditions = ["stormy"]
}
Weather.prototype.stormy(){
  if (this.conditions[0] === "stormy") {
    return true
  }
}
