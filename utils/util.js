const formatTime = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return (
        [year, month, day].map(formatNumber).join("/") +
        " " +
        [hour, minute, second].map(formatNumber).join(":")
    );
};

const formatNumber = n => {
    n = n.toString();
    return n[1] ? n : "0" + n;
};
const removeStorage = key => {
    wx.removeStorage({
        key: key,
        success: function(res) {
            console.log(key + "缓存已被清理");
        }
    });
};
const goBackIndex = () => {
    removeStorage("code");
    wx.reLaunch({
        url: "../index/index"
    });
};
const showToast = (title, icon = "none", duration = 500) => {
    wx.showToast({
        title: title,
        icon: icon,
        duration: duration
    });
};
module.exports = {
    formatTime,
    goBackIndex,
    showToast
};
