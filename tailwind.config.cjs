module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        gray: {
          pale: '#EEEEEE',
          dark: '#1F1F1F',
        }
      },
    },
  },
  plugins: [],
};
