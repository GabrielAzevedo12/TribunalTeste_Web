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
import axios from "axios";

function Form_consulta() {
    const [date, setDate] = React.useState(new Date());
    const [dataForm, setDataForm] = React.useState('');
    const [urlPdf, seturlPdf] = React.useState('');
    const [dataCadernos, setdataCadernos] = React.useState(dataForm.list_cadernos)
    const [dataSecoes, setdataSecoes] = React.useState(dataForm.list_secoes)
    const [displaySecoes, setdisplaySecoes] = React.useState(true)
    const [ValueCaderno, setValueCaderno] = React.useState("")
    const [ValueSecao, setValueSecao] = React.useState("")

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
     })
    .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
    })
    .finally(function () {
        // sempre será executado
    });
  
  }

    React.useEffect(() => {
        getUrl(undefined, undefined)
    }, []);

  return (
    <>
    <div className="content">
        <Form>
            <FormGroup>
                <Label for="exampleDate">
                Date
                </Label>
                <Input
                id="exampleDate"
                name="date"
                placeholder="date placeholder"
                type="date"
                />
            </FormGroup>
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
            bsSize="lg"
            className="mb-3"
            type="select"
            >
                <option>
                    Large Select
                </option>
            </Input>
            <Row>
                {dataCadernos && dataCadernos.length > 0 ? 
                <Input bsSize="lg" className="mb-3" type="select" id="Cadernos" LabelText="Cadernos" placeholder="Escolha o Caderno" LabelText_text={textSelect} getSecoes={getSecoes} setValueCaderno={setValueCaderno}>
                        {dataCadernos.map(caderno => <option shadow={2} label={caderno.text} value={caderno.value} /> )}
                </Input>:
                <Spinner>
                    Loading...
                </Spinner>
                }
            </Row>
            <Row>
                {dataSecoes && dataSecoes.length > 0 && displaySecoes ? 
                <Input bsSize="lg" className="mb-3" type="select" id="Seçoes" LabelText="Seções" placeholder="Escolha a Seção" LabelText_text={textSelect} setValueSecao={setValueSecao}>
                    {dataSecoes.map(secao => <option shadow={2} label={secao.text} value={secao.value} /> )}
                </Input>:
                <Spinner>
                    Loading...
                </Spinner>
                    }
            </Row>
        </Form>       
    </div>
    </>
  );
}

export default Form_consulta;

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