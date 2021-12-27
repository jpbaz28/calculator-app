import { add, multiply, subtract } from "./calc-functions";


describe("Calculator Tests", () => {
    it("Should add 2 + 2", () => {
        const sum = add(2, 2);
        expect(sum).toBe(4);
    })

    it("should subtract 4 - 2", () => {
        const diff = subtract(4,2);
        expect(diff).toBe(2);
    })

    it("Should multiply 5 by 5", () => {
        const product = multiply(5,5);
        expect(product).toBe(25);
    })
})

describe("Testing environment variables", () => {

    it("Should read an environment variable", () => {
        const PASSWORD = process.env.DB_PASSWORD;
        expect(PASSWORD).toBeTruthy();
    })
})