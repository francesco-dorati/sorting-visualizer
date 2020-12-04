/* eslint-disable */
module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Sorting Visualizer';
        return args;
      });
  },

  publicPath: process.env.NODE_ENV === 'production'
  ? '/sorting-visualizer/'
  : '/'
};
