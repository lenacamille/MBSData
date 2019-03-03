import React from 'react';
import QueueAnim from 'rc-queue-anim';

const Cover = () => (
  <section className="cover">
    <div className="cover-bg-img d-none d-md-block" style={{backgroundImage: 'url(assets/esther-jiao-640129-unsplash.jpg)'}}></div>
    <div className="container-fluid container-mw-xl">
      <div className="row">
        <div className="col-md-6 col-lg-5">
          <p className="lead">Mortgan</p>
        </div>
      </div>
    </div>
  </section>
);

const Landing = () => {
  return(
    <div>
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1"> <Cover /> </div>
      </QueueAnim>
    </div>
  )
}

export default Landing;
