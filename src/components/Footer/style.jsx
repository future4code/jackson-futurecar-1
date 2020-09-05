import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    footer: {
        width: '100vw',
        height: '12vh',
        backgroundColor:'#f35a5a',
        color: '#fff',
        marginTop: '5vh',
    },
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px'
    }
  });
