import { screen, render } from '@testing-library/react'
import { List } from './List'

const children = 'Hello World!'

const handleClick = () => {
  console.log('Hello World!')
}

describe('List Component', () => {
  it('Should be able renders List component', () => {
    render(<List>{ children }</List>)
  })
})