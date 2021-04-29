import styled from 'styled-components';

const StyleBattle = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-family: rubik;
    font-weight: semibold;
    font-size: 1.5em;
  }
  .myHeroToFight,
  .CpuHero {
    padding: 5px;
    border: 1px solid black;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15%;
    background-color: #e6e6e6;
  }
  h2 {
    font-family: rubik;
    font-weight: medium;
    font-size: 1.2em;
    margin: 1%;
  }
  .myHeroImg {
    width: 10vw;
    height: auto;
  }
  .statsHero {
    display: flex;
    justify-content: center;
    margin: 2%;
  }
  .statsHero img {
    width: 10%;
    height: auto;
  }
  .statsHero p {
    font-family: rubik;
  }

  .buttonFight {
    height: 50%;
    margin: 0 5% 0 5%;
  }
`;

export default StyleBattle;