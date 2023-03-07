import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config/apiurl";

const EditPassword = () => {
  const userid = useSelector((state) => state.logincheck.updateId);
  console.log(userid);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    m_pass: "",
    m_passch: "",
    m_id: userid,
    m_emil: userid,
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.m_pass === formData.m_passch) {
      //패치는 일부를 업데이트할때 get()조회, post()압력, put() 리소스 전체 업데이트, patch() 리소스 일부를 없데이트
      axios
        .patch(`${API_URL}/updatePw`, formData)
        .then((res) => {
          if (res.data) {
            alert("패스워드가 변경되었습니다.");
            navigate("/Login");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };
  return (
    <div className="FindPage">
      <form onSubmit={onSubmit}>
        <div className="Findidps">
          <div>
            <p>{userid}님의 비밀번호를 변경합니다.</p>
            <span>변경하실 비밀번호를 입력해 주세요.</span>
          </div>
          <div id="Findidinput">
            <input
              type="password"
              placeholder="새 비밀번호"
              name="m_pass"
              value={formData.m_pass}
              onChange={onChange}
            />
          </div>
          <div id="Findidinput">
            <input
              type="password"
              placeholder="새 비밀번호 확인"
              name="m_passch"
              value={formData.m_passch}
              onChange={onChange}
            />
          </div>

          <div className="editpassword">
            <button className="ADD">확인</button>
            <button className="RESET"> 취소 </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPassword;
