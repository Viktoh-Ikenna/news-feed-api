import React, { useContext } from "react";
import { HomeCateglisting } from "../../HomeCategListing/HomeCateglisting";
import { ImagePost } from "../../postTypes/imagePost/imagePost";
import { NormalPost } from "../../postTypes/normalPost/normalPost";
import { Sidebar } from "../../sidebar/sidebar";
import "./deskHome.css";
import { ThemeContext } from "../../..";
import { observer } from "mobx-react";
import { isElement } from "react-dom/cjs/react-dom-test-utils.production.min";

export const DesktopHome = observer(() => {
  const store = useContext(ThemeContext);
  return (
    <div>
      <div className="banner_post">
        <div>
          <div>
          {store.getUs
              .filter((i, z) => z < 1)
              .map((el,z) => {
                return (
                  <ImagePost key={z} cty='us' width="100%" post={el} height="100%" font="20px" />
                );
              })}
            
          </div>
          <div className="banner_post_side m600px">
            {store.getToday
              .filter((i, z) => z < 4)
              .map((el,z) => {
                return (
                  <ImagePost 
                  key={z}
                    width="49.5%"
                    post={el}
                    height="49.5%"
                    font="15px"
                    cty='ng'
                  />
                );
              })}
          </div>
          <div className="banner_post_side mnot600px">
            {store.getRu
              .filter((i, z) => z < 2)
              .map((el,z) => {
                return (
                  <ImagePost
                  key={z}
                    width="49.5%"
                    post={el}
                    height="49.5%"
                    font="20px"
                    cty='ru'
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div className="banner_post_bottom">
        {store.getRu
          .filter((i, z) => z < 4)
          .map((el) => {
            return (
              <ImagePost width="25%" post={el} cty='ru' height="100%" font="12px" />
            );
          })}
      </div>
      <div className="Desktop_home_body">
        <div className="main_bar">
          <div>
            <HomeCateglisting name="Naija Today" cty='ng'  data={store.getToday}/>
            <HomeCateglisting name="USA" cty='us' data={store.getUs}/>
            <HomeCateglisting name="Russia" cty='ru' data={store.getRu} />
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
});
