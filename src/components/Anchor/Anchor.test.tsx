import { Anchor } from './Anchor'
import { screen, render } from '@testing-library/react'

const children = 'Hello World!'

describe('Anchor Component', () => {
  it('Should be able to show anchor component on screen', () => {
    render(<Anchor target='_blank' href='' title=''>{ children }</Anchor>)
  })
})