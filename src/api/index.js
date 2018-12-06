import request from '@/utils/request'

// 获取底部菜单
export const toolBar = (data) => request('/storeHome/toolbar', data, 'post');

// 获取商城信息(首页名称)
export const mallOtherInfo = (data) => request('/OtherPageLookOverPagelookover', data, 'post');

// 获取商城信息(主题色)
export const mallInfo = (data) => request('/Storehome/getmall', data, 'post');




// 首页
export const storeHomeIndex = (params) => request('/storeHome/newIndex', params, 'post');

//获取规格信息
export const specSelect = (params) => request('/product/specSelect', params, 'post');


//商品详情
export const productIndex = (params) => request('/product/index', params, 'post');

//加入购物车
export const cartUpdate = (params) => request('/cart/update', params, 'post');
export const updateBatch = (params) => request('/cart/updateBatch', params, 'post');

//评论
export const comments = (params) => request('/comments', params, 'post');

//收藏
export const favorite = (params) => request('/Favorite', params, 'post');



//门店-列表
export const storeselect = (params) => request('/storeselect', params, 'post');

//选择门店
export const storeChange = (params) => request('/StoreChange', params, 'post');


//订单-提交订单页详情信息
export const orderConfirmIndex = (params) => request('/orderconfirm/index', params, 'post');

//订单-提交团购订单
export const orderAdd = (params) => request('/OrderConfirm/orderadd', params, 'post');

//订单-提交普通单或抢购单
export const orderAddNew = (params) => request('/OrderConfirm/orderAddNew', params, 'post');

//支付页
export const payDetail = (params) => request('/OrderConfirm/payIndex', params, 'post');

//获取微信参数
export const getWxJsApiParam = (params) => request('/Payment/GetWxJsApiParam', params, 'post');

//支付结果
export const payResult = (params) => request('/orderMain/paySuccess', params, 'post');

//订单列表
export const myOrder = (params) => request('/customer/myorder', params, 'post');

//取消订单
export const orderCancel = (params) => request('/order/cancel', params, 'post');

//确认收货
export const orderComplete = (params) => request('/order/complete', params, 'post');

//订单详情
export const orderDetail = (params) => request('/ordermainmyorderdetail', params, 'post');


//地址管理-地址列表
export const myaddress = (params) => request('/customer/myaddress', params, 'post');

//地址管理-新增修改地址
export const updateAddress = (params) => request('/customer/updateaddress', params, 'post');

//地址管理-设为默认
export const addressSetDefault = (params) => request('/customer/address/setdefault', params, 'post');

//地址管理-删除地址
export const deleteAddress = (params) => request('/customer/deleteaddress', params, 'post');



//分类
export const CategoryList = (params) => request('/CategoryBrand/CategoryList', params, 'post');

//品牌
export const BrandList = (params) => request('/CategoryBrand/BrandList', params, 'post');


//产品列表
export const productList = (params) => request('/product/list/index', params, 'post');


//抢购列表
export const spikeList = (params) => request('/spike/detail', params, 'post');



//收藏列表
export const favoriteList = (params) => request('/Favorite/index', params, 'post');
//收藏-删除
export const favoriteDel = (params) => request('/Favorite/del', params, 'post');


//浏览记录列表
export const browseList = (params) => request('/Browse/index', params, 'post');
//浏览记录-删除
export const browseDel = (params) => request('/Browse/del', params, 'post');



//意见反馈
export const feedBack = (params) => request('/feedBack', params, 'post');


//我的优惠券
export const myCoupon = (params) => request('/customer/mycoupon', params, 'post');
//领取优惠券
export const couponGrab = (params) => request('/grabcoupon/directGet', params, 'post');



//团购列表
export const groupList = (params) => request('/groupbuy/getlist', params, 'post');
//团购详情
export const groupDetail = (params) => request('/wap/groupBuy/ProductDetail', params, 'post');


//视频详情
export const getDecorateVideo = (params) => request('/videoDetail/getDecorateVideo', params, 'post');




//购物车
export const cartIndex = (params) => request('/cart/index', params, 'post');

//换购商品
export const selectExchange = (params) => request('/cart/selectExchange', params, 'post');

//赠品
export const selectGift = (params) => request('/cart/selectGift', params, 'post');

//删除产品
export const cartDel = (params) => request('/cart/del', params, 'post');

//凑单
export const fullReduceActivityProduct = (params) => request('/cart/fullReduceActivityProduct', params, 'post');


//会员卡信息
export const memberShip = (params) => request('/customer/membership', params, 'post');


//个人中心
export const customerIndex = (params) => request('/customer/index', params, 'post');


//售后-需要售后的订单信息
export const supportApply = (params) => request('/support/apply', params, 'post');
//售后-提交售后申请
export const supportAdd = (params) => request('/support/add', params, 'post');
//售后-售后详情
export const supportDetail = (params) => request('/support/detail', params, 'post');
//售后-撤销申请
export const supportCancel = (params) => request('/support/cancel', params, 'post');
//售后-填写寄回信息
export const supportExpress = (params) => request('/support/express', params, 'post');
//售后-售后记录
export const supportList = (params) => request('/support/list', params, 'post');
