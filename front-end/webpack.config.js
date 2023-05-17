const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
};

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
};
