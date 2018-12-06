import request from '@/utils/request'

// 微信登录
export const weixinLogin = (UserName, type) => request('/auth/weixin', {UserName});

//手机号登录
export const clientcode = (data) => request('/auth/clientcode', data);

// 获取验证码
export const getCode = (phone) => request('/api/sms/send',{
    Phone: phone,
    Type: 10011,
    Flag: 100,
    ChildFlag: 6,
    Msg: '店易加'
},'post','code');
