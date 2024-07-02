import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft, FaGraduationCap, FaBriefcase, FaChartLine, FaBook, FaUserTie, FaUniversity, FaClipboardList, FaUsers, FaFlask } from 'react-icons/fa';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import careerData from '../data.json';

const colors = {
    blue: '#3498db',
    green: '#2ecc71',
    purple: '#9b59b6',
    red: '#e74c3c',
    orange: '#f39c12',
    teal: '#1abc9c',
    navy: '#34495e',
    lightGray: '#ecf0f1',
};

const ReportContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  background-color: ${colors.lightGray};
  color: #333;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${colors.blue};
  text-decoration: none;
  margin-bottom: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const SectionTitle = styled.h2`
  color: #333;
  border-bottom: 2px solid ${colors.blue};
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
`;

const Summary = styled.p`
  font-style: italic;
  color: #666;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: ${colors.lightGray};
  border-radius: 4px;
  line-height: 1.6;
`;

const InfoGraphic = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 1.5rem 0;
`;

const InfoItem = styled.div`
  background-color: ${props => props.color || colors.blue};
  color: white;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 8px;
  text-align: center;
  width: calc(33% - 1rem);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 768px) {
    width: calc(50% - 1rem);
  }
`;

const ProgressBar = styled.div`
  background-color: ${colors.lightGray};
  border-radius: 20px;
  position: relative;
  margin: 15px 0;
  height: 30px;
  width: 100%;
`;

const Progress = styled.div`
  background-color: ${colors.blue};
  border-radius: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: ${props => props.width}%;
  transition: width 0.5s ease-in-out;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 1.5rem 0;
`;

const Th = styled.th`
  background-color: ${colors.blue};
  color: white;
  padding: 1rem;
  text-align: left;
  &:first-child {
    border-top-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
  }
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid ${colors.lightGray};
  &:nth-child(even) {
    background-color: ${colors.lightGray};
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: ${colors.lightGray};
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #dee2e6;
  }
`;

const TimelineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 20px 0;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: ${colors.blue};
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

const TimelineItem = styled.div`
  background-color: white;
  border: 2px solid ${colors.blue};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const TimelineYear = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const TimelineText = styled.div`
  font-size: 0.8em;
`;

const CareerTimeline = ({ stages }) => (
    <TimelineContainer>
        {stages.map((stage, index) => (
            <TimelineItem key={index}>
                <TimelineYear>Year {index * 4 + 1}</TimelineYear>
                <TimelineText>{stage.stage}</TimelineText>
            </TimelineItem>
        ))}
    </TimelineContainer>
);

const EducationStage = ({ stage, index }) => {
    const themeColors = [colors.blue, colors.green, colors.purple, colors.red, colors.orange, colors.teal];

    return (
        <Section>
            <SectionTitle>{stage.stage}</SectionTitle>
            <Summary>
                Stage {index + 1} of your journey: Focus on core subjects and practical experiences to build a strong foundation.
            </Summary>

            <h3><FaClipboardList /> Coursework</h3>
            <InfoGraphic>
                {stage.coursework?.slice(0, 6).map((course, i) => (
                    <InfoItem key={i} color={themeColors[i % themeColors.length]}>{course}</InfoItem>
                ))}
            </InfoGraphic>

            {stage.extracurricular_activities && (
                <>
                    <h3><FaUsers /> Extracurricular Activities</h3>
                    <List>
                        {stage.extracurricular_activities.map((activity, i) => (
                            <ListItem key={i}>{activity}</ListItem>
                        ))}
                    </List>
                </>
            )}

            {stage.test_preparation && (
                <>
                    <h3><FaBook /> Test Preparation</h3>
                    <List>
                        {stage.test_preparation.map((test, i) => (
                            <ListItem key={i}>{test}</ListItem>
                        ))}
                    </List>
                </>
            )}

            {stage.top_universities && (
                <>
                    <h3><FaUniversity /> Top Universities</h3>
                    <Table>
                        <thead>
                            <tr>
                                <Th>University</Th>
                                <Th>Avg. GPA</Th>
                                <Th>SAT Range</Th>
                                <Th>Admission Rate</Th>
                            </tr>
                        </thead>
                        <tbody>
                            {stage.top_universities.map((uni, i) => (
                                <tr key={i}>
                                    <Td>{uni.name}</Td>
                                    <Td>{uni.average_gpa}</Td>
                                    <Td>{uni.sat_range}</Td>
                                    <Td>{uni.admission_rate}</Td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}

            {stage.key_courses && (
                <>
                    <h3><FaGraduationCap /> Key Courses</h3>
                    <InfoGraphic>
                        {stage.key_courses.slice(0, 6).map((course, i) => (
                            <InfoItem key={i} color={themeColors[i % themeColors.length]}>{course}</InfoItem>
                        ))}
                    </InfoGraphic>
                </>
            )}

            {stage.experiences && (
                <>
                    <h3><FaFlask /> Experiences</h3>
                    <List>
                        {stage.experiences.map((exp, i) => (
                            <ListItem key={i}>{exp}</ListItem>
                        ))}
                    </List>
                </>
            )}
        </Section>
    );
};

const CareerProgressionSection = ({ progression }) => {
    const themeColors = [colors.blue, colors.green, colors.purple, colors.red, colors.orange, colors.teal];

    return (
        <Section>
            <SectionTitle><FaChartLine /> Career Progression</SectionTitle>
            <Summary>
                Your career path from entry-level to senior positions. Each stage brings new challenges and responsibilities.
            </Summary>
            {progression.map((level, index) => (
                <div key={index}>
                    <h3>{level.level}</h3>
                    <ProgressBar>
                        <Progress width={(index + 1) * (100 / progression.length)}>
                            {level.years_experience}
                        </Progress>
                    </ProgressBar>
                    <InfoGraphic>
                        {level.positions.map((position, i) => (
                            <InfoItem key={i} color={themeColors[i % themeColors.length]}>{position}</InfoItem>
                        ))}
                    </InfoGraphic>
                </div>
            ))}
        </Section>
    );
};

const PieChartComponent = ({ data, colors }) => (
    <ResponsiveContainer width="100%" height={300}>
        <PieChart>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    </ResponsiveContainer>
);

const CareerReport = () => {
    const { career } = useParams();
    const camelCaseCareer = career.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    const careerInfo = careerData[camelCaseCareer];

    if (!careerInfo) {
        return <div>Career information not found.</div>;
    }

    const skillsData = careerInfo.key_skills?.map(skill => ({ name: skill, value: 1 })) || [];
    const skillsColors = [colors.blue, colors.green, colors.purple, colors.red, colors.orange, colors.teal];

    return (
        <ReportContainer>
            <BackLink to="/"><FaArrowLeft /> Back to Home</BackLink>
            <Title>{careerInfo.career_path} Career Guide</Title>

            <Section>
                <SectionTitle>Career Overview</SectionTitle>
                <Summary>
                    A career as a {careerInfo.career_path} offers a unique blend of challenges and opportunities. This timeline gives you an overview of what to expect at different stages of your career.
                </Summary>
                <CareerTimeline stages={careerInfo.education_stages.concat({ stage: "Professional Career" })} />
            </Section>

            <Section>
                <SectionTitle><FaGraduationCap /> Education Journey</SectionTitle>
                <Summary>
                    Your path to becoming a {careerInfo.career_path} involves several key educational stages. Each stage builds upon the last, developing the skills and knowledge you'll need in your career.
                </Summary>
                {careerInfo.education_stages.map((stage, index) => (
                    <EducationStage key={index} stage={stage} index={index} />
                ))}
            </Section>

            <CareerProgressionSection progression={careerInfo.career_progression} />

            <Section>
                <SectionTitle><FaBriefcase /> Potential Employers</SectionTitle>
                <Summary>
                    {careerInfo.career_path}s can find opportunities in various sectors. These potential employers represent some of the key players in the industry.
                </Summary>
                <InfoGraphic>
                    {careerInfo.potential_employers?.map((employer, index) => (
                        <InfoItem key={index} color={skillsColors[index % skillsColors.length]}>{employer}</InfoItem>
                    ))}
                </InfoGraphic>
            </Section>

            <Section>
                <SectionTitle><FaBook /> Continuous Learning</SectionTitle>
                <Summary>
                    The field of {careerInfo.career_path.toLowerCase()} is constantly evolving. Staying updated with the latest developments is crucial for long-term success.
                </Summary>
                <List>
                    {careerInfo.continuous_learning?.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                    ))}
                </List>
            </Section>

            {careerInfo.key_skills && (
                <Section>
                    <SectionTitle><FaUserTie /> Key Skills</SectionTitle>
                    <Summary>
                        These skills are crucial for success as a {careerInfo.career_path}. Developing and honing these skills will set you apart in your career.
                    </Summary>
                    <PieChartComponent data={skillsData} colors={skillsColors} />
                    <InfoGraphic>
                        {careerInfo.key_skills.map((skill, index) => (
                            <InfoItem key={index} color={skillsColors[index % skillsColors.length]}>{skill}</InfoItem>
                        ))}
                    </InfoGraphic>
                </Section>
            )}
        </ReportContainer>
    );
};

export default CareerReport;