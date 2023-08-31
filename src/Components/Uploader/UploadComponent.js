import React from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const UploadDragger = ({ names, links, handleUpload }) => {
  return (
    <Upload.Dragger
      beforeUpload={() => false}
      onChange={(info) => {
        if (info.file.status === "done") {
          const updatedNames = [...names, info.file.name];
          const updatedLinks = [...links, info.file.url]; // Replace with actual link

          handleUpload(updatedNames, updatedLinks);
        }
      }}
      fileList={[]}
    >
      <div className="flex bg-white w-[300px] h-32 rounded-lg shadow-md p-4 cursor-pointer">
        <InboxOutlined style={{ fontSize: "32px" }} />
        <div className="ml-5 mt-5 text-xl font-semibold">
          Drag & drop files here or click to select
        </div>
      </div>
    </Upload.Dragger>
  );
};

export default UploadDragger;
