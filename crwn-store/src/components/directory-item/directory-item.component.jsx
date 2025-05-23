import { useNavigate } from 'react-router-dom'
import { BackgroundImage, DirectoryItemContainer, Body } from './directory-item.styles.jsx';

const DirectoryItem = ({ categoryProp }) => {
    const { title, imageUrl, route } = categoryProp;

    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);
    
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <Body onClick={onNavigateHandler}>
                <h2>{title}</h2>
                <span>Shop Now</span>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;