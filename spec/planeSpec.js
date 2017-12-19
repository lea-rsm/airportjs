describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("the plane is no long flying when landed by the airport", function (){
    plane.land
    expect(plane.flying).toBe(true);
  });
});
