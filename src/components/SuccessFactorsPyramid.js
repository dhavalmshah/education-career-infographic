import React from 'react';
import styled from 'styled-components';

const PyramidContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const PyramidLevel = styled.div`
  width: ${props => props.width}px;
  height: 60px;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
`;

const factors = [
    { name: 'Innovation', width: 200, color: '#3498db' },
    { name: 'Leadership', width: 300, color: '#2ecc71' },
    { name: 'Technical Expertise', width: 400, color: '#e74c3c' },
    { name: 'Practical Experience', width: 500, color: '#f39c12' },
    { name: 'Strong STEM Foundation', width: 600, color: '#9b59b6' },
];

function SuccessFactorsPyramid({ data = factors }) {
    return (
        <PyramidContainer>
            {data.map((factor, index) => (
                <PyramidLevel
                    key={index}
                    width={factor.width}
                    color={factor.color}
                >
                    {factor.name}
                </PyramidLevel>
            ))}
        </PyramidContainer>
    );
}

export default SuccessFactorsPyramid;