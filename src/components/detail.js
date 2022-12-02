import { useParams } from "react-router-dom";
import {FormattedMessage} from 'react-intl';
import Banda from './banda'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";




const { useEffect, useState } = require("react");


export default function Detail() {
    
    const params = useParams();


    const [bandas, setBandas] = useState([]);


  
  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setBandas(data);
      });
  }, []);

  let element = {}
  const findElement = (array, id) => {
    for (let i = 0; i < array.length; i++) {
      element = array[i];
      if (element.id === id) {
        return element;
      }
    }
    return -1;
  }
  let bandaAntigua = ""
  let anosAntigua = 0

  for(var i=0; i<bandas.length ; i++){
    let anoAntiguaActual = 2022 - bandas[i].foundation_year
    if(anoAntiguaActual>anosAntigua)
    {
        anosAntigua = anoAntiguaActual
        bandaAntigua = bandas[i].name
    }
 
  }

  let banda = findElement(bandas, params.bandaId);

  return (
    <div>
      <Row>

        <Col>
        <h1><FormattedMessage id="BandasMusicales"/></h1>
    <table className="table">
      <thead className='ligth'>
        <tr>
          <th scope="col" className='gray'>#</th>
          <th scope="col"><FormattedMessage id="Nombre"/></th>
          <th scope="col"><FormattedMessage id="Pais"/></th>
          <th scope="col"><FormattedMessage id="Genero"/></th>
          <th scope="col"><FormattedMessage id="Fundacion"/></th>
        </tr>
      </thead>
      <tbody>
        {bandas.map((bandaP, i) => (
          <Banda key={i} banda={bandaP} />
        ))}
      </tbody>
    </table>
    <FormattedMessage id="MasAntigua"/><text>{bandaAntigua}</text><FormattedMessage id="Fundada"/>{anosAntigua}<FormattedMessage id="anos"/>
        </Col>
        <Col>
        <Card style={{ width: "20rem", height: "30rem" }}  className="mb-3">

     <Card.Img
       style={{ height: "15rem", width: "20rem" }}
       variant="top"
       src={banda.image}
       alt={banda.description}
     />
     <Card.Body>
       <Card.Title>
         
           {banda.name}
       </Card.Title>
       <Card.Text>{banda.description}</Card.Text>
     </Card.Body>
   </Card>
        </Col>
      
      </Row>
    
  </div>
  
 );
}