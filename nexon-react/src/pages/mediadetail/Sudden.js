import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/Title";
import { API_URL } from "../../config/apiurl";
import { getSudden } from "../../modules/news";
import SuddenItem from "./SuddenItem";

const Sudden = () => {
  const NewsData = async () => {
    const data = await axios.get(`${API_URL}/nexon/news`);
    return data;
  };
  const { loading, data, error } = useSelector((state) => state.news.sudden);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSudden(NewsData));
  }, [dispatch]);
  if (loading) return <div>로딩중입니다.</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return <div>데이터 없음</div>;
  return (
    <div>
      <Title title="서든어택" desc="" />
      <SuddenItem item={data} />
    </div>
  );
};

export default Sudden;
