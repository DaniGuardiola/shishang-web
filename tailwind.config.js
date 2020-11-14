module.exports = {
  purge: ['./src/index.html', './src/script.js'],
  future: {
    purgeLayersByDefault: true
  },
  theme: {
    extend: {
      colors: {
        brown: '#27140a',
        green: '#a2c037',
        'dark-green': '#97b52b',
        'light-brown': '#AF8F7E',
        'light-yellow': '#E8FF8B'
      },
      fontFamily: {
        martel: 'Martel'
      },
      width: {
        'max-content': 'max-content'
      }
    }
  }
}