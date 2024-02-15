import MainNavigation from "../MainNavigation";
import { Link } from "react-router-dom";
function Error(){
    return (
        <>
     <MainNavigation/>
     <main>
        <h1>An error occured</h1>
        <p>Could not find this page</p>
        <Link href="/">Go back to the homepage.</Link>
     </main>
     </>
    );
}

export default Error;