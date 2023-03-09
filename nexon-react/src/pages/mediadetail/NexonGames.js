import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/Title";
import { API_URL } from "../../config/apiurl";
import { getNexonGames } from "../../modules/news";
import NexonGamesItem from "./NexonGamesItem";

const NexonGames = () => {
  const NewsData = async () => {
    const data = await axios.get(`${API_URL}/nexon/news/nexongames`);
    return data;
  };
  const { loading, data, error } = useSelector(
    (state) => state.news.nexongames
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNexonGames(NewsData));
  }, [dispatch]);
  if (loading) return <div>로딩중입니다.</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return <div>데이터 없음</div>;
  return (
    <div>
      <Title title="넥슨게임즈" desc="" />
      <NexonGamesItem item={data} />
    </div>
  );
};

export default NexonGames;
