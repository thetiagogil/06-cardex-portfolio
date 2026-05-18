import type { TranslationDictionary } from "@/content/translations/types";

export const poketrackerTranslations: TranslationDictionary = {
  project_poketracker_subject: {
    en: "Pokémon Save File Tracker",
    pt: "Tracker de Saves de Pokémon",
  },
  project_poketracker_description: {
    en: "A full-stack Pokémon tracking platform for managing playthroughs, teams, Pokédex progress, story milestones, collectibles, and other save-specific data.",
    pt: "Uma plataforma full-stack para acompanhar saves de Pokémon, incluindo playthroughs, equipas, progresso da Pokédex, história, colecionáveis e outros dados de cada jogo.",
  },
  project_poketracker_details: {
    en: {
      type: "sections",
      sections: [
        {
          title: "Overview",
          content: {
            type: "paragraphs",
            paragraphs: [
              [
                "Poketracker is a full-stack platform for tracking Pokémon playthroughs across games, saves, and teams.",
              ],
              [
                "Instead of focusing only on Pokédex completion, it is designed to capture full playthrough history, including progression, team usage, story milestones, collectibles, and other save-specific data.",
              ],
            ],
          },
        },
        {
          title: "Motivation",
          content: {
            type: "paragraphs",
            paragraphs: [
              [
                "Most Pokémon tools focus on isolated parts of the experience, like Pokédex tracking, team planning, or competitive data.",
              ],
              [
                "I wanted to build something more personal and structured: a system that helps me understand what I played, how I played, which Pokémon I used, and how each save evolved over time.",
              ],
              [
                "The goal is not just to store data, but to make long-term playthrough history easier to track, compare, and revisit.",
              ],
            ],
          },
        },
        {
          title: "System",
          content: {
            type: "list",
            items: [
              {
                text: ["Reference data for static Pokémon/game information"],
              },
              {
                text: [
                  "Tracking data for defining what can be followed inside each game",
                ],
              },
              {
                text: [
                  "Gameplay data for user-specific plays, teams, progress, and choices",
                ],
              },
              {
                text: [
                  "A Generations → Games → Plays structure, where each play represents one save/playthrough",
                ],
              },
            ],
          },
        },
        {
          title: "Highlights",
          content: {
            type: "list",
            items: [
              {
                text: [
                  "Designed a scalable PostgreSQL structure for complex relational data",
                ],
              },
              {
                text: [
                  "Built the project around structured tracking instead of hardcoded progress logic",
                ],
              },
              {
                text: [
                  "Separated reference, tracking, and gameplay concerns to keep the system maintainable",
                ],
              },
              {
                text: [
                  "Created UI flows for navigating generations, games, saves, teams, and progress",
                ],
              },
              {
                text: [
                  "Iterated heavily on naming, data structure, and feature boundaries as the project evolved",
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
                  "Modelling a large amount of Pokémon-related data without making the system too rigid",
                ],
              },
              {
                text: [
                  "Balancing database normalization with practical querying and UI needs",
                ],
              },
              {
                text: [
                  "Handling performance concerns around large reference datasets, seeding, and indexing",
                ],
              },
              {
                text: [
                  "Keeping the interface simple while the underlying data model is complex",
                ],
              },
              {
                text: [
                  "Defining a clear scope for a project that can grow in many directions",
                ],
              },
            ],
          },
        },
        {
          title: "Current State",
          content: {
            type: "paragraphs",
            paragraphs: [
              ["Poketracker is still in active development."],
              [
                "The main database structure and several core flows are already in place, but the project is still being refined before an initial public version.",
              ],
              [
                "The current focus is on stabilizing the tracking model, improving UI clarity, and making the application easier to extend over time.",
              ],
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
                  "2025 — Initial concept, early designs, and database architecture started",
                ],
              },
              {
                text: [
                  "2026 — Core systems and playthrough tracking flows continued to be implemented and refined",
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
                "O Poketracker é uma plataforma full-stack para acompanhar saves de Pokémon ao longo de diferentes jogos, equipas e playthroughs.",
              ],
              [
                "Em vez de se focar apenas na conclusão da Pokédex, foi pensado para registar o histórico completo de cada save, incluindo progresso, equipas utilizadas, momentos da história, colecionáveis e outros dados específicos de cada jogo.",
              ],
            ],
          },
        },
        {
          title: "Motivação",
          content: {
            type: "paragraphs",
            paragraphs: [
              [
                "A maior parte das ferramentas de Pokémon foca-se em partes isoladas da experiência, como completar a Pokédex, planear equipas ou consultar dados competitivos.",
              ],
              [
                "Eu queria criar algo mais pessoal e estruturado: um sistema que me ajudasse a perceber o que joguei, como joguei, que Pokémon utilizei e como cada save evoluiu ao longo do tempo.",
              ],
              [
                "O objetivo não é apenas guardar dados, mas tornar o histórico de playthroughs mais fácil de acompanhar, comparar e revisitar.",
              ],
            ],
          },
        },
        {
          title: "Sistema",
          content: {
            type: "list",
            items: [
              {
                text: [
                  "Dados de referência para informação estática de Pokémon e jogos",
                ],
              },
              {
                text: [
                  "Dados de tracking para definir o que pode ser acompanhado em cada jogo",
                ],
              },
              {
                text: [
                  "Dados de gameplay para plays, equipas, progresso e escolhas do utilizador",
                ],
              },
              {
                text: [
                  "Uma estrutura Gerações → Jogos → Plays, em que cada play representa um save/playthrough",
                ],
              },
            ],
          },
        },
        {
          title: "Destaques",
          content: {
            type: "list",
            items: [
              {
                text: [
                  "Desenhei uma estrutura PostgreSQL escalável para dados relacionais complexos",
                ],
              },
              {
                text: [
                  "Construí o projeto à volta de tracking estruturado em vez de lógica de progresso hardcoded",
                ],
              },
              {
                text: [
                  "Separei dados de referência, tracking e gameplay para manter o sistema mais fácil de evoluir",
                ],
              },
              {
                text: [
                  "Criei fluxos de UI para navegar entre gerações, jogos, saves, equipas e progresso",
                ],
              },
              {
                text: [
                  "Iterei bastante sobre nomes, estrutura de dados e limites das funcionalidades à medida que o projeto evoluiu",
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
                  "Modelar uma grande quantidade de dados relacionados com Pokémon sem tornar o sistema demasiado rígido",
                ],
              },
              {
                text: [
                  "Equilibrar normalização da base de dados com queries práticas e necessidades da interface",
                ],
              },
              {
                text: [
                  "Lidar com preocupações de performance em datasets grandes, seeds e indexes",
                ],
              },
              {
                text: [
                  "Manter a interface simples enquanto o modelo de dados por trás é complexo",
                ],
              },
              {
                text: [
                  "Definir um scope claro para um projeto que pode crescer em várias direções",
                ],
              },
            ],
          },
        },
        {
          title: "Estado Atual",
          content: {
            type: "paragraphs",
            paragraphs: [
              ["O Poketracker ainda está em desenvolvimento ativo."],
              [
                "A estrutura principal da base de dados e vários fluxos core já estão implementados, mas o projeto continua a ser refinado antes de uma primeira versão pública.",
              ],
              [
                "O foco atual é estabilizar o modelo de tracking, melhorar a clareza da interface e tornar a aplicação mais fácil de expandir ao longo do tempo.",
              ],
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
                  "2025 — Início do conceito, primeiros designs e arquitetura da base de dados",
                ],
              },
              {
                text: [
                  "2026 — Continuação da implementação e refinamento dos sistemas core e dos fluxos de tracking de playthroughs",
                ],
              },
            ],
          },
        },
      ],
    },
  },
};
