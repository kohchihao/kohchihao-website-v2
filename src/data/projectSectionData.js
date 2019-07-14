import sgcheckpoint from '../../img/sgcheckpoint.png';
import sgbusbot from '../../img/sgbusbot.png';
import sgmrt from '../../img/sgmrt.png';
import push2me from '../../img/push2me.jpg';
import scoot from '../../img/scoot.png';
import apollo from '../../img/apollo.png';
import nusbuses from '../../img/nusbuses.jpg';
import anteprints from '../../img/anteprints.png';
import foodbites from '../../img/foodbites.jpg';

export default {
  data: [
    {
      img: nusbuses,
      name: 'NUS Buses',
      description:
        'A realtime NUS Buses arrival app. Redesigned and redeveloped.',
      tech: 'Android, React Native, Glitch, Firebase',
      urls: [
        {
          url_type: 'android',
          url_title: 'Android',
          url: 'https://play.google.com/store/apps/details?id=bazingaa.nusbuses'
        },
        {
          url_type: 'ios',
          url_title: 'iOS',
          url: 'https://itunes.apple.com/us/app/nus-buses/id1333504091'
        }
      ],
      backgroundColorClass: "nusbuses"
    },
    {
      img: sgcheckpoint,
      name: 'SG Checkpoint',
      description:
        "An android app to check the traffic flow @ singapore's checkpoint",
      tech: 'Android, Laravel',
      urls: [
        {
          url_type: 'android',
          url_title: 'Visit App',
          url:
            'https://play.google.com/store/apps/details?id=chihao.singaporetrafficimages'
        },
        {
          url_type: 'website',
          url_title: 'Visit Website',
          url: 'http://www.sgcheckpoint.com'
        }
      ],
      backgroundColorClass: "sgcheckpoint"
    },
    {
      img: foodbites,
      name: 'FoodBites',
      description:
        'FoodBites aim to reduce food wastage by connecting food stall owners like bakeries, restaurants or even old chang kee to consumers through an mobile application',
      tech: 'Expo.io, React, Firebase',
      urls: [
        {
          url_type: 'github',
          url_title: 'Visit Github',
          url: 'https://github.com/kohchihao/Foodies-FoodBites'
        },
        {
          url_type: 'website',
          url_title: 'Visit App',
          url: 'https://expo.io/@kohchihao/FoodBites'
        }
      ],
      backgroundColorClass: "foodbites"
    },
    {
      img: sgbusbot,
      name: 'SG BusBot',
      description:
        'A bot to retrieve bus arrival timings either based on the bus code or your current location',
      tech: 'Telegram, NodeJS, Google Cloud',
      urls: [
        {
          url_type: 'telegram',
          url_title: 'Visit Telegram',
          url: 'https://t.me/SingaporeBus_bot'
        }
      ],
      backgroundColorClass: "sgbusbot"
    },
    {
      img: sgmrt,
      name: 'SG MRT',
      description:
        'A telegram bot to retrieve MRT arrival timings based on mrt stations',
      tech: 'Telegram, NodeJS, Heroku',
      urls: [
        {
          url_type: 'telegram',
          url_title: 'Visit Telegram',
          url: 'https://t.me/sgmrt_bot'
        }
      ],
      backgroundColorClass: "sgmrt"
    },
    {
      img: push2me,
      name: 'Push2Me',
      description:
        'A telegram bot that can send you messages/images when you ping the url given to you',
      tech: 'Telegram, NodeJS, Heroku',
      urls: [
        {
          url_type: 'telegram',
          url_title: 'Visit Telegram',
          url: 'https://t.me/push2me_bot'
        }
      ],
      backgroundColorClass: "push2me"
    },
    {
      img: scoot,
      name: 'Scoot Notifier',
      description:
        'The purpose of this script is to scrap flyscoot.com to get the cheapest deals from SG to Bangkok. It uses osmosis as the base scraper and chalk to beautify the text. It also sends you a telegram notification when the cheapest deals are met',
      tech: 'Telegram, NodeJS, Heroku',
      urls: [
        {
          url_type: 'github',
          url_title: 'Visit Github',
          url: 'github.com/kohchihao/FlyScoot-scraper'
        }
      ],
      backgroundColorClass: "scoot"
    },
    {
      img: apollo,
      name: 'ApolloBot',
      description:
        'This bot will post Space Mission Apollo17 images on a daily basis',
      tech: 'Python, Heroku',
      urls: [
        {
          url_type: 'twitter',
          url_title: 'Visit Twit',
          url: 'https://twitter.com/_ApolloBot'
        },
        {
          url_type: 'github',
          url_title: 'Visit Github',
          url: 'https://github.com/kohchihao/Apollo-Twitter-Bot'
        }
      ],
      backgroundColorClass: "apollo"
    }
  ]

}