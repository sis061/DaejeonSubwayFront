import styled from "styled-components";


export const Main = styled.main`
  background-color: #007448;
  max-width: 480px;
  width: 90%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 4rem;
  // margin-bottom: 1rem;
  display: flex;
  flex-flow: column;
  position: relative;

  .main-bg {
    position: absolute;
    width: 30%;
    height: auto;
    top: -1.5%;
    left: 57.5%;
    z-index: 0;
  }

  h1 {
    margin-top: 3rem;
    z-index: 1;
  }

  .station-list-wrap {
    margin-top: 2rem;
    margin-bottom: 3rem;
    display: flex;
    flex-flow: wrap;
    justify-content: flex-start;
  }

  .info-text {
    width: 100%;
    margin-left: 50%;
    transform: translate(-50%, 0);
    bottom: 0;
    font-size: 0.7rem;
    text-align: center;
    opacity: 0.7;
  }
`;

export const StationList = styled.div`
  background-color: #00834c;
  width: 21%;
  height: 5.5rem;
  margin: 2%;
  text-align: center;
  display: flex;
  border-radius: 10%;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: 0.2s ease-in-out;
  }

  .list-item {
    font-size: 1.2em;
    font-weight: 600;
    width: 100%;
    height: 100%;
    flex-shrink: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list-item-inner {
    padding: 7%;
  }
`;
