const tests=require('../practicetesting')
describe('absolute-function test',()=>{
    it('absolute-should return positive if input is positive',()=>{
        const res=tests.absolute(12);
        expect(res).toBe(12);
    })
    it('absolute-should return positive if input is -ve',()=>{
        const res=tests.absolute(-12);
        expect(res).toBe(12);
    })
    it('absolute-should return zero if input is 0',()=>{
        const res=tests.absolute(0);
        expect(res).toBe(0);
    })
})


describe('greet',()=>{
    it('should return greeting message',()=>{
        const res=tests.greet('Shubham');
        expect(res).toContain('Shubham')
    })
})

describe('getcurrencies',()=>{
    it('should return currencies supported',()=>{
        const res=tests.getcurrencies();
        expect(res).toBeDefined();
        expect(res).not.toBeNull();
        expect(res).toEqual(expect.arrayContaining(['EUR','USD','AUD']))
    })
})