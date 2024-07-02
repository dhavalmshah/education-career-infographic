import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import careerData from '../careerData.json';

import Timeline from './Timeline';
import EducationRoadmap from './EducationRoadmap';
import UniversityComparison from './UniversityComparison';
import SkillsWheel from './SkillsWheel';
import CareerLadder from './CareerLadder';
import IndustryConnections from './IndustryConnections';
import CourseBubbleChart from './CourseBubbleChart';
import SuccessFactorsPyramid from './SuccessFactorsPyramid';

const InfographicContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f4f8;
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
`;

const Section = styled.section`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: #34495e;
  margin-bottom: 20px;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  color: #3498db;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

function CareerInfographic() {
    const { career } = useParams();
    // convert space-engineer to spaceEngineer
    const careerKey = career.replace(/-([a-z])/g, g => g[1].toUpperCase());
    const careerInfo = careerData[careerKey];

    if (!careerInfo) {
        console.log(`Career not found: ${career}`, careerData);
        return <div>
            <h1>Career not found</h1>
            <p>The career you are looking for does not exist.</p>
            <p>Param passed was: {career}</p>
        </div>;
    } else {
        console.log(`Career found: ${career}`, careerInfo);
    }

    return (
        <InfographicContainer>
            <BackLink to="/">← Back to Home</BackLink>
            <Title>{careerInfo.title}</Title>

            <Section>
                <SectionTitle>Career Timeline</SectionTitle>
                <Timeline data={careerInfo.timeline} />
            </Section>

            <Section>
                <SectionTitle>Education Roadmap</SectionTitle>
                <EducationRoadmap data={careerInfo.educationRoadmap} />
            </Section>

            <Section>
                <SectionTitle>Top Universities</SectionTitle>
                <UniversityComparison data={careerInfo.universityComparison} />
            </Section>

            <Section>
                <SectionTitle>Key Skills</SectionTitle>
                <SkillsWheel data={careerInfo.skillsWheel} />
            </Section>

            <Section>
                <SectionTitle>Career Progression</SectionTitle>
                <CareerLadder data={careerInfo.careerLadder} />
            </Section>

            <Section>
                <SectionTitle>Industry Connections</SectionTitle>
                <IndustryConnections data={careerInfo.industryConnections} />
            </Section>

            <Section>
                <SectionTitle>Key Courses</SectionTitle>
                <CourseBubbleChart data={careerInfo.courseBubbleChart} />
            </Section>

            <Section>
                <SectionTitle>Success Factors</SectionTitle>
                <SuccessFactorsPyramid data={careerInfo.successFactorsPyramid} />
            </Section>
        </InfographicContainer>
    );
}

export default CareerInfographic;