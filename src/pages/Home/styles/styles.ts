import styled from "styled-components";

export const Page = styled.div `
  background: #0D1117;
  
  img {
    width: 4rem;
  }

  header {
    a {
      text-decoration: none;
      color: #E0E6EC;
      transition: all ease-in .3s;

      &:hover {
        border-bottom: 2px solid #F78166;

      }
    }
  }

  .avatar-github {
    width: 3.7rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all ease-in .2s;

    &:hover {
      filter: brightness(.9);
    }
  }

  input {
    margin-left: 1rem;
    font-size: 1rem;
    background: #0D1117;
    color: #E0E6EC;
    border: 1px solid #30363D;
    width: 50%;

    &::placeholder {
      font-size: 14px;
    }
  }
`

export const Div = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
  position: relative;
  padding-bottom: 2rem;
  
  img {
    border-radius: 50%;
    width: 19rem;
    margin-top: 1rem;
    border: 1.7px solid #30373B;
  }

  .span-name {
    margin-top: 1rem;
    font-size: 1.7em;    
    font-weight: 600;
    letter-spacing: 1.2px;
  }

  .span-login {
    font-size: 1.3em;
    color: #8B949E;
    font-weight: 500;
    letter-spacing: 1.2px;
  }

  .span-bio {
    margin-top: 1.7rem;
    width: 19rem;
    letter-spacing: 1.2px;
  }

  .span-location {
    margin-top: 1.2rem;
    letter-spacing: 1px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-self: center;
    font-size: 1rem;
    letter-spacing: 1px;
    position: absolute;
    margin-top: 1rem;
  }
  
  .message {
    font-size: 30px;
    align-self: center;
    color: #8B949E;
    position: absolute;
    margin-top: 1rem;
  }

  a {
    border: 1.7px solid #363B42;
    margin-top: 1.7rem;
    width: 17rem;
    background: #21262D;
    border-radius: 6px;
    font-size: 14px;
    text-align: center;
    padding: .4rem 0;
    color: #f1f1f1;
    transition: all ease-in .1s;

    &:hover {
      filter: brightness(.9);
    }
  }
`

export const Container = styled.div `
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  align-items: center;
  gap: 1.1rem;
`