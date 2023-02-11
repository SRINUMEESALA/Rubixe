import styled from "styled-components"


export const TechCardContainer = styled.div`
height:52vh;
width: 20%;
border-radius: 20px;
border-width:${props => props.direction === "to bottom" ? "30px 0px 0px 0px" : "0px 0px 30px 0px"};
border-color: ${props => props.borderColor};
position: relative;
background-image:${props => `linear-gradient(${props.direction}, white 55%, #d7d7e9);`}
`

export const CardNumberContainer = styled.div`
height: 48px;
width: 48px;
background-color: #d7d7e9;
position: absolute;
left: 40 %;
top:${props => props.index % 2 === 0 ? "-48px" : "none"};
bottom:${props => props.index % 2 !== 0 ? "-56px" : "none"};
`


// border-width: ${props => props.direction === "to bottom" ? "30px 0px 0px 0px;" : "0px 0px 30px 0px;"};
// height: 53vh;
// width: 38vh;