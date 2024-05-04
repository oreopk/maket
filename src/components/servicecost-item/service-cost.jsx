import './service-cost.css';

function ServiceCost(props) {
  return (
    <>
      <div className="servicediv">
        <div className="servicemain">
          <span className="service-text">{props.name}</span>
          <span className="service-text">{props.cost}</span>
        </div>
        <span className="service-text_low">{props.desc}</span>
      </div>
    </>
  );
}
export default ServiceCost;
