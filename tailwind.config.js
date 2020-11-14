module.exports = {
  purge: ['./src/index.html'],
  future: {
    purgeLayersByDefault: true
  },

  theme: {
    extend: {
      colors: {
        'light-brown': '#AF8F7E',
        'light-yellow': '#E8FF8B'
      }
    }
  }
}