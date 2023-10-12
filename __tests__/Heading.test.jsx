import { render, screen } from '@testing-library/react';
import Heading from '@/components/Heading';

it('should be in the document', () => {
	render(<Heading />);
	const heading = screen.getByText(/wyprany z empatii/i);
	expect(heading).toBeInTheDocument();
});
