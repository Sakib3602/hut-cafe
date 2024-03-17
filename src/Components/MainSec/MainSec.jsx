import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Table from "../Table/Table";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainSec = () => {
  const [api, setApi] = useState([]);
  const [nam1, setNam] = useState([]);
  const [time1, setTime] = useState([]);
  const [cals, setCals] = useState([]);

  console.log("nam1",nam1)

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  function handle(nam, time, cal) {
    console.log("handle", nam, time, cal);
    console.log(nam1)
    let fix = nam1.find(x => x == nam)
    if(fix){
      return toast.success("You All Ready Add It.", {
        style: {
          color: '#A0153E',
          fontWeight: 700
        },
      }); 
    }
   
    let namOk = [...nam1, nam];
    setNam(namOk);

    let newTime = [...time1, time];

    let newCal = [...cals, cal];
    setTime(newTime);
    setCals(newCal);
  }

  

  return (
    
    <div className="lg:mt-11 flex justify-between">
      <div className="grid grid-cols-2 gap-5">
        {api.map((e, i) => (
          <Card key={i} handle={handle} api={e}></Card>
        ))}
      </div>

      <div>
        <Table
         
          nam1={nam1}
          time1={time1}
          cals={cals}
        ></Table>
      </div>

      <ToastContainer />
    </div>
  );
};

MainSec.propTypes = {};

export default MainSec;
