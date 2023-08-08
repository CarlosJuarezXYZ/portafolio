import {
  AiFillHome,
  AiOutlineIdcard,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import CardNavigation from "../CardNavigation/Cardnavigation";
import styled from "styled-components";
import Logo from "../Logo/Logo";

const NavBar = () => {
  const iconsNavegations = [
    {
      id: 1,
      icon: <AiFillHome size={30} />,
      description: "Home",
      route: "/",
    },
    {
      id: 2,
      icon: <AiOutlineIdcard size={30} />,
      description: "About Me",
      route: "/about-me",
    },
    { id: 3, icon: <BiWorld size={30} />, description: "Blog", route: "/blog" },
    {
      id: 4,
      icon: <AiOutlineThunderbolt size={30} />,
      description: "Projects",
      route: "/projects",
    },
  ];
  return (
    <ContainerNavbar>
      <Logo children="C.J" />
      <ContainerNavBarIcons>
        {iconsNavegations.map((icons) => {
          return (
            <CardNavigation
              key={icons.id}
              children={icons.icon}
              description={icons.description}
              redirect={icons.route}
            />
          );
        })}
      </ContainerNavBarIcons>
    </ContainerNavbar>
  );
};

const ContainerNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const ContainerNavBarIcons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  @media (max-width: 500px) {
    display: flex;
    gap: 10px;
  }
`;

export default NavBar;
