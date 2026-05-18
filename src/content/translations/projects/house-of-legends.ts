import type { TranslationDictionary } from "@/content/translations/types";

export const houseOfLegendsTranslations: TranslationDictionary = {
  project_house_of_legends_subject: {
    en: "League of Legends Champion Build Manager",
    pt: "Gestor de Builds de Campeões de League of Legends",
  },
  project_house_of_legends_description: {
    en: "A React-based app for managing League of Legends champion builds, exploring data handling and user interaction.",
    pt: "Uma aplicação em React para gerir builds de campeões de League of Legends, focada em dados e interação com o utilizador.",
  },
  project_house_of_legends_details: {
    en: {
      type: "sections",
      sections: [
        {
          title: "Overview",
          content: {
            type: "paragraphs",
            paragraphs: [
              [
                "House of Legends is a React-based application built to explore how data can be managed and displayed in a frontend application.",
              ],
              [
                "The app allows users to create and manage League of Legends champion builds, working with structured data and user interactions.",
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
                text: ["First project built using React"],
              },
              {
                text: [
                  "Worked with structured data to create and manage builds",
                ],
              },
              {
                text: ["Implemented basic CRUD-like interactions in the UI"],
              },
              {
                text: [
                  "Used external API data together with local build management",
                ],
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
                  "Learning React concepts such as components, state, and data flow",
                ],
              },
              {
                text: [
                  "Understanding how to manage and structure data in a frontend application",
                ],
              },
              {
                text: [
                  "Handling user interactions and keeping the UI in sync with data",
                ],
              },
            ],
          },
        },
        {
          title: "Evolution",
          content: {
            type: "list",
            items: [
              {
                text: [
                  "2023 — Initial version built with React, external champion data, and build CRUD through a local API",
                ],
              },
              {
                text: [
                  "2026 — Revamped version with improved UI, better logic, and localStorage-based build management",
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
                "House of Legends é uma aplicação em React desenvolvida para explorar como os dados podem ser geridos e apresentados numa aplicação frontend.",
              ],
              [
                "A aplicação permite criar e gerir builds de campeões de League of Legends, trabalhando com dados estruturados e interação do utilizador.",
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
                text: ["Primeiro projeto desenvolvido com React"],
              },
              {
                text: [
                  "Utilização de dados estruturados para criar e gerir builds",
                ],
              },
              {
                text: ["Implementação de interações do tipo CRUD na interface"],
              },
              {
                text: [
                  "Utilização de dados de uma API externa com gestão local de builds",
                ],
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
                  "Aprender conceitos de React como componentes, estado e fluxo de dados",
                ],
              },
              {
                text: [
                  "Perceber como gerir e estruturar dados numa aplicação frontend",
                ],
              },
              {
                text: [
                  "Lidar com interações do utilizador e manter a interface sincronizada com os dados",
                ],
              },
            ],
          },
        },
        {
          title: "Evolução",
          content: {
            type: "list",
            items: [
              {
                text: [
                  "2023 — Versão inicial desenvolvida com React, dados externos de campeões e CRUD de builds através de uma API local",
                ],
              },
              {
                text: [
                  "2026 — Versão revista com melhorias na interface, lógica e gestão de builds com localStorage",
                ],
              },
            ],
          },
        },
      ],
    },
  },
};
