import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const Bubble = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: ${props => props.size / 10}px;
  padding: 10px;
  box-sizing: border-box;
`;

const courses = [
    { name: 'Calculus', size: 100, color: '#3498db' },
    { name: 'Physics', size: 120, color: '#e74c3c' },
    { name: 'Aerospace Engineering', size: 150, color: '#2ecc71' },
    { name: 'Computer Science', size: 90, color: '#f39c12' },
    { name: 'Materials Science', size: 80, color: '#9b59b6' },
    { name: 'Orbital Mechanics', size: 110, color: '#1abc9c' },
    { name: 'Spacecraft Design', size: 130, color: '#34495e' },
    { name: 'Propulsion Systems', size: 100, color: '#e67e22' },
];

function CourseBubbleChart({ data = courses }) {
    return (
        <ChartContainer>
            {data.map((course, index) => (
                <Bubble
                    key={index}
                    size={course.size}
                    color={course.color}
                >
                    {course.name}
                </Bubble>
            ))}
        </ChartContainer>
    );
}

export default CourseBubbleChart;