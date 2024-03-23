const Userlisting = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h2>User Listing</h2>
        </div>

        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>Code</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone Number</td>
                <td>Role</td>
                <td>Action</td>
              </tr>
            </thead>

            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userlisting;
