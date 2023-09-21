import Link from 'next/link';
import Featured from '@/components/Featured';
import Menu from '@/components/Menu';
import CardList from '@/components/CardList';
import CategoryList from '@/components/CategoryList';
import Pagination from '@/components/Pagination';

export default function Home() {
  return <div>
    <Featured />
    <CategoryList />
    <div>
      <CardList />
      <Menu/>
    </div>
  </div>;
}
