import React from "react";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import NavbarItem from './../../../components/NavbarItem';
const MoviePage = async ({ params }) => {
  const movieId = params.id;
  //get movie
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.API_KEY}`
  );
  const credit = await data.json();


  const cst = credit.cast;
  const ans = [];

    for (let i = 0; i < 10; i++) {
      ans[i] = cst[i].name;
    }
 const ArrayPage = () => {
   const output = ans.join(", ");

   return (
     <div>
       <p>{output}</p>
     </div>
   );
 };
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-5xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="movie image"
          className="rounded-lg"
          // placeholder="blur"
          // blurDataURL=""
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <div className="p-2">
          <h1 className="font-bold text-lg mb-3">{movie.title || movie.name}</h1>
          <p className="mb-3 text-lg">
            <span className="font-semibold mr-1">Overivew : </span>
            {movie.overview}
          </p>
          <p className=" p-2 ">
            <span className="font-semibold mr-1">Released Date : </span>
            {movie.first_air_date || movie.release_date}
          </p>
          <p className="flex items-center p-2 ">
            <span className="font-semibold mr-1">Rating : </span>
            <AiFillHeart className="text-red-500 ml-3 mr-1" />{" "}
            {movie.vote_count}{" "}
          </p>
          <p className="flex items-center p-2 ">
            <span className="font-semibold mr-1">budget : </span>
            {movie.budget}
          </p>
       
        </div>
      </div>
      <div className="p-4 md:pt-8 flex md:flex-row items-center content-center max-w-5xl mx-auto md:space-x-6">
        <div className="font-bold">Cast</div>
        {/* <div className="p-2">{ans}</div> */}
        <ArrayPage />
      </div>
    </div>
  );
};

export default MoviePage;
