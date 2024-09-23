import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FilesUploader from "../Components/FilesUploader";
import FilesViewer from "../Components/FilesViewer";

export default function Dashboard() {
  return (
    <>
      <Tabs defaultValue="filesUploader" className="max-w-5xl mx-auto">
        <TabsList>
          <TabsTrigger value="filesUploader">Upload Files</TabsTrigger>
          <TabsTrigger value="filesViewer">View Files</TabsTrigger>
        </TabsList>
        <TabsContent value="filesUploader">
          <FilesUploader />
        </TabsContent>
        <TabsContent value="filesViewer">
          <FilesViewer />
        </TabsContent>
      </Tabs>
    </>
  );
}
