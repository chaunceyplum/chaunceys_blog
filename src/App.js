import MyNav from './component/MyNav';
import Home from './component/Home';
import Blog from './component/Blog';
import CreatePost from './component/CreatePost';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <MyNav sticky="top" className="fixed-top"/>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/createpost" element={<CreatePost />}/>



        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
