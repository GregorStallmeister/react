// import './App.css'

import Header from "./Header.tsx";
import Blog from "./Blog.tsx";
import Footer from "./Footer.tsx";
import Profile from "./Profile.tsx";

export default function App() {
    return (
        <div>
            <Header/>
            Hello World!<br/>&nbsp;<br/>
            Here are the blog entries:<br/>
            <Blog/>
            <br/>&nbsp;<br/>
            <Profile/>
            <br/>&nbsp;<br/>
            And here comes the footer:<br/>
            <Footer/>
        </div>
    )
}
