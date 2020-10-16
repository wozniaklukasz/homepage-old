import React from 'react';

import Layout from '../components/Layout';

import lw from '../assets/images/lw.jpg';
import Social from "../components/Social";
import Timeline from "../components/Timeline";

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h1>Łukasz Woźniak <span>| Software Developer</span></h1>
        <div>JavaScript | TypeScript | React | Redux | Node</div>
        <div><Social/></div>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <div className="image">
            <img src={lw} alt=""/>
          </div>
          <div className="content">
            <h2 className="major">O mnie</h2>
            <p>
              Programowaniem zawodowo zajmuję się od lipca 2014 roku. Duży wpływ na wybór technologii miały studia na
              Politechnice Wrocławskiej. Projekt inżynierski wykonany w .NET tworzyłem będąc równolegle na stażu jako .NET
              Developer. Później nastąpiło stopniowe odejście w stronę Front-Endu i JavaScript. Obecnie piszę w stacku React & Redux
              i w tych technologiach mam największe doświadczenie. Poszerzam również swoją wiedzę o NodeJS. Posiadam pojęcie o
              działaniu całego stosu technologicznego aplikacji (od bazy danych przez back-end po front-end) oraz o
              automatyzacji pracy (CI/CD, Docker).
            </p>
            <p>
              Prywatnie lubię jeździć na snowboardzie i żeglować.
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <div className="content">
            <h2 className="major">Umiejętności</h2>
            <div className="row">
              <div className="col-12-small col-6-medium col-4">
                <h3>Front-end</h3>
                <p>
                  React | Redux | SCSS | CSS | HTML
                </p>
              </div>
                <div className="col-12-small col-6-medium col-4">
                <h3>Back-end</h3>
                <p>
                  Node | Express | GraphQL | REST | Postgres
                </p>
              </div>
              <div className="col-12-small col-6-medium col-4">
                <h3>Języki programowania</h3>
                <p>
                  JavaScript | TypeScript
                </p>
              </div>
              <div className="col-12-small col-6-medium col-4">
              <h3>Narzędzia / inne</h3>
                <p>
                  GIT | WebStorm | Docker | JIRA
                </p>
              </div>
              <div className="col-12-small col-6-medium col-4">
              <h3>Języki obce</h3>
                <p>
                  Polski | Angielski
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<section id="three" className="wrapper spotlight style3">*/}
      {/*  <div className="inner">*/}
      {/*    <div className="content">*/}
      {/*      <h2 className="major">Doświadczenie</h2>*/}
      {/*      <Timeline />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/*<section id="four" className="wrapper alt style1">*/}
      {/*  <div className="inner">*/}
      {/*    <div className="content">*/}
      {/*      <h2 className="major">Nullam dignissim</h2>*/}
      {/*      <p>*/}
      {/*        Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras*/}
      {/*        turpis ante, nullam sit amet turpis non, sollicitudin posuere*/}
      {/*        urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim*/}
      {/*        dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla*/}
      {/*        cursus.*/}
      {/*      </p>*/}
      {/*      <a href="/#" className="special">*/}
      {/*        Learn more*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </section>
  </Layout>
);

export default IndexPage;
