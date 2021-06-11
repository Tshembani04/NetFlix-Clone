import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import requests from "./requests";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/*NavBar at the top
            Banner
            Bunch of different rows*/}
      <Nav />
      <Banner />

      {/*Props allows us to customize one component from another*/}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}isLargeRow/>
      <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title="Action Movies"fetchUrl={requests.fetchActionMovies} isLargeRow/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow />
    </div>
  );
}

export default HomeScreen;
