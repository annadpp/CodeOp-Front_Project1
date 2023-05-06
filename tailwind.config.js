module.exports = {
  content: ["./index.html", "./aboutus.html", "./contactus.html", "./blog.html", "./ourservices.html", "./input.css"],
  theme: {
    extend: {
      lineHeight: {
        '12': '3.5rem',
      }, content: {
        'ellipse': 'url("img/ellipse.png")',
      }, animation: {
        'spin-slow': 'spin 3s linear infinite',
        'half-spin': 'half 3s linear infinite',
        'quarter-spin': 'quarter 3s linear infinite',
      }, keyframes: {
        'half': {
          '0%': { transform: 'rotate(0deg)' },
          '33%': { transform: 'rotate(-180deg)' },
          '66%': { transform: 'rotate(0deg)' },
          '100': { transform: 'rotate(180deg)'},
        },
          'quarter': {
          '0%': { transform: 'rotate(0deg)' },
          '33%': { transform: 'rotate(-90deg)' },
          '66%': { transform: 'rotate(0deg)' },
          '100': { transform: 'rotate(90deg)'},
        },
      },
    }, 
  }, 
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
