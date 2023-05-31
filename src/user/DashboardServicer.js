import DashboardNav from "../components/DashboardNav";


const DashboardServicer = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <div className="content">
          <h2 className="text_shadows font-face-tb">Dashboard Servicer</h2>
        </div>
      </div>

      <div className="container-fluid p-4">
        <DashboardNav />
      </div>

    <div className="container">
        <p>Show all Services posted and a button to add new</p>
    </div>

    </>
  );
};

export default DashboardServicer;