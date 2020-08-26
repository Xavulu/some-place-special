/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    extend: { 
      colors: { 
          light: { 
            default: 'var(--light-beige)', 
            pink: 'var(--light-pink)', 
            lavender: 'var(--light-lavender)', 
            red: 'var(--light-red)', 
            logo: 'var(--light-logo)',
            hover: 'var(--light-hover)',
          }, 
          dark: { 
            default: 'var(--dark-black)', 
            grey: 'var(--dark-grey)', 
            teal: 'var(--dark-teal)', 
            blue: 'var(--dark-blue)', 
            logo: 'var(--dark-logo)',
            dhover: 'var(--dark-dhover)'
          },
      },
    },
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive'
     ],
     borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive'
     ],
     textColor: [
       'dark', 
       'dark-hover', 
       'dark-active', 
       'hover', 
       'responsive'
      ]
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
