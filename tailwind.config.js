module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        'grayish-blue': {
          lighter: 'hsl(210, 46%, 95%)',
          default: 'hsl(212, 23%, 69%)',
          'very-dark': 'hsl(217, 19%, 35%)'
        },
        'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
        'light-blue': 'hsl(228, 45%, 44%)'
      }
    }
  }
};
