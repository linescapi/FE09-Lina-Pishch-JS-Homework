import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "./Button";
import { Display } from "./Display";

export const Counter = () => {
  const [count, onClick] = useState(0);
  return (
    <>
      <Display number={count} />
      <div className="buttons">
        <Button
          color="firebrick"
          onClick={() => onClick(count - 1)}
          icon={<AiOutlineMinus />}
        />
        <Button
          color="gold"
          onClick={() => onClick(0)}
          icon={<GrPowerReset />}
        />
        <Button
          color="forestgreen"
          onClick={() => onClick(count + 1)}
          icon={<AiOutlinePlus />}
        />
      </div>
    </>
  );
};
