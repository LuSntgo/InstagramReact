import Stories from "./Stories";


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

export default function Content() {
  return (
    <div class="stories">
      {stories.map((u) => (
        <Stories user={u.user} />
      ))}
    </div>
  );
}

