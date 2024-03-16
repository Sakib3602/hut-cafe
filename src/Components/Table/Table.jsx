import PropTypes from "prop-types";

const Table = ({ nam1, time1, cals ,deleteTb}) => {
  return (
    <div>
      <div>
        <h1 className="text-center text-[28px] font-[600]">
          Want To Cook : {nam1.length}
        </h1>
        <hr className="mt-4" />
      </div>
      <div className="overflow-x-auto max-w-[490px]  ">
        <table className="table">
          {/* head */}
          <thead className="">
            <tr>
              <th />
              <th className="text-[22px]">Name</th>
              <th className="text-[22px]">Time</th>
              <th className="text-[22px]">Calories</th>
              <th className="text-[22px]"></th>
            </tr>
          </thead>

          <tbody>
            {nam1.map((e, index) => (
              <tr key={index} className="bg-base-200">
                <th>{index + 1}</th>

                <td>{e}</td>

                <td>{time1[index]}</td>

                <td>{cals[index]}</td>

                <td>
                  <button onClick={()=>deleteTb()} className="btn btn-active bg-[#0BE58A]">
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="text-center text-[28px] font-[600]">Currently Cooking : </h1>
        <hr className="mt-4"/>

      </div>
    </div>
  );
};

Table.propTypes = {
  nam1: PropTypes.array.isRequired,
  time1: PropTypes.array.isRequired,
  cals: PropTypes.array.isRequired,
  deleteTb : PropTypes.func,
};

export default Table;
