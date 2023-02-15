import {fireEvent, screen} from "@testing-library/react";
import {Sidebar} from "widgets/Sidebar";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe('Render Sidebar', () => {
  	test('Sidebar test', () => {
	  	renderWithTranslation( <Sidebar />)
	  	expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  	})

	test('Sidebar toggle test', () => {
		renderWithTranslation( <Sidebar />)
		const btn = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
		fireEvent.click(btn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
	})
})
