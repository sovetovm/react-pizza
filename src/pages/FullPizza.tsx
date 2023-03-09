import axios from 'axios';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    title: string;
    imageUrl: string;
    price: number;
  }>();
  const params = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
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

  if (!pizza) {
    return <>Загрузка</>;
  }

  return (
    <div className="pizza-container">
      <div className="pizza-info">
        <h2 className="pizza-title">{pizza.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit vitae nobis est cum
          labore unde consequuntur voluptatum maiores fuga, maxime officiis tempora dolor aliquid
          sequi deleniti. Iure, eveniet blanditiis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas rerum aut doloribus! Quasi quo eos rerum itaque fuga cumque dicta
          asperiores quidem libero, dolorem mollitia, praesentium ab eaque ex a? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Eligendi, modi architecto. Repellat pariatur
          libero, doloribus placeat ea, maxime nisi autem facere laboriosam obcaecati itaque
          molestiae, delectus quidem voluptas in impedit? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aliquam fugit, ducimus quod vero vitae tenetur sed harum sequi error
          eaque qui. Adipisci repellendus saepe delectus id similique ipsam nam suscipit?Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Vitae esse vero quo saepe quis corrupti
          possimus odio quaerat necessitatibus, nulla beatae alias ad obcaecati expedita facere
          exercitationem. Reiciendis, voluptatibus temporibus.
        </p>
        <p>КБЖУ: 325, 40, 74, 123</p>
        <h4>{pizza.price} ₽</h4>
      </div>
      <div className="pizza-image">
        <img src={pizza.imageUrl} alt="pizzaImage" width="250px" height="250px" />
      </div>
      <div className="pizza-btn">
        <Link to="/">
          <span>Вернуться на главную</span>
        </Link>
      </div>
    </div>
  );
};

export default FullPizza;
