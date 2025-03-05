import FirstEntry from "./FirstEntry.tsx";
import SecondEntry from "./SecondEntry.tsx";
import ThirdEntry from "./ThirdEntry.tsx";
import BlogEntry from "./BlogEntry.tsx";

export default function Blog() {

    const myBlogEntries = [
        {id: "BE00", title: "First Entry!", text: "Glad to be here!", likes: 132},
        {id: "BE01", title: "Second Entry!", text: "Happy to see you!", likes: 64},
        {id: "BE02", title: "Third Entry!", text: "I love you so much!", likes: 583}
    ]

    return (
        <div>Blog
            <ul>
                <FirstEntry/>
                <SecondEntry/>
                <ThirdEntry/>
            </ul>
            {
                myBlogEntries.map(myBlogEntry => (
                    <BlogEntry
                        id={myBlogEntry.id}
                        key={myBlogEntry.id}
                        title={myBlogEntry.title}
                        text={myBlogEntry.text}
                        likes={myBlogEntry.likes}
                    />))
            }
        </div>
    )
}