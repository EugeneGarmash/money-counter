import { basepath } from '../../utils/constants';
import classes from './About.module.scss';
import email from '../../static/email.svg';
import telegram from '../../static/telegram.svg';
import viber from '../../static/viber.svg';
import whatsapp from '../../static/whatsapp.svg';
import facebook from '../../static/facebook.svg';
import { welcomeText } from '../../utils/constants';
import { useLocalization } from '../../utils/translations';

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

  const { translations } = useLocalization();

  return (
    <div className={classes.About}>
      <p className={classes.About_greeting}>{translations.who_i_am}</p>
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
        <p className={classes.About__p}>{translations.info_title}</p>
        <ul className={classes.About__infoList}>
          <li>1. {translations.info_hooks_n_redux}</li>
          <li>2. {translations.info_reactRouter}</li>
          <li>3. {translations.info_components}</li>
          <li>4. {translations.info_context}</li>
          <li>5. {translations.info_styling}</li>
          <li>6. {translations.info_audio_api}</li>
        </ul>
      </div>

    </div>
  );
};

export default About;