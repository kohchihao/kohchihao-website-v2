import React, { Component } from 'react';

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

const TechList = () => (
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
);

//make this component available to the app
export default TechList;
