import './directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = ({ categoriesProp }) => {
    return (
        <div className='directory-container' >
            {categoriesProp
                .map(({ id, ...category }) => (
                    <DirectoryItem
                        key={id}
                        categoryProp={category}
                    />
                ))}
        </div>
    );
}

export default Directory;