import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

// 簡単なテスト用コンポーネント
const TestComponent = () => {
  return <div>Hello Testing Library!</div>
}

describe('Testing Library Check', () => {
  it('should render component', () => {
    render(<TestComponent />)
    expect(screen.getByText('Hello Testing Library!')).toBeInTheDocument()
  })
})