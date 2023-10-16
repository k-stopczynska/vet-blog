import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/about/page';

describe('About page', () => {
	it('should have a title O mnie', () => {
		render(<AboutPage />);
		const heading = screen.getByText(/o mnie.../i);
		expect(heading).toBeInTheDocument();
	});
});
