import { demo } from "./demo.js";

describe("demo", () => {
  it("should say 'test'", () => {
    expect(demo()).toEqual("test");
  });
});
