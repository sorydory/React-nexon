import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../config/apiurl";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCookie } from "../util/cookie";
import "./css/WriteNews.css";
import Swal from "sweetalert2";

const WriteNews = () => {
  const navigate = useNavigate();
  const isLogin = useSelector(state => state.logincheck.isLogin);
  const username = getCookie("username");
  const [formData, setFormData] = useState({
    n_title: "",
    n_date: "",
    n_titledesc: "",
    n_desc: "",
    n_image: "",
    n_category: "news",
  });
  const onChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //input타입이 file인 input이 onChange되었을때 호출되는 함수
  //변경된 파일을 서버로 업로드 전송하기
  const onChangeImage = e => {
    const { name } = e.target;
    //폼태그 생성하기
    const imageFormData = new FormData();
    //폼태그에 데이터 추가하기
    imageFormData.append("img", e.target.files[0]);
    //전송
    axios
      .post(`${API_URL}/upload`, imageFormData, {
        headers: { "content-type": "multipart/formdata" },
      })
      .then(res => {
        console.log(res);
        setFormData({
          ...formData,
          [name]: res.data.imageUrl,
        });
      })
      .catch(e => console.log(e));
  };

  //폼전송
  const onSubmit = e => {
    //form태그 전송 이벤트 삭제
    e.preventDefault();
    //인풋체크후 addNews호출
    addNews();
  };

  const addNews = () => {
    axios
      .post(`${API_URL}/news`, formData)
      .then(res => {
        alert("등록되었습니다.");
        navigate("/news");
      })
      .catch(e => console.log(e));
  };
  useEffect(() => {
    if (!isLogin || username !== "admin123") {
      Swal.fire({
        icon: "warning",
        title: "접근할 수 없습니다..",
        text: "관리자만 접근할 수 있습니다.",
      });
      navigate("/");
    }
  }, [isLogin, username, navigate]);
  if (!isLogin || username !== "admin123") return null;
  return (
    <div className="inner1">
      <h2>뉴스 등록</h2>
      <form onSubmit={onSubmit}>
        <div className="news">
          <ul className="newsname">
            <li>게임 종류</li>
            <li>
              <input
                type="text"
                name="n_title"
                value={formData.n_title}
                onChange={onChange}
              />
            </li>
          </ul>
          <ul>
            <li>등록 날짜</li>
            <li>
              <input
                type="text"
                name="n_date"
                value={formData.n_date}
                onChange={onChange}
              />
            </li>
          </ul>
          <ul>
            <li>간략설명</li>
            <li>
              <input
                type="text"
                name="n_titledesc"
                value={formData.n_titledesc}
                onChange={onChange}
              />
            </li>
          </ul>
          <ul>
            <li>분류</li>
            <li>
              <select
                name="n_category"
                value={formData.n_category}
                onChange={onChange}
              >
                <option value="넥슨게임즈">넥슨게임즈</option>
                <option value="블루아카이브">블루아카이브</option>
                <option value="서든어택">서든어택</option>
                <option value="베일드 엑스퍼트">베일드 엑스퍼트</option>
                <option value="히트2">히트2</option>
              </select>
            </li>
          </ul>
          <ul>
            <li>이미지</li>
            <li>
              <input type="file" name="n_image" onChange={onChangeImage} />
              {formData.n_image && (
                <div>
                  <img
                    src={`${API_URL}/upload/${formData.n_image}`}
                    width="450px"
                    alt=""
                  />
                </div>
              )}
            </li>
          </ul>
          <ul>
            <li>상세설명글</li>
            <li>
              <textarea
                name="n_desc"
                value={formData.n_desc}
                onChange={onChange}
              ></textarea>
            </li>
          </ul>
          <ul>
            <button type="submit" className="newsbtn">
              등록
            </button>
            <button type="reset" className="newsbtn">
              취소
            </button>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default WriteNews;
