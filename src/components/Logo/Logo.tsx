import colors from "@/utils/ui";
import { ReactElement } from "react";
import styled from "styled-components";

interface LogoInterface {
  children: string | ReactElement;
}

const Logo: React.FC<LogoInterface> = ({ children }: LogoInterface) => {
  return <ContainerLogo>{children}</ContainerLogo>;
};

const ContainerLogo = styled.div`
  display: flex;
  align-items: start;
  font-size: 50px;
  justify-content: start;
  color: ${colors.greenLight};
  font-weight: bold;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
`;

export default Logo;
