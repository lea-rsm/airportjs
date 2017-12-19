describe("Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("the airport starts with no planes", function() {
    expect(airport.landedPlanes.length).toEqual(0);
  });

  it("can land a plane in the airport", function() {
    airport.land(plane)
    expect(airport.landedPlanes.length).toEqual(1);
  });

  it("can instruct a plane to take off", function(){
    airport.land(plane)
    airport.takeoff(plane)
    expect(airport.landedPlanes.length).toEqual(0);
  });

  it("confirms that it is no longer in the airport", function(){
    airport.land(plane)
    airport.takeoff(plane)
    expect(message).toMatch(plane + "took off");
  });
});
