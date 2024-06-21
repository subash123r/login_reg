
import React from 'react';
import styled from 'styled-components';
import houseImage from './assets/House.jpg'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';
const HeaderContainer = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 40px;
`;

const ImageContainer = styled.div`
  margin-bottom: 40px;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Header = () => {
  const Navigate = useNavigate()
  return (
    <HeaderContainer>
      <Title>WHY US</Title>
      <Subtitle>
      Our professional and efficient team provides <br/>
      impeccable service, making life a little easier.
      </Subtitle>
      <ImageContainer>
        <Image src={houseImage} alt="Cleaning Illustration" />
      </ImageContainer>
      <Button  onClick={()=>Navigate("/QuoteForm")}>GET QUOTE</Button>
    </HeaderContainer>
  );
};

export default Header;
