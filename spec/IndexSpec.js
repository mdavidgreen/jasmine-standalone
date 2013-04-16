describe("Index", function() {
  var index

  beforeEach(function() {
    index = new Index();
  });

  it("passes a basic value", function() {
    expect(index.value).toBeTruthy;
  });
});
