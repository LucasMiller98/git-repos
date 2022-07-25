import * as S from './styles/styles'
import { SpanProps } from './types/types'

export function Span(props: SpanProps) {

  const { children, className } = props
  
  return (
    <>
      <S.Span className={className}>{ children }</S.Span>
    </>
  )
}