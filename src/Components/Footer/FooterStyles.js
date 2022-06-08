import styled from 'styled-components';

export const Box = styled.div`
padding: 60px 30px;
background: black;
position: absolute;

width: 100%;



@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	color:white;
	/* background: red; */
`;




export const FooterLink = styled.div`
color: #fff;
margin-bottom: 0px;
margin-right:4px;
font-size: 18px;
// text-decoration: none;
text-align:center;

`;


