import React, { useEffect, useState } from "react";
import ShopcateCategoryItem from "../../../main/shopcate/components/category/ShopcateCategoryItem";
import RecommandImgContent from "./component/RecommandImgContent";
import { SwiperSlide } from "swiper/react";
import SnsImgImgBox from "../../../main/snsimg/SnsImgImgBox";
import SubtitleMore from "../../../main/subtitle_more/Subtitle_more";
import "../../../../css/sub/topics/recommand/recommand.css";
import RecommandImgText from "./component/RecommandImgText";
import RecommandImgBox from "./component/RecommandImgBox";

export default function Recommand() {
  /* 메뉴 */
  const [catelist, setCatelist] = useState([]);
  useEffect(() => {
    fetch('/data/topics/recommandMenu.json')
      .then(res => res.json())
      .then(data => setCatelist(data))
  }, [])

  return (
    <section className="topics_recommand_section">
      {/* ShopcateCategoryItem.jsx */}
      <div className="topics_recommand_menu_section inner">
        <div className="topics_recommand_menu">
          {
            catelist.map((list) =>
              <ShopcateCategoryItem
                category_name={list.category_name}
              />)
          }
        </div>
      </div>
      {/* RecommandImgContent.jsx */}
      <div className="topics_recommand_content_section inner">
        <RecommandImgContent />
        <RecommandImgContent />
      </div>
      {/* subTitlemore.jsx SnsImg.jsx */}
      <section className="snsimg_wrap">
        <div className="snsimg_wrap_contentbox">
          <SubtitleMore title={"산타들 주목 🎅🏼 이런 선물 어때요?"} />
          <div className="snsimg_inner inner">
          <SwiperSlide>
            <div>
              <SnsImgImgBox />
              <RecommandImgText />
            </div>
            <RecommandImgBox />
            <SnsImgImgBox />
            <SnsImgImgBox />
            <SnsImgImgBox />
            <SnsImgImgBox />
            <SnsImgImgBox />
            <SnsImgImgBox />
            <SnsImgImgBox />
            <SnsImgImgBox />
            <SnsImgImgBox />
          </SwiperSlide>
          </div>
        </div>
      </section>
    </section>
  );
}