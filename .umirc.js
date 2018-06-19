export default {
    plugins: [
        ['umi-plugin-dva', { immer: true }],
        ['umi-plugin-routes', {
            exclude: [
              /models/,
              /services/,
              /\model\.js$/,
            ],
          }],
    ],
};