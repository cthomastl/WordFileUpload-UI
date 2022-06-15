import logo from './logo.svg';
import './App.css';
import FileUploader from './components/FileUploader';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Word Document File Uploader</h1>
        <FileUploader />

        </header>
    </div>
  );
}

export default App;
