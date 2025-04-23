import { Autorenew, Paid } from '@mui/icons-material';
import { useEffect, useState } from 'react'
import './UserGold.css'

export default function UserGold () {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [golds, setGolds] = useState<number | null>(null)


    useEffect(() => {
        fetch("/data/gold.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement du fichier JSON");
                }
                return response.json();
            })
            .then((data: {gold: number}) => {
                setGolds(data.gold);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur Fetch:", err);
                setError(err.message);
                setLoading(false);
              });
    })

    if (error) return <p>Erreur: {error}</p>;

    return <div className="user-gold-container">
        {loading && <div className='spinner'><Autorenew /></div>}
        {!loading && <div className='amount'>{golds}<Paid /></div>}
    </div>
}