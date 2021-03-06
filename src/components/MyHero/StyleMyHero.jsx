import styled from 'styled-components';

const StyleMyHero = styled.div`
  h1 {
    color: white;
    font-family: rubik;
    font-weight: bold;
    letter-spacing: 0.3px;
    margin-bottom: 8px;
    font-size: 1.5em;
    margin-top: -231px;
    margin-left: -90px;
  }

  .underline {
    margin-left: -53px;
    background: linear-gradient(135deg, #148ba6, 40%, white);
    width: 145px;
    height: 5px;
  }

  .Hero {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }

  .myHero {
    padding: 5px;
    border: 1px solid black;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 12%;
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

  @media screen and (max-width: 800px) {
    .Hero h1 {
      margin-top: 45px;
      margin-left: -23px;
    }
    .perso {
      width: 11vw;
    }
    .myHero {
      width: 120px;
    }
    .myHeroImg {
      width: 13vw;
      height: auto;
    }
    .underline {
      margin-left: 15px;
    }
  }
`;

export default StyleMyHero;
