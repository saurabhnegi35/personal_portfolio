import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './Portfolio.scss';
import { frontend, frontendReact, backend, fullstack } from '../../data';

export default function Portfolio() {
  const [selected, setSelected] = useState('frontend');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'frontend',
      title: 'FrontEnd',
    },
    {
      id: 'frontendReact',
      title: 'FrontEnd React',
    },
    {
      id: 'backend',
      title: 'BackEnd',
    },
    {
      id: 'fullstack',
      title: 'FullStack',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'frontend':
        setData(frontend);
        break;
      case 'frontendReact':
        setData(frontendReact);
        break;
      case 'backend':
        setData(backend);
        break;
      case 'fullstack':
        setData(fullstack);
        break;
      default:
        setData(frontend);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>My Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="Img" />

            <a href={d.link} target="_blank" rel="noopener noreferrer">
              {''}
              <h3>{d.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
