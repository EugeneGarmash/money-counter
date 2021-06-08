import classes from './About.module.scss';
import email from '../../static/email.svg';
import telegram from '../../static/telegram.svg';
import viber from '../../static/viber.svg';
import whatsapp from '../../static/whatsapp.svg';
import facebook from '../../static/facebook.svg';
import { welcomeText } from '../../utils/constants';

const shareViaWhatsApp = () => {
  window.location.href = `whatsapp://send?text=${window.location}`;
};

const shareViaViber = () => {
  window.location.href = `viber://forward?text=${window.location}`;
};

const shareViaTelegram = () => {
  window.location.href = `https://t.me/share/url?url=${window.location.protocol}//${window.location.hostname}&text=${welcomeText}`;
};

const shareViaEmail = () => {
  window.location.href = `mailto:?body=${window.location}`;
};

const goToFbPage = () => {
  window.location.href = 'https://www.facebook.com/eug.garmash';
}

const shareList = [
  {
    image: facebook,
    id: 'Go to author\'s Facebook page',
    callback: goToFbPage,
  },
  {
    image: email,
    id: 'Share via email',
    callback: shareViaEmail,
  },
  {
    image: telegram,
    id: 'Share via Telegram',
    callback: shareViaTelegram ,
  },
  {
    image: viber,
    id: 'Share via Viber',
    callback: shareViaViber ,
  },
  {
    image: whatsapp,
    id: 'Share via Whatsapp',
    callback: shareViaWhatsApp,
  },
];

const About = () => {
  return (
    <div className={classes.About}>
      <p className={classes.About_greeting}>I am Yevhen Harmash and I'm a web developer</p>
      <ul className={classes.About__shareList}>
        {shareList.map(shareItem => {
          return (
            <li
              className={classes.About__shareOption}
              onClick={shareItem.callback}
              key={shareItem.image}
            >
              <div className={classes.About__shareLogo}>
                <div className={classes.About__imageContainer}>
                  <img src={shareItem.image} alt="" className={classes.About__image} />
                </div>
              </div>
              <p className={classes.About__optionText}>{shareItem.id}</p>
            </li>
          )
        })}
      </ul>

      {/* <div>
        <h2>money-counter</h2>
        <p>Count your money while working</p>
        <p>You can check the project out on [THE LINK](https://the_link)</p>

        <p>You see a money counter written on the JS programming</p>
        <p>language with demonstration purposes.</p>
        <p>The belowmentioned technologies and techniques are used for practice:</p>

        <p>JS:</p>
        <p> - React</p>
        <ul>
          <li>1. React hooks</li>
          <li>2. Context API</li>
          <li>3. React-router</li>
          <li>4. Class components</li>
          <li>5. Functional components</li>
          <li>6. Various libraries</li>
          <li>7. Audio API</li>
        </ul>
        <p> - Redux</p>
        <ul>
          <li>1. React-redux</li>
          <li>2. Redux hooks</li>
          <li>3. No switch case reducer usage</li>
        </ul>
        <p>Styling: </p>
        <ul>
          <li>1. Radium</li>
          <li>2. CSS Modules</li>
          <li>3. Styled components</li>
          <li>4. SCSS (variables, mixins and nesting)</li>
          <li>5. Inline styling</li>
          <li>6. External font usage</li>
          <li>7. Custom Favicon use</li>
        </ul>

      </div> */}

    </div>
  );
};

export default About;