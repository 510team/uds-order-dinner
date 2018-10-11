import { Eat, CanEat } from "../config/index.js";
import httpRequest from "../utils/request.js";


//发送findUser Request
const eatRequest = () => {
    return httpRequest({
        method: Eat.method,
        data: {},
        url: Eat.url
    });
};

//发送findUser Request
const canEatRequest = () => {
    return httpRequest({
        method: CanEat.method,
        data: {},
        url: CanEat.url
    });
};
export {
    eatRequest,
    canEatRequest
};
