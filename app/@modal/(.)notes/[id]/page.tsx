"use client";

import NotePreviewClient from "./NotePreview.client";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";

export default function Note() {
  const router = useRouter();

  return (
    <NotePreviewClient/>
  );
}
