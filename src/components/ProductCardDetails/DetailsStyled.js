import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const StyleDetails = styled.p`

display:${props => props.visibility ? 'block' : 'none'};
` 

export default StyleDetails