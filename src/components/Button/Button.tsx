import * as S from './styles/styles'
import { ButtonProps } from './types/types'

export function Button(props: ButtonProps) {
  
  const { children } = props

  return (
    <>
      <S.Button type='submit'>
        { children }
      </S.Button>
    </>
  )
}