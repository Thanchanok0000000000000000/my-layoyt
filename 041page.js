export default function Home() {
  return (
    <>
    <div className="container-fluid">
      <div className="row text-center">
        <div className="col-md-12 bg-primary p-5">
          navebar
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-12 bg-info p-5">
          header
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4 bg-danger p-5">
            card 1
          </div>
          <div className="col-md-4 bg-success p-5">
            card 2
          </div>
          <div className="col-md-4 bg-danger p-5">
            card 3
          </div>
        </div>
    </div>
    </>
  );
}

