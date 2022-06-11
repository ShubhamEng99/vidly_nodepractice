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

describe('getproduct',()=>{
    it('should return product with given id',()=>{
        const res=tests.getproduct(1);
        //in case of object don't use toBe as both objects are on different memory location else use toEqual
        expect(res).toEqual({productid:1,price:10})
        expect(res).toMatchObject({productid:1})// in case of maatch object we don;t have to list down all the properties
    })
})