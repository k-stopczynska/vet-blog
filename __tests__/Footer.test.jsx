import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer', () => {
	it('should have developer name in footer', () => {
		render(<Footer />);
		const devName = screen.getByText('k-stopczynska');
		expect(devName).toBeInTheDocument();
	});

	it('should have year in footer', () => {
		render(<Footer />);
		const year = screen.getByText(/@2023/);
		expect(year).toBeInTheDocument();
	});
});
