import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['**/*.vue'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      '2xl-more': { min: '1536px' },
      xl: { max: '1279px' },
      'xl-more': { min: '1280px' },
      lg: { max: '1023px' },
      'lg-more': { min: '1024px' },
      md: { max: '767px' },
      'md-more': { min: '768px' },
      sm: { max: '639px' },
      'sm-more': { min: '640px' },
      xs: { max: '319px' },
      'xs-more': { min: '320px' }
    },
    extend: {
      aspectRatio: {
        '16/9': '16/9',
      },
      colors: {
        'dark-gray': '#111',
      },
    }
  }
}
