import { basepath, welcomeText } from '../../utils/constants';
import classes from './About.module.scss';
import email from '../../static/email.svg';
import telegram from '../../static/telegram.svg';
import viber from '../../static/viber.svg';
import whatsapp from '../../static/whatsapp.svg';
import facebook from '../../static/facebook.svg';
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
    id: 'share_via_facebook',
    callback: goToFbPage,
  },
  {
    image: email,
    id: 'share_via_email',
    callback: shareViaEmail,
  },
  {
    image: telegram,
    id: 'share_via_telegram',
    callback: shareViaTelegram ,
  },
  {
    image: viber,
    id: 'share_via_viber',
    callback: shareViaViber ,
  },
  {
    image: whatsapp,
    id: 'share_via_whatsapp',
    callback: shareViaWhatsApp,
  },
];

const About = () => {

  const { translations } = useLocalization();

  const infoList = [
    translations.info_ts,
    translations.info_hooks_n_redux,
    translations.info_reactRouter,
    translations.info_components,
    translations.info_context,
    translations.info_styling,
    translations.info_audio_api,
  ]

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
                  <img src={shareItem.image} alt={shareItem.image} className={classes.About__image} />
                </div>
              </div>
              <p className={classes.About__optionText}>{translations[shareItem.id]}</p>
            </li>
          )
        })}
      </ul>

      <div className={classes.About__info}>
        <p className={classes.About__p}>{translations.info_title}</p>
        <ul className={classes.About__infoList}>
          {Object.values(translations).length
            ? infoList.map((info, index) => <li key={info}>{index + 1}. {info}</li>)
            : null
          }
        </ul>
      </div>

    </div>
  );
};

export default About;
