import * as S from './styles/styles'
import { TitleProps } from './types/types'

export function Title(props: TitleProps) {

  const { children } = props
  
  return (
    <>
      <S.Title>
        { children }
      </S.Title>
    </>
  )
}