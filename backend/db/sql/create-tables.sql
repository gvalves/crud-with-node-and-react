CREATE TABLE IF NOT EXISTS portfolio (
	portfolioId SERIAL PRIMARY KEY,
	description VARCHAR(255) NOT NULL,
	details TEXT NOT NULL
);
