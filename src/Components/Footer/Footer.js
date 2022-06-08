import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import { Facebook,Twitter,Google,Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
                       Scro Lab Developer

    </h1>
	<Container>
		
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, harum animi! Eaque est, sit, saepe quas quibusdam beatae dignissimos excepturi, obcaecati dolorum blanditiis ipsam expedita nulla sunt consequuntur dolor. Voluptatibus.
       <FooterLink>
           <div>
            <Facebook/>
            <Twitter/>
            <Google/>
            <Linkedin/>
            </div>
       </FooterLink>
          
       
	</Container>
	</Box>
);
};
export default Footer;

