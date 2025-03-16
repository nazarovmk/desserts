import { Dessert } from "./";

function DessertList({ desserts }) {
  return (
    <main>
      <h1 className="dessert-title">Desserts</h1>
      <div className="Desertlist-container">
        {desserts.map((d) => {
          return <Dessert key={d.id} d={d} />;
        })}
      </div>
    </main>
  );
}

export default DessertList;
