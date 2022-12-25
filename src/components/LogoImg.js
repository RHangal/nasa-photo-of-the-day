import React from "react";
import styled from "styled-components";
import nasaLogo from '../images/NASA_logo.svg.png'


const Logo = styled.img`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
          animation: App-logo-spin infinite 20s linear;
        }
      

      @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
`

export default function LogoIMG() {
return (
    <Logo src={`${nasaLogo}`} alt="the nasa logo"/>
)
}
