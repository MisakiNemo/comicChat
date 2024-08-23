import {Link} from "react-router-dom";

function AboutPage() {
    return <div className="bg-sky-400">
        <main>
            <h2>Welcome to the about page</h2>
        </main>
        <nav>
            <ol>
                <Link to="/">Home</Link>
            </ol>
        </nav>
    </div>
}

export default AboutPage;