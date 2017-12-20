describe("Airport", function() {

  var airport;
  var plane = jasmine.createSpyObj('plane1', ['isLanded', 'isFlying']);
  var weather = jasmine.createSpyObj('weather', ['stormy']);
  weather.stormy.and.callFake(function() {
    return true;
  });

  beforeEach(function() {
    airport = new Airport();
  });

  it("the airport starts with no planes", function() {
    expect(airport.landedPlanes.length).toEqual(0);
  });

  describe("Landing", function() {
    it("can land a plane in the airport", function() {
      airport.land(plane, weather)
      expect(airport.landedPlanes.length).toEqual(1);
    });
  });

  describe("Take Off", function() {
    it("can instruct a plane to take off", function(){
      airport.land(plane, weather)
      airport.takeoff(plane, weather)
      expect(airport.landedPlanes.length).toEqual(0);
    });

    it("confirms that it is no longer in the airport", function(){
      airport.land(plane, weather)
      expect(airport.takeoff(plane, weather)).toEqual("the plane took off");
    });
  });

  describe("Safety", function() {
    it("planes cant takeoff when weather is stormy", function() {
      airport.land(plane, weather)
      weather.stormy = true
      expect(airport.takeoff(plane, weather)).toEqual("bad conditions");
    });
    it("planes cant land when weather is stormy", function() {
      airport.land(plane, weather)
      airport.takeoff(plane, weather)
      weather.stormy = true
      expect(airport.land(plane, weather)).toEqual("bad conditions");
    });
  });
});
