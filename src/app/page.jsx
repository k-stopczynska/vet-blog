import Featured from '@/components/Featured';
import CardList from '@/components/CardList';
import CategoryList from '@/components/CategoryList';

export default function Home({ searchParams }) {
	const page = parseInt(searchParams.page) || 1;

	return (
		<>
			<Featured />
			<CategoryList />
			<CardList page={page} />
		</>
	);
}
