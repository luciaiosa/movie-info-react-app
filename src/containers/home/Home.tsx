import { FunctionComponent } from 'react';
import CharactersList from '@components/characters-list/CharactersList';
import { styles } from './HomeStyles';

const Home: FunctionComponent = (): JSX.Element => {
    const classes = styles();

    return (
        <div className={classes.root}>
            <CharactersList />
        </div>
    );
};

export default Home;
