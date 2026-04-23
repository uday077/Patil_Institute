const fs = require('fs');

const filesToFixText = [
  'src/components/Contact.jsx',
  'src/components/About.jsx',
  'src/components/CareerGuidance.jsx'
];

filesToFixText.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/color: 'white'/g, "color: 'var(--text-main)'");
  fs.writeFileSync(f, c);
});

let hero = fs.readFileSync('src/components/Hero.jsx', 'utf8');
hero = hero.replace(/background: 'white'/g, "background: 'var(--bg-card)'");
hero = hero.replace(/border: '4px solid white'/g, "border: '4px solid var(--bg-card)'");
fs.writeFileSync('src/components/Hero.jsx', hero);

let nav = fs.readFileSync('src/components/Navbar.jsx', 'utf8');
nav = nav.replace(/isActive \? 'white'/g, "isActive ? 'var(--primary)'");
fs.writeFileSync('src/components/Navbar.jsx', nav);
