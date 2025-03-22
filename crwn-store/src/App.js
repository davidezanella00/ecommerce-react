import categories from './utils/categories.json'
import Directory from './components/directory/directory.component';

const App = () => {

  return (
    <div>
      <Directory categoriesProp={categories} />
    </div>
  );
}

export default App;
