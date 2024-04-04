import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <div className="section">
        <div className="text">
          <h2>Welcome to Iron Gate Studios</h2>
          <p>Where moments become timeless memories.</p>
        </div>
        <div className="image">
          <img src={require('../../src/asserts/welcome.jpeg')} alt="Welcome to Iron Gate Studios" />
        </div>
      </div>

      <div className="section">
        <div className="image">
          <img src={require('../../src/asserts/Sanctuary.jpeg')} alt="Creative Sanctuary" />
        </div>
        <div className="text">
          <h3>In the Heart of Creativity</h3>
          <p>
            In the heart of our creative sanctuary, a passionate artist, both
            with a camera and through the lens of a filmmaker, breathes life
            into the ordinary, transforming it into the extraordinary.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="text">
          <h3>Meet Our Visionary</h3>
          <p>
            Meet our visionary, a master of light and shadow, a storyteller
            capturing the essence of every scene. With a click of the shutter
            or the roll of the film, they freeze time, immortalizing emotions,
            and preserving cherished moments.
          </p>
        </div>
        <div className="image">
          <img src={require('../../src/asserts/vision.jpeg')} alt="Visionary Artist" />
        </div>
      </div>

      <div className="section ">
        <div className="image">
          <img src={require('../../src/asserts/ourworld.jpeg')} alt="Step into Our World" />
        </div>
        <div className="text">
          <h3>Step into Our World</h3>
          <p>
            Whether it's the tender embrace of a newlywed couple, the laughter
            of children dancing in the sun, or the quiet beauty of a solitary
            landscape, our photographer and filmmaker invite you to step into
            their world, where every image tells a story, and every story is a
            work of art.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
