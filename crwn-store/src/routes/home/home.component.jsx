import CATEGORIES from '../../utils/categories.json'
import Directory from '../../components/directory/directory.component';

const Home = () => {

  return (
    <div>
      <Directory categoriesProp={CATEGORIES} />
    </div>
  );
}

export default Home;
