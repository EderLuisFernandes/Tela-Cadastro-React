import styled from "styled-components";
import ImgBack from "../../assets/fogo1.jpg";

export const ContainerGeral = styled.div`
  background: url("${ImgBack}") center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  flex-direction: column;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(40px);
  justify-content: center;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(218, 165, 32);
`;
export const Imagen = styled.img`
  height: 207px;
  width: 230px;
  object-fit: cover;
  margin: 0 auto;
`;

export const H1 = styled.h1`
  color: #fff;
  text-align: center;
  margin: 9px;
`;


export const Button = styled.button`
  width: 260px;
  height: 48px;
  margin: 20px auto;
  padding: 10px;
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(23, 25, 29, 0.7959558823529411) 6%,
    rgba(55, 55, 00) 44%,
    rgba(0, 0, 0, 0.8743872549019608) 98%
  );
  font-size: 20px;
  border-radius: 20px;
  border: none;
  color: white;
  cursor: pointer;
`;

export const ContainerPedido = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  height: 101px;
  justify-content: space-between;
  margin: 20px;
  border-radius: 20px;
  padding: 10px;
  img {
    margin: 10px;
    cursor: pointer;
    width: 20px;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 0;
  justify-content: space-between;
  width: 200px;
  line-height: 20px;
  p {
    margin-left: 15px;
    color:rgba(255, 255, 255, 0.67777) ;
    font-weight: bolder;
    margin-top: 11px;
  }
  .Nome {
    color:  rgba(255, 255, 255, 1);
  }
  
`;
