import React from 'react';
import QueueAnim from 'rc-queue-anim';
import MainChart from './MainChart';

const CoverPhoto = () => {
  return(
    <section className="cover cover-color-reverse text-center py-8 no-breadcrumb">
      <div className="cover-bg-img d-none d-md-block" style={{backgroundImage: 'url(assets/esther-jiao-640129-unsplash.jpg)'}}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-lg-6 mx-auto">
            <h1><span className="bold">Mortgan</span></h1>
          </div>
        </div>
      </div>
    </section>
  );
}

const Home = () => {
  return(
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"> <CoverPhoto /> </div>
      <div key="2"> <MainChart /> </div>
    </QueueAnim>
  );
}

export default Home;