import styled from "styled-components";

const StyledFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: 
    ${ (props) => props.justifyContent ||"stretch" };
    align-items: 
    ${ (props) => props.alignItems || "stretch" };
    background-color: black;
    color: rgb(125, 125, 158);
    `

const FlexColumn = ( props ) => {
    return (
        <StyledFlexColumn justifyContent={props.justifyContent} alignItems={props.alignItems} maxHeight={props.maxHeight} maxWidth={props.maxWidth} minHeight={props.minHeight} minWidth={props.minWidth} Height={props.Height} Width={props.Width}>
            {props.children}
        </StyledFlexColumn>
        );
}

export default FlexColumn;

/*
max-height: 
    ${ (props) => props.maxHeight || "100vh" };
    max-width: 
    ${ (props) => props.maxWidth || "100vw" };

min-height: 
    ${ (props) => props.minHeight || "100vh" };
    min-width: 
    ${ (props) => props.minWidth || "100vw" };    

height: 
    ${ (props) => props.Height || "100vh" };
    width: 
    ${ (props) => props.Width || "100vw" };      
*/