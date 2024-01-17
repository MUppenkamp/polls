/** @type {import('tailwindcss').Config} */
const { join } = require("path");
const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.spec).{ts,html}'),
    // below function will identify the dependencies of the application and return the glob patterns for them
    // if you create another app, ensure that this is called in its respective tailwind.config
    // use npx nx g setup-tailwind <app-name> --dry-run to do so
    // see https://blog.nrwl.io/set-up-tailwind-css-with-angular-in-an-nx-workspace-6f039a0f4479 for additional information
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'hotpink': '#FF69B4',
        'lavender-pink': '#F7ADD1',
        'violet': '#E788EB',
        'tropical-indigo': '#AA80F2',
        'cornflower-blue': '#7295F7',
        'mint-cream': '#F1F5ED'
      }
    },
  },
  plugins: [
    require('tailwindcss-logical'),
    require('@mertasan/tailwindcss-variables'),
  ],
}
