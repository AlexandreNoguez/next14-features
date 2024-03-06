import { AddTagForm } from "@/components/add-tag-form";
import { TagList } from "@/components/tag-list";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>Carregando Lista de Tags...</p>}>
        <TagList />
      </Suspense>
      <AddTagForm />
    </div>
  );
}
