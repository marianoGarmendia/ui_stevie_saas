import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { ImageIcon, PencilIcon, TrashIcon } from "lucide-react";

export default function MyMedia() {
  const [images, setImages] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const newImages = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleNameChange = (id, newName) => {
    setImages((prevImages) =>
      prevImages.map((img) => (img.id === id ? { ...img, name: newName } : img))
    );
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setImages((prevImages) => prevImages.filter((img) => img.id !== id));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">My Media</h1>
      <Card className="p-6 mb-6">
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
        >
          <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop images here, or click to select files
          </p>
          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileInput}
            className="hidden"
            id="file-upload"
          />
          <Button asChild className="mt-4">
            <label htmlFor="file-upload">Select Files</label>
          </Button>
        </div>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card key={image.id} className="p-4">
            <img
              src={image.url}
              alt={image.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            {editingId === image.id ? (
              <Input
                value={image.name}
                onChange={(e) => handleNameChange(image.id, e.target.value)}
                onBlur={() => setEditingId(null)}
                autoFocus
              />
            ) : (
              <div className="flex items-center justify-between">
                <span className="font-medium">{image.name}</span>
                <div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setEditingId(image.id)}
                  >
                    <PencilIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(image.id)}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
