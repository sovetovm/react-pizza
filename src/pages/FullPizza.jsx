import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function FullPizza() {
  const [pizza, setPizza] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://63bd4096d6600623889f0d40.mockapi.io/items/${params.id}`,
        );
        setPizza(data);
      } catch (e) {
        alert('Error');
        navigate('/');
      }
    }
    fetchPizza();
  }, [navigate, params.id]);

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizzaImage" width="200px" height="200px" />
      <h2>{pizza.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit vitae nobis est cum
        labore unde consequuntur voluptatum maiores fuga, maxime officiis tempora dolor aliquid
        sequi deleniti. Iure, eveniet blanditiis.
      </p>
      <p>КБЖУ: 325, 40, 74, 123</p>
      <h4>{pizza.price} ₽</h4>
      <Link to="/" className="button button--black">
        <span>Вернуться на главную</span>
      </Link>
    </div>
  );
}
