import { AllRoutes } from './routes'
import { render } from '@testing-library/react'

describe('renders all routes', () => {

  it('should be able to render all routes', () => {
    render(<AllRoutes />)
  })
})