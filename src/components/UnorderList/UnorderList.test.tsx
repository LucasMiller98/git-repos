import { Ul } from './UnorderList'
import { screen, render } from '@testing-library/react'

const children = 'Hello World!'

describe('Unorder List', () => {
  it('Should be able render unorder list', () => {
    render(<Ul>{ children }</Ul>)
  })
})