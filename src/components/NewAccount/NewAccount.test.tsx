import { NewAccount } from './NewAccount'
import { screen, render } from '@testing-library/react'

const children = 'Hello World'

describe('New Account component', () => {
  it('Should be able to show component New Account', () => {
    render(<NewAccount>{children}</NewAccount>)
  })
})