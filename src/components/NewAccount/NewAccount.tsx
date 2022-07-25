import { ContainerProps } from 'react-bootstrap'
import * as S from './styles/styles'

export function NewAccount(props: ContainerProps) {

  const { children } = props
  
  return (
    <>
      <S.Container>
        { children } 
      </S.Container>
    </>
  )
}