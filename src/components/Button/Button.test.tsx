import { Button } from './Button'
import { screen, render } from '@testing-library/react'

const typeButton = 'submit'

describe('renders button component with a children text.', () => {

  it('should be able to show the button element', () => {
    render(<Button type={ typeButton }>Text</Button>)

    const buttonEl = screen.getByRole('button')
    expect(buttonEl).toBeInTheDocument()
  })
  
})

