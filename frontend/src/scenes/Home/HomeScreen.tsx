import React, { useEffect, useState } from 'react';

import { PortfolioApi } from '../../services/api';
import { Portfolio } from '../../services/api/types';

import { Layout } from '../../components/Layout';

import { Container, PortfolioCard } from './styles';

const HomeScreen: React.FC = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  useEffect(() => {
    const asyncSetPortfolios = async () => {
      const $portfolios = await PortfolioApi.getAllPortfolios();

      setPortfolios($portfolios);
    };

    asyncSetPortfolios();

    return () => {
      setPortfolios([]);
    };
  }, []);

  const createCard = (portfolio: Portfolio, idx: number) => {
    return (
      <PortfolioCard key={idx}>
        <h5>{portfolio.description}</h5>
        <p>{portfolio.details}</p>
      </PortfolioCard>
    );
  };

  return (
    <Layout>
      <Container>
        <h1>Portfólio de Serviços</h1>
        <div>{portfolios.map(createCard)}</div>
      </Container>
    </Layout>
  );
};

export default HomeScreen;
