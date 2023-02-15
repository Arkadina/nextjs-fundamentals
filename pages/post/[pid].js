import Link from "next/link";
import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter();
    const { pid } = router.query;
    console.log(router.query);


    return (
        <div>
            <p>Post: {pid}</p>
            <Link href={`/post/${Number(pid) + 1}`}>
                Go to post {`${Number(pid) + 1}`}
            </Link>
            <p>Or</p>
            <Link href={`/post/${Number(pid) - 1}`}>
                Go to post {`${Number(pid) - 1}`}
            </Link>
        </div>
    );
};

export default Post;
