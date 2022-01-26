module.exports = {
  content: [
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
  ],

  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  
}
