import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import styles from '../assets/jss/adminStyles';
import routes from '../routes'
import { Route, Switch, Redirect } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
// import { fetchStoreItems } from '../redux/storeItems'
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(styles);

const switchRoutes = (
    <Switch>
        {
            routes.map((prop, key) => {
                
                return (
                    <Route
                        path={prop.path}
                        component={prop.component}
                        key={key}
                    />
                )
            })
        }
    </Switch>
);

export default function Admin(props) {
    const classes = useStyles();

    useEffect(()=>{
        console.log(props);
    })
    // let notification = useSelector((state) => state.ui.notification);
    // const isAuthenticated = useSelector(state => state.login.isAuthenticated);

    return (
        <div>
            <div className={classes.wrapper}>

                {/* Navbar goes here */}
                <div className={classes.navbar}>
                    <Navbar
                        routes={routes}
                    />
                </div>
                <div className={classes.content}>
                    {
                        // isAuthenticated?
                        switchRoutes
                    }
                </div>
            </div>
        </div>
    )
}