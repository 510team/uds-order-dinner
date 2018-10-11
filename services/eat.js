import { Eat, CanEat, EatPeopleList } from "../config/index.js";
import httpRequest from "../utils/request.js";


const eatRequest = () => {
    return httpRequest({
        method: Eat.method,
        data: {},
        url: Eat.url
    });
};

const canEatRequest = () => {
    return httpRequest({
        method: CanEat.method,
        data: {},
        url: CanEat.url
    });
};

const eatPeoplesRequest = () => {
    return httpRequest({
        method: EatPeopleList.method,
        data: {},
        url: EatPeopleList.url
    });
};
export {
    eatRequest,
    canEatRequest,
    eatPeoplesRequest
};
