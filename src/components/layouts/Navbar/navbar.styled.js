import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #333;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  justify-content: center;
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column; // Ubah tata letak menjadi vertikal
  }
`;
export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column; // Ubah tata letak menjadi vertikal
  }
`;

export const Li = styled.li`
  float: left;
  text-decoration: none;
  list-style-type: none;
  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  input {
    width: 100%;
    height: 30px;
    padding: 5px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
  }
  

`;
