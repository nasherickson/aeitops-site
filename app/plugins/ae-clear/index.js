

const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
  const newUtilities = {
    // Transparent clear background
    '.ae-clear': {
      backgroundColor: 'transparent',
    },
    // Frosted blur effect
    '.ae-blur': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)', // Safari support
    },
    // Debug outline to confirm plugin is loaded
    '.ae-outline': {
      outline: '2px dashed lime',
    },
  };

  addUtilities(newUtilities, ['responsive', 'hover']);
});