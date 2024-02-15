import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation";
import classes from './Root.module.css';

export default function Root(){
    return(
       <>
         <MainNavigation></MainNavigation>
         <main className={classes.content}>
         <Outlet/>
         </main>
       </> 
    );
}