import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const TimelineItem = styled.div`
  flex: 1;
  background-color: ${props => props.color};
  padding: 20px;
  border-radius: 8px;
  margin: 0 10px;
  color: white;
`;

const TimelineTitle = styled.h3`
  margin-top: 0;
`;

const MilestoneList = styled.ul`
  padding-left: 20px;
`;

const timelineData = [
    { stage: 'High School', color: '#3498db', milestones: ['AP Courses', 'Robotics Club', 'Internships'] },
    { stage: 'Undergraduate', color: '#2ecc71', milestones: ['Aerospace Engineering Degree', 'Research Projects', 'Internship at NASA'] },
    { stage: 'Graduate School', color: '#9b59b6', milestones: ['Master\'s in Space Systems', 'Thesis on Spacecraft Design', 'Conference Presentations'] },
    { stage: 'Career', color: '#e74c3c', milestones: ['Entry-level Engineer at SpaceX', 'Senior Engineer at Boeing', 'Project Manager at NASA'] },
];

function Timeline({ data = timelineData }) {
    return (
        <TimelineContainer>
            {data.map((item, index) => (
                <TimelineItem key={index} color={item.color}>
                    <TimelineTitle>{item.stage}</TimelineTitle>
                    <MilestoneList>
                        {item.milestones.map((milestone, i) => (
                            <li key={i}>{milestone}</li>
                        ))}
                    </MilestoneList>
                </TimelineItem>
            ))}
        </TimelineContainer>
    );
}

export default Timeline;