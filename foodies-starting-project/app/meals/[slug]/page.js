import React from "react";

function MealsDetailPage({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Meals Details({params.slug}) Page!!!!!
      </h1>
    </main>
  );
}

export default MealsDetailPage;
