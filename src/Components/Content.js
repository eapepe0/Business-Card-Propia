export default function Content() {
  return (
    <div className="main__contenido">
      <h1 className="nombre"> Cristian Oyola</h1>
      <h4 className="cargo"> Frontend Developer</h4>
      <h6 className="website"> eapepe0.github.io</h6>

      <a href="mailto:eapepe0@gmail.com">
        <button className="email">
          <i className="fas fa-envelope"></i>Email
        </button>
      </a>
      <button className="linkedin">
        <i className="fab fa-linkedin"></i>Linkedin
      </button>

      <div className="texto">
        <h2 className="titulo_contenido">Acerca de mí </h2>
        <p className="parrafo">
          Soy frontend developer , interesado en crear cosas. Intento mantenerme
          al día con la seguridad y las mejores prácticas.
          <br></br>Siempre con ganas de aprender cosas nuevas.
        </p>
        <h2 className="titulo_contenido">Intereses </h2>
        <p className="parrafo">
          Comida. Fanatico de Internet. Gamer. Amante de los michis y los
          perros.
        </p>
      </div>
    </div>
  );
}
