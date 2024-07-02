import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBriefcase, FaRocket, FaLeaf, FaChartLine, FaBalanceScale, FaRobot, FaDna, FaUserMd, FaMicrochip, FaSpaceShuttle } from 'react-icons/fa';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  color: #7f8c8d;
  font-size: 1.2rem;
`;

const CareerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const CareerCard = styled(Link)`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
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
  margin-bottom: 1rem;
  color: #3498db;
`;

const CareerTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

const careers = [
  { path: 'space-engineer', title: 'Space Engineer', icon: FaSpaceShuttle },
  { path: 'green-energy-specialist', title: 'Green Energy Specialist', icon: FaLeaf },
  { path: 'wall-street-analyst', title: 'Wall Street Analyst', icon: FaChartLine },
  { path: 'corporate-lawyer', title: 'Corporate Lawyer (M&A Specialist)', icon: FaBalanceScale },
  { path: 'ai-engineer', title: 'AI Engineer', icon: FaRobot },
  { path: 'data-privacy-officer', title: 'Data Privacy Officer', icon: FaBriefcase },
  { path: 'genetic-counselor', title: 'Genetic Counselor', icon: FaDna },
  { path: 'robotics-surgeon', title: 'Robotics Surgeon', icon: FaUserMd },
  { path: 'vertical-farming-specialist', title: 'Vertical Farming Specialist', icon: FaLeaf },
  { path: 'quantum-computing-researcher', title: 'Quantum Computing Researcher', icon: FaMicrochip },
  { path: 'space-tourism-coordinator', title: 'Space Tourism Coordinator', icon: FaRocket },
];

const HomePage = () => {
  return (
    <PageContainer>
      <Header>
        <Title>Explore Future Careers</Title>
        <Subtitle>Discover detailed information about exciting career paths in emerging fields</Subtitle>
      </Header>
      <CareerGrid>
        {careers.map((career) => (
          <CareerCard key={career.path} to={`/${career.path}`}>
            <IconWrapper>
              <career.icon />
            </IconWrapper>
            <CareerTitle>{career.title}</CareerTitle>
          </CareerCard>
        ))}
      </CareerGrid>
    </PageContainer>
  );
};

export default HomePage;