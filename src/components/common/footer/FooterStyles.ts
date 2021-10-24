import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme: Theme) =>
    createStyles({
        footerContainer: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '5.5rem',
            backgroundColor: 'rgb(32, 35, 41)',
            color: 'rgb(158, 158, 158)',
            justifyContent: 'center',
            alignSelf: 'center'
        },
        footerContent: {
            alignSelf: 'center',
            fontWeight: 600,
            wordSpacing: 5
        },
        flex: {
            display: 'flex'
        },
        flexDirectionColumn: {
            flexDirection: 'column'
        }
    })
);
