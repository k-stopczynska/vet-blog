import { render, screen } from '@testing-library/react';
import Heading from '@/components/Heading';

it('should be in the document', () => {
	render(<Heading />);
	const heading = screen.getByText('Wyprany z empatii');
	expect(heading).toBeInTheDocument();
});
