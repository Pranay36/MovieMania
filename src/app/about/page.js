import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <img
        src="/vector1.png"
        alt="movie image"
        className="w-full h-auto object-cover md:w-1/2"
      />
      <div className="flex justify-center mt-30">
        <div className="md:w-1/2 p-4">
          <div>
            <h1 className="text-3xl font-bold mb-5">About Us</h1>
          </div>
          <div>
            <p className="mb-4">
              Our dedicated team of movie enthusiasts works tirelessly to curate
              a comprehensive collection of movies, including all-time classics
              and the hottest releases. Whether you are a casual viewer or a
              die-hard cinephile, MovieMania has something for everyone.
            </p>
            <p className="mb-4">
              At MovieMania, we believe that movies have the power to inspire,
              entertain, and connect people from all walks of life. Our mission
              is to share our love for cinema by providing a platform that
              brings together movie lovers and serves as a valuable resource for
              discovering new films, exploring different genres, and staying
              up-to-date with the latest industry news.
            </p>
            <p>
              Join us on this cinematic journey and let MovieMania be your go-to
              source for all the movies you need to know. Sit back, relax, and
              enjoy the magic of the silver screen!
            </p>
          </div>
          <div className="mt-4">
            <button className="mr-4 bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
