import logo from './logo.svg';
import './App.css';
import {useDropzone} from 'react-dropzone';
import {useState} from 'react'
import {Previews} from './Previews'

export default function App() {

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const [img, setImg] = useState()

  const showLog = (file) =>{
    console.log(file)
    setImg(file)
  }

  const files = acceptedFiles.map(file => (
    <li onClick={()=>showLog(file)}>{file.path}</li>
  ));

  return (
    <>
    <button onClick={()=>window.execJigsaw(4, 5)} className="App">
      hello
    </button>
    {/* <div className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <ul>
        {files}
      </ul>
    </div> */}
    {/* <Previews/> */}
    </>
  );
}
