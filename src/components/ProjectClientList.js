import React from 'react';

import sgcheckpoint from '../../img/sgcheckpoint.png';
import sgbusbot from '../../img/sgbusbot.png';
import sgmrt from '../../img/sgmrt.png';
import push2me from '../../img/push2me.jpg';
import scoot from '../../img/scoot.png';
import apollo from '../../img/apollo.png';
import nusbuses from '../../img/nusbuses.jpg';
import anteprints from '../../img/anteprints.png';
import foodbites from '../../img/foodbites.jpg';

const project = [
  {
    img: nusbuses,
    name: 'NUS Buses',
    description: 'A realtime NUS Buses arrival app. Redesigned and redeveloped.',
    tech: 'Android, React Native, Glitch, Firebase',
    url: [
      {
        url_title: 'Android',
        url: 'https://play.google.com/store/apps/details?id=bazingaa.nusbuses'
      },
      {
        url_title: 'iOS',
        url: 'https://itunes.apple.com/us/app/nus-buses/id1333504091'
      },
    ]
  },
  {
    img: sgcheckpoint,
    name: 'SG Checkpoint',
    description: 'An android app to check the traffic flow @ singapore\'s checkpoint',
    tech: 'Android, Laravel',
    url: [
      {
        url_title: 'Visit App',
        url: 'https://play.google.com/store/apps/details?id=chihao.singaporetrafficimages'
      },
      {
        url_title: 'Visit Website',
        url: 'http://www.sgcheckpoint.com'
      },
    ]
  },
  {
    img: foodbites,
    name: 'FoodBites',
    description: 'FoodBites aim to reduce food wastage by connecting food stall owners like bakeries, restaurants or even old chang kee to consumers through an mobile application',
    tech: 'Expo.io, React, Firebase',
    url: [
      {
        url_title: 'Visit Github',
        url: 'https://github.com/kohchihao/Foodies-FoodBites'
      },
      {
        url_title: 'Visit App',
        url: 'https://expo.io/@kohchihao/FoodBites'
      },

    ]
  },
  {
    img: sgbusbot,
    name: 'SG BusBot',
    description: 'A bot to retrieve bus arrival timings either based on the bus code or your current location',
    tech: 'Telegram, NodeJS, Google Cloud',
    url: [
      {
        url_title: 'Visit Telegram',
        url: 'https://t.me/SingaporeBus_bot'
      },

    ]
  },
  {
    img: sgmrt,
    name: 'SG MRT',
    description: 'A telegram bot to retrieve MRT arrival timings based on mrt stations',
    tech: 'Telegram, NodeJS, Heroku',
    url: [
      {
        url_title: 'Visit Telegram',
        url: 'https://t.me/sgmrt_bot'
      },

    ]
  },
  {
    img: push2me,
    name: 'Push2Me',
    description: 'A telegram bot that can send you messages/images when you ping the url given to you',
    tech: 'Telegram, NodeJS, Heroku',
    url: [
      {
        url_title: 'Visit Telegram',
        url: 'https://t.me/push2me_bot'
      },

    ]
  },
  {
    img: scoot,
    name: 'Scoot Notifier',
    description: 'The purpose of this script is to scrap flyscoot.com to get the cheapest deals from SG to Bangkok. It uses osmosis as the base scraper and chalk to beautify the text. It also sends you a telegram notification when the cheapest deals are met',
    tech: 'Telegram, NodeJS, Heroku',
    url: [
      {
        url_title: 'Visit Github',
        url: 'github.com/kohchihao/FlyScoot-scraper'
      },

    ]
  },
  {
    img: apollo,
    name: 'ApolloBot',
    description: 'This bot will post Space Mission Apollo17 images on a daily basis',
    tech: 'Python, Heroku',
    url: [
      {
        url_title: 'Visit Twit',
        url: 'https://twitter.com/_ApolloBot'
      },
      {
        url_title: 'Visit Github',
        url: 'https://github.com/kohchihao/Apollo-Twitter-Bot'
      },
    ]
  },
]

const projectList = project.map((data,i) => (
  <div key={i} className="col l4 m6 s12">
    <div className="card medium sticky-action">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={data.img} alt="" />
      </div>

      <div className="card-content">
        <a target="_blank">
          <b>{data.name}</b>
        </a>
        <p className="truncate">{data.description}</p>
      </div>

      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          <b>{data.name}</b>
          <i className="material-icons right">close</i>
        </span>
        <p>{data.description}</p>
        <h6>
          <b>Tech Used</b>
        </h6>
        <p>{data.tech}</p>
      </div>

      <div className="card-action">
        {data.url.map((url,ii) => (
          <a key={ii} target="_blank" href={url.url}>
            {url.url_title}
          </a>
        ))}
      </div>
    </div>
  </div>
));

const client = [
  {
    img: anteprints,
    name: 'Anteprints',
    description: 'Create a website for AntePrints',
    what: 'Create a website for AntePrints',
    tech: 'WordPress',
    url: [
      {
        url_title: 'Visit Website',
        url: 'http://www.anteprints.com/'
      },

    ]
  },
]

const clientList = client.map((data,i) => (
  <div key={i} className="col l4 m6 s12">
    <div className="card medium sticky-action">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={data.img} alt=""/>
      </div>

      <div className="card-content">
        <a target="_blank">
          <b>{data.name}</b>
        </a>
        <p className="truncate">{data.description}</p>
      </div>

      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          <b>{data.name}</b>
          <i className="material-icons right">close</i>
        </span>
        <h6>
          <b>What did i do?</b>
        </h6>
        <p>{data.what}</p>
        <h6>
          <b>Tech Used</b>
        </h6>
        <p>{data.tech}</p>
      </div>

      <div className="card-action">
        {data.url.map((url,ii) => (
          <a key={ii} target="_blank" href={url.url}>
            {url.url_title}
          </a>
        ))}
      </div>
    </div>
  </div>
));

const ProjectClientList = () => (
  <div className="intro grey darken-4 projects" id="projects">
    <div className="container">
      <div className="row">
        <div className="col l12 m12 s12">
          <h5><b>My Projects</b></h5>
        </div>

        {projectList}

        <div className="col l12 m12 s12">
          <h5><b>My Clients</b></h5>
        </div>

        {clientList}

      </div>
    </div>
  </div>
);

//make this component available to the app
export default ProjectClientList;