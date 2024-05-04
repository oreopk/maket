import './service.css';

function Service(props) {
  return (
    <>
      <div className="serviceMenu">
        <div className="bordService ">
          <img className="imgcard" src={props.img} alt="card" />
        </div>
        <span className="spanServ">{props.name}</span>
      </div>
    </>
  );
}
export default Service;
