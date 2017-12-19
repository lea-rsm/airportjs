describe("Airport", function() {

  var airport;
  var plane = jasmine.createSpyObj('plane1', ['land']);
  plane.land.and.callFake(function() {
    return true;
  })

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("the airport starts with no planes", function() {
    expect(airport.landedPlanes.length).toEqual(0);
  });

  describe("Landing", function() {
    it("can land a plane in the airport", function() {
      airport.land(plane)
      expect(airport.landedPlanes.length).toEqual(1);
    });
  });

  describe("Take Off", function() {
    it("can instruct a plane to take off", function(){
      airport.land(plane)
      airport.takeoff()
      expect(airport.landedPlanes.length).toEqual(0);
    });

    it("confirms that it is no longer in the airport", function(){
      airport.land(plane)
      expect(airport.takeoff()).toEqual("the plane took off");
    });
  });
});
