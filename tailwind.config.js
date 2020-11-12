module.exports = {
  purge: ['./src/index.html'],
  future: {
    purgeLayersByDefault: true
  },
  theme: {
    extend: {
      colors: {
        green: '#a2c037',
        'dark-green': '#97b52b'
      },
      fontFamily: {
        martel: 'Martel'
      }
    }
  }
}
