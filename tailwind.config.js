module.exports = {
  content: [
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
  ],

  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin'),
  ],
  
}
