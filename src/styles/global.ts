import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    // variables
    :root{
        --hue: #06BA63;
        --background: #f0f2f5;
        --background-fields: #A7AAE6;
        --text-title: #39393A;
        --text-body: #A7AAE6;
        --red-error: #C9403D;
        --default-grey: #8693AB;
        --light-grey: #AAB9CF;
        --blue-grey: #BDD4E7;
        --dark-white: #E6E6E6;
    }

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    // font-size default: 16px (Desktop)
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }  
    // We've defined in percentage because accesibility. Maybe the device of the user
    // cab apply some screen configuration to increase the font, and if our application
    // get font in px, the font will be static. To adapt depending of user preferences
    // we use percentage.
    

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased; // To improve the font in Browsers based in V8
        color: var(--text-title)
    }

    // By defaunt input, textarea and button, don't implement the font of body
    // They have the own font, so  besides the body we need overwrite these other tags too.
    body, input, textarea, button{
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        // 400 is default for poppins  (commonly html uses 500)
    }

    h1, h2, h3, h4, h5, h6, strong, b {
        font-weight: 700; //semi-bold that I've imported in DM sans font.
    }

    button {
        cursor:pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;
