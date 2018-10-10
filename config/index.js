const serverHost = "https://www.adazhang.com";
// const serverHost = "http://localhost:8362";

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



export {
  serverHost,
  FindUser,
  Login,
  SaveUserInfo,
};
