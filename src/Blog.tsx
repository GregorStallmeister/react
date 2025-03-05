import FirstEntry from "./FirstEntry.tsx";
import SecondEntry from "./SecondEntry.tsx";
import ThirdEntry from "./ThirdEntry.tsx";

export default function Blog() {
    return (
        <div>Blog
            <ul>
                <FirstEntry/>
                <SecondEntry/>
                <ThirdEntry/>
            </ul>
        </div>
    )
}