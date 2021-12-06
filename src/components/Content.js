import Stories from "./Stories";
import Posts from "./Posts";
import Aside from "./Aside";

const stories = [
  { user: "kagome" },
  { user: "inuyasha" },
  { user: "sango" },
  { user: "kugisaki" },
  { user: "seshoumaru" },
  { user: "makiz" },
  { user: "chosobrother" },
  { user: "lust" },
];

const posts = [
  {
    user: "kagome",
    img: "post-kagome.jpg",
    likes: "inuyasha",
    text: "outras 101.523 pessoas",
  },
  {
    user: "kugisaki",
    img: "post-nobara.jfif",
    likes: "makiz",
    text: "outras 101.523 pessoas",
  },
  {
    user: "caitlyn",
    img: "post-caitlyn.jpg",
    likes: "lust",
    text: "outras 101.523 pessoas",
  },
];


export default function Content() {
  return (
    <>
      <div class="stories">
        {stories.map((u) => (
          <Stories user={u.user} />
        ))}
      </div>
      <div class="posts">
        {posts.map((p) => (
          <Posts user={p.user} img={p.img} likes={p.likes} text={p.text} />
          
        ))}
        </div>
     
        <div class="usuarios">
          <Aside />         
         </div>
        
    </>
  );
}
