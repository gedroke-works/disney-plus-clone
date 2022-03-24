import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import db from "../firebase";

function Detail() {
  // get the ID
  const { id } = useParams();

  // declare the state variable
  const [movie, setMovie] = useState();

  useEffect(() => {
    // get a reference of a document by id
    const docRef = doc(db, "movies", id);

    // read the doc reference and then execute a function
    getDoc(docRef)
      .then((doc) => {
        if (doc.exists) {
          // save the movie data
          console.log("Movie is about to be saved.");
          setMovie(doc.data());
          console.log("Movie data has been saved in state.");
        } else {
          // redirect to home page
          console.log("Failure... redirection to Home.");
        }
      })
      .catch((err) => {
        console.log("Catching errors: " + err.message);
      });
  }, []);
  console.log("Movie is: ", movie);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.imgBackground} alt="" />
          </Background>
          <Wrap>
            <ImageTitle>
              <img src={movie.imgLogo} alt="" />
            </ImageTitle>
            <Controls>
              <PlayButton>
                <img src="/images/play-icon-black.png" alt="" />
                <span>PLAY</span>
              </PlayButton>
              <TrailerButton>
                <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>
              </TrailerButton>
              <AddButton>
                <span>+</span>
              </AddButton>
              <GroupWatchButton>
                <img src="/images/group-icon.png" alt="" />
              </GroupWatchButton>
            </Controls>
            <Subtitle>{movie.subtitle}</Subtitle>
            <Description>{movie.desc} </Description>
          </Wrap>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.7;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Wrap = styled.div`
  position: absolute;
  top: 5%;
  left: 2rem;
`;
const ImageTitle = styled.div`
    img {
        width: 50%;
        height: 100%
        object-fit: contain;
    }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const PlayButton = styled.div`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 16px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgba(249, 249, 249, 0.6);
  color: black;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgba(198, 198, 198, 0.9);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.div`
  width: 44px;
  height: 44px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 32px;
    color: white;
    padding-bottom: 7px;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;
const Subtitle = styled.div`
  margin-top: 26px;
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
`;
const Description = styled.div`
  width: 75%;
  margin-top: 16px;
  line-height: 1.4;
  font-size: 18px;
  color: rgb(249, 249, 249);
`;
