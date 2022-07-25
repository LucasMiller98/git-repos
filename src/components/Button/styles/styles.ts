import styled from 'styled-components'

export const Button = styled.button `
  background: #41A44E;
  color: #f1f1f1;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  width: 100%;
  text-align: center;
  border: 1px solid #389148;
  padding: .4rem 0;
  transition: all ease-in .2s;

  &:hover {
    filter: brightness(.9);
  }
`