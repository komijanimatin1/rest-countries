import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'
import '@testing-library/jest-dom'

describe('Navbar component', () => {
  it('renders the title text', () => {
    render(<Navbar />)
    const titleElement = screen.getByText(/where in the world/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('renders dark mode button with moon icon and label', () => {
    render(<Navbar />)

    // Check for "Dark Mode" label
    const buttonLabel = screen.getByText(/dark mode/i)
    expect(buttonLabel).toBeInTheDocument()

    // Check for FontAwesomeIcon (requires test ID)
    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
  })
})
