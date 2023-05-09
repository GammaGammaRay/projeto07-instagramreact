import React, { useState, useEffect } from "react";

let posts = [
  {
    profileImg: "img/humans_of_capitalism.jpg",
    profile: "humans_of_capitalism",
    img: "img/humans_of_capitalismPost.jpg",
    numlikes: 10043,
  },
  {
    profileImg: "img/nathan.jpg",
    profile: "nathanwpylestrangeplanet",
    img: "img/nathanPost.jpg",
    numlikes: 10343,
  },
  {
    profileImg: "img/femalepentimento.jpg",
    profile: "femalepentimento",
    img: "img/femalepentimentoPost.jpg",
    numlikes: 5043,
  },
];

export default function Posts() {
  return (
    <div className="content__main__posts">
      {posts.map((post, index) => (
        <Post
          key={index}
          profileImg={post.profileImg}
          profile={post.profile}
          img={post.img}
          numlikes={post.numlikes}
        />
      ))}
    </div>
  );
}


// POST
function Post({ profileImg, profile, img, numlikes }) {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setNumLikes] = useState(numlikes);
  const [heartAnim, startHeartAnim] = useState(false);
  console.log("heartAnim value:", heartAnim);

  // Delayed set anim to false
  useEffect(() => {
    if (heartAnim) {
      setTimeout(() => {
        startHeartAnim(false);
      }, 1000);
    }
  }, [heartAnim]);

  return (
    <div className="post_container" data-test="post">
      <div className="post__top">
        <div className="post__top__leftContainer">
          <img src={profileImg} alt="" />
          <div className="post__top__profile"> {profile}</div>
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <div className="post__content">
        {/* Porque a animação não funciona e já dá load com o coração renderizado?  CSS está em main.css:193*/}
        <img
          data-test="post-image"
          onDoubleClick={likeByImg}
          src={img}
          alt=""
        />{" "}
        <ion-icon
          className={
            heartAnim === true ? "image-heart animated" : "image-heart hidden"
          }
          name="heart"
        />
      </div>
      <div className="post__bottom">
        <div className="post__bottom__iconsLeft">
          <div>
            {!liked ? (
              <ion-icon onClick={handleLikedClick} name="heart-outline" />
            ) : (
              <ion-icon
                id="red-heart"
                onClick={handleLikedClick}
                name="heart"
                data-test="like-post"
              />
            )}
          </div>

          <a href="">
            <ion-icon name="chatbubble-outline"></ion-icon>
          </a>
          <a href="">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </a>
        </div>
        <div style={{ marginRight: "16px" }}>
          <ion-icon
            onClick={handleSavedClick}
            name={!saved ? "bookmark-outline" : "bookmark"}
            data-test="save-post"
          />
        </div>
      </div>
      <div className="likes">
        <div>
          <img className="likes-profile" src="img/respondeai-icon.jpg" alt="" />
        </div>
        <div className="likes-text">
          Curtido por <span>respondeai</span> e{" "}
          <span data-test="likes-number">outras {likeCount} pessoas</span>
        </div>
      </div>
    </div>
  );

  function handleLikedClick() {
    if (!liked) {
      setLiked(true);
      setNumLikes(likeCount + 1);
    } else {
      setLiked(false);
      setNumLikes(likeCount - 1);
    }
  }

  function handleSavedClick() {
    if (!saved) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }

  function likeByImg(e) {
    if (!liked) {
      setLiked(true);
      setNumLikes(likeCount + 1);
      startHeartAnim(true);
    } else {
      setLiked(false);
      setNumLikes(likeCount - 1);
      
    }
  }
}
