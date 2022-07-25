import { Header } from './Header'
import { screen, render } from '@testing-library/react'

describe('Header component', () => {
  it('Should be able render Header component with children', () => {
    const { container } = render(<Header>Text</Header>)

    container.querySelector('.img-github')

    expect(container).toBeInTheDocument()
  })
})