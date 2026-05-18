import type { TranslationDictionary } from "@/content/translations/types";

export const wordlechainTranslations: TranslationDictionary = {
  project_wordlechain_subject: {
    en: "Wordle Game - Blockchain Edition",
    pt: "Jogo Wordle - Edição Blockchain",
  },
  project_wordlechain_description: {
    en: "A blockchain-based Wordle game built as a first introduction to Web3 development.",
    pt: "Um jogo Wordle em blockchain desenvolvido como primeira introdução ao desenvolvimento Web3.",
  },
  project_wordlechain_details: {
    en: {
      type: "sections",
      sections: [
        {
          title: "Overview",
          content: {
            type: "paragraphs",
            paragraphs: [
              [
                "Wordlechain is a blockchain-based version of the Wordle game, built as my first project in a Web3 environment during my time at Subvisual.",
              ],
              [
                "The goal was to explore how smart contracts, tokens, and wallet interactions can be integrated into a web application.",
              ],
            ],
          },
        },
        {
          title: "Highlights",
          content: {
            type: "list",
            items: [
              {
                text: ["First experience working in a Web3 setting"],
              },
              {
                text: ["Integrated wallet interaction using Web3 tools"],
              },
              {
                text: ["Used smart contracts as the core application logic"],
              },
              {
                text: ["Connected on-chain data with a React-based frontend"],
              },
            ],
          },
        },
        {
          title: "Challenges",
          content: {
            type: "list",
            items: [
              {
                text: [
                  "Understanding how blockchain state and transactions differ from traditional applications",
                ],
              },
              {
                text: ["Working with smart contracts as a backend alternative"],
              },
              {
                text: [
                  "Integrating wallet interactions into the frontend flow",
                ],
              },
              {
                text: [
                  "Adapting to new tools and concepts with little prior experience",
                ],
              },
              {
                text: [
                  "Debugging across both frontend and smart contract layers",
                ],
              },
            ],
          },
        },
      ],
    },
    pt: {
      type: "sections",
      sections: [
        {
          title: "Visão Geral",
          content: {
            type: "paragraphs",
            paragraphs: [
              [
                "O Wordlechain é uma versão em blockchain do jogo Wordle, desenvolvido como o meu primeiro projeto num ambiente Web3 durante a minha experiência na Subvisual.",
              ],
              [
                "O objetivo foi explorar como smart contracts, tokens e interações com carteiras podem ser integrados numa aplicação web.",
              ],
            ],
          },
        },
        {
          title: "Destaques",
          content: {
            type: "list",
            items: [
              {
                text: ["Primeira experiência num contexto Web3"],
              },
              {
                text: [
                  "Integração de interações com carteira através de ferramentas Web3",
                ],
              },
              {
                text: [
                  "Utilização de smart contracts como lógica principal da aplicação",
                ],
              },
              {
                text: ["Ligação entre dados on-chain e um frontend em React"],
              },
            ],
          },
        },
        {
          title: "Desafios",
          content: {
            type: "list",
            items: [
              {
                text: [
                  "Compreender as diferenças entre estado e transações em blockchain e aplicações tradicionais",
                ],
              },
              {
                text: [
                  "Trabalhar com smart contracts como alternativa a backend",
                ],
              },
              {
                text: ["Integrar interações com carteira no fluxo do frontend"],
              },
              {
                text: [
                  "Adaptar-me a novas ferramentas e conceitos com pouca experiência prévia",
                ],
              },
              {
                text: ["Resolver problemas entre frontend e smart contracts"],
              },
            ],
          },
        },
      ],
    },
  },
};
