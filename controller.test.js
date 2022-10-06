const targetFn = require("./controller");

describe("the print function", ()=>{

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it("should respond with 'Hello world!'", ()=>{
        const mockReq = {};
        const mockRes = {
            send:jest.fn()
        }

        targetFn(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalledWith("Hello world!");
    })
})