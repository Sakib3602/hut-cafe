import PropTypes from "prop-types";

const CurrenC = ({ cook, time1, cals }) => {
  return (
    <div>
      <div className="overflow-x-auto max-w-[490px]  ">
        <table className="table">
          {/* head */}
          <thead className="">
            <tr>
              <th />
              <th className="text-[22px]">Name</th>
              <th className="text-[22px]">Time</th>
              <th className="text-[22px]">Calories</th>
            </tr>
          </thead>

          <tbody>
            {cook.map((e, index) => (
              <tr key={index} className="bg-base-200">
                <th>{index + 1}</th>

                <td>{e}</td>

                <td>{time1[index]} min</td>

                <td>{cals[index]} cal</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

CurrenC.propTypes = {
  cook: PropTypes.array,
  time1: PropTypes.array,
  cals: PropTypes.array,
};

export default CurrenC;
