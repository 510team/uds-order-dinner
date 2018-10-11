//const serverHost = "https://www.adazhang.com";
const serverHost = "http://localhost:8666";

const Login = {
  url: `${serverHost}/login`,
  method: "get"
};
const FindUser = {
  url: `${serverHost}/user/findUser`,
  method: "get"
};


const SaveUserInfo = {
  url: `${serverHost}/user/setUser`,
  method: "post"
};

const CanEat = {
  url: `${serverHost}/eat/canEat`,
  method: "post"
};

const Eat = {
  url: `${serverHost}/eat`,
  method: "post"
};

const EatPeopleList = {
  url: `${serverHost}/eat/people`,
  method: "post"
};


export {
  serverHost,
  FindUser,
  Login,
  SaveUserInfo,
  CanEat,
  Eat,
  EatPeopleList
};
