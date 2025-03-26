import categories from '../../utils/categories.json'
import Directory from '../../components/directory/directory.component';

const Home = () => {

  return (
    <div>
      <Directory categoriesProp={categories} />
    </div>
  );
}

export default Home;
