/** @type {import('tailwindcss').Config} */
const { join } = require("path");
const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');

const minMaxWidth = {
  screen: '100vi',
  body: '30em',
}

const minMaxHeight = {
  screen: '100vb',
}

module.exports = {
  plugins: [
    require('tailwindcss-logical'),
    require('@mertasan/tailwindcss-variables'),
  ],
  content: [
    join(__dirname, 'src/**/!(*.spec).{ts,html}'),
    // below function will identify the dependencies of the application and return the glob patterns for them
    // if you create another app, ensure that this is called in its respective tailwind.config
    // use npx nx g setup-tailwind <app-name> --dry-run to do so
    // see https://blog.nrwl.io/set-up-tailwind-css-with-angular-in-an-nx-workspace-6f039a0f4479 for additional information
    ...createGlobPatternsForDependencies(__dirname),
  ],
  // If you want to support toggling dark mode manually instead of relying on the operating system preference,
  // use the class strategy instead of the media strategy.
  // If 'class' is selected dark:...-classes applied whenever a 'dark' class is present earlier in the HTML tree
  // see https://tailwindcss.com/docs/dark-mode
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'hotpink': '#FF69B4',
        'lavender-pink': '#F7ADD1',
        'violet': '#E788EB',
        'tropical-indigo': '#AA80F2',
        'cornflower-blue': '#7295F7',
        'snow': '#f7f4f6',
        'light-green': '#A6E995',
      },
      spacing: {
      },
      minWidth: minMaxWidth,
      maxWidth: minMaxWidth,
      minHeight: minMaxHeight,
      maxHeight: minMaxHeight,
    },
  },
}
