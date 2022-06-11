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
