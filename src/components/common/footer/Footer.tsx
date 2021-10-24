import { FunctionComponent } from 'react';
import { styles } from './FooterStyles';

interface FooterProps {
    content: string;
}
const Footer: FunctionComponent<FooterProps> = (
    props: FooterProps
): JSX.Element => {
    const classes = styles();
    return (
        <div
            className={`${classes.footerContainer} ${classes.flex} ${classes.flexDirectionColumn}`}
        >
            <span className={classes.footerContent}>{props.content}</span>
        </div>
    );
};

export default Footer;
