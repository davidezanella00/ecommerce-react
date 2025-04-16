import { DirectoryContainer } from './directory.styles';
import DirectoryItem from '../directory-item/directory-item.component';
import CATEGORIES from '../../utils/categories.json'

const Directory = () => {
    return (
        <DirectoryContainer>
            {CATEGORIES.map(({ id, ...category }) => (
                <DirectoryItem
                    key={id}
                    categoryProp={category}
                />
            ))}
        </DirectoryContainer>
    );
}

export default Directory;