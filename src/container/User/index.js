import React, { useState, useEffect } from "react";
import {
  ContainerGeral,
  Container,
  Imagen,
  H1,
  Div,
  ContainerPedido,
  Button
} from "./styles";


import Hamburg from "../../assets/BURGUER11.png";
import lixeira from "../../assets/18297 4.svg";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  

  const navegar = useNavigate()
 
  useEffect(()=>{
   async function mostraUser(){
       const {data:mostrar} = await axios.get("https://api-node-1ltr.vercel.app/order")
       setUsers(mostrar)
    }
    mostraUser()
  },[])
  async function delet(userId) {
    await axios.delete(`https://api-node-1ltr.vercel.app/order/${userId}`)
    const newUser = users.filter((user) => user.id !== userId);
    setUsers(newUser);
  }
  function voltar(){
    navegar("/")
  }
  return (
    <ContainerGeral>
      <Container>
        <Imagen src={Hamburg} />
        <H1>Pedidos!</H1>
        <ul>
          {users.map((user) => (
            <ContainerPedido>
              <Div key={user.id}>
                <p>{user.Pedido}</p>
                <p className="Nome">{user.Nome}</p>
              </Div>
              <button onClick={() => {delet(user.id); }}
              >{" "}
                <img src={lixeira} alt="" />
              </button>
            </ContainerPedido>
          ))}
        </ul>
        <Button onClick={voltar} >Voltar</Button>
      </Container>
    </ContainerGeral>
  );
}

export default App;
