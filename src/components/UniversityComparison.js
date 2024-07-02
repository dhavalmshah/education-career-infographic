import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

const universityData = [
    { name: 'MIT', gpa: 4.17, sat: '1510-1570', admissionRate: 4 },
    { name: 'Caltech', gpa: 4.19, sat: '1530-1580', admissionRate: 6 },
    { name: 'Stanford', gpa: 3.96, sat: '1440-1570', admissionRate: 4 },
    { name: 'University of Michigan', gpa: 3.9, sat: '1340-1530', admissionRate: 23 },
    { name: 'Georgia Tech', gpa: 4.07, sat: '1370-1530', admissionRate: 21 },
];

function UniversityComparison({ data = universityData }) {
    return (
        <Table>
            <thead>
                <tr>
                    <Th>University</Th>
                    <Th>Average GPA</Th>
                    <Th>SAT Range</Th>
                    <Th>Admission Rate (%)</Th>
                </tr>
            </thead>
            <tbody>
                {data.map((uni, index) => (
                    <tr key={index}>
                        <Td>{uni.name}</Td>
                        <Td>{uni.gpa}</Td>
                        <Td>{uni.sat}</Td>
                        <Td>{uni.admissionRate}</Td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default UniversityComparison;