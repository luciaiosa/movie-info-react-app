import { createStyles, makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(() =>
    createStyles({
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px',
            margin: 35
        }
    })
);
