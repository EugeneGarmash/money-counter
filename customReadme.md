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