import { screen, render } from '@testing-library/react'
import { Title } from './Title'

describe('renders title, element', () => {

  it('should be able to show title element', () => {
    render(<Title>Hello World!</Title>)
  })
})