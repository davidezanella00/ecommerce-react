import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const Directory = ({ categoriesProp }) => {
    return (
        <div className='directory-container' >
            {categoriesProp
                .map(({ id, ...category }) => (
                    <CategoryItem
                        key={id}
                        categoryProp={category}
                    />
                ))}
        </div>
    );
}

export default Directory;