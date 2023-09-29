import Featured from '@/components/Featured';
import CardList from '@/components/CardList';
import CategoryList from '@/components/CategoryList';

export default function Home({ searchParams }) {
	const page = parseInt(searchParams.page) || 1;

	return (
		<>
			<h3>I try but something is blocking me...</h3>
			{/* <Featured />
			<CategoryList />
			<CardList page={page} /> */}
		</>
	);
}
