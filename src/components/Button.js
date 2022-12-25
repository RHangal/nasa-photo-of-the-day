import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
border-radius: 1rem;
border: .3rem solid white;
color: ${pr => pr.theme.textColor};
margin-left: .5rem;
padding: .3rem;
font-size: 1.5rem;
font-weight: bold;
font-family: sans-serif;



:active {${pr=>(pr.type==="blue" ? `transform: translateY(-4px)` : `transform: translateY(4px)`)};}

${pr => (pr.type === "blue" ? `background-color: blue` : null)}
${pr => (pr.type === "red" ? `background-color: red` : null)}
${pr => (pr.type === "purple" ? `background-color: purple` : null)}
`

export default function Button(props){
 const{changeCount, text, type} = props
    return(
        <StyledButton type={type} onClick={changeCount}>{text}</StyledButton>
    )
}