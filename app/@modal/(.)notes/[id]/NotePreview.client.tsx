"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css";
import Modal from "@/components/Modal/Modal";

export default function NotePreviewClient() {
  const params = useParams<{ id: string }>();
  const noteId = params.id;
  const router = useRouter();

  const { data, error, isLoading } = useQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });

  if (error) {
    throw error;
  }

  return (
    <Modal onClose={() => router.back()}>
      {isLoading && <p>Loading, please wait...</p>}
      {data && (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{data.title}</h2>
            </div>
            <p className={css.tag}>{data.tag}</p>
            <p className={css.content}>{data.content}</p>
            <p className={css.date}>{data.createdAt}</p>
          </div>
          <button className={css.backBtn} onClick={() => router.back()}>
            Back
          </button>
        </div>
      )}
    </Modal>
  );
}
