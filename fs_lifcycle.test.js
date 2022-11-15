const fn = require("./fn");

beforeAll(() => {
  console.log("OUT BALL");
});
beforeEach(() => {
  console.log("OUT BEACH");
});
afterEach(() => {
  console.log("OUT AEACH");
});
afterAll(() => {
  console.log("OUT AALL");
});

test("OUT test", () => {
  console.log("OUT TEST");
  expect(fn.add(0, 1)).toBe(1);
});

describe("describe", () => {
  beforeAll(() => {
    console.log("IN BALL");
  });
  beforeEach(() => {
    console.log("IN BEACH");
  });
  afterEach(() => {
    console.log("IN AEACH");
  });
  afterAll(() => {
    console.log("IN AALL");
  });

  test("IN test", () => {
    console.log("IN TEST");
    expect(fn.add(0, 1)).toBe(1);
  });
});
