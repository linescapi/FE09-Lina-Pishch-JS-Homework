import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "./Button";

export const Counter = () => {
  const [count, onClick] = useState(0);
  return (
    <>
      <div className="display-number">{count}</div>
      <div className="buttons">
        <Button
          color="firebrick"
          onClick={() => onClick(count - 1)}
          inner={<AiOutlineMinus />}
        />
        <Button
          color="gold"
          onClick={() => onClick(0)}
          inner={<GrPowerReset />}
        />
        <Button
          color="forestgreen"
          onClick={() => onClick(count + 1)}
          inner={<AiOutlinePlus />}
        />
      </div>
    </>
  );
};
