import styled from "styled-components"
import Image from "next/image";
import colors from "@/utils/ui";

interface CardProjectProps {
    image:string
    title:string
    redirect:string
    description:string
}

const CardProject:React.FC<CardProjectProps> = ({image,title,redirect,description}:CardProjectProps) => {
    return(<FlexBox>
        <Image src={image} alt = "foto-proyecto" width={150} height={170}/>
        <CardProjectText><p><strong>Title:</strong> {title}</p><p> <strong>Description:</strong> {description}</p><Link href={redirect} target="_blank">See project</Link></CardProjectText>
    </FlexBox>)
}

const FlexBox = styled.div`
display:flex;
gap: 15px;
border-radius:10px;
border: 2px solid black;
width:350px;
height:auto;
box-shadow:0px 0px 1px;
& img {
    border-radius:10px;
}
`

const CardProjectText = styled.div`
display:flex;
flex-direction:column;
gap:5px;
text-align:justify;
color:${colors.white};
padding: 10px;
`
const Link = styled.a`
color:${colors.greenLight};
text-decoration:none;
font-size:16px;
font-weight:bold;
cursor:pointer;
&:hover{
    font-size:18px;
}
`
export default CardProject;
