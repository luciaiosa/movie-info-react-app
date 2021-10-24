import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import { homeRoute } from '@config/routes';
import { styles } from './HeaderStyles';
import { Language, Languages } from '@translations/languages';

interface HeaderProps {
    changeLanguage(value: Language): void;
}

const Header: FunctionComponent<HeaderProps> = (
    props: HeaderProps
): JSX.Element => {
    const { t, i18n } = useTranslation('translations');
    const classes = styles();

    const currentLanguage = i18n.language;

    return (
        <div className={classes.container}>
            <div className={classes.menuContainer}>
                <div className={classes.linkMenu}>
                    <Link to={homeRoute()} className={classes.link}>
                        <h3 className={classes.logoLink}>
                            {t('header.title')}
                        </h3>
                    </Link>
                </div>
                <div className={classes.languagesContainer}>
                    <Button
                        className={classes.marginXs}
                        variant='contained'
                        color={
                            currentLanguage === Languages.ES
                                ? 'primary'
                                : 'default'
                        }
                        size='small'
                        onClick={() => props.changeLanguage(Languages.ES)}
                    >
                        {t('header.languages.es')}
                    </Button>
                    <Button
                        className={classes.marginXs}
                        variant='contained'
                        color={
                            currentLanguage === Languages.EN
                                ? 'primary'
                                : 'default'
                        }
                        size='small'
                        onClick={() => props.changeLanguage(Languages.EN)}
                    >
                        {t('header.languages.en')}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
