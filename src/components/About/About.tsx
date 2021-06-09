import { basepath } from '../../utils/constants';
import classes from './About.module.scss';
import email from '../../static/email.svg';
import telegram from '../../static/telegram.svg';
import viber from '../../static/viber.svg';
import whatsapp from '../../static/whatsapp.svg';
import facebook from '../../static/facebook.svg';
import { welcomeText } from '../../utils/constants';

const shareViaWhatsApp = () => {
  window.open(`whatsapp://send?text=${basepath}`, '_blank');
};

const shareViaViber = () => {
  window.open(`viber://forward?text=${basepath}`, '_blank');
};

const shareViaTelegram = () => {
  window.open(`https://t.me/share/url?url=${basepath}&text=${welcomeText}`, '_blank');
};

const shareViaEmail = () => {
  window.location.href = `mailto:?body=${basepath}`;
};

const goToFbPage = () => {
  window.open('https://www.facebook.com/eug.garmash', '_blank');
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