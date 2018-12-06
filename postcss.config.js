module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 75,
      unitPrecision: 5,
      propList: ['width','height','line-height','max-width','max-height','min-width','min-height','font-size','padding','margin','margin-top','margin-left','margin-right','margin-bottom','padding-top','padding-bottom','padding-left','padding-right','top','left','right','bottom'],
      selectorBlackList: [],
    }
  }
}
