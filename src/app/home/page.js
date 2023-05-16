import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex justify-center mt-36">
        <div className="md:w-1/2 p-4">
          <div>
            <h1 className="text-3xl font-bold mb-5">
              Platform that has all you deserve
            </h1>
          </div>
          <div>
            <p className="mb-4 align-middle">
              Welcome to MovieMania, your ultimate destination for all things
              movies! We are passionate about providing you with the latest
              information, top trending films, and the best movie
              recommendations.
            </p>
          </div>
          <div className="mt-4">
            <Link href="/?genre=fetchTopRated">
                <button className="mr-4 bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
                  Top-Rated
                </button>  
            </Link>
            <Link href="/about">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
            </Link>
          </div>
        </div>
      </div>

      <img
        src="/vector.png"
        alt="movie image"
        className="w-full h-auto object-cover md:w-1/2"
      />
    </div>
  );
};

export default Home;
