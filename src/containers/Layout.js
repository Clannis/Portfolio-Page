import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../containers/Main";

class Layout extends Component {
    render() {
        return (
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
        )
    }
}

export default Layout