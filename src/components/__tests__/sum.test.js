import { sum } from "../Sum";

test("should add two numbers", () => {
  const result = sum(4, 4);

  //assertion
  expect(result).toBe(8);
});