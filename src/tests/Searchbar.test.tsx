import { render, screen, fireEvent } from '@testing-library/react'
import SearchComponent from '@/components/Searchbar'
import '@testing-library/jest-dom'
import { useRouter } from 'next/navigation'

// Mock next/navigation router
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}))

describe('SearchComponent', () => {
    const push = jest.fn()

    beforeEach(() => (useRouter as jest.Mock).mockReturnValue({ push }))

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('renders input and search button', () => {
        render(<SearchComponent />)
        expect(screen.getByPlaceholderText(/search countries/i)).toBeInTheDocument()
        expect(screen.getByText(/search/i)).toBeInTheDocument()
    })

    it('allows user to type in input', () => {
        render(<SearchComponent />)
        const input = screen.getByPlaceholderText(/search countries/i) as HTMLInputElement
        fireEvent.change(input, { target: { value: 'Germany' } })
        expect(input.value).toBe('Germany')
    })

    it('submits query and navigates to search page', () => {
        render(<SearchComponent />)
        const input = screen.getByPlaceholderText(/search countries/i)
        const button = screen.getByText(/search/i)

        fireEvent.change(input, { target: { value: 'Brazil' } })
        fireEvent.click(button)

        expect(push).toHaveBeenCalledWith('/search?query=Brazil')
    })

    it('does not push if input is empty', () => {
        render(<SearchComponent />)
        const button = screen.getByText(/search/i)

        fireEvent.click(button)

        expect(push).not.toHaveBeenCalled()
    })
})
