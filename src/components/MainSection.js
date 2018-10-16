import React from 'react';

import resume from '../../img/resume.pdf';

const MainSection = () => (
  <div className="container-fluid">
    <div className="intro blue-blue">
      <div className="container">
        <div className="row">
          <div className="col l12  m12 s12">
            <br />
            <h3>Hello! Welcome to my site </h3>
            <p className="lead">
              I like to code and develop mobile apps as well as chatbots during
              my weekends. Coding gives me the ability to create anything that i
              can think of. You are limited only by your own imagination. <br />
              <br />Currently I'm studying in NUS Computer Science Year 1! Feel
              free to chat me up about anything technology.
            </p>

            <p>If you are keen to chat you can ping me at, Telegram or Email</p>

            <a
              href="https://t.me/kohchihao"
              className="waves-effect waves-light btn-large blue darken-1"
            >
              Telegram
            </a>
            <a
              href="mailto:kohchihao@gmail.com"
              className="email waves-effect waves-light btn-large pink darken-1"
            >
              Email
            </a>
            <a
              href={resume}
              className="resume waves-effect waves-light btn-large cyan darken-1 "
            >
              Resume
            </a>

            <br />

            <a
              href="https://www.linkedin.com/in/kohchihao/"
              className="fab fa-linkedin social"
              aria-hidden="true"
            />
            <a
              href="https://www.instagram.com/sudodotdev/"
              className="fab fa-instagram social"
              aria-hidden="true"
            />
            <a
              href="https://github.com/kohchihao"
              className="fab fa-github social"
              aria-hidden="true"
            />
            <a
              href="https://medium.com/@kohchihao"
              className="fab fa-medium social"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

//make this component available to the app
export default MainSection;
