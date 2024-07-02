import React from 'react';
import styled from 'styled-components';

const WheelContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  position: relative;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  margin-top: 150px;
  margin-bottom: 100px;
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
  margin-top: -180px;
`;

const SkillSegment = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  width: 150px;
  height: 150px;
  transform-origin: 100% 100%;
  transform: rotate(${props => props.rotate}deg) skew(30deg);
`;

const SkillLevel = styled.div`
  width: 100%;
  height: ${props => props.level}%;
  background-color: ${props => props.color};
  opacity: 0.7;
`;

const SkillLabel = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${props => -props.rotate}deg) skew(-30deg);
  text-align: center;
  font-size: 12px;
`;

const skills = [
    { name: 'Mathematics', level: 90, color: '#3498db' },
    { name: 'Physics', level: 85, color: '#2ecc71' },
    { name: 'Computer Science', level: 80, color: '#e74c3c' },
    { name: 'Engineering', level: 95, color: '#f39c12' },
    { name: 'Design Software', level: 75, color: '#9b59b6' },
    { name: 'Communication', level: 70, color: '#1abc9c' },
];

function SkillsWheel({ data = skills }) {
    return (
        <WheelContainer>
            <Title>Skills Wheel</Title>
            {data.map((skill, index) => (
                <SkillSegment key={index} rotate={index * 60}>
                    <SkillLevel level={skill.level} color={skill.color} />
                    <SkillLabel rotate={index * 60}>{skill.name}</SkillLabel>
                </SkillSegment>
            ))}
        </WheelContainer>
    );
}

export default SkillsWheel;