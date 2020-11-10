import React from 'react'
import Home from './Home'
import Holidays from './Holidays'
import styles from './styles.module.css'
import Countries from './Countries'
import{Link,Switch,Route} from 'react-router-dom'
import CountriesDetails from './About'


function Navbar(){
    return(
        <>
        <div className={styles.nav}>
            <Link className={styles.link}to="/">Home</Link>
            <Link className={styles.link}to="/holidays">Holidays</Link>
            <Link className={styles.link}to="/about">Lists</Link>
            <Link className={styles.link}to="/countries">Countries</Link>
        </div>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/holidays"  component={Holidays}/>
            <Route path="/about"  component={CountriesDetails}/>
            <Route path="/countries"  component={Countries}/>
        </Switch>
        </>
    )
}
export default Navbar