export const LivrosDeProgramacao: Mock = {
  default: `
  * {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .padrao header {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 1em 0;
  }

  .padrao .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 20px;
  }

  .padrao footer {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 1em 0;
  }

  .padrao .card {
      flex: 0 1 calc(33.33% - 20px);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      margin: 10px;
      transition: transform 0.3s;
  }

  .padrao .card:hover {
      transform: scale(1.05);
  }

  .padrao .card img {
      width: 200px;
      height: auto;
  }

  .padrao .card .info {
      flex: 1;
      padding: 10px;
  }

  .padrao .card h2 {
      text-align: center;
  }

  .padrao .card p {
      text-align: justify;
  }

  @media screen and (max-width: 768px) {
      .padrao .card {
          flex: 0 1 calc(30% - 20px);
      }
  }

  @media screen and (max-width: 1600px) {
      .padrao .container {
          flex-direction: column;
      }
  }
  `,
  font_size: (size: number) => {
    return `
      html {
        font-size: ${size}rem;
      }
    `;
  },
  night_mode_daltonian: `
  .noturnoDaltonismo header {
    background-color: #1a1a1a; /* Cor de fundo do cabeçalho para o modo noturno */
    color: #fff;
    text-align: center;
    padding: 1em 0;
}

.noturnoDaltonismo .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    background-color: #333; /* Cor de fundo da área de conteúdo para o modo noturno */
}

.noturnoDaltonismo footer {
    background-color: #1a1a1a; /* Cor de fundo do rodapé para o modo noturno */
    color: #fff;
    text-align: center;
    padding: 1em 0;
}

.noturnoDaltonismo .card {
    flex: 0 1 calc(33.33% - 20px);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid #ddd; /* Cor da borda da carta para daltonismo */
    border-radius: 8px;
    overflow: hidden;
    margin: 10px;
    transition: transform 0.3s;
}

.noturnoDaltonismo .card:hover {
    transform: scale(1.05);
}

.noturnoDaltonismo .card img {
    width: 200px;
    height: auto;
}

.noturnoDaltonismo .card .info {
    flex: 1;
    padding: 10px;
}

.noturnoDaltonismo .card h2 {
    text-align: center;
    color: #fff; /* Cor do texto do cabeçalho da carta para o modo noturno */
}

.noturnoDaltonismo .card p {
    text-align: justify;
    color: #ccc; /* Cor do texto do parágrafo da carta para o modo noturno */
}

@media screen and (max-width: 768px) {
    .noturnoDaltonismo .card {
        flex: 0 1 calc(30% - 20px);
    }
}

@media screen and (max-width: 1600px) {
    .noturnoDaltonismo .container {
        flex-direction: column;
    }
}
  `,
  night_mode: `
  * {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .noturno header {
      background-color: #111; /* Cor de fundo do cabeçalho para o modo noturno */
      color: #fff;
      text-align: center;
      padding: 1em 0;
  }

  .noturno .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 20px;
      background-color: #222; /* Cor de fundo da área de conteúdo para o modo noturno */
  }

  .noturno footer {
      background-color: #111; /* Cor de fundo do rodapé para o modo noturno */
      color: #fff;
      text-align: center;
      padding: 1em 0;
  }

  .noturno .card {
      flex: 0 1 calc(33.33% - 20px);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border: 1px solid #444; /* Cor da borda da carta para o modo noturno */
      border-radius: 8px;
      overflow: hidden;
      margin: 10px;
      transition: transform 0.3s;
  }

  .noturno .card:hover {
      transform: scale(1.05);
  }

  .noturno .card img {
      width: 200px;
      height: auto;
  }

  .noturno .card .info {
      flex: 1;
      padding: 10px;
  }

  .noturno .card h2 {
      text-align: center;
      color: #fff; /* Cor do texto do cabeçalho da carta para o modo noturno */
  }

  .noturno .card p {
      text-align: justify;
      color: #ddd; /* Cor do texto do parágrafo da carta para o modo noturno */
  }

  @media screen and (max-width: 768px) {
      .noturno .card {
          flex: 0 1 calc(30% - 20px);
      }
  }

  @media screen and (max-width: 1600px) {
      .noturno .container {
          flex-direction: column;
      }
  }
  `,
  daltonian: `
  * {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.daltonismo header {
    background-color: #f0f0f0; /* Cor de fundo do cabeçalho para daltonismo */
    color: #333; /* Cor do texto do cabeçalho para daltonismo */
    text-align: center;
    padding: 1em 0;
}

.daltonismo .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    background-color: #fff; /* Cor de fundo da área de conteúdo para daltonismo */
}

.daltonismo footer {
    background-color: #f0f0f0; /* Cor de fundo do rodapé para daltonismo */
    color: #333; /* Cor do texto do rodapé para daltonismo */
    text-align: center;
    padding: 1em 0;
}

.daltonismo .card {
    flex: 0 1 calc(33.33% - 20px);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid #ddd; /* Cor da borda da carta para daltonismo */
    border-radius: 8px;
    overflow: hidden;
    margin: 10px;
    transition: transform 0.3s;
}

.daltonismo .card:hover {
    transform: scale(1.05);
}

.daltonismo .card img {
    width: 200px;
    height: auto;
}

.daltonismo .card .info {
    flex: 1;
    padding: 10px;
}

.daltonismo .card h2 {
    text-align: center;
    color: #333; /* Cor do texto do cabeçalho da carta para daltonismo */
}

.daltonismo .card p {
    text-align: justify;
    color: #555; /* Cor do texto do parágrafo da carta para daltonismo */
}

@media screen and (max-width: 768px) {
    .daltonismo .card {
        flex: 0 1 calc(30% - 20px);
    }
}

@media screen and (max-width: 1600px) {
    .daltonismo .container {
        flex-direction: column;
    }
}
  `,
};
