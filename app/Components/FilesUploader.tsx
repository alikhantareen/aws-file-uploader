import { Button } from "@/components/ui/button";

export default function FilesUploader() {
  return (
    <section className="flex flex-col items-start justify-center gap-5 p-5 border-2 border-gray-300 rounded-md">
        <h1 className="text-2xl font-semibold">Upload Files</h1>
        <Button>Upload</Button>
    </section>
  )
}
