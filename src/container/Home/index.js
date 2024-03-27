import React, { useState, useRef } from "react";
import {
  ContainerGeral,
  Container,
  Imagen,
  Button,
  H1,
  Label,
  Input,
  Seguinte,
} from "./styles";
import {useNavigate} from "react-router-dom";

import Hamburg from "../../assets/BURGUER11.png";
import carrinho from "../../assets/carrinho-de-compras.png";
import axios from "axios";


function App() {
  const [users, setUsers] = useState([]);
  const [contador, setContador] = useState(0);
  const Pedidos = useRef();
  const nomeCliente = useState();

  const navegar = useNavigate();

  async function addNewUser() {
    const { data: novousuario } = await axios.post(
      "https://api-node-1ltr.vercel.app/order",
      {
        Pedido: Pedidos.current.value,
        Nome: nomeCliente.current.value,
       
      }
    );
    setUsers([...users, novousuario]);

    setContador(contador + 1);
  }
  function PageSeguinte() {
    navegar("/usuarios");
  }
  return (
    <ContainerGeral>
      <Container>
        {contador >= 0 && (
          <Seguinte onClick={PageSeguinte}>
            <img alt="" src={carrinho} />
            <span>{contador}</span>
          </Seguinte>
        )}
        <Imagen src={Hamburg} />
        <H1>Faça seu pedido!</H1>

        <Label>Pedido:</Label>
        <Input ref={Pedidos} placeholder="1 Coca-Cola, 1-X Salada" />

        <Label>Nome do Cliente:</Label>
        <Input ref={nomeCliente} placeholder="Steve Jobs" />

        <Button onClick={addNewUser}>Novo Pedido</Button>
      </Container>
    </ContainerGeral>
  );
}

export default App;
