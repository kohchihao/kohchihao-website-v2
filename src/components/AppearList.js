import React from 'react';

import zaobao from '../../img/zaobao.pdf';
const appear = [
  {
    title:
      'Vulcan Post - This NSF Built A Telegram Bot To Let Us Know When SMRT Fails Because "Where Got Time?"',
    url: 'https://goo.gl/4zD6Wx'
  },
  {
    title:
      'Hype & Stuff - Telegram MRT Bot: An NSF Created An App So That You Don’t Break Down When The MRT Does.',
    url: 'https://goo.gl/oiE18K'
  },
  {
    title: 'LianHe ZaoBao - 青年设计手机应用 改善大学生通勤',
    url: zaobao
  }
];

const appearList = appear.map((data,i) => (
  <div key={i}>
    <div className="card waves-light">
      <div className="card-content">
        <p style={{ fontWeight: 400 }}>{data.title}</p>
      </div>
      <div className="card-action">
        <a href={data.url}>Read more</a>
      </div>
    </div>
  </div>
));

const AppearList = () => (
  <div className="container-fluid" id="appeared">
    <div className="intro grey darken-4">
      <div className="container">
        <div className="row">
          <div className="col l12  m12 s12">
            <h3>Appeared On</h3>
            {appearList}
          </div>
        </div>
      </div>
    </div>
  </div>
);

//make this component available to the app
export default AppearList;
