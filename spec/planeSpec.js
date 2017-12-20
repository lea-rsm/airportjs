describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("the plane is no long flying when landed by the airport", function (){
    plane.isLanded()
    expect(plane.flying).toBe(false);
  });
  it("the plane is flying after takeoff at the airport", function (){
    plane.isFlying()
    expect(plane.flying).toBe(true);
  });
});
