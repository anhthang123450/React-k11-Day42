import useFetch from "../../hooks/useFetch";

function Exercise6() {
    const [result, isLoading] = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (isLoading) return <div>Loading...</div>;
    return (
        <ul>
            {result.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default Exercise6;
