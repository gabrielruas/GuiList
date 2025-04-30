const { withExpo } = require('@expo/webpack-config');
module.exports = withExpo({
  // Configurações específicas de Webpack para produção
  output: {
    publicPath: './', // Isso garante que os arquivos sejam relativos ao diretório onde você hospeda os arquivos
  },
});