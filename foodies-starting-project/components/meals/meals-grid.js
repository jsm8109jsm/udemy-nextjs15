import classess from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <ul className={classess.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealsItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
