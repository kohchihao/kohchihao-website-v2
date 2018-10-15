import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/Footer/index.js'

import resume from '../../img/resume.pdf';
import sgcheckpoint from '../../img/sgcheckpoint.png';
import sgbusbot from '../../img/sgbusbot.png';
import sgmrt from '../../img/sgmrt.png';
import push2me from '../../img/push2me.jpg';
import scoot from '../../img/scoot.png';
import apollo from '../../img/apollo.png';
import nusbuses from '../../img/nusbuses.jpg';
import anteprints from '../../img/anteprints.png';
import zaobao from '../../img/zaobao.pdf';


const tech = [
  {
    type: 'Android',
    name: 'devicon-android-plain colored'
  },
  {
    type: 'React-Native',
    name: 'devicon-react-original-wordmark colored'
  },
  {
    type: 'NodeJS',
    name: 'devicon-nodejs-plain colored'
  },
  {
    type: 'PHP',
    name: 'devicon-php-plain colored'
  },
  {
    type: 'Python',
    name: 'devicon-python-plain colored'
  },
  {
    type: 'Google Cloud',
    name: 'devicon-google-plain colored'
  },
  {
    type: 'MySQL',
    name: 'devicon-mysql-plain colored'
  },
  {
    type: 'Laravel',
    name: 'devicon-laravel-plain colored'
  },
  {
    type: 'WordPress',
    name: 'devicon-wordpress-plain colored'
  },
  {
    type: 'PhotoShop',
    name: 'devicon-photoshop-plain colored'
  },
  {
    type: 'Illustrator',
    name: 'devicon-illustrator-plain colored'
  },

]
const techList = tech.map((data) =>
  <button className="tech btn-large tooltipped white" data-tooltip={data.type}><i className={data.name}></i></button>
);

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
    img: sgbusbot,
    name: 'SG BusBot',
    description: 'A bot to retrieve bus arrival timings either based on the bus code or your current location',
    tech: 'elegram, NodeJS, Google Cloud',
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

const projectList = project.map((data) =>
  <div className="col l4 m6 s12">
    <div className="card medium sticky-action">

      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={data.img}></img>
      </div>

      <div className="card-content">
        <a target="_blank"><b>{data.name}</b></a>
        <p className="truncate">{data.description}</p>
      </div>

      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4"><b>{data.name}</b><i className="material-icons right">close</i></span>
        <p>{data.description}</p>
        <h6><b>Tech Used</b></h6>
        <p>{data.tech}</p>
      </div>

      <div className="card-action">
        {data.url.map((url) =>
          <a target="_blank" href={url.url}>{url.url_title}</a>
        )}

      </div>
    </div>
  </div>
);

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

const clientList = client.map((data) =>
  <div className="col l4 m6 s12">
    <div className="card medium sticky-action">

      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={data.img}></img>
      </div>

      <div className="card-content">
        <a target="_blank" ><b>{data.name}</b></a>
        <p className="truncate">{data.description}</p>
      </div>

      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4"><b>{data.name}</b><i className="material-icons right">close</i></span>
        <h6><b>What did i do?</b></h6>
        <p>{data.what}</p>
        <h6><b>Tech Used</b></h6>
        <p>{data.tech}</p>
      </div>

      <div className="card-action">
        {data.url.map((url) =>
          <a target="_blank" href={url.url}>{url.url_title}</a>
        )}

      </div>
    </div>
  </div>
)

const appear = [
  {
    title: 'Vulcan Post - This NSF Built A Telegram Bot To Let Us Know When SMRT Fails Because "Where Got Time?"',
    url: 'https://goo.gl/4zD6Wx'
  },
  {
    title: 'Hype & Stuff - Telegram MRT Bot: An NSF Created An App So That You Don’t Break Down When The MRT Does.',
    url : 'https://goo.gl/oiE18K'
  },
  {
    title: 'LianHe ZaoBao - 青年设计手机应用 改善大学生通勤',
    url: zaobao
  }
]

const appearList = appear.map((data) => 
  <div>
    {/* <br></br>
    <p className="lead">{data.title} <a href={data.url}>LINK</a></p> */}
    <div className="card waves-light">
      <div className="card-content">
        <p style={{fontWeight: 400}}>{data.title}</p>
      </div>
      <div className="card-action">
        <a href={data.url}>Read more</a>
      </div>
    </div>
  </div>
)

const IndexPage = () => (
  <div>
    <div className="container-fluid">
      <div className="intro blue-blue">
        <div className="container">
          <div className="row">
            <div className="col l12  m12 s12">

              <br></br>
              <h3>Hello! Welcome to my site </h3>
              <p className="lead">I like to code and develop mobile apps as well as chatbots during my weekends. Coding gives me the ability to create anything that i can think of. You are limited only by your own imagination. <br></br><br></br>Currently I'm studying in NUS Computer Science Year 1! Feel free to chat me up about anything technology.</p>

              <p>
                If you are keen to chat you can ping me at, Telegram or Email
              </p>

              <a href="https://t.me/kohchihao" className="waves-effect waves-light btn-large blue darken-1">Telegram</a>
              <a href="mailto:kohchihao@gmail.com" className="email waves-effect waves-light btn-large pink darken-1">Email</a>
              <a href={resume} className="resume waves-effect waves-light btn-large cyan darken-1 " >Resume</a>

              <br></br>

              <a href="https://www.linkedin.com/in/kohchihao/" className="fab fa-linkedin social" aria-hidden="true"></a>
              <a href="https://www.instagram.com/sudodotdev/" className="fab fa-instagram social" aria-hidden="true"></a>
              <a href="https://github.com/kohchihao" className="fab fa-github social" aria-hidden="true"></a>
              <a href="https://medium.com/@kohchihao" className="fab fa-medium social" aria-hidden="true"></a>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid" id="appeared">
      <div className="intro grey darken-4">
        <div className="container">
          <div className="row">
            <div className="col l12  m12 s12">

              <h3>Appeared On</h3>
              
             
              {appearList}
              {/* <br></br>
              <p className="lead">Vulcan Post - This NSF Built A Telegram Bot To Let Us Know
              When SMRT Fails Because "Where Got Time? <a href="https://goo.gl/4zD6Wx">https://goo.gl/4zD6Wx</a></p>

              <br></br>
              <p className="lead">Hype & Stuff - Tel egram MRT Bot: An NSF Created An App So That You Don’t Break Down When The MRT Does. <a href="https://goo.gl/oiE18K">https://goo.gl/oiE18K</a></p> */}
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="intro blue-blue" id="technology">
      <div className="container">
        <div className="row">
          <div className="col l12  m12 s12">
            <h3>Technologies i use before</h3>

            {techList}

          </div>
        </div>
      </div>
    </div>

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


    <Footer/>
  </div>

)

export default IndexPage
