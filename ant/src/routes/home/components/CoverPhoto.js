import React from 'react';

const CoverPhoto = () => (
  <section className="cover">
    <div className="cover-bg-img d-none d-md-block" style={{backgroundImage: 'url(assets/images-demo/covers/leone-venter-559377-cut.jpg)'}}></div>
  </section>
)

const Section = () => {
  return(
    <article className="article">
      <CoverPhoto />
    </article>
  );
}

export default Section;