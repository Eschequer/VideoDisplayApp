import React from "react";

import faker from "faker";
import AprrovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const CommentApp = () => {
  return (
    <AprrovalCard>
      <CommentDetail
        author="Samantha Abrique"
        time="today at 2 p.m"
        text="Hey there"
        avatar={`${faker.image.people()}?random=${Math.round(
          Math.random() * 1000
        )}`}
      />
    </AprrovalCard>
  );
};

export default CommentApp;
