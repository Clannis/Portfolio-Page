import { Component } from "react";
import Sidebar from "../components/Sidebar";
import ProjectsContainer from "../containers/ProjectsContainer";

class Main extends Component {
    render() {
        return (
            <main>
                <div className="row">
                    <div className="col-1-of-4">
                        <Sidebar/>
                    </div>
                    <div className="col-3-of-4">
                        <ProjectsContainer/>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main