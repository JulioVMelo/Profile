import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F4F6F9;
  padding: 120px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const JobItem = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  min-width: 400px;
  width: 400px;
  background-color: #ddd;
`;

export const Title = styled.div`
  padding: 20px;
  height: 180px;
  background-color: red;  
`;

export const Description = styled.div`
  padding: 20px;
`;

export const Links = styled.div`
  padding: 20px;
`;
