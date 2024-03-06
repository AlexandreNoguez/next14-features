export async function TagList() {

    await new Promise(resolve => setTimeout(resolve, 3000))

    const response = await fetch('http://localhost:3334/tags', {
        next: {
            tags: ['o-que-quiser-revalidar']
        }
    });
    const data = await response.json();
    return (
        <ul>
            {data ? data.map((item: any) => (
                <li key={item.id}>
                    {item.slug}
                </li>
            )) : null}
        </ul>
    )
}