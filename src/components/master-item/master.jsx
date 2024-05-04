import './master.css';

function Master(props) {
  return (
    <>
      <div className="cardMenu">
        <div className="bordMaster">
          <img className="mastercard" src={props.img} alt="card" />
        </div>
        <span className="name">{props.name}</span>
        <span className="work">{props.work}</span>
      </div>
    </>
  );
}
export default Master;
