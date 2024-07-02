import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaBook, FaLaptopCode, FaRocket, FaUserGraduate, FaGavel } from 'react-icons/fa';

const RoadmapContainer = styled.div`
  position: relative;
  height: 300px;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
`;

const Road = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 20px;
  background-color: #333;
  transform: translateY(-50%);
`;

const Milestone = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => props.position}%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const MilestoneLabel = styled.div`
  position: absolute;
  top: ${props => props.top ? '20px' : 'auto'};
  bottom: ${props => props.top ? 'auto' : '20px'};
  left: ${props => props.position}%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 14px;
  width: 120px;
`;

const iconMap = {
  FaGraduationCap: FaGraduationCap,
  FaBook: FaBook,
  FaLaptopCode: FaLaptopCode,
  FaRocket: FaRocket,
  FaUserGraduate: FaUserGraduate,
  FaGavel: FaGavel
};

const roadmapData = [
  { "name": "High School Diploma", "icon": "FaGraduationCap" },
  { "name": "Bachelor's Degree", "icon": "FaBook" },
  { "name": "Juris Doctor (JD)", "icon": "FaUserGraduate" },
  { "name": "Bar Admission", "icon": "FaGavel" }
];

function EducationRoadmap({ data = roadmapData }) {
  console.log(data);
  return (
    <RoadmapContainer>
      <Road />
      {data.map((milestone, index) => {
        const IconComponent = iconMap[milestone.icon];
        return (
          <React.Fragment key={index}>
            <Milestone position={(index + 1) * 10 + index * 15}>
              {IconComponent && <IconComponent />}
            </Milestone>
            <MilestoneLabel position={(index + 1) * 10 + index * 15} top={index % 2 === 0}>
              {milestone.name}
            </MilestoneLabel>
          </React.Fragment>
        );
      })}
    </RoadmapContainer>
  );
}

export default EducationRoadmap;