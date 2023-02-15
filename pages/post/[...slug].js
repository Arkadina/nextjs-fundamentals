import Link from "next/link";
import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter();
    const { slug } = router.query;
    console.log(slug);

    return (
        <div>
            <p>You are at: post{slug.map((item) => `/${item}`)}</p>
        </div>
    );
};

export default Post;
