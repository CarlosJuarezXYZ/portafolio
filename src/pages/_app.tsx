import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar/NavBar";
import styled from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContainerHome>
      <NavBar />
      <Component {...pageProps} />
    </ContainerHome>
  );
}

const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 60px;
  height: 100vh;
  @media (max-width: 500px) {
    padding: 10px;
  }
`;
