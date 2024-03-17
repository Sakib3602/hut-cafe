import PropTypes from "prop-types";
import CurrenC from "../CurrentC/CurrenC";

const Table = ({ nam1, time1, cals, deleteData, cook }) => {
  // function ll(){
  // }

  // setTimeCal(ok)

  return (
    <div>
      <div>
        <h1 className="text-center text-[28px] font-[600]">
          Want To Cook : {nam1.length}
        </h1>
        <hr className="mt-4" />
      </div>
      <div className=" w-full lg:max-w-[490px]  ">
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

                <td>{time1[index]} min</td>

                <td>{cals[index]} cal</td>

                <td>
                  <button
                    onClick={() => deleteData(e, time1)}
                    className="btn btn-active bg-[#0BE58A]"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* current cooking */}

      <div className="mt-5">
        <h1 className="text-center text-[28px] font-[600]">
          Currently Cooking : {cook.length}
        </h1>
        <hr className="mt-4" />
        <CurrenC cook={cook} time1={time1} cals={cals}></CurrenC>
      </div>

      {/* <hr className="mt-4" />

      <div>

        <h1>Total Time = {timeCal}</h1>
        <h1>Total Calories = </h1>
        
       
      </div> */}
    </div>
  );
};

Table.propTypes = {
  deleteData: PropTypes.func,
  cook: PropTypes.array,
  nam1: PropTypes.array.isRequired,
  time1: PropTypes.array.isRequired,
  cals: PropTypes.array.isRequired,
  deleteTb: PropTypes.func,
};

export default Table;
