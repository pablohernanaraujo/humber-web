module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /src\/.*\.(tsx?)$/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/env',
                {
                  modules: false,
                  useBuiltIns: 'usage'
                }
              ],
              '@babel/react'
            ],
            babelrc: false,
          },
        },
      ],
    },
  };
};
