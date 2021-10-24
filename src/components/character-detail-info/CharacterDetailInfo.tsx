import './CharacterDetailInfo.scss';

interface CharacterDetailInfoProps {
    label: string;
    description: string | number;
}

export const CharacterDetailInfo = (props: CharacterDetailInfoProps) => {
    const { label, description } = props;
    return (
        <div className='flex character-detail-info'>
            <div className='font-size--large'>
                <span>{label}:</span>
            </div>
            <div className='font-size--large'>
                <span>{description}</span>
            </div>
        </div>
    );
};
