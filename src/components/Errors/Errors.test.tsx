import { screen, render } from '@testing-library/react'
import { Errors } from './Errors'

const children = 'Hello World'

describe('Errors Component', () => {
  it('Should be able to show Errors component', () => {
    render(<Errors>{ children }</Errors>)
  })
})