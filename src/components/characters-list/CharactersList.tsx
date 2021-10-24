import { FunctionComponent, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';
import { Button } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import CustomError from '@components/common/error/Error';
import SearchBar from '@components/common/search-bar/SearchBar';
import { styles } from './CharactersListStyles';
import { useWindowResize } from '@hooks/useWindowResize';
import { AppStore } from '@store/app';
import {
    CharacterDetail,
    CharacterStore,
    getCharactersRequest,
    setSearchTerm
} from '@store/characters';
import settings from '../../appSettings.json';
import { useWindowScroll } from '@hooks/useWindowScroll';
import UiArrowUp from '@components/common/arrow-up/UiArrowUp';
import { loadMoreCharactersRequest } from '../../store/characters/Actions';

const CharactersList: FunctionComponent = (): JSX.Element => {
    const dispatch = useDispatch();
    const { t } = useTranslation('translations');
    const classes = styles();
    const windowWidth = useWindowResize().width;
    const currentVerticalScrollPos = useWindowScroll().top;

    const {
        characters,
        searchTerm,
        startsAt,
        showLoadMore,
        hasError,
        errorMessage
    } = useSelector<AppStore, CharacterStore>((state) => state.charactersStore);

    const [gridListColsNumber, setGridListColsNumber] = useState(2);
    const [showArrowUp, setShowArrowUp] = useState(false);

    useEffect(() => {
        dispatch(
            getCharactersRequest(
                settings.paginationConfig.indexStart,
                searchTerm
            )
        );
    }, []);

    useEffect(() => {
        setGridListColsNumber(calculateColsNumber(windowWidth));
    }, [windowWidth]);

    useEffect(() => {
        debouncedSave(searchTerm);
    }, [searchTerm]);

    useEffect(() => {
        setShowArrowUp(currentVerticalScrollPos > 200);
    }, [currentVerticalScrollPos]);

    const debouncedSave = useRef(
        debounce(
            (nextValue: string) =>
                dispatch(
                    getCharactersRequest(
                        settings.paginationConfig.indexStart,
                        nextValue
                    )
                ),
            100
        )
    ).current;

    const calculateColsNumber = (windowWidth: number) => {
        switch (true) {
            case windowWidth <= 620:
                return 1;
            case windowWidth > 620 && windowWidth <= 900:
                return 2;
            case windowWidth > 900 && windowWidth <= 1200:
                return 3;
            case windowWidth > 1200 && windowWidth <= 1500:
                return 4;
            default:
                return 5;
        }
    };

    const getHeaderClass = (windowWidth: number) => {
        return windowWidth < 990
            ? classes.pageHeaderMobile
            : classes.pageHeader;
    };

    const onSearchBarValueChange = (value: string) => {
        dispatch(setSearchTerm(value));
    };

    const onClickGetMoreResultsButton = () => {
        dispatch(loadMoreCharactersRequest(startsAt, searchTerm));
    };

    const renderList = (): JSX.Element => {
        if (errorMessage) {
            return <CustomError title={t('charactersList.errorMessage')} />;
        }
        const charactersList = characters.map(
            (character: CharacterDetail, index: number) => {
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
            }
        );
        return (
            <GridList
                cellHeight={550}
                cols={gridListColsNumber}
                className={classes.gridList}
            >
                {charactersList}
            </GridList>
        );
    };

    const renderContent = (): JSX.Element => {
        if (hasError) {
            return (
                <CustomError
                    title={t('charactersList.errorMessage')}
                ></CustomError>
            );
        }
        return <div>{renderList()}</div>;
    };

    return (
        <div className={classes.container}>
            <div className={getHeaderClass(windowWidth)}>
                <div>
                    <h2 className={classes.pageHeaderTitle}>
                        {t('charactersList.title')}
                    </h2>
                </div>
                <SearchBar
                    searchTerm={searchTerm}
                    onSearchValueChange={(value: string) =>
                        onSearchBarValueChange(value)
                    }
                />
            </div>
            {renderContent()}
            {showLoadMore && (
                <div className={classes.buttonContainerCenter}>
                    <Button
                        variant='contained'
                        color='default'
                        size='small'
                        onClick={() => onClickGetMoreResultsButton()}
                    >
                        {t('charactersList.moreResultsButton')}
                    </Button>
                </div>
            )}
            <UiArrowUp className={showArrowUp ? 'fade-in' : 'fade-out'} />
        </div>
    );
};

export default CharactersList;
