//index.js
//获取应用实例
const app = getApp()
import {
  loginAction,
  loginApi,
  getUserInfoApi,
  getUserSettingApi,
  loginRequest,
  setUserRequest
} from "../../services/login.js";

import { showToast } from "../../utils/util.js";
import {
  eatRequest,
  canEatRequest,
  eatPeoplesRequest
} from "../../services/eat.js";
Page({
  data: {
    isCanEat: false,
    userInfo: {},
    list: [],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    });

    this.canEat();
    //this.eat();
    this.fetchEatList();

    //检查code
    wx.getStorage({
      key: "code",
      success: res => {
        wx.checkSession({
          success: res => {
            console.log("Session未过期，登陆状态未失效");
          },
          fail: err => {
            // 重新登录
            console.log("Session过期，重新登录");
            loginAction().then(() => {

            });
          }
        });
      },
      fail: res => {
        console.log("无code信息，调用登录接口获取code");
        loginAction().then(res => {
        });
      }
    });
    //检查userInfo
    getUserInfoApi()
      .then(res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
        wx.setStorage({
          key: "hasUserInfo",
          data: res.userInfo
        });
        return res;
      })
      .then(res => setUserRequest(res.rawData, res.signature));
  },
  canEat() {
    canEatRequest().then(res => {
      this.setData({
        isCanEat: res.data.can_eat
      });
    });
  },
  fetchEatList() {
    eatPeoplesRequest().then(res => {
      console.log(res);
      this.setData({
        list: res.data.list
      });
    });
  },
  onEat() {
    eatRequest().then(res => {
      if (res.data.can_eat) {
        showToast("成功取消");
      } else {
        showToast("成功订餐！！");
      }
      this.fetchEatList();
      this.setData({
        isCanEat: res.data.can_eat
      });
    });
  },
})
