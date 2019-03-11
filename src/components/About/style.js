import styled from 'styled-components';

export const AboutUI = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 100px;
  padding: 0px 70px 0px 70px;
  margin-bottom: 100px;
`;

export const Text = styled.div`
  width: 50%;
  padding: 0 0px;
  
  h2 {
    font-size: 40px;
  }
  
  span {
    content: '';
    width: 50px;
    height: 10px;
    background-color: #000;
    display: block;
  }
  
  p {
    margin-top: 30px;
    text-align: justify;
  }
`;

export const Placeholder = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-items: center;
  
  img {
    width: auto;
    margin: 0 auto;
    height: 400px;
    filter: grayscale();
    text-align:center;
    border-radius: 0px 100px 0px 100px;
  } 
`;
