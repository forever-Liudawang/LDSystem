import React, { useState, useEffect, memo } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./index.scss";
import request from "../../utils/request";
function ArticleBox() {
  const [articleList, setArticleList] = useState<any>([]);
  const initData = async () => {
    const resp = await request({
      url: "/article/getRecommendArticle",
      method: "get",
    });
    if (resp && resp.success) {
      setArticleList(resp.data || []);
    }
  };
  useEffect(() => {
    initData();
  }, []);
  return (
    <div className="articleBox">
      {articleList.map((item: any) => {
        return (
          <ArticleCard
            articleCateId={item.articleCateId}
            key={item.articleCateId}
            articleCateName={item.articleCateName}
            data={item.data}
          />
        );
      })}
    </div>
  );
}
export default memo(ArticleBox);
