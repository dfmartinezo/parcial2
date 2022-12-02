import {FormattedMessage, useIntl, IntlProvider} from 'react-intl';
import Banda from './banda'

const { useEffect, useState } = require("react");





const Bandas = () => {

  let locale = "en-US";
  let fondo = "table-dark"

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
  
  return (
      <div>
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
            {bandas.map((banda, i) => (
              <Banda key={i} banda={banda} />
            ))}
          </tbody>
        </table>
        <FormattedMessage id="MasAntigua"/><text>{bandaAntigua}</text><FormattedMessage id="Fundada"/>{anosAntigua}<FormattedMessage id="anos"/>
      </div>
  );
};

export default Bandas;
