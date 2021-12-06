
export default function Stories(props) {
return (
    <div>
      <div class="story">
      <div class="imagem">
        <img src={`assets/img/${props.user}.jpg`} alt={props.user} />
        </div>
        <div class="usuario"> {props.user} </div>
        
    </div>
    <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
      </div>
  );
}
