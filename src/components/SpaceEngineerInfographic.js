import React from 'react';
import styled from 'styled-components';
import Timeline from './Timeline';
import EducationRoadmap from './EducationRoadmap';
import UniversityComparison from './UniversityComparison';
import SkillsWheel from './SkillsWheel';
import CareerLadder from './CareerLadder';
import IndustryConnections from './IndustryConnections';
import CourseBubbleChart from './CourseBubbleChart';
import SuccessFactorsPyramid from './SuccessFactorsPyramid';

const InfographicContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

function SpaceEngineerInfographic() {
    return (
        <InfographicContainer>
            <Title>Space Engineer Career Path</Title>
            <Timeline />
            <EducationRoadmap />
            <UniversityComparison />
            <SkillsWheel />
            <CareerLadder />
            <IndustryConnections />
            <CourseBubbleChart />
            <SuccessFactorsPyramid />
        </InfographicContainer>
    );
}

export default SpaceEngineerInfographic;