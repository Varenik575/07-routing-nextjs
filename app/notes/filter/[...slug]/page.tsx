import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "@/app/notes/filter/[...slug]/Notes.client";
import { fetchNotes } from "@/lib/api";
import { CategoryTag } from "@/types/note";

type NotesProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function Notes({ params }: NotesProps) {
  const queryClient = new QueryClient();
  const { slug } = await params;
  const category = slug[0] === "all" ? undefined : (slug[0] as CategoryTag);

  try {
    await queryClient.prefetchQuery({
      queryKey: ["notes", "", category],
      queryFn: () => fetchNotes("", 1, category),
    });
  } catch (error) {
    throw error;
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient category={category} />
    </HydrationBoundary>
  );
}
