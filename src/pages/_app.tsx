import "@/styles/globals.css";
import { motion } from "framer-motion";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar/NavBar";
import { useRouter } from "next/router"; 
import styled from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ContainerHome>
      <NavBar />
      <motion.div
      key={router.route}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Component {...pageProps} />
      </motion.div>
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
