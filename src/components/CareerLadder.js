import React from 'react';
import styled from 'styled-components';

const LadderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
`;

const LadderStep = styled.div`
  width: 200px;
  padding: 15px;
  margin: 10px 0;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const careerSteps = [
    'Entry-Level Engineer',
    'Senior Engineer',
    'Lead Engineer',
    'Project Manager',
    'Director of Engineering'
];

function CareerLadder({ data = careerSteps }) {
    return (
        <LadderContainer>
            <Title>Career Progression Ladder</Title>
            {data.reverse().map((step, index) => (
                <LadderStep key={index}>{step}</LadderStep>
            ))}
        </LadderContainer>
    );
}

export default CareerLadder;