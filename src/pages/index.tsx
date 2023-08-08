import { Inter } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
import TextDescription from "./components/TextDescription/TextDescription";
import Image from "next/image";
import styled from "styled-components";
import ImagePerfil from "./components/Image/ImagePerfil";
import colors from "./utils/ui";
import Button from "./components/Button/Button";
import Containers from "./components/Containers/Containers";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const { ContentImage } = Containers;
  return (
    <ContentBody>
      <ContentImage>
        <Image
          src="/images/perfil-beach.png"
          alt="foto-perfil"
          width={280}
          height={280}
          priority
        />
      </ContentImage>
      <TextDescription
        title="Hi, I am Carlos Juarez"
        subtitle="Software Engineer"
        description=""
      />
      <ContentButtons>
        <Button
          description="Contact me"
          redirect="https://api.whatsapp.com/send?phone=51982279718"
        />
        <Button
          description="Download CV"
          redirect="../documents/CV-CARLOS-JUAREZ-01-2023.pdf"
        />
      </ContentButtons>
    </ContentBody>
  );
}

const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 5%;
  height: 450px;
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;
const ContentButtons = styled.div`
  padding-top: 20px;
  display: flex;
  width: 440px;
  gap: 10px;
  @media (max-width: 550px) {
    width: 100%;
  }
`;
