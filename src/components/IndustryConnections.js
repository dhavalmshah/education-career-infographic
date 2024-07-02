import React from 'react';
import styled from 'styled-components';

const ConnectionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  position: relative;
`;

const CentralNode = styled.div`
  width: 100px;
  height: 100px;
  background-color: #3498db;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  color: white;
  font-weight: bold;
  position: absolute;
`;

const Connection = styled.div`
  position: absolute;
  width: 120px;
  height: 40px;
  background-color: ${props => props.color};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  transform: rotate(${props => props.rotate}deg) translateX(${props => props.translateX}px);
`;

const connections = [
    { name: 'NASA', color: '#e74c3c', rotate: 0, translateX: 150 },
    { name: 'SpaceX', color: '#2ecc71', rotate: 60, translateX: 150 },
    { name: 'Boeing', color: '#f39c12', rotate: 120, translateX: 150 },
    { name: 'Blue Origin', color: '#9b59b6', rotate: 180, translateX: 150 },
    { name: 'Lockheed Martin', color: '#1abc9c', rotate: 240, translateX: 150 },
    { name: 'Virgin Galactic', color: '#34495e', rotate: 300, translateX: 150 },
];

function IndustryConnections({ data = connections }) {
    return (
        <ConnectionsContainer>
            <CentralNode>Space Engineer</CentralNode>
            {data.map((connection, index) => (
                <Connection
                    key={index}
                    color={connection.color}
                    rotate={index * 60}
                    translateX={150}
                >
                    {connection.name}
                </Connection>
            ))}
        </ConnectionsContainer>
    );
}

export default IndustryConnections;