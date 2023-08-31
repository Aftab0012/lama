import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MediaUpload from "../Forms/MediaUpload";
import IconButton from "@mui/material/IconButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { config } from "../../App";
import axios from "axios";
import EditOffRoundedIcon from "@mui/icons-material/EditOffRounded";
import SaveIcon from "@mui/icons-material/Save";

/**
 * SideBarMainPage component for the sidebar navigation and project list.
 */
function SideBarMainPage() {
  const [formState, setFormState] = useState(false);
  const [array, setArray] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedName, setEditedName] = useState("");

  console.log(array);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data when the form is submitted (if needed)
  useEffect(() => {
    if (formState) {
      fetchData();
    }
  }, [formState]);

  const fetchData = () => {
    const backendUrl = `${config.endpoint}/users`;
    axios
      .get(backendUrl)
      .then((response) => {
        setArray(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const edit = (index) => {
    setEditingIndex(index);
    setEditedName(array[index].name);
  };

  const save = (index) => {
    const updatedArray = [...array];
    updatedArray[index].name = editedName;
    setArray(updatedArray);
    setEditingIndex(-1);
    setEditedName("");
    // You can also make an API call to update the name on the server if needed
  };

  const handleDataAdded = () => {
    fetchData();
  };

  const openUploadForm = () => {
    setFormState(!formState);
  };

  return (
    <div className="flex flex-col mt-3 w-full">
      {/* Navigation */}
      <div className="p-6 flex items-center space-x-2">
        <Link to={"/"}>
          <IconButton className="w-12 h-12" size="large" color="primary">
            <HomeOutlinedIcon className="medium" />
          </IconButton>
        </Link>

        <span className="text-xl text-gray-500 font-bold">/</span>
        <span className="text-xl font-semibold text-gray-400">
          Sample Project
        </span>
        <span className="text-xl font-semibold">/ Projects</span>
      </div>

      <div className="ml-10 text-4xl font-semibold text-blue-800">Upload</div>

      {/* Upload Options */}
      <div className="ml-[60px] p-5 flex flex-row mt-3 space-x-4">
        {/* Youtube Upload */}
        <div
          onClick={openUploadForm}
          className="flex bg-white w-[300px] h-32 rounded-lg shadow-md p-4 cursor-pointer"
        >
          <img
            src={`${process.env.PUBLIC_URL} /Youtube.png`}
            alt="Media-Images"
          />
          <div className="ml-5 mt-5 text-xl font-semibold">
            Upload Youtube Video
          </div>
        </div>
        {/* Spotify Upload */}
        <div
          onClick={openUploadForm}
          className="flex bg-white w-[300px] h-32 rounded-lg shadow-md p-4 cursor-pointer"
        >
          <img
            src={`${process.env.PUBLIC_URL} /Spotify.png`}
            alt="Media-Images"
          />
          <div className="ml-5 mt-5 text-xl font-semibold">
            Upload Spotify Podcast
          </div>
        </div>
        {/* RSS Feed Upload */}
        <div
          onClick={openUploadForm}
          className="flex bg-white w-[300px] h-32 rounded-lg shadow-md p-4 cursor-pointer"
        >
          <img src={`${process.env.PUBLIC_URL} /Ress.png`} alt="Media-Images" />
          <div className="ml-5 mt-5 text-xl font-semibold">
            Upload from RSS Feed
          </div>
        </div>
      </div>
      {/* Show Media Upload Form */}
      {formState && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-30 bg-gray-700">
          <div className="rounded-lg shadow-lgs">
            <MediaUpload
              closeForm={openUploadForm}
              onDataAdded={handleDataAdded}
            />
          </div>
        </div>
      )}

      {/* Conditionally render upload dragger or arrayList */}
      <div className="flex justify-center items-center shadow-md p-4 rounded-lg">
        <div className="max-h-[370px] overflow-y-auto">
          <table className="border-collapse">
            <thead className="border-2 flex justify-around mb-2">
              <th className="ml-20 mr-20">Names</th>
              <th className="ml-20 mr-20">Last Updated At</th>
              <th className="ml-20 mr-20">Actions</th>
            </thead>
            <tbody>
              {array.map((item, index) => (
                <tr key={index} className="flex justify-around border">
                  <td className="py-2 px-4 mr-[150px]">
                    {editingIndex === index ? (
                      <input
                        className="w-[100px] px-2 py-1 border rounded focus:outline-none"
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                      />
                    ) : (
                      <div>{item.name}</div>
                    )}
                  </td>
                  <td>{item.updatedAt}</td>
                  <td className="py-2 px-4 ml-[150px]">
                    {editingIndex !== index ? (
                      <IconButton onClick={() => edit(index)}>
                        <EditOffRoundedIcon />
                      </IconButton>
                    ) : (
                      <div>
                        <IconButton onClick={() => save(index)}>
                          <SaveIcon />
                        </IconButton>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SideBarMainPage;
