module.exports = {
  purge: ['./src/index.html'],
  future: {
    purgeLayersByDefault: true
  },
  theme: {
    extend: {
      colors: {
        brown: '#27140a',
        green: '#a2c037'
      }
    },
    width: {
      'max-content': 'max-content'
    }
  }
}
