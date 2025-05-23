/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(20 14.3% 4.1%)',
        card: 'hsl(0 0% 100%)',
        'card-foreground': 'hsl(20 14.3% 4.1%)',
        popover: 'hsl(0 0% 100%)',
        'popover-foreground': 'hsl(20 14.3% 4.1%)',
        primary: 'hsl(24.6 95% 53.1%)',
        'primary-foreground': 'hsl(60 9.1% 97.8%)',
        secondary: 'hsl(60 4.8% 95.9%)',
        'secondary-foreground': 'hsl(24 9.8% 10%)',
        muted: 'hsl(60 4.8% 95.9%)',
        'muted-foreground': 'hsl(25 5.3% 44.7%)',
        accent: 'hsl(60 4.8% 95.9%)',
        'accent-foreground': 'hsl(24 9.8% 10%)',
        destructive: 'hsl(0 84.2% 60.2%)',
        'destructive-foreground': 'hsl(60 9.1% 97.8%)',
        border: 'hsl(20 5.9% 90%)',
        input: 'hsl(20 5.9% 90%)',
        ring: 'hsl(24.6 95% 53.1%)',
      },
    },
  },
  plugins: [],
};
