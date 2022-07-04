import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card1 from './Card';
import api from '../../../services/api';



var resposta;
var indiceAnimais=0;
function GridCards() {
    
  const baseURL="https://api.github.com/users/leoneder";
const [user, setUser] = useState([]);


var tempp;


useEffect(() => {
  
    api
      
      .get("http://192.168.1.10:8080/bichos")
      .then((response) => {
        setUser(response.data)
        
    })
      
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  
    const imagem1 = [];
  imagem1[1]="https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-articles_media_mobile-1.jpg";
  imagem1[2]="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png" 
  //console.log(tempp)

  return (
      <Container fluid="md" ClassName="GridCards">
        <Row>
          <Col><Card1 title={user[indiceAnimais]?.endereço} imagemURL={user[indiceAnimais]?.imagem.url}></Card1></Col>
          <Col><Card1 title={user[indiceAnimais]?.imagem.url} imagemURL={user[indiceAnimais]?.imagem.url}></Card1></Col>
          <Col><Card1 title={user[indiceAnimais]?.imagem.url} imagemURL={user[indiceAnimais]?.imagem.url}></Card1></Col>
         
        </Row>         
        <Row>
        <Col><Card1 title={user[indiceAnimais]?.imagem.url} imagemURL={user[indiceAnimais]?.imagem.url}></Card1></Col>
          <Col><Card1 title={user[indiceAnimais]?.imagem.url} imagemURL={user[indiceAnimais]?.imagem.url}></Card1></Col>
          <Col><Card1 title={user[indiceAnimais]?.imagem.url} imagemURL={user[indiceAnimais]?.imagem.url}></Card1></Col>

        </Row>
      </Container>

    //  <div>
    //      <p>leo1 {user[1]?.imagem.url}</p>
    //      <p>leoo+p</p> 
    //  </div>
  );
}

export default GridCards;