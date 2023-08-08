import colors from "@/pages/utils/ui";
import { useRouter } from "next/router";
import {  ReactElement, useEffect, useState } from "react"
import styled from "styled-components";


interface CardNavigationInterface {
    children:ReactElement,
    description:string
    redirect:string
}

const CardNavigation:React.FC<CardNavigationInterface> = ({children,description,redirect}:CardNavigationInterface) => {
    const router = useRouter();
    const [route, setRoute] = useState<string>();

   

    const redirectTo = () => {
        setRoute(redirect);
        router.push(redirect);
    }
return(<Container onClick={redirectTo}>{children}{description}</Container>)
}


const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
cursor:pointer;
color: ${colors.white};
padding: 10px;
&:hover{
    color: ${colors.greenLight}
}
`

export default CardNavigation;
