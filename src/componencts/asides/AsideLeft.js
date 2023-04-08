import React from "react";

import Card from "../UI/Card";
import NewUser from "./NewUser";

const AsideLeft = () => {
  return (
    <div>
      <Card bg="white">
        <NewUser />
      </Card>
    </div>
  );
};

export default AsideLeft;