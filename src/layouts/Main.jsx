import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
function Main(){
    return (
        <div>
            <div className="w-full">
                <Header></Header>
            </div>
            <div>
                <Outlet />
            </div>

            <div>
                <footer>
                    footer
                </footer>
            </div>
        </div>
    );
}

export default Main;