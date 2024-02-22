import styled from "styled-components";

interface ImageInterface {
    url:string;
}

const ImagePerfil:React.FC<ImageInterface> = ({url}:ImageInterface) => {
    return(<Container url={url}/>)
}




const Container = styled.div<ImageInterface>`
background-image:url('/images/perfil.png');
`
export default ImagePerfil;
