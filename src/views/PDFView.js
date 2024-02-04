import React from "react";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Input, Form, CardText, Spinner, FormGroup, Label } from "reactstrap";
import { Select, InputLabel, FormControl, SelectChangeEvent, MenuItem, CircularProgress} from "@mui/material";
import axios from "axios";
import FlexRow from "styledComponents/flexRow.css";
import FlexColumn from "styledComponents/flexColumn.css";
import styled from "styled-components";

/*
const LabelStyled = styled(Label)(` 
background-color: "transparent";
& div {
  background-color: "transparent";
}
`)
*/

function PDFView() {
    const [urlPdf, seturlPdf] = React.useState('');
    const [displayPdf, setdisplayPdf] = React.useState('');
    //const [ChangeEvent, setChangeEvent] = React.useState(SelectChangeEvent || false)
    React.useEffect(() => {
    }, []);

  return (
    <>
    <div className="content">
        <iframe src="https://research.google.com/pubs/archive/44678.pdf" width="100%" height="600"></iframe>
    </div>
    </>
  );
}

export default PDFView;

