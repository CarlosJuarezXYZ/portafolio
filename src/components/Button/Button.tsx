import colors from "@/utils/ui";
import styled from "styled-components";

interface ButtonInterface {
  description: string;
  redirect?: string;
}

const Button: React.FC<ButtonInterface> = ({
  description,
  redirect,
}: ButtonInterface) => {
  return (
    <ContentButton>
      <a href={redirect} target="_blank">
        {description}
      </a>
    </ContentButton>
  );
};

const ContentButton = styled.button`
  outline: none;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 10px;
  font-weight: 800;
  color: ${colors.white};
  font-size: 16px;
  line-height: 28px;
  background-color: rgba(25, 152, 140, 0.8);
  &:hover {
    box-shadow: 0px 0px 1px 1px  rgba(25, 152, 140, 0.8);
    -webkit-box-shadow: 0px 0px 1px 1px  rgba(25, 152, 140, 0.8);
    transition: transform 0.2s;
    background-color: #19988E;
  }
`;

export default Button;
