import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../../config/apiurl";
import "../css/FindIdPass.css";

const FindId = () => {
  const Navigate = useNavigate();
  const [idInfo, setIdInfo] = useState("");
  const [formData, setFormData] = useState({
    m_name: "",
    m_phone: "",
    m_email: "",
    m_id: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    if (formData.m_phone.length === 11) {
      setFormData({
        ...formData,
        m_phone: formData.m_phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
      });
    } else if (formData.m_phone.length === 13) {
      setFormData({
        ...formData,
        m_phone: formData.m_phone
          //하이픈이 입력되면 공백으로 변경되고 하이픈이 다시 생성됨
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
      });
    }
  }, [formData.m_phone]);
  const onSubmit = (e) => {
    e.preventDefault();
    const reg4 =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (formData.m_phone.length === 13) {
      if (reg4.test(formData.m_email)) {
        axios
          .post(`${API_URL}/findid`, formData)
          .then((res) => {
            setIdInfo(res.data);
            alert(`당신의 아이디는 ${res.data}입니다.`);
            Navigate("/login");
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        alert("이메일을 다시 입력해주세요");
        setFormData({
          ...formData,
          m_email: "",
        });
      }
    } else {
      alert("전화번호를 다시 입력해주세요");
      setFormData({
        ...formData,
        m_phone: "",
      });
    }
  };
  return (
    <div className="FindPage">
      <h2>아이디 찾기</h2>
      <form onSubmit={onSubmit}>
        <div className="Findidps">
          <div>
            <p>* 가입시 입력한 회원정보를 입력해 주세요.</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="이름"
              name="m_name"
              value={formData.m_name}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="휴대폰번호"
              name="m_phone"
              value={formData.m_phone}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="E-MAIL"
              name="m_email"
              value={formData.m_email}
              onChange={onChange}
            />
          </div>
          <button>아이디 찾기</button>
        </div>
      </form>
    </div>
  );
};

export default FindId;
