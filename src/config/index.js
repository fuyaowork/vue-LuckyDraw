export default {
    BASE_URL: process.env.NODE_ENV == 'production'?'http://bcyoo2016.ynbyweishang.com':process.env.BASE_URL,
    CODE_URL: process.env.NODE_ENV == 'production'?'http://api.xsmore.com':process.env.BASE_URL,
    IMG_BASE: 'http://img.xsmore.com/xstore',
    HOST: process.env.NODE_ENV == 'production'?(process.env.VUE_APP_CURRENTMODE == 'stage'?'http://bcyoo2016.ynbyweishang.com':'http://bcyoo2016.ynbyweishang.com'):process.env.BASE_URL
}