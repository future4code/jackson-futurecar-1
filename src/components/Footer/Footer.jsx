import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {useStyles} from './style'

  export default function Footer() {
    const classes = useStyles();
  
    return (
        <footer className={classes.footer}>
          <Container maxWidth="lg"  className={classes.container}>
            <Typography variant="body1">
                Desenvolvido por Ana Flávia | Raphael Ribeiro | Astor Lohmann | Elizabeth Barbosa | Mayara Araujo | João Moura
            </Typography>
            <Typography variant="body2">
                {'Copyright © '}
                <Link color="inherit" href="#">FutureCar</Link>
                {new Date().getFullYear()}
            </Typography>
          </Container>
        </footer>
    );
  }