import React from "react";
import "antd/dist/reset.css";
import "./App.css";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import MainPage from "./component/MainPage";
import ProductsPage from "./component/ProductsPage";
import UploadPage from "./component/UploadPage";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="../images/images/icons/logo.png" alt="" />
          </Link>
          <Button
            icon={<UploadOutlined />}
            size="large"
            onClick={() => {
              navigate("/UploadPage");
            }}
          >
            상품업로드
            <UploadOutlined />
          </Button>
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
