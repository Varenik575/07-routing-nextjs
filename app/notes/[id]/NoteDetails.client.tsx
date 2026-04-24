"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchNoteById } from "@/lib/api";
import css from "./NoteDetails.module.css";

export default function NoteDetailsClient() {
  const params = useParams<{ id: string }>();
  const noteId = params.id;

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
    <>
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
        </div>
      )}
    </>
  );
}
