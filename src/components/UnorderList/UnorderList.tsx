import * as S from './styles/styles'
import { UlProps } from './types/types'

export function Ul(props: UlProps) {

  const { children } = props
  
  return (
    <>
      <S.Ul>
        { children }
      </S.Ul>
    </>
  )
}