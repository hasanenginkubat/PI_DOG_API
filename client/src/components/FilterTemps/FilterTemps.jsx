import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, filetredByTemperement, getAllDogs } from "../../actions/index";

export default function FilterTempe() {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperaments);
  const dogs = useSelector((state) => state.allDogs);

  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(getAllDogs())
  }, [dispatch]);

  const handleFilterTemperaments = (e) => {
    dispatch(filetredByTemperement(e.target.value));
    console.log(e.target.value)
  };


  return (
    <div>
      <div>
        <select className="botonfiltro" onChange={(e) => handleFilterTemperaments(e)}>
          <option value="All">All Temperaments</option>
          {allTemperaments &&
            allTemperaments.map((temp) => (
              <option key={temp.id} value={temp.name}>
                {temp.name}
              </option>
            ))}
        </select>
      </div>
      
      <div>
        {dogs.map((dog) => (
          <div key={dog.id}>
            <h3>{dog.name}</h3>
            
          </div>
        ))}
      </div>
    </div>
  );
}
