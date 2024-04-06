import React from 'react';

function About() {
  return (
    <div id="about" className="section">
      <div className='about-con'>
        <div className='about-con-1'>
          <p className='about-para-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula eleifend nibh, nec mattis est gravida eu. Cras nec tellus ac quam vestibulum consequat eget a nulla. Sed nec arcu id orci luctus convallis. Nulla facilisi. Curabitur malesuada nisi et fermentum sodales. Integer dapibus lorem non odio eleifend, eu laoreet dui pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Sed fermentum tellus in libero mattis, a ultrices mauris accumsan. Sed id lectus vel mauris fermentum lacinia. Cras in tellus vel urna fermentum volutpat. Vivamus dictum nisi id risus egestas, id luctus lacus vulputate. Integer luctus risus eu odio accumsan, id fermentum ligula suscipit. Mauris nec augue et lorem rutrum consequat ac in est. Nulla facilisi. Morbi tincidunt mi eu nisl tempor, at suscipit lectus sodales.</p>
        </div>
        <div className='about-con-2'>
          <div className='about-con-2-1'>
          <img src='Assets/karmasoc.jpeg' alt="brand" className="logo-img" />

          </div>
          <div className='about-con-2-1'>
          <img src='Assets/wisdom.jpeg' alt="brand" className="logo-img" />

          </div>
          <div className='about-con-2-1'>
          <img src='Assets/health.jpeg' alt="brand" className="logo-img" />

          </div>
        </div>
        <div className='about-con-3'>
          <div className='about-con-3-1'>
          <h1 className='about-heading'>Decades of experience in fostering Billion-dollar enterprises
          </h1>
          <p className='about-para'>
          From concept to realization, were more than just the experts
in AI, cloud and mobile solutions.We specialize in developing
tailored software solutions to the businesses of all sizes and
stages to turn their AI aspirations into concrete
achievements.
          </p>
          </div>
          <div className='about-con-3-2'>
          <img src='Assets/logo.svg' alt="brand" className="logo-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
