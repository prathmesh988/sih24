import React, { useRef, useState } from "react";

interface File {
  name: string;
  size: number;
}

const FileUploader: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) return;
    const filesArray = Array.from(fileList).map((file) => ({
      name: file.name,
      size: file.size,
    }));
    setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
  };

  const formatFileSize = (size: number) => {
    const units = ["B", "KB", "MB", "GB"];
    let index = 0;

    while (size >= 1024 && index < units.length - 1) {
      size /= 1024;
      index++;
    }

    return `${size.toFixed(2)} ${units[index]}`;
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, fileIndex) => fileIndex !== index)
    );
  };

  return (
    <div className="min-h-[50%] flex items-center justify-center  text-gray-100 font-mono">
      <div className="w-full max-w-xl p-5 bg-white rounded-md shadow-md text-gray-800">
        <h2 className="text-2xl font-semibold text-center mb-4">Upload File</h2>

        <div
          className="border-2 border-dashed border-gray-300 p-5 rounded-md cursor-pointer hover:bg-gray-50"
          onClick={openFileInput}
        >
          <h4 className="text-center text-gray-600">
            <i className="fas fa-upload"></i> Choose File to upload
          </h4>
          <input
            ref={fileInputRef}
            type="file"
            hidden
            onChange={handleFileChange}
            multiple
          />
        </div>
        <small className="block text-gray-400 mt-2 text-center">
          Files Supported: PDF, DOC, DOCX
        </small>

        {selectedFiles.length > 0 && (
          <div className="mt-6">
            <h5 className="text-lg font-medium mb-2">Selected Files</h5>
            <ul className="space-y-2 max-h-52 overflow-y-auto">
              {selectedFiles.map((file, index) => (
                <li
                  key={file.name}
                  className="flex justify-between items-center p-3 border rounded-md bg-gray-50"
                >
                  <span>
                    {file.name} ({formatFileSize(file.size)})
                  </span>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Upload File
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
