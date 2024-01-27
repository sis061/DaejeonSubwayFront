import styled from "styled-components";

export const ArrivalInfo = styled.div`
  max-width: 480px;
  width: 90%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 4rem;
  display: flex;
  flex-flow: column;
  position: relative;

  .go-to-main {
    position: absolute;
    top: -5%;
    left: 1%;
    color: #fff;
    opacity:0.5;
    transition:0.3s;
      &:hover {
        opacity: 1;
    }
      &:hover .go-to-main-text {
        opacity: 1;
    }
  }

  .go-to-main-text{
    opacity:0;
    position:absolute;
    top:55%;
    left:120%;
    width: 6rem;
    height: 100%;
    font-size:1rem;
  }

  h1 {
    margin-top: 8rem;
    margin-bottom: 9rem;
    font-size: 4rem;
  }

  .station-drct-wrap {
    position: absolute;
    top: 5.5%;
    width: 100%;
    height: auto;

    display: flex;
    justify-content: space-between;

    font-size: 1.7rem;
    font-weight: 600;
  }

  .prevArrivalInfo,
  .nextArrivalInfo {
    opacity: 0.5;
    transition:0.3s;
  }

  .prevArrivalInfo {
    &:hover {
      opacity: 1;
    }
  }

  .nextArrivalInfo {
    margin-top: 52.5%;
    &:hover {
      opacity: 1;
    }
  }

  .hidden{
    display:none;
  }

  .info-inner-wrap {
    border-top: 2px solid rgba(255, 255, 255, 0.7);
    padding-top: 2rem;
    margin-bottom: 3rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    text-align: center;

    h3 {
      font-size: 3rem;
      width: 50%;
    }

    p {
      font-size: 3rem;
    }

    span {
      font-size: 8rem;
      font-weight: 600;
      width: 50%;
    }
  }

  .info-text {
    position:fixed;
    width: 100%;
    margin-left: 45%;
    transform: translate(-50%, 0);
    bottom: 0;
    font-size: 0.7rem;
    text-align: center;
    opacity: 0.7;
  }
`;
