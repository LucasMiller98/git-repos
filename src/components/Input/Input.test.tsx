import { screen, render } from '@testing-library/react'
import { Input } from './Input'

const handleChange = () => {
  console.log('Hello World')
}

describe('renders inputs and labels', () => {
  
  it('should be able to show input element', () => {
    render(<Input htmlFor='testing input' label='Test' type='text' onChange={handleChange} values='Hello World' />)

    const inputEl = screen.getByText('Test')
    expect(inputEl).toBeInTheDocument()

  })


})