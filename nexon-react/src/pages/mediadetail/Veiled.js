import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/Title";
import { API_URL } from "../../config/apiurl";
import { getVelied } from "../../modules/news";
import VeiledItem from "./VeiledItem";

const Veiled = () => {
  const NewsData = async () => {
    const data = await axios.get(`${API_URL}/nexon/news/veiled`);
    return data;
  };
  const { loading, data, error } = useSelector((state) => state.news.veiled);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVelied(NewsData));
  }, [dispatch]);
  if (loading) return <div>로딩중입니다.</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return <div>데이터 없음</div>;
  return (
    <div>
      <Title title="베일드엑스퍼트" desc="" />
      <VeiledItem item={data} />
    </div>
  );
};

export default Veiled;
