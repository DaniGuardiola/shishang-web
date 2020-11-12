module.exports = {
  purge: ['./src/index.html'],
  future: {
    purgeLayersByDefault: true
  },
  theme: {
    extend: {
      colors: {
        green: '#a2c037',
        'light-green': '#a7c53b'
      }
    }
  }
}
