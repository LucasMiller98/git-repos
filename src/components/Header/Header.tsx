import * as S from './styles/styles'
import { HeaderProps } from './types/types'

export function Header(props: HeaderProps) {

  const { children } = props
  
  return (
    <>
      <S.Header>
        { children }
      </S.Header>
    </>
  )
}