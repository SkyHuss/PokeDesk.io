import { useState, useEffect } from "react";
import './Inventory.css'

type Pokeball = {
  label: string;
  quantity: number;
  success: number;
  image: string;
};

const PokeballList: React.FC = () => {
  const [pokeballs, setPokeballs] = useState<Pokeball[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/inventory.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
      })
      .then((data: Pokeball[]) => {
        setPokeballs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur Fetch:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
      <div className="inventory-container">
          {pokeballs.map(pokeball => (
              <div className="pokeball-card" key={pokeball.label}>
                  <div className="name">{pokeball.label}</div>
                  <div className="success">Chances de capture: {pokeball.success}%</div>
                  <div className="amount">{pokeball.quantity === -1 ? 'Infini' : `x ${pokeball.quantity}`}</div>
                  <div className="image">
                      <img src={pokeball.image} alt="pokeball image" />
                  </div>
              </div>
          ))}
      </div>
  );
};

export default PokeballList;
