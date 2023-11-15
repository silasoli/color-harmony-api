export const GuiaSobreVentiladores: Mock = {
  default: `
      /* para usar o estilo padrao, utilize a class .padrao no body */
      .padrao main {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-top: 2em;
        margin-bottom: 2em;
        gap: 2em;
      }

      .padrao img{
          width: 15em;
      }

      .padrao .navbar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 5em;
        background-color: #b8ddc3;
      }

      .padrao .titulo {
        color: #424040;
      }
      .padrao .textFooter {
        color: #424040;
      }

      .padrao .sessao1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        background-color: #f4f4f4;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        gap: 1em;
      }

      .padrao .sessaoVentiladores{
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          width: 80%;
          margin: 0 auto;
          padding: 20px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          gap: 1em;
      }

      .padrao .infoModelo{
          max-width: 70%;
          display: flex;
          flex-direction: column;
          gap: 1em;
      }
      .padrao .imgModelo{
          max-width: 30%;
          align-items: center;
          justify-content: center;
          gap: 1em;
      
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
      .noturnoDaltonismo {
        font-family: 'Arial', sans-serif;
        background-color: #1a1a1a; /* Fundo escuro para modo noturno */
        color: #e0e0e0; /* Texto mais claro para melhor contraste */
      }

      .noturnoDaltonismo main {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-top: 2em;
        margin-bottom: 2em;
        gap: 2em;
      }

      .noturnoDaltonismo img {
        width: 15em;
      }

      .noturnoDaltonismo .navbar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 5em;
        background-color: #333; /* Fundo mais escuro para modo noturno */
      }

      .noturnoDaltonismo .titulo {
        color: #e0e0e0;
      }

      .noturnoDaltonismo .textFooter {
        color: #ccc; /* Texto cinza claro para melhor contraste */
      }

      .noturnoDaltonismo .sessao1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        background-color: #333; /* Fundo mais escuro para modo noturno */
        box-shadow: 0 0 5px rgba(224, 224, 224, 0.1);
        gap: 1em;
      }

      .noturnoDaltonismo .sessaoVentiladores {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        box-shadow: 0 0 5px rgba(224, 224, 224, 0.1);
        gap: 1em;
      }

      .noturnoDaltonismo .infoModelo {
        max-width: 70%;
        display: flex;
        flex-direction: column;
        gap: 1em;
        color: #e0e0e0;
      }

      .noturnoDaltonismo .imgModelo {
        max-width: 30%;
        align-items: center;
        justify-content: center;
        gap: 1em;
      }
  `,
  night_mode: `
      .noturno {
        font-family: 'Arial', sans-serif;
        background-color: #333; /* Fundo escuro para modo noturno */
        color: #fff; /* Texto branco para melhor contraste */
      }

      .noturno main {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-top: 2em;
        margin-bottom: 2em;
        gap: 2em;
      }

      .noturno img {
        width: 15em;
      }

      .noturno .navbar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 5em;
        background-color: #222; /* Fundo escuro para modo noturno */
      }

      .noturno .titulo {
        color: #fff;
      }

      .noturno .textFooter {
        color: #ccc; /* Texto cinza claro para melhor contraste */
      }

      .noturno .sessao1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        background-color: #444; /* Fundo mais escuro para modo noturno */
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
        gap: 1em;
      }

      .noturno .sessaoVentiladores {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
        gap: 1em;
      }

      .noturno .infoModelo {
        max-width: 70%;
        display: flex;
        flex-direction: column;
        gap: 1em;
        color: #fff;
      }

      .noturno .imgModelo {
        max-width: 30%;
        align-items: center;
        justify-content: center;
        gap: 1em;
      }
  `,
  daltonian: `
      .daltonismo {
        font-family: 'Arial', sans-serif;
        background-color: #f0f0f0; /* Fundo mais claro para melhor contraste */
        color: #333;
      }

      .daltonismo main {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-top: 2em;
        margin-bottom: 2em;
        gap: 2em;
      }

      .daltonismo img {
        width: 15em;
      }

      .daltonismo .navbar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 5em;
        background-color: #336699; /* Azul mais escuro para melhor contraste */
      }

      .daltonismo .titulo {
        color: #fff; /* Texto branco para melhor contraste */
      }

      .daltonismo .textFooter {
        color: #333;
      }

      .daltonismo .sessao1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        gap: 1em;
        color: #333;
      }

      .daltonismo .sessaoVentiladores {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        gap: 1em;
      }

      .daltonismo .infoModelo {
        max-width: 70%;
        display: flex;
        flex-direction: column;
        gap: 1em;
        color: #333;
      }

      .daltonismo .imgModelo {
        max-width: 30%;
        align-items: center;
        justify-content: center;
        gap: 1em;
      }
  `,
};
