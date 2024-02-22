import styled from "styled-components";
import colors from "@/utils/ui";
import { AiFillHome } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

interface TextDescriptionInterface {
  title: string;
  subtitle: string;
  description: string;
}

const TextDescription: React.FC<TextDescriptionInterface> = ({
  title,
  subtitle,
  description,
}: TextDescriptionInterface) => {
  return (
    <ContainerText>
      <Title>{title}</Title>
      <ContainerSubtitle>
      <Subtitle>{subtitle}</Subtitle>
      <a href="https://www.linkedin.com/in/carlos-ju%C3%A1rez-xyz/"  target="_blank"><AiFillLinkedin color={colors.greenLight} size={30} title="Linkedln"/></a>
      </ContainerSubtitle>
      <Description>{description}</Description>
    </ContainerText>
  );
};

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: start;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Title = styled.div`
font-size: 48px;
color:${colors.white};
`
const Subtitle = styled.p`
color:${colors.greenLight};
font-size:30px;
font-family:bold;
`;
const ContainerSubtitle = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
`
const Description = styled.p`
  font-size: 18px;
  color: ${colors.white};
`;

export default TextDescription;
