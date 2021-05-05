const Service = ({ service }) => {
  console.log(service);
  return (
    <article className="app__service">
      <img
        className="app__service-icon"
        src={service.icon}
        alt="service icon"
      />
      <h4 className="app__service-title">{service.title}</h4>
      <p className="app__service-description">{service.description}</p>
    </article>
  );
};

export default Service;
