import { screen, render } from '@testing-library/react'
import { Img } from './Img'

const handleClick = () => {
  console.log('Hello World!')
}

describe('renders the github logo', () => {

  it('should be able to show github logo', () => {
    render(<Img alt='Desc image' src='image' onClick={handleClick}/>)


  })
})