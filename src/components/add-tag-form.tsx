import { revalidateTag } from "next/cache";
import { AddTagButton } from "./add-tag-button";

export function AddTagForm() {
    async function handleCreateTag(form: FormData) {
        'use server'
        const slug = form.get('slug');
        if (!slug) {
            throw new Error("Precisa preencher")
        }
        await new Promise(resolve => setTimeout(resolve, 3000));

        await fetch('http://localhost:3334/tags', {
            method: 'POST',
            body: JSON.stringify({
                slug: slug
            })
        })

        revalidateTag('o-que-quiser-revalidar');
    }
    return (
        <form action={handleCreateTag} method="POST">
            <input type="text" name="slug" placeholder="Digite o slug" />
            <AddTagButton />
        </form>
    )
}