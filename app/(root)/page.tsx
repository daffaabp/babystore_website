'use client'

import Modal from "@/components/ui/modal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <Modal title="Test Title" description="Test Description" isOpen={true} onClose={() => {}}>
        Children
      </Modal>
    </div>
  );
}
