import React, { useEffect, useState } from "react";
import {
  MainContainer,
  ContentContainer,
  ImageContainer,
  Image,
  DetailsContainer,
  DirectedBy,
  Description,
} from "./styles";
import { useParams } from "react-router-dom";
import { Header } from "components";

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:9000/movies/${id}`);
      if (response.status === 200) {
        const movie = await response.json();
        setMovie(movie);
      }
      setLoading(false);
    })();
  }, [id]);

  return (
    <MainContainer>
      <Header
        titleContent={
          !loading && movie ? (
            <>
              <div style={{ opacity: 0.4 }}>{movie.original_title}</div>
              <div>{movie.title}</div>
            </>
          ) : (
            !loading && !movie && <div>Movie Not Found</div>
          )
        }
      />
      <ContentContainer>
        {loading ? (
          <div>Loading</div>
        ) : (
          movie && (
            <>
              <ImageContainer>
                <Image src={movie.cover}></Image>
              </ImageContainer>
              <DetailsContainer>
                <DirectedBy>
                  Directed by <strong>{movie.director}</strong> | Produced by{" "}
                  <strong>{movie.producer}</strong>
                </DirectedBy>
                <Description>{movie.description}</Description>
                <div>
                  Release Date: <strong>{movie.release_date}</strong>
                </div>
                <div>
                  Run Time: <strong>{movie.running_time} mins</strong>
                </div>
                <div>
                  Score: <strong>{movie.rt_score}</strong>
                </div>
              </DetailsContainer>
            </>
          )
        )}
      </ContentContainer>
    </MainContainer>
  );
};

export default Movie;
