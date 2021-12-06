const myself = {
  user: "princessbubblegum", 
  nickname: "Bonnie"}


const sidebar = [
  { suggestion: "tanjiro",
  text: "Segue você",}, 
  { suggestion: "iceking",
  text: "Segue você",},
  { suggestion: "lemongrab",
  text: "Segue você",},
  { suggestion: "korra",
  text: "Segue você",},
  { suggestion: "amity",
  text: "Segue você"}];
  

export default function Aside() {
  return (
<div class="fixed"> 
            <div class="sidebar">
        <div class="usuario">
        <img src={`assets/img/${myself.user}.jpg`} alt={myself.user} />
        <div class="texto">
          <strong>{myself.user}</strong>
          {myself.nickname}
        </div>
      </div>
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>


        {sidebar.map((s) => (
        <div class="sugestao">
          <div class="usuario">
            <img
              src={`assets/img/${s.suggestion}.jpg`}
              alt={s.suggestion}
            />
            <div class="texto">
              <div class="nome">{s.suggestion} </div>
              <div class="razao">{s.text}</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>
      ))}

<div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>
      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div> 

</div>   
      </div>
</div>

  );
}
