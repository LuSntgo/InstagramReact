import Content from "./Content";
import Posts from "./Posts";
import Aside from "./Aside";

export default function Body(){
    return (
        <div class="corpo">
        <div class="esquerda">
            <Content />
            <Posts />
        </div>
            <Aside/>
        </div>
    )
}