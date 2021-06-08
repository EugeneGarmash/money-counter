- redux переименовать поля
- AdditionalSalaryInfo
- Скидывается значение малтиплаера
- muteButton
- check everything
- todo
- Audio

1) share with friends buttons
  const shareViaWhatsApp = () => {
    window.location.href = `whatsapp://send?text=${shareText}`;
  };

  const shareViaViber = () => {
    window.location.href = `viber://forward?text=${shareText}`;
  };

  const shareViaTelegram = () => {
    window.location.href = `https://t.me/share/url?url=${window.location.protocol}//${window.location.hostname}&text=${shareText}`;
  };

  const shareViaEmail = () => {
    window.location.href = `mailto:?body=${shareText}`;
  };
2) широкие, но невысокие экраны
3) // console.log('FIRE'); // постоянный ререндер из-за счётчика - не стейт, а контекст или реф
4)
Remove className duplication
https://www.google.com/search?q=css+modules+name+duplication&oq=css+modules+name+du&aqs=chrome.1.69i57j33i22i29i30.6513j0j7&sourceid=chrome&ie=UTF-8
to avoid AppMainButton__AppMainButton you should play with webpack config file*/
using linter with custom settings
5) Fix readme
6) Remove all ts ANY
7) convert to TS



5)
  Redux toolkit - slices
  Reselect
6) SalaryStep --> firebase
    // сохранять зарплату, если вошёл в аккаунт:
    // сохранять зарплату по стопу
    // сохранять зарплату, когда выхожу с приложения
    // remove auth !!
    // but some fake api
    // SWR
7) Модалка аус уходит за менюМадоал








You see a money counter written on the JS programming
language with demonstration purposes.
The belowmentioned technologies and techniques are used for practice:

JS:
- React
1. React hooks
2. Context API --??
3. React-router
4. Class components
5. Functional components
6. various libraries

- Redux
1. react-redux
2. redux hooks
3. no switch case reducer usage

Styling
1. Radium
2. CSS Modules
3. Styled components
4. SCSS (variables, mixins and nesting)
5. Inline styling
6. External font usage
7. Custom Favicon use


# money-counter
Count your money while working
You can check the project out on [THE LINK](https://the_link)







# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
