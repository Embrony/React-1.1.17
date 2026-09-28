import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

test('показывает заголовок', () => {
  render(<h1>Привет!</h1>)

  const heading = screen.getByRole('heading', {
    name: 'Привет!',
  })

  expect(heading).toBeInTheDocument()
})