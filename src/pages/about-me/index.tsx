import { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import TextDescription from "../../components/TextDescription/TextDescription";
import Containers from "../../components/Containers/Containers";

const AboutMe: FC = () => {
  const { ContentImage } = Containers;
  return (
    <ContainerAboutMe>
      <ContentImage>
        <Image
          src="/images/perfil-about.png"
          alt="foto-perfil"
          width={280}
          height={280}
          priority
        />
      </ContentImage>
      
        <TextDescription
          title="About Me"
          subtitle="Software Engineer"
          description="I am Software Engineer . I am convinced that technology will soon reach all corners of the world and I want to contribute to be part of that change. For this reason, I have the goal of learning and improving my skills very quickly in order to be a benchmark in this exciting industry."
        />
      
    </ContainerAboutMe>
  );
};

const ContainerAboutMe = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 450px;
  padding:0 30px;
  text-align:justify;
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export default AboutMe;
