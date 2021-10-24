import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { CharacterDetail } from '@store/characters';
import { styles } from './CharacterListInfoStyles';

interface CharacterListInfoProps {
    character: CharacterDetail;
    index: number;
}

const CharacterListInfo: FunctionComponent<CharacterListInfoProps> = (
    props: CharacterListInfoProps
): JSX.Element => {
    const { character, index } = props;
    return (
        <GridListTile key={index}>
            <img src={character.img} alt={character.name} />
            <Link to={`/characters/${character.char_id}`}>
                <GridListTileBar
                    title={character.name}
                    subtitle={<span>{character.nickname}</span>}
                />
            </Link>
        </GridListTile>
    );
};

export default CharacterListInfo;
