import React from "react";

function NewsDetailLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

export default NewsDetailLayout;
