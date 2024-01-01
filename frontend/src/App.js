import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotesPage from './pages/NotePage'
function App() {
  return (
    <Router>
    <div className="container dark">
      <div className="app">
        <Header />
        <Routes>
        <Route path="/" exact element={<NotesListPage />} />
        <Route path="/note/:id" element={<NotesPage />} />
        </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
// let CSRF = document.cookie.slice(10)
// let updateNote = async ()=>{
//     fetch('/api/notes/'+ noteId + '/update/', {
//       method: 'PUT',
//       headers: {
//         "Content-Type":"application/json",
//         "X-CSRFToken": CSRF
//       },
//       body:JSON.stringify(note)
//     })
//   }