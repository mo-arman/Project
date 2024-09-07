import { sum } from "../sum";


test("Sum Function should calculate the sum of two number", ()=>{

    const result = sum(3, 5);

    // Assertion
    expect(result).toBe(8);
});