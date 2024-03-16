
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Table from "../Table/Table";

const MainSec = () => {
  const [api, setApi] = useState([]);
  const [nam1, setNam] = useState([]);
  const [time1, setTime] = useState([]);
  const [cals, setCals] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

 

  function handle(nam, time, cal) {
    console.log("handle", nam, time, cal);

    let namOk = [...nam1, nam];
    setNam(namOk);

    let newTime = [...time1, time];

    let newCal = [...cals, cal];
    setTime(newTime);
    setCals(newCal);
  }

  function deleteTb(){
    console.log("delete")
  }

  return (
    <div className="lg:mt-11 flex justify-between">
      <div className="grid grid-cols-2 gap-5">
        {api.map((e, i) => (
          <Card key={i} handle={handle} api={e}></Card>
        ))}
      </div>

      <div>
        <Table deleteTb={deleteTb} nam1={nam1} time1={time1} cals={cals}></Table>
      </div>
    </div>
  );
};

MainSec.propTypes = {};

export default MainSec;
