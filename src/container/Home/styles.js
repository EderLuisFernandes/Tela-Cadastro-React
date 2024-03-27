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

export const Label = styled.label`
  color: rgba(255, 255, 255, 0.75);
  margin: 20px 0 2px 15px;
`;
export const Input = styled.input`
  width: 300px;
  height: 48px;
  border-radius: 10px;
  padding: 15px;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  margin: 0 auto;
  outline: none;
  color: white;
`;

export const Button = styled.button`
  width: 300px;
  height: 48px;
  margin: 20px auto;
  margin-bottom: 0;
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

export const Seguinte = styled.button`
 width:100%;
 height: 50px;
 color: white;
 background: none;
 border: none;
 display: flex;
 justify-content: end;
 padding: 2px 5%;
 align-items: center;
 
 cursor: pointer;
 img{
  height: 50px;
  width: 50px;
 }
`