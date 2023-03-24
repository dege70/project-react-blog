import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './Navigation.module.css'
import { routes } from '../../../config/routes'

function Navigation() {
  return (
    <ul className={classes.Navigation}>
        <NavigationItem to={routes.home}>Accueil</NavigationItem>
        <NavigationItem to={routes.articles}>Articles</NavigationItem>
        <NavigationItem to={routes.contact}>Contact</NavigationItem>
        <NavigationItem to={routes.ajouter}>Ajouter</NavigationItem>
    </ul>
  )
}

export default Navigation