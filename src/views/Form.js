/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Input, Form, CardText, Spinner, FormGroup, Label } from "reactstrap";
import { Select, InputLabel, FormControl, SelectChangeEvent, MenuItem, CircularProgress} from "@mui/material";
import axios from "axios";
import FlexRow from "styledComponents/flexRow.css";
import FlexColumn from "styledComponents/flexColumn.css";
import styled from "styled-components";
//import Select, { SelectChangeEvent } from '@mui/material/Select';
//import Box from '@mui/material/Box';
//import InputLabel from '@mui/material/InputLabel';
//import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';

const LabelStyled = styled(Label)(` 
background-color: "transparent";
& div {
  background-color: "transparent";
}
`)

function Form_consulta() {
    const [date, setDate] = React.useState(new Date());
    const [dataForm, setDataForm] = React.useState('');
    const [urlPdf, seturlPdf] = React.useState('');
    const [dataCadernos, setdataCadernos] = React.useState(dataForm.list_cadernos)
    const [dataSecoes, setdataSecoes] = React.useState(dataForm.list_secoes)
    const [displaySecoes, setdisplaySecoes] = React.useState(true)
    const [ValueCaderno, setValueCaderno] = React.useState("")
    const [ValueSecao, setValueSecao] = React.useState("")
    const [age, setAge] = React.useState('');
    //const [ChangeEvent, setChangeEvent] = React.useState(SelectChangeEvent || false)

    const getUrl = (caderno_value, secao_value) => {
        const options_get = {
            cadernos:  caderno_value || 0,
            secoes: secao_value || 0
    };

    axios.get("https://fastapi-selenium-production-30d6.up.railway.app/tjsp/servicos/consulta/cadernos_secoes?cadernos=0&secoes=0", {
        params: options_get,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                 }
    })
    .then(function (response) {
        console.log(response.data)
        setDataForm(response.data)
        setdataCadernos(response.data.list_cadernos)
        setdataSecoes(response.data.list_secoes)
     })
    .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
    })
    .finally(function () {
        // sempre será executado
    });
  
  }

  const handleChange_Caderno = (SelectChangeEvent) => {
    //setAge(event.target.value);
    console.log(SelectChangeEvent)
  };
  const handleChange_Seçoes = (SelectChangeEvent) => {
    //setAge(event.target.value)
    console.log(SelectChangeEvent)
  };
  
  const handleChange_age = (SelectChangeEvent) => {
    setAge(SelectChangeEvent.target.value);
};

    React.useEffect(() => {
        getUrl(undefined, undefined)
    }, []);

  return (
    <>
    <div className="content">
        <Form>
            <FormGroup>
                <Label style={{
                  backgroundColor: "transparent"
                }} for="exampleDate">
                Date
                </Label>
                <Input
                id="exampleDate"
                name="date"
                placeholder="date placeholder"
                type="date"
                />
            </FormGroup>
      <FormControl fullWidth>
        <FlexRow justifyContent={"center"} Background={"transparent"}
        style={{
          marginTop: "20px"
        }}>
        {dataCadernos && dataCadernos.length > 0 ? 
                <>
                <FormGroup>
                <FlexColumn>
                <LabelStyled id="label-Cadernos">Cadernos</LabelStyled>
                <Select 
                id="Cadernos" 
                Label="Cadernos" 
                name="label-Cadernos"
                placeholder="Escolha o Caderno" 
                onChange={handleChange_Caderno}
                sx={{     
                  borderColor: "#fff",
                  background: "#202841",
                  width: "70vw" }}>
                    {dataCadernos.map(caderno => 
                    <MenuItem  
                    value={caderno.value}> 
                    {caderno.text}
                    </MenuItem>
                    )}
                </Select>
                </FlexColumn>
                </FormGroup>
                </> :
                <>
                <CircularProgress/>
                </>
                }
        </FlexRow>
        <FlexRow justifyContent={"center"} Background={"transparent"}
        style={{
          marginTop: "50px"
        }}>
        {dataSecoes && dataSecoes.length > 0 && displaySecoes ?
                <> 
                <FormGroup>
                <FlexColumn>
                <LabelStyled style={{
                  backgroundColor: "transparent"
                }} for="label-Secoes">Seções</LabelStyled>
                <Select 
                id="Seções" 
                Label="Seções" 
                name="label-Secoes"
                placeholder="Escolha a Seção" 
                onChange={handleChange_Seçoes}
                sx={{     
                  borderColor: "#fff",
                  background: "#202841",
                  width: "70vw" }}>
                        {dataSecoes.map(secao => 
                        <MenuItem  
                        value={secao.value}> 
                            {secao.text}
                        </MenuItem>
                        )}
                </Select>
                </FlexColumn>
                </FormGroup>
                </>:
                <>
                <CircularProgress/>
                </>
                    }
        </FlexRow>
      </FormControl>
        </Form>       
    </div>
    </>
  );
}

export default Form_consulta;

/*
 <FormControl fullWidth>
        <InputLabel 
        id="demo-simple-select-label"
        sx={{     
            color: "#fff"
        }}
        >Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={(e) => setAge(e.target.value)}
          sx={{     
            borderColor: "#fff",
            background: "#202841",
            width: "70vw" }}
        >
          <MenuItem value={10} sx={{ borderColor: '#fff' }}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
*/
/*
            <CardText>
              Data  
            </CardText>
            <Input
            bsSize="lg"
            className="mb-3"
            placeholder={date.toLocaleDateString()}
            />
*/
/*
<Form>
  <Input
    bsSize="lg"
    className="mb-3"
    placeholder="lg"
  />
  <Input
    className="mb-3"
    placeholder="default"
  />
  <Input
    bsSize="sm"
    className="mb-3"
    placeholder="sm"
  />
  <Input
    bsSize="lg"
    className="mb-3"
    type="select"
  >
    <option>
      Large Select
    </option>
  </Input>
  <Input
    className="mb-3"
    type="select"
  >
    <option>
      Default Select
    </option>
  </Input>
  <Input
    bsSize="sm"
    className="mb-3"
    type="select"
  >
    <option>
      Small Select
    </option>
  </Input>
</Form>
*/