import Featured from '@/components/Featured';
import CardList from '@/components/CardList';
import CategoryList from '@/components/CategoryList';


export default function Home() {
	return (
		<div>
			<Featured />
			<CategoryList />
			<CardList />
		</div>
	);
}
