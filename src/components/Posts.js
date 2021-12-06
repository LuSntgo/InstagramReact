export default function Posts(props) {
  return (
    <div class="posts">
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={`assets/img/${props.usuario}`} alt={props.usuario} />
            {props.usuario}
          </div>
          <div class="acoes">{props.acoes}</div>
        </div>

        <div class="conteudo">
          <img src={`assets/img/${props.usuario}`} alt={props.usuario} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              {props.acoes}
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={`assets/img/${props.usuario}`} alt={props.usuario}/>
            <div class="texto">{props.likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
