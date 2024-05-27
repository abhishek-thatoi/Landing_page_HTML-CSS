
                                //!in case of package vulnerabilities or packages asking for funding and 
                                //todo TRY these:
                                >npm i
                                >npm update
                                >npm audit fix --force


//! to create directory for react app
>npm i -g create-react-app
        OR
//preferred
>npx create-react-app myapp
>cd myapp

//! now to install and run tailwind 
//todo or just go to tailwind website and follow steps for react project in framework guide
>npm install -D tailwindcss
>npx tailwindcss init
        // in tailwind.config.js
        /** @type {import('tailwindcss').Config} */
        module.exports = {
          content: [
            "./src/**/*.{js,jsx,ts,tsx}",
          ],
          theme: {
            extend: {},
          },
          plugins: [],
        }

        // in index.css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

>npm run start

//! for routing we need to install react dom as 'React' is a library not a framework
>npm i react-router-dom
//for specific version
>npm i react-router-dom@6.4.1

//! FOR REACT prj_01( helps to created nested css)
>npm i react-router-dom react-icons sass

//! to install import and create hyperlinks, to scroll to specific section on same page
// *HashLink
>npm i react-router-hash-link
