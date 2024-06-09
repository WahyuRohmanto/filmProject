import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 0;
  background-color: #333;
  button {
    font-family: "Poppins", sans-serif;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 10px;
    cursor: pointer;
    // Add hover effects, different variants, etc. as needed
    &:hover {
      opacity: 0.8;
    }
  }
  .bt1 {
    color: #fff;
    background-color: #ff0000;
    border-radius: 5px;
    border: none;
  }
  .bt2 {
    background-color: none;
    border-radius: 5px;
    color: #ff0000;
    border: 1px solid #ff0000;
  }
  .container-button {
    display: block;
    background-color: #fff;
    border-color: #ffff;
    padding: 5rem 5rem;
  }
`;

