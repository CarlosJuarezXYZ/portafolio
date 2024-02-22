import colors from "@/utils/ui";
import styled from "styled-components";

const ContentImage = styled.div`
  width: auto;
  height: auto;
  img {
    border-radius: 50%;
    box-shadow: 0px 0px 5px 5px ${colors.greenLight};
    -webkit-box-shadow: 0px 0px 5px 5px ${colors.greenLight};
    transition: transform 0.2s;
    @media (max-width: 500px) {
      width: 200px;
      height: 200px;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 550px) {
    img {
      height: 250;
    }
  }
`;

const Containers = {
    ContentImage
}

export default Containers;
