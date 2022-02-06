const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// const ReactDocgenTypescriptPlugin = require('react-docgen-typescript-plugin').default;

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

// const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  // features: {
  //   storyStoreV7: true
  // },
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config) => {
    // config.resolve.plugins = [
    //   ...(config.resolve.plugins || []),
    //   new TsconfigPathsPlugin({
    //     extensions: config.resolve.extensions
    //   })
    //   // new ReactDocgenTypescriptPlugin({ tsconfigPath: '../tsconfig.json' })
    // ];
    // config.module.rules.push({});
    // config.module.rules.push({
    //   test: /\.(mjs|tsx?|jsx?)$/,
    //   exclude: /(node_modules)/,
    //   use: [
    //     {
    //       loader: 'babel-loader'
    //     },
    //     {
    //       loader: 'ts-loader'
    //     }
    //   ]
    // });

    // return {
    //   ...config,
    //   // entry: [path.resolve(__dirname, '..', 'src/index.ts')],
    //   output: {
    //     ...config.output,
    //     // path: path.resolve(__dirname, '..', 'dist'),
    //     filename: '[name].js',
    //     library: {
    //       name: 'storybook-boilerplate',
    //       type: 'umd'
    //     }
    //   }
    // };

    return config;
  }
};
