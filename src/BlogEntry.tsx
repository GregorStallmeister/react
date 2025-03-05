type BlogEntryProps = {
    id: string,
    title: string,
    text: string,
    likes: number
}

export default function BlogEntry(blogEntryProps: BlogEntryProps) {
    return (
        <article>
            <h2>{blogEntryProps.title}</h2>
            <p>{blogEntryProps.text}<br/>
                Likes: {blogEntryProps.likes}
            </p>
        </article>
    )
}