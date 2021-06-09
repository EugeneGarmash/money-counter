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

      <div className={classes.About__info}>
        <p className={classes.About__p}>The belowmentioned technologies and techniques are used for practice:</p>
        <ul className={classes.About__infoList}>
          <li>1. React hooks, Redux hooks, React-redux</li>
          <li>2. React-router</li>
          <li>3. Class and Functional components</li>
          <li>4. Context API</li>
          <li>5. Styling: CSS Modules, Styled C, Radium, SCSS (vars, mixins, nesting)</li>
          <li>6. Audio API</li>
        </ul>
{/**  */}
      </div>

    </div>
  );
};

export default About;