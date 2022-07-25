import * as S from './styles/styles'
import { ListProps } from './types/types'

export function List(props: ListProps) {

  const { children } = props
  
  return (
    <>
      <S.Li>{ children }</S.Li>
    </>
  )
}