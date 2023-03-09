import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/Title";
import { API_URL } from "../../config/apiurl";
import { getHit2 } from "../../modules/news";
import Hit2Item from "./Hit2Item";

const Hit2 = () => {
  const NewsData = async () => {
    const data = await axios.get(`${API_URL}/nexon/news/hit2`);
    return data;
  };
  const { loading, data, error } = useSelector((state) => state.news.hit2);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHit2(NewsData));
  }, [dispatch]);
  if (loading) return <div>로딩중입니다.</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return <div>데이터 없음</div>;
  return (
    <div>
      <Title title="히트2" desc="" />
      <Hit2Item item={data} />
    </div>
  );
};

export default Hit2;
