import axios from "axios";
import React, { useState } from "react";
import { FaUpload, FaFilePdf } from "react-icons/fa";

function Home() {
  const [file, setFile] = useState(null);
  const [convert, setConvert] = useState("");
  const [downloadError, setDownloadError] = useState("");

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleConvert = async (e) => {
    e.preventDefault();
    if (!file) return setConvert("Please upload a Word file first!");
    
    const formData = new FormData();
    formData.append("file", file);

    try {
     const response = await axios.post("http://localhost:3000/convertFile", formData, {
            responseType: 'blob',
        });

        const url = window.URL.createObjectURL(new Blob([response.data]))
        console.log(url);
        

        const link = document.createElement('a');
        console.log(link);
        link.href = url;
        console.log(link);
        link.setAttribute('download', file.name.replace(/\.[^/.]+$/,"")+ '.pdf');
        document.body.appendChild(link);
        console.log(link); 
        link.click();
        link.remove();
        setFile(null);
        setDownloadError("");
        setConvert("File converted successfully!");

    } catch (error) {
        console.log(error);
        if(error.response && error.response.status == 400){
            setDownloadError("Error occurred : "+error.response.data.message);
        }else{
            setConvert("");   
        }
        
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-16 ">
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl w-full max-w-lg transform hover:scale-105 transition-all duration-300">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-gray-800">
          Convert Word to PDF
        </h1>

        <div className="flex flex-col items-center space-y-4">
          <label className="w-full flex flex-col items-center px-4 py-6 bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg cursor-pointer hover:bg-blue-100 transition">
            <FaUpload className="text-4xl text-blue-500 mb-3" />
            <span className="text-gray-700 font-medium">Click to upload a Word file</span>
            <input
              type="file"
              accept=".doc,.docx"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          {file && (
            <p className="text-gray-600 text-center break-words font-medium">
              Selected file: {file.name}
            </p>
          )}

          <button
            onClick={handleConvert}
            disabled={!file}
            className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <FaFilePdf /> 
            <span>Convert to PDF</span>
          </button>

            {convert && ( <div className="text-green-500 text-center"> {convert} </div> )}
            {downloadError && ( <div className="text-red-500 text-center">{downloadError}</div> )}
        </div>

      </div>
    </div>
  );
}

export default Home;
