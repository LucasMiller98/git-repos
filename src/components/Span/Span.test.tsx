import { Span } from './Span'
import { screen, render } from '@testing-library/react'

const children = 'Hello World'
const className = 'span'

describe('Span Component', () => {
  it('Should be able render Span Component', () => {
    render(<Span className={ className }>{ children }</Span>)
  })
})