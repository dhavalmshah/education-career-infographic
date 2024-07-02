import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaRocket, FaLeaf, FaChartLine, FaBalanceScale } from 'react-icons/fa';

const HomeContainer = styled.div`
  background-color: #f0f4f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #34495e;
  font-size: 1.2rem;
  max-width: 600px;
  text-align: center;
  margin-bottom: 50px;
`;

const CareerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const CareerCard = styled(Link)`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  text-decoration: none;
  color: #2c3e50;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: ${props => props.color};
`;

const CareerTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CareerDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
`;

const careers = [
    {
        path: '/space-engineer',
        title: 'Space Engineer',
        description: 'Design the future of space exploration',
        icon: FaRocket,
        color: '#3498db'
    },
    {
        path: '/green-energy-specialist',
        title: 'Green Energy Specialist',
        description: 'Power the world sustainably',
        icon: FaLeaf,
        color: '#2ecc71'
    },
    {
        path: '/wall-street-analyst',
        title: 'Wall Street Analyst',
        description: 'Navigate the world of high finance',
        icon: FaChartLine,
        color: '#e74c3c'
    },
    {
        path: '/corporate-lawyer',
        title: 'Corporate Lawyer',
        description: 'Shape the deals that define business',
        icon: FaBalanceScale,
        color: '#f39c12'
    }
];

function HomePage() {
    return (
        <HomeContainer>
            <Title>Explore Your Future Career</Title>
            <Subtitle>
                Discover the path to your dream career. Explore detailed infographics
                and insights into various high-impact professions.
            </Subtitle>
            <CareerGrid>
                {careers.map((career, index) => (
                    <CareerCard key={index} to={career.path}>
                        <IconWrapper color={career.color}>
                            <career.icon />
                        </IconWrapper>
                        <CareerTitle>{career.title}</CareerTitle>
                        <CareerDescription>{career.description}</CareerDescription>
                    </CareerCard>
                ))}
            </CareerGrid>
        </HomeContainer>
    );
}

export default HomePage;