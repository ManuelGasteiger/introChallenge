const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index.js");
const mongoose = require("mongoose");
Conversion = mongoose.model("Conversion");

chai.use(chaiHttp);
const expect = chai.expect;

console.log("Running tests...");

describe("API Tests", () => {
  beforeEach(async () => {
    await Conversion.deleteMany({});
  });

  it("should convert charCode 42 to character '*'", async () => {
    const res = await chai.request(app).get("/character/42");
    expect(res).to.have.status(200);
    const conversions = await Conversion.find({});
    expect(conversions.length).to.equal(1);
    expect(conversions[0].number).to.equal(42);
    expect(conversions[0].character).to.equal("*");
  });

  it("should return the history of conversions", async () => {
    const res = await chai.request(app).get("/character/42");

    const res2 = await chai.request(app).get("/history");

    expect(res2).to.have.status(200);
    expect(res2.body.length).to.equal(1);
    expect(res2.body[0].number).to.equal(42);
    expect(res2.body[0].character).to.equal("*");
  });
});
