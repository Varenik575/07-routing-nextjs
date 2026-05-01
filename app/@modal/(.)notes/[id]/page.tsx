"use client";

import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";

export default function NoteModal() {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <NoteDetailsClient/>
    </Modal>
  );
}
