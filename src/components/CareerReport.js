import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGraduationCap, FaBriefcase, FaChartLine, FaBuilding, FaBook, FaArrowLeft } from 'react-icons/fa';
import careerData from '../data/data.json';

const ReportContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  background-color: #f0f4f8;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #3498db;
  text-decoration: none;
  margin-bottom: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

// Career Timeline Component
const TimelineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const TimelineItem = styled.div`
  flex: 1;
  background-color: ${props => props.color};
  border-radius: 8px;
  padding: 1rem;
  margin: 0 0.5rem;
  color: white;
`;

const TimelineTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const TimelineList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

// New components for text sections
const TextSection = styled.div`
  background-color: #f8f9fa;
  border-left: 4px solid #3498db;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
`;

const SectionDescription = styled.p`
  color: #34495e;
  line-height: 1.6;
`;

const CareerTimeline = ({ stages }) => (
    <TimelineContainer>
        {stages.map((stage, index) => (
            <TimelineItem key={index} color={['#3498db', '#2ecc71', '#9b59b6', '#e74c3c'][index]}>
                <TimelineTitle>{stage.stage}</TimelineTitle>
                <TimelineList>
                    {stage.key_points?.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </TimelineList>
            </TimelineItem>
        ))}
    </TimelineContainer>
);

// Education Roadmap Component
const RoadmapContainer = styled.div`
  position: relative;
  height: 100px;
  margin-bottom: 2rem;
`;

const RoadmapLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background-color: #3498db;
`;

const RoadmapPoint = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3498db;
`;

const RoadmapLabel = styled.div`
  position: absolute;
  top: 100%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 0.8rem;
  color: #2c3e50;
`;

const EducationRoadmap = ({ stages }) => (
    <RoadmapContainer>
        <RoadmapLine />
        {stages.map((stage, index) => (
            <React.Fragment key={index}>
                <RoadmapPoint style={{ left: `${index * 33.33}%` }} />
                <RoadmapLabel style={{ left: `${index * 33.33}%` }}>{stage}</RoadmapLabel>
            </React.Fragment>
        ))}
    </RoadmapContainer>
);

// University Table Component
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #3498db;
  color: white;
  padding: 0.5rem;
  text-align: left;
`;

const Td = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #ecf0f1;
`;

const UniversityTable = ({ universities }) => (
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
            {universities.map((uni, index) => (
                <tr key={index}>
                    <Td>{uni.name}</Td>
                    <Td>{uni.average_gpa}</Td>
                    <Td>{uni.sat_range}</Td>
                    <Td>{uni.admission_rate}</Td>
                </tr>
            ))}
        </tbody>
    </Table>
);

// Skills Wheel Component
const SkillsWheelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillItem = styled.div`
  background-color: ${props => props.color};
  color: white;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 8px;
  text-align: center;
  width: calc(33.33% - 1rem);
`;

const SkillsWheel = ({ skills }) => (
    <SkillsWheelContainer>
        {skills?.map((skill, index) => (
            <SkillItem key={index} color={['#3498db', '#2ecc71', '#9b59b6', '#e74c3c', '#f39c12', '#1abc9c'][index % 6]}>
                {skill}
            </SkillItem>
        ))}
    </SkillsWheelContainer>
);

// Career Progression Ladder Component
const LadderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LadderStep = styled.div`
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  text-align: center;
  width: 80%;
`;

const CareerProgressionLadder = ({ steps }) => (
    <LadderContainer>
        {steps.map((step, index) => (
            <LadderStep key={index}>{step}</LadderStep>
        ))}
    </LadderContainer>
);

// Industry Connections Component
const ConnectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ConnectionItem = styled.div`
  background-color: ${props => props.color};
  color: white;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 50%;
  text-align: center;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IndustryConnections = ({ connections }) => (
    <ConnectionsContainer>
        {connections.map((connection, index) => (
            <ConnectionItem key={index} color={['#3498db', '#2ecc71', '#9b59b6', '#e74c3c', '#f39c12', '#1abc9c'][index % 6]}>
                {connection}
            </ConnectionItem>
        ))}
    </ConnectionsContainer>
);

// Key Courses Component
const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CourseItem = styled.div`
  background-color: ${props => props.color};
  color: white;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 50%;
  text-align: center;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const KeyCourses = ({ courses }) => (
    <CoursesContainer>
        {courses.map((course, index) => (
            <CourseItem key={index} color={['#3498db', '#2ecc71', '#9b59b6', '#e74c3c', '#f39c12', '#1abc9c', '#34495e', '#d35400'][index % 8]}>
                {course}
            </CourseItem>
        ))}
    </CoursesContainer>
);

// Success Factors Component
const FactorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FactorItem = styled.div`
  background-color: ${props => props.color};
  color: white;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  text-align: center;
  width: ${props => props.width};
`;

const SuccessFactors = ({ factors }) => (
    <FactorsContainer>
        {factors.map((factor, index) => (
            <FactorItem
                key={index}
                color={['#3498db', '#2ecc71', '#9b59b6', '#e74c3c', '#f39c12'][index % 5]}
                width={`${100 - index * 10}%`}
            >
                {factor}
            </FactorItem>
        ))}
    </FactorsContainer>
);

// New component for displaying experiences
const ExperienceList = styled.ul`
list-style-type: none;
padding-left: 0;
`;

const ExperienceItem = styled.li`
margin-bottom: 0.5rem;
padding: 0.5rem;
background-color: #ecf0f1;
border-radius: 4px;
`;

const Experiences = ({ experiences }) => (
    <ExperienceList>
        {experiences.map((experience, index) => (
            <ExperienceItem key={index}>{experience}</ExperienceItem>
        ))}
    </ExperienceList>
);

// New component for continuous learning
const LearningList = styled.ul`
list-style-type: none;
padding-left: 0;
`;

const LearningItem = styled.li`
margin-bottom: 0.5rem;
padding: 0.5rem;
background-color: #e8f6f3;
border-radius: 4px;
`;

const ContinuousLearning = ({ learningItems }) => (
    <LearningList>
        {learningItems.map((item, index) => (
            <LearningItem key={index}>{item}</LearningItem>
        ))}
    </LearningList>
);

const CareerReport = () => {
    const { career } = useParams();
    const camelCaseCareer = career.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    const careerInfo = careerData[camelCaseCareer];

    if (!careerInfo) {
        return <div>Career information not found.</div>;
    }

    return (
        <ReportContainer>
            <BackLink to="/"><FaArrowLeft /> Back to Home</BackLink>
            <Title>{careerInfo.career_path}</Title>

            <Section>
                <SectionTitle>Career Overview</SectionTitle>
                <TextSection>
                    <SectionDescription>
                        A career as a {careerInfo.career_path} offers a unique blend of {careerInfo.key_skills?.slice(0, 3).join(", ")}, and more.
                        This path is ideal for those passionate about {careerInfo.career_path.toLowerCase()} and its impact on society.
                    </SectionDescription>
                </TextSection>
            </Section>

            <Section>
                <SectionTitle>Career Timeline</SectionTitle>
                <CareerTimeline stages={careerInfo.education_stages} />
                <TextSection>
                    <SectionDescription>
                        The journey to becoming a {careerInfo.career_path} involves several key stages, each building upon the last to develop the necessary skills and knowledge.
                    </SectionDescription>
                </TextSection>
            </Section>

            <Section>
                <SectionTitle>Education Roadmap</SectionTitle>
                <EducationRoadmap stages={['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'Board Certification']} />
                <TextSection>
                    <SectionDescription>
                        Educational milestones play a crucial role in preparing for a career as a {careerInfo.career_path}. Each stage provides essential knowledge and skills necessary for success in this field.
                    </SectionDescription>
                </TextSection>
            </Section>

            <Section>
                <SectionTitle>Top Universities</SectionTitle>
                <UniversityTable universities={careerInfo.education_stages[1].top_universities} />
                <TextSection>
                    <SectionDescription>
                        These universities are renowned for their excellent programs in fields related to {careerInfo.career_path}. They offer rigorous curricula and valuable networking opportunities.
                    </SectionDescription>
                </TextSection>
            </Section>

            <Section>
                <SectionTitle>Key Skills</SectionTitle>
                <SkillsWheel skills={careerInfo.key_skills} />
                <TextSection>
                    <SectionDescription>
                        Success as a {careerInfo.career_path} requires a diverse set of skills. These key competencies will help you excel in your career and adapt to the evolving landscape of the field.
                    </SectionDescription>
                </TextSection>
            </Section>

            <Section>
                <SectionTitle>Career Progression</SectionTitle>
                <CareerProgressionLadder steps={careerInfo.career_progression.map(cp => cp.level)} />
                <TextSection>
                    <SectionDescription>
                        As you gain experience and expertise, you can progress through various roles in your career as a {careerInfo.career_path}. Each level brings new challenges and responsibilities.
                    </SectionDescription>
                </TextSection>
            </Section>

            <Section>
                <SectionTitle>Industry Connections</SectionTitle>
                <IndustryConnections connections={careerInfo.potential_employers} />
                <TextSection>
                    <SectionDescription>
                        {careerInfo.career_path}s can find opportunities in various sectors. These potential employers represent some of the key players in the industry.
                    </SectionDescription>
                </TextSection>
            </Section>

            <Section>
                <SectionTitle>Key Courses</SectionTitle>
                <KeyCourses courses={careerInfo.education_stages[1].key_courses.slice(0, 8)} />
                <TextSection>
                    <SectionDescription>
                        These courses form the foundation of your education as a {careerInfo.career_path}. They cover essential topics and provide the knowledge base you'll need in your career.
                    </SectionDescription>
                </TextSection>
            </Section>

            <Section>
                <SectionTitle>Experiences</SectionTitle>
                <Experiences experiences={careerInfo.education_stages[1].experiences} />
                <TextSection>
                    <SectionDescription>
                        Gaining practical experience is crucial for aspiring {careerInfo.career_path}s. These opportunities allow you to apply your knowledge in real-world settings and build your professional network.
                    </SectionDescription>
                </TextSection>
            </Section>

            <Section>
                <SectionTitle>Continuous Learning</SectionTitle>
                <ContinuousLearning learningItems={careerInfo.continuous_learning} />
                <TextSection>
                    <SectionDescription>
                        The field of {careerInfo.career_path.toLowerCase()} is constantly evolving. Staying updated with the latest developments and continuously improving your skills is essential for long-term success.
                    </SectionDescription>
                </TextSection>
            </Section>

            <Section>
                <SectionTitle>Success Factors</SectionTitle>
                <SuccessFactors factors={careerInfo.success_factors || ['Communication', 'Empathy', 'Technical Knowledge', 'Problem Solving', 'Adaptability']} />
                <TextSection>
                    <SectionDescription>
                        While technical skills are important, these success factors can set you apart in your career as a {careerInfo.career_path}. They contribute to your overall effectiveness and career growth.
                    </SectionDescription>
                </TextSection>
            </Section>
        </ReportContainer>
    );
};

export default CareerReport;