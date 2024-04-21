import './App.css';
import omega from '../src/omega.png';
import instagram from '../src/instagram.png';
import cav from '../src/cav.png';
import one from '../src/1.png';
import two from '../src/2.png';
import three from '../src/3.png';
import four from '../src/4.png';
import five from '../src/5.png';
import six from '../src/6.png';
import kevin from '../src/kevin.png';
import oribe from '../src/oribe.png';
import alterna from '../src/alterna.png';
import aldo from '../src/aldo.png';
import works1 from '../src/work-1.png';
import works2 from '../src/work-2.png';
import works3 from '../src/work-3.png';
import works4 from '../src/work-4.png';
import works5 from '../src/work-5.png';
import works6 from '../src/work-6.png';
import works7 from '../src/work-7.png';
import works8 from '../src/work-8.png';
import works9 from '../src/work-9.png';
function App() {
  const omegastyle = {
    width: '40px',
    height: '38.68px',
  };

  return (
    <>
      <div className="backgroundImage">
        <div className="navbar">
          <ul>
            <li>
              <img style={omegastyle} src={instagram} alt="Omega" />
            </li>
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Мастера</a>
            </li>
            <li>
              <a href="#">Косметика</a>
            </li>
            <li>
              <img style={omegastyle} src={omega} alt="Omega" />
            </li>
            <li>
              <a href="#">Акции</a>
            </li>
            <li>
              <a href="#">Отзывы</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </div>
        <h1 className="mainText">
          Салон красоты <br />
          «Delote-Beauty» <br />
          на Крестовском
        </h1>
        <p className="tip">Прокрутите вниз</p>
      </div>
      <div className="description">
        <img className="cavstyle" src={cav} alt="cav" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh
          vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan
          risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis
          tristique. Viverra augue lorem ut quisque quam tortor, malesuada
          iaculis.
          <br /> <br />
          Et elementum at nulla venenatis, faucibus integer. Auctor neque eros,
          viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit
          imperdiet sapien fringilla vestibulum sit fames.
        </p>

        <div className="cardsMenu">
          <div className="cardspart">
            <div className="cardMenu">
              <div className="bordMenu">
                <img className="imgcard" src={one} alt="card" />
              </div>
              <span>Парихмахерские услуги</span>
            </div>

            <div className="cardMenu">
              <div className="bordMenu">
                <img className="imgcard" src={two} alt="card" />
              </div>
              <span>Маникюр</span>
            </div>

            <div className="cardMenu">
              <div className="bordMenu">
                <img className="imgcard" src={three} alt="card" />
              </div>
              <span>Педикюр</span>
            </div>
          </div>
          <div className="cardspart">
            <div className="cardMenu">
              <div className="bordMenu">
                <img className="imgcard" src={four} alt="card" />
              </div>
              <span>Космотология</span>
            </div>

            <div className="cardMenu">
              <div className="bordMenu">
                <img className="imgcard" src={five} alt="card" />
              </div>
              <span>Эстетист по делу</span>
            </div>

            <div className="cardMenu">
              <div className="bordMenu">
                <img className="imgcard" src={six} alt="card" />
              </div>
              <span>Визаж</span>
            </div>
          </div>
        </div>
        <div className="icons">
          <img className="icon" src={kevin} alt="card" />
          <img className="icon" src={oribe} alt="card" />
          <img className="icon" src={alterna} alt="card" />
          <img className="icon" src={aldo} alt="card" />
        </div>
        <div className="works">
          <span>Наши работы</span>
          <div className="worksmenu">
            <h2>Показать все</h2>
            <h2>Парихмахерские услуги</h2>
            <h2>Маникюр</h2>
            <h2>Педикюр</h2>
          </div>
        </div>
        <div className="examples">
          <img className="example" src={works1} alt="card" />
          <img className="example" src={works2} alt="card" />
          <img className="example" src={works3} alt="card" />
          <img className="example" src={works4} alt="card" />
          <img className="example" src={works5} alt="card" />
          <img className="example" src={works6} alt="card" />
          <img className="example" src={works7} alt="card" />
          <img className="example" src={works8} alt="card" />
          <img className="example" src={works9} alt="card" />
        </div>
        <footer>
          <img className="omega2" src={omega} alt="instagram" />
          <div className="subfooter">
            <span className="mainstring">Контакты</span>
            <span>+7 (812) 123-45-67</span>
            <span>+7 (911) 123-45-67</span>
            <span>Новоостровский проспект, дом 36 лит. С</span>
          </div>
          <div className="subfooter">
            <span className="mainstring">Режим работы</span>
            <span>С 10:00 lj 21:00 (Пн-Пт)</span>
            <span>С 11:00 до 20:00 (Сб-Вс)</span>
            <span>Новоостровский проспект, дом 36 лит. С</span>
          </div>
          <div className="subfooter">
            <span className="mainstring">Мы в Instagram</span>
            <img style={omegastyle} src={instagram} alt="Omega" />
          </div>
        </footer>
        <span className="copyright">Copyright © 2017 - 2022</span>
      </div>
    </>
  );
}

export default App;
