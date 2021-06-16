import { CssBaseline } from '@material-ui/core';
import NavBar from '../AppNavBar/NavBar';
import useStyles from './LayoutStyles';

const Layout = ({children}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            {children}
        </div>
    )
}

export default Layout;