import styled from 'styled-components'

export const Field = styled.input `
  border-radius: 6px;
  border: 1px solid #D0D7DE;
  outline: none;
  padding: .3rem;
  color: #262B31;
  font-size: .9rem;
  width: 100%;
  transition: all ease-in .1s;

  &:focus {
    border: 1px solid #446E9D;
  }
`

export const Label = styled.label `
  font-size: .9rem;
  align-self: flex-start;
  color: #262B31;
  font-weight: 400;
`