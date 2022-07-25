import * as S from './styles/styles'
import { ImgProps } from './types/types'

export function Img(props: ImgProps) {

  const { alt, src, className, onClick } = props
  
  return (
    <>
      <S.Img onClick={onClick} className={className} src={src} alt={alt} />
    </>
  )
}