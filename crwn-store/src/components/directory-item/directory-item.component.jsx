import './directory-item.styles.scss';

const DirectoryItem = ({categoryProp}) => {
    const { title, imageUrl } = categoryProp;
    return (
        <div className='directory-item-container'>
            <div
                className='background-image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='directory-item-body'>
                <h2>{title}</h2>
                <span>Shop Now</span>
            </div>
        </div>
    );
};

export default DirectoryItem;