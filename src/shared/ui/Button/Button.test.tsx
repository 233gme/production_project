import {render, screen} from '@testing-library/react';
import {Button, ThemeButton} from 'shared/ui/Button/Button';

describe('Render Button', () => {
    test('Button test', () => {
      render(<Button>TEST</Button>)
      expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('Button get className', () => {
	  render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
	  expect(screen.getByText('TEST')).toHaveClass('clear')})
})
