import Featured from '@/components/Featured';
import CardList from '@/components/CardList';
import CategoryList from '@/components/CategoryList';
import RootLayout from './layout';

export default function Home({ searchParams }) {
	const page = parseInt(searchParams.page) || 1;

	return (
		<RootLayout>
			<Featured />
			<CategoryList />
			<CardList page={page} />
		</RootLayout>
	);
}
