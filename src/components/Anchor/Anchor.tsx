import { AnchorProps } from './types/types'
import * as S from './styles/styles'

export function Anchor(props: AnchorProps) {

  const { 
    children, 
    href, 
    target, 
    title
  } = props
  
  return (
    <>
      <S.A target={target} title={title} href={href}>
        { children }
      </S.A>
    </>
  )
}