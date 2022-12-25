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

${pr => (pr.value === "blue" ? `background-color: blue` : null)}
${pr => (pr.value === "red" ? `background-color: red` : null)}
${pr => (pr.value === "purple" ? `background-color: purple` : null)}
`

export default function Button(props){
 const{changeCount, text, value} = props
    return(
        <StyledButton value={value} onClick={changeCount}>{text}</StyledButton>
    )
}