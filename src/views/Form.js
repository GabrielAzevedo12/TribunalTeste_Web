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
import { Card, CardHeader, CardBody, Row, Col, Input, Form, CardText, Spinner, FormGroup, Label, Button } from "reactstrap";
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
const list_cadernos = require("../dados/json/cadernos.json")
const list_secoes = require("../dados/json/secao.json")
const dataForm_local = {list_cadernos, list_secoes: list_secoes[0]}
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
    const [dataCadernos, setdataCadernos] = React.useState(list_secoes)
    const [dataSecoes, setdataSecoes] = React.useState(list_secoes[0])
    const [displaySecoes, setdisplaySecoes] = React.useState(true)
    const [ValueCaderno, setValueCaderno] = React.useState("")
    const [ValueSecao, setValueSecao] = React.useState("")
    const [age, setAge] = React.useState('');
    //const [ChangeEvent, setChangeEvent] = React.useState(SelectChangeEvent || false)

    const getUrl = (caderno_value, secao_value) => {

        axios.get("https://fastapi-selenium-production-30d6.up.railway.app/tjsp/servicos/consulta", {
            params: {
                cadernos:  caderno_value || 0,
                secoes: secao_value || 0
            },
            headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        })
        .then(function (response) {
            if (response) {
                console.log(response.data)
                setDataForm(response.data)
            }
        })
        .catch(function (error) {
            // manipula erros da requisição
        console.error(error);
        })
        .finally(function () {
            // sempre será executado
        });

     }

    const getSecoes = (caderno_value, secao_value) => {

        setdisplaySecoes(false)

        axios.get("https://fastapi-selenium-production-30d6.up.railway.app/tjsp/servicos/consulta/secoes2", {
          params: {
              "cadernos": caderno_value || 0,
              "secoes": secao_value || 0
          }
        })
        .then(function (response) {
          // manipula o sucesso da requisição
          if(response) {
            setdataSecoes(response.data)
            setdisplaySecoes(true)
          }
        })
        .catch(function (error) {
          // manipula erros da requisição
          console.error(error);
        })
        .finally(function () {
          // sempre será executado
        });

      }

    const handleChange_Caderno = (e) => {
        //setAge(event.target.value);
        setValueCaderno(e.target.selectedIndex)
    };
    const handleChange_Seçoes = (e) => {
        //setAge(event.target.value)
        console.log(e)
    };

    React.useEffect(() => {
        //getUrl(undefined, undefined)
        console.log(dataForm_local)
        setDataForm(dataForm_local)
        setdataCadernos(dataForm_local.list_cadernos)
        setValueCaderno(0)
        setdataSecoes(dataForm_local.list_secoes)
    }, []);

    React.useEffect(() => {
        setdataSecoes(list_secoes[ValueCaderno])
    }, [ValueCaderno]);

  return (
    <>
    <div className="content">
        <Form 
        style={{
            marginTop: "10vh"
        }}>
            <FormGroup>
                <Label 
                style={{
                  backgroundColor: "transparent",
                  marginTop: "5vh"
                }}
                for="exampleDate">
                Date
                </Label>
                <Input
                id="exampleDate"
                name="date"
                placeholder="date placeholder"
                type="date"
                />
        {dataCadernos && dataCadernos.length > 0 ? 
                <>
                <Label 
                id="label-Cadernos"
                style={{
                  backgroundColor: "transparent",
                  marginTop: "5vh"
                }} 
                for="label-Cadernos">Cadernos</Label>
                <Input 
                id="Cadernos"  
                name="label-Cadernos"
                placeholder="Escolha o Caderno" 
                onChange={handleChange_Caderno}
                type="select">
                    {dataCadernos.map(caderno => 
                    <option  
                    value={caderno.value}> 
                    {caderno.text}
                    </option>
                    )}
                </Input>
                </> :
                <>
                <CircularProgress/>
                </>
                }
        {dataSecoes && dataSecoes.length > 0 && displaySecoes ?
                <> 
                <Label 
                id="label-Secoes"
                style={{
                  backgroundColor: "transparent",
                  marginTop: "5vh"
                }} 
                for="label-Secoes">Secoes</Label>
                <Input 
                id="Seções"  
                name="label-Secoes"
                placeholder="Escolha a Seção" 
                onChange={handleChange_Seçoes}
                type="select">
                        {dataSecoes.map(secao => 
                        <option  
                        value={secao.value}> 
                            {secao.text}
                        </option>
                        )}
                </Input>
                </>:
                <>
                <CircularProgress/>
                </>
                    }
                     <FlexRow 
                     justifyContent={"center"} 
                     Background={"transparent"}
                     style={{
                        marginTop: "5vh"
                     }}>
                        <Button color="danger" id="Button_Consultar">Consultar</Button>
                    </FlexRow>
            </FormGroup>
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