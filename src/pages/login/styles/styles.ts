import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  width: 100vw;

  img {
    position: absolute;
    width: 5rem;
    top: 30px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  height: 100vh;


`

export const Form = styled.form`
  background: #F6F8FA;
  height: 40.5%;
  width: 19rem;
  padding: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #D0D7DE;
  border-radius: 6px;
  gap: 1rem;
  color: #262B31;

`