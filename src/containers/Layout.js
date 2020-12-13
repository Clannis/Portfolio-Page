import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Layout extends Component {
    render() {
        return (
            <main>
                <Header/>
                <Footer/>
            </main>
        )
    }
}

export default Layout