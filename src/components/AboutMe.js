import React from 'react';

export const AboutMe = () => {

  return (

    <div className='about-container'>

      <section className='about-hero'>

        <h1>
          Leandro Alvarez
        </h1>

        <h2>
          Web Developer
        </h2>

        <p>
          React | Angular | SAP Business One
        </p>

      </section>

      <section className='about-section'>

        <h2>About Me</h2>

        <p>

          Web Developer with expertise in
          React, Angular, JavaScript and
          modern interface development.

        </p>

      </section>

      <section className='about-section'>

        <h2>Technologies</h2>

        <div className='tech-grid'>

          <div>React</div>
          <div>Angular</div>
          <div>JavaScript</div>
          <div>HTML/CSS</div>
          <div>SQL</div>
          <div>Git</div>
          <div>SAP HANA</div>
          <div>REST APIs</div>

        </div>

      </section>

      <section className='about-section'>

        <h2>Experience</h2>

        <div className='experience-card'>

          <h3>
            Middleware Developer
          </h3>

          <p>
            One Solutions S.A
          </p>

          <span>
            2024 - 2026
          </span>

        </div>

        <div className='experience-card'>

          <h3>
            Customer Experience
          </h3>

          <p>
            Contabilium
          </p>

          <span>
            2023 - 2024
          </span>

        </div>

      </section>

      <section className='about-section'>

        <h2>Education</h2>

        <div className='experience-card'>

          <h3>
            Computer Engineering
          </h3>

          <p>
            Universidad Nacional
            de La Matanza
          </p>

        </div>

      </section>

    </div>

  );
};