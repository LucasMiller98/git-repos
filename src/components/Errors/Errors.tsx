import * as S from './styles/styles'
import { ErrorsProps } from './types/types'

export function Errors(props: ErrorsProps) {

  const { children } = props
  
  return (
    <S.Container>
      { children }
    </S.Container>
  )
}