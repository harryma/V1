import React from "react";
import Weather from "../../components/weather/Weather";

const Main = () => {
  return (
    <>
      <section className="md:max-w-lg">
        <h1 className="font-bold text-xl mb-5">Harry Ma</h1>
        <p>
          A creative professional with a passion to solve problems with tech.
          With over 10+ years experience, I have dedicated myself to learning
          and adapting to new technologies and skillsets that have enabled me to
          maintain roles in design, development &amp; consulting.
        </p>
        <p>
          In recent years, I have focused my attention within front-end
          development, pairing that with my life-long appreciation for great
          design to craft memorable and accessible user experiences.
        </p>
        <p>
          In my spare time, I enjoy doing photography, creating&nbsp;
          <a
            className="hrefLink"
            href="https://ephtracy.github.io"
            target="_blank"
            rel="noreferrer"
          >
            voxel art
          </a>{" "}
          and learning&nbsp;
          <a
            className="hrefLink"
            href="https://www.blender.org"
            target="_blank"
            rel="noreferrer"
          >
            Blender 3D
          </a>
          .
        </p>
        <p>
          Based in Vancouver BC. ( <Weather /> )
        </p>
      </section>
    </>
  );
};

export default Main;
