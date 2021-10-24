import { FunctionComponent, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Card, Divider, Typography } from '@material-ui/core';
import { homeRoute } from '@config/routes';
import { AppStore } from '@store/app';
import {
    CharacterStore,
    clearSelectedCharacter,
    getCharacterByIdRequest
} from '@store/characters';
import CustomError from '@components/common/error/Error';
import { CharacterDetailInfo } from '@components/character-detail-info/CharacterDetailInfo';
import './CharacterDetail.scss';
import { CharactersQuotesStore, getCharacterQuoteRequest } from '@store/quotes';

type CharacterDetailParams = { id: string };

const CharacterDetail: FunctionComponent<
    RouteComponentProps<CharacterDetailParams>
> = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation('translations');
    const { selectedCharacter, hasError, errorMessage } = useSelector<
        AppStore,
        CharacterStore
    >((state) => state.charactersStore);

    const {
        quotes,
        hasError: quotesHasErrors,
        errorMessage: quotesErrorMessage
    } = useSelector<AppStore, CharactersQuotesStore>(
        (state) => state.charactersQuotesStore
    );

    useEffect(() => {
        const { params } = props.match;
        dispatch(getCharacterByIdRequest(Number(params.id)));
        return () => {
            dispatch(clearSelectedCharacter());
        };
    }, [dispatch]);

    useEffect(() => {
        !!selectedCharacter &&
            dispatch(getCharacterQuoteRequest(selectedCharacter.name));
    }, [selectedCharacter]);

    const onChangeQuoteClick = () => {
        !!selectedCharacter &&
            dispatch(getCharacterQuoteRequest(selectedCharacter.name));
    };

    const renderDetail = () => {
        if (hasError) {
            return (
                <CustomError
                    title={t('charactersList.errorMessage')}
                ></CustomError>
            );
        }
        if (selectedCharacter) {
            return (
                <div>
                    <Card className='flex character-detail-card'>
                        <div className='character-image'>
                            <img alt='Character' src={selectedCharacter!.img} />
                        </div>
                        <div className='character-detail-card-content'>
                            <div className='character-detail-info-header-container'>
                                <Typography component='h5' variant='h5'>
                                    {selectedCharacter?.name}
                                </Typography>
                                <Typography variant='h5' color='textSecondary'>
                                    {selectedCharacter?.nickname} (
                                    {selectedCharacter?.appearance[0]}),{' '}
                                    {selectedCharacter?.status}
                                </Typography>
                            </div>
                            <Divider />
                            <div className='character-detail-info-container'>
                                <div className='info'>
                                    <CharacterDetailInfo
                                        label={t('charactersDetail.portrayed')}
                                        description={
                                            selectedCharacter.portrayed
                                        }
                                    />
                                    <CharacterDetailInfo
                                        label={t('charactersDetail.birthday')}
                                        description={selectedCharacter.birthday}
                                    />
                                    <CharacterDetailInfo
                                        label={t('charactersDetail.occupation')}
                                        description={
                                            selectedCharacter.occupation[0]
                                        }
                                    />
                                    <CharacterDetailInfo
                                        label={t('charactersDetail.id')}
                                        description={selectedCharacter.char_id}
                                    />
                                    <Divider />
                                    <br />
                                    <CharacterDetailInfo
                                        label={t('charactersDetail.quote')}
                                        description={
                                            quotes?.length > 0
                                                ? quotes[0]?.quote
                                                : quotesErrorMessage
                                        }
                                    />
                                    <div className='change-quote-button'>
                                        <Button
                                            variant='contained'
                                            color='default'
                                            size='small'
                                            onClick={() => onChangeQuoteClick()}
                                        >
                                            {t(
                                                'charactersDetail.changeQuoteButton'
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='character-detail'>
            <div>
                <Link to={homeRoute()} className='link'>
                    <Button variant='contained' color='primary' size='large'>
                        {t('charactersDetail.backButton')}
                    </Button>
                </Link>
            </div>
            <div>{renderDetail()}</div>
        </div>
    );
};

export default CharacterDetail;
