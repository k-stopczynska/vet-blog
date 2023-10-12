import { render, screen } from '@testing-library/react';
import Author from '@/UI/Author';

describe('Author element', () => {
	it('should have an image element', () => {
		render(
			<Author
				author='john doe'
				timestamp='2023-10-10'
				image='/console.png'
			/>,
		);
		const image = screen.getByAltText(/author image/i);
		expect(image).toBeInTheDocument();
	});

	it('should have a date', () => {
		render(
			<Author
				author='john doe'
				timestamp='2023-10-10'
				image='/console.png'
			/>,
		);
		const date = screen.getByText(/2023-10-10/i);
		expect(date).toBeInTheDocument();
    });
    
    	it('should have an author data', () => {
			render(
				<Author
					author='john doe'
					timestamp='2023-10-10'
					image='/console.png'
				/>,
			);
			const authorData = screen.getByText(/doe/i);
			expect(authorData).toBeInTheDocument();
		});
});
