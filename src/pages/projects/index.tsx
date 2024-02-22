import { FC } from "react";
import CardProject from "../../components/CardProject/CardProject";
import styled from "styled-components";
import colors from "../../utils/ui";
import PROJECT_DATA_STUB from "./stubs/project-data-stub";

const Projects: FC = () => {
  return (
    <ContentProject>
      <TitleProjects>Projects</TitleProjects>
      <ContentCard>
        {
            PROJECT_DATA_STUB.map((project:any)=>{
                return(
                    <CardProject
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    redirect={project.redirect}
                    description={project.description}
                  />
                )
            })
        }
     
      </ContentCard> 
    </ContentProject>
  );
};

const ContentProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const ContentCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
const TitleProjects = styled.h1`
  color: ${colors.white};
  font-size: 58px;
  font-weight: 800;
`;
export default Projects;
