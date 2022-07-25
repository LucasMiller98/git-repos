import * as S from './styles/styles' 
import { InputProps } from './types/types'

export function Input(props: InputProps) {

  const { label, htmlFor, className } = props
  
  return (
    <>
      <S.Label htmlFor={htmlFor}>
        { label }
      </S.Label>
      <S.Field 
        { ...props }

        className={className}
      />
    </>
  )
}