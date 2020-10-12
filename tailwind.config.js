/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: { 
      'julia-light': ['JuliaMono-light'], 
      'julia-medium': ['JuliaMono-medium'], 
      'julia-regular': ['JuliaMono-regular'], 
      'ferrite-light': ['FerriteCore-light'], 
      'ferrite-display': ['FerriteCore-display'],
    }, 
    fontSize: {
        'xxs': '.50rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
    },
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
  plugins: [require('tailwindcss-dark-mode')(), require("@tailwindcss/typography")()],
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
