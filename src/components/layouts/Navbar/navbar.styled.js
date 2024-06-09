import styled from "styled-components";

export const Nav = styled.nav`
  background-color: black;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 20px 0px;
  @media (max-width: 768px) {
    flex-direction: column; 
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
    flex-direction: column;
    padding: 10px 0; // Tambahkan padding untuk tampilan vertikal
  }
`;

export const Li = styled.li`
  float: left;
  text-decoration: none;
  list-style-type: none;
  margin-right: 15px; // Tambahkan margin kanan untuk jarak antar item

  @media (max-width: 768px) {
    float: none; // Hapus float untuk tampilan vertikal
    margin-right: 0; 
    margin-bottom: 10px; // Tambahkan margin bawah untuk jarak antar item
    width: 100%; // Lebar penuh pada tampilan vertikal
  }

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
