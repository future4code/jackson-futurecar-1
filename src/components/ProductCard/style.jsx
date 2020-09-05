import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root:{
      maxWidth: 240,
      padding: 2,
    },
    media: {
      height: 140,
    },
    description: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: '#f3595b'
    }
  });