const Services = () => {
  return (
    <section className="max-container padding-container">
      <div className="flexCenter flex-col gap-10 py-5 px-5">
        <h1 className="bold-52">Our Services</h1>
        <h2 className="regular-32">Weddings</h2>
        <div className="flexCenter flex-col md:flex-row gap-5">
          <img src="/wedding.jpeg" alt="wedding" width={512}></img>
          <p className="text-center p-5 md:regular-24 ">
            Make your special day unforgettable with a stunning lion dance
            performance that wows your guests!
          </p>
        </div>
        <h2 className="regular-32">Special Celebrations</h2>
        <div className="flexCenter flex-col md:flex-row gap-5">
          <img src="/celebrations.jpg" alt="special" width={512}></img>
          <p className="text-center p-5 md:regular-24">
            Add excitement to your party with vibrant lion dance shows that get
            everyone dancing and cheering!
          </p>
        </div>
        <h2 className="regular-32">Corporate Events</h2>
        <div className="flexCenter flex-col md:flex-row gap-5">
          <img src="/corporate.jpeg" alt="corporate events" width={512}></img>
          <p className="text-center p-5 md:regular-24">
            Impress clients and boost morale with a lively lion dance at your
            next corporate gathering!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
