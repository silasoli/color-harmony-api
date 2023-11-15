export const GuiaViolao: Mock = {
  default: `
      .padrao {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: whitesmoke;
    }

    /* Estilos do cabeçalho */
    .padrao .title {
        text-align: center;
        background-color: #007BFF;
        color: #fff;
        padding: 20px;
    }

    .padrao .title h1 {
        margin: 0;
    }

    .padrao .title p {
        margin: 0;
    }

    /* Estilos do conteúdo */
    .padrao .container {
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
    }

    .padrao .contentPost {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .padrao .imageGuitar {
        width: 400px;
        height: auto;
        margin: 10px;
    }

    .padrao .textContent {
        flex: 1;
        padding: 20px;
        text-align: center;
    }

    .padrao footer{
        text-align: center;
        background-color: #007BFF;
        color: #fff;
        padding: 20px;
    }

    /* Estilos para dispositivos menores */
    @media (max-width: 768px) {
        .padrao .title h1 {
            font-size: 2rem;
        }

        .padrao .title p {
            font-size: 1rem;
        }

        .padrao .contentPost {
            flex-direction: column;
        }

        .padrao .textContent {
            padding: 10px;
        }
    }`,
  font_size: (size: number) => {
    return `
      html {
        font-size: ${size}rem;
      }
    `;
  },
  night_mode_daltonian: `
  .noturnoDaltonico {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #1a1a1a; /* Fundo escuro para o modo noturno */
    color: #fff; /* Cor do texto para o modo noturno */

    /* Adaptações para daltonismo */
    border: 1px solid #ddd; /* Cor da borda para daltonismo */
}

/* Estilos do cabeçalho */
.noturnoDaltonico .title {
    text-align: center;
    background-color: #333; /* Cor de fundo do cabeçalho para o modo noturno */
    color: #fff;
    padding: 20px;
}

.noturnoDaltonico .title h1 {
    margin: 0;
}

.noturnoDaltonico .title p {
    margin: 0;
}

/* Estilos do conteúdo */
.noturnoDaltonico .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
}

.noturnoDaltonico .contentPost {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.noturnoDaltonico .imageGuitar {
    width: 400px;
    height: auto;
    margin: 10px;
}

.noturnoDaltonico .textContent {
    flex: 1;
    padding: 20px;
    text-align: center;
}

.noturnoDaltonico footer {
    text-align: center;
    background-color: #333; /* Cor de fundo do rodapé para o modo noturno */
    color: #fff;
    padding: 20px;
}

/* Estilos para dispositivos menores */
@media (max-width: 768px) {
    .noturnoDaltonico .title h1 {
        font-size: 2rem;
    }

    .noturnoDaltonico .title p {
        font-size: 1rem;
    }

    .noturnoDaltonico .contentPost {
        flex-direction: column;
    }

    .noturnoDaltonico .textContent {
        padding: 10px;
    }
}
  `,
  night_mode: `
      .noturno {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #1a1a1a; /* Fundo escuro para o modo noturno */
        color: #fff; /* Cor do texto para o modo noturno */
    }

    /* Estilos do cabeçalho */
    .noturno .title {
        text-align: center;
        background-color: #333; /* Cor de fundo do cabeçalho para o modo noturno */
        color: #fff;
        padding: 20px;
    }

    .noturno .title h1 {
        margin: 0;
    }

    .noturno .title p {
        margin: 0;
    }

    /* Estilos do conteúdo */
    .noturno .container {
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
    }

    .noturno .contentPost {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .noturno .imageGuitar {
        width: 400px;
        height: auto;
        margin: 10px;
    }

    .noturno .textContent {
        flex: 1;
        padding: 20px;
        text-align: center;
    }

    .noturno footer {
        text-align: center;
        background-color: #333; /* Cor de fundo do rodapé para o modo noturno */
        color: #fff;
        padding: 20px;
    }

    /* Estilos para dispositivos menores */
    @media (max-width: 768px) {
        .noturno .title h1 {
            font-size: 2rem;
        }

        .noturno .title p {
            font-size: 1rem;
        }

        .noturno .contentPost {
            flex-direction: column;
        }

        .noturno .textContent {
            padding: 10px;
        }
    }
  `,
  daltonian: `
      .daltonismo {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f8f8f8; /* Fundo mais suave */
    }

    /* Estilos do cabeçalho */
    .daltonismo .title {
        text-align: center;
        background-color: #4f4f4f; /* Cinza escuro para o cabeçalho */
        color: #fff;
        padding: 20px;
    }

    .daltonismo .title h1 {
        margin: 0;
    }

    .daltonismo .title p {
        margin: 0;
    }

    /* Estilos do conteúdo */
    .daltonismo .container {
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
    }

    .daltonismo .contentPost {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .daltonismo .imageGuitar {
        width: 400px;
        height: auto;
        margin: 10px;
    }

    .daltonismo .textContent {
        flex: 1;
        padding: 20px;
        text-align: center;
    }

    .daltonismo footer {
        text-align: center;
        background-color: #4f4f4f; /* Cinza escuro para o rodapé */
        color: #fff;
        padding: 20px;
    }

    /* Estilos para dispositivos menores */
    @media (max-width: 768px) {
        .daltonismo .title h1 {
            font-size: 2rem;
        }

        .daltonismo .title p {
            font-size: 1rem;
        }

        .daltonismo .contentPost {
            flex-direction: column;
        }

        .daltonismo .textContent {
            padding: 10px;
        }
    }
  `,
};
