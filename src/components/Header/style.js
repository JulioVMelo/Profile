import styled from 'styled-components';

export const HeaderUI = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  position: relative;
  color: #fff;
  overflow: hidden;
  video {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    /* opacity: 1; */
  }
`;

export const Info = styled.div`
  z-index: 1;
  padding: 200px 70px;
  width: 800px;
  flex-shrink:0;

  h1 {
    background-color: #fff;
    font-size: 80px;
    color: #000;
    padding: 0px 20px;
    width: 100%;
    margin-bottom: 11px;
  }
  
  span {
    background-color: #fff;
    font-size: 40px;
    padding: 5px 20px;
    color: #000;    

  }
  
  ul {
    margin-top: 20px;
    
    li {
      display: inline;
      background-color: #fff;
      color: #000;
      margin-right: 10px;
      padding: 5px 15px;
    }  
  }

`;

export const SocialLinks = styled.div`
  z-index: 1;
  padding: 200px 70px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  ul li{
    margin-bottom: 20px;
    img {
      width: 100px;
      transition: all .7s;
      &:hover {
        transform: rotate(360deg);
      }
    }   
  }
`;
