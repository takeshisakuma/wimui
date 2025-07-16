import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import React, { useState } from 'react'

const ButtonComponent = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <button onClick={() => setClicked(true)}>
      {clicked ? 'Clicked!' : 'Click me'}
    </button>
  )
}

describe('User Event Check', () => {
  it('should handle user interaction', async () => {
    const user = userEvent.setup()
    render(<ButtonComponent />)
    
    const button = screen.getByRole('button')
    await user.click(button)
    
    expect(screen.getByText('Clicked!')).toBeInTheDocument()
  })
})