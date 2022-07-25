import { screen, render } from '@testing-library/react'
import { Home } from './Home'

describe('renders home screen', () => {

  it('should be able to show home screen with input element, img element and unordered list', () => {
    const { container } = render(<Home />)  

    container.querySelector('.img-github')
    container.querySelector('.input-search')

    expect(container).toBeInTheDocument()
    expect(container).toBeInTheDocument()
  })
})