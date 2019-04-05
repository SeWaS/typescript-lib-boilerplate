import { sayHello } from "..";

describe('The example test', () => {
    it('should pass', () => {
        expect(sayHello('Name')).toEqual('Hello, Name');
    });
});