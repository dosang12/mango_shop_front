import { Routes, Route } from "react-router-dom";
import MainPage from "./component/MainPage";
import ProductsPage from "./component/ProductsPage";
import UploadPage from "./component/UploadPage";

function App() {
  return (
    <div className="App">
      <div id="header">
        <div id="header-area">
          <img src="../images/images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="../images/images/banners/banner1.png" alt="" />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/ProductsPage/:id" element={<ProductsPage />}></Route>
        <Route path="/UploadPage" element={<UploadPage />}></Route>
      </Routes>
      <div id="footer">
        <a href="#">회사소개</a>
        <a href="#">이용약관</a>
        <a href="#">통신판매업:123-1234</a>
        <a href="#">사업자등록번호:456-56-78951</a>
        <a href=""></a>
      </div>
    </div>
  );
}

export default App;
