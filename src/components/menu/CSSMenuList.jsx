import styled from 'styled-components';

const CSSMenuList = styled.div`
  .LogoUSG {
    width: 200px;
    height: 130px;
    position: relative;
    left: 150px;
    top: 20px;
  }

  header {
    position: relative;
    top: 100px;
    left: 80px;
    background: linear-gradient(135deg, #148ba6, 40%, #0c4459);
    padding-top: 9px;
    width: 110px;
    height: auto;
    border-radius: 30px;
    box-shadow: 0px 0px 19px 1px rgba(12, 53, 89, 0.91);
  }

  .LogoNavBar {
    width: 75px;
    height: 50px;
    padding-top: 10%;
    opacity: 1;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }

  .LogoNavBar:hover {
    opacity: 0.5;
  }

  li {
    padding-bottom: 15px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
  }

  p,
  h1,
  h2 {
    display: flex;
    justify-content: center;
    font-family: rubik;
  }

  .Welcome {
    color: white;
    font-size: 50px;
    text-shadow: 2px 4px 3px #474646;
  }

  .fightDisable {
    opacity: 50%;
  }

  /* Responsive Media Queries */

  @media screen and (max-width: 800px) {
    header {
      position: absolute;
      top: 30px;
      left: 275px;
      right: auto;
      height: auto;
      width: auto;
      padding-right: 20px;
    }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
    .LogoUSG {
      width: 140px;
      height: 90px;
      position: relative;
      left: 30px;
      top: 20px;
    }

    .Welcome {
      margin-top: 200px;
      text-align: center;
      font-size: 40px;
    }
  }

  @media screen and (max-width: 600px) {
    .LogoUSG {
      display: none;
    }
  }
`;

export default CSSMenuList;
