module.exports = {
  content: ["./index.html", "./aboutus.html", "./contactus.html", "./blog.html", "./ourservices.html", "./input.css"],
  theme: {
    extend: {
      lineHeight: {
        '12': '3.5rem',
      }, content: {
        'ellipse': 'url("img/ellipse.png")',
      },
    }, 
  }, 
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
