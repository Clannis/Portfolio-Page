import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div class="header__text-box">
                    <h1 class="heading-primary">
                        <span class="heading-primary--main">James Dodds</span>
                        <span class="heading-primary--sub">Full Stack Developer</span>
                    </h1>

                    <a href="#section-tours" class="btn">View Projects</a>
                </div>
            </header>
        )
    }
}

export default Header