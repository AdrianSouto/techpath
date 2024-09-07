import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			tuatara: {
  				'50': '#f7f7f6',
  				'100': '#e5e5e2',
  				'200': '#c9cac5',
  				'300': '#a6a7a1',
  				'400': '#82857c',
  				'500': '#686a62',
  				'600': '#52544d',
  				'700': '#434540',
  				'800': '#383936',
  				'900': '#323330',
  				'950': '#1a1b18'
  			},
  			react: '#61dafb',
  			javascript: '#f7df1e',
  			vue: '#41b883',
  			html: '#e34c26',
  			css: '#264de4',
  			python: '#306998',
  			java: '#007396',
  			c: '#a8b9cc',
  			'c++': '#00599c',
  			'c#': '#68217a',
  			php: '#8892be',
  			ruby: '#cc342d',
  			go: '#00add8',
  			typescript: '#007acc',
  			rust: '#000000',
  			kotlin: '#0095d5',
  			swift: '#ffac45',
  			scala: '#dc322f',
  			elixir: '#4e2a8e',
  			haskell: '#5e5086'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
