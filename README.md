# Semana de Cinema Negro de Belo Horizonte

Site da Semana de Cinema Negro de Belo Horizonte (SCNBH), com a edição atual e
o arquivo das edições anteriores.

## Edições

| Edição | Ano | Período | Destaques registrados |
| --- | --- | --- | --- |
| 1ª | 2021 | 10 a 16 de abril | 50 filmes; edição online |
| 2ª | 2022 | 8 a 15 de setembro | 53 filmes; primeira edição presencial |
| 3ª | 2023 | 9 a 17 de setembro | 70 filmes |
| 4ª | 2024 | 13 a 20 de setembro | Edição presencial e online |
| 5ª | 2025 | 16 a 24 de outubro | 45 filmes |
| 6ª | 2026 | 14 a 18 de outubro | 27 filmes; edição atual |

O arquivo público das edições anteriores está na rota `/anteriores`. Os
catálogos e materiais disponíveis estão vinculados nessa página.

## Branches e cópias de referência

As branches a seguir foram conferidas pelo conteúdo e pelo histórico do
repositório. O nome de uma branch nem sempre corresponde ao ano da edição.

| Edição | Branch de backup ou referência | Observações |
| --- | --- | --- |
| 1ª (2021) | Sem branch exclusiva | O registro está no arquivo de edições; o catálogo é acessado pela página `/anteriores`. |
| 2ª (2022) | Sem branch exclusiva | O registro está no arquivo de edições; o catálogo é acessado pela página `/anteriores`. |
| 3ª (2023) | `backup-24` | O conteúdo preservado nessa branch identifica a SCNBH23, apesar do nome da branch. |
| 4ª (2024) | `backup`, `backup-main-before-ed6` | As páginas preservadas nessas branches identificam a SCNBH24. `v0.x` também contém essa versão histórica. |
| 5ª (2025) | `feat/scnbh-25` | Branch de desenvolvimento da edição; `prod` contém a versão publicada da SCNBH25. |
| 6ª (2026) | `dev`, `feat/edition-6` | Edição em desenvolvimento; não foi identificada uma branch de backup exclusiva para a SCNBH26. |

`main` é uma referência histórica e não deve ser considerada automaticamente
como a branch da edição mais recente. Antes de restaurar uma edição, confira o
conteúdo da branch, não apenas seu nome.

## Desenvolvimento

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
```

Para gerar e validar a versão de produção:

```bash
npm run build
npm start
```

## Tecnologias

- Next.js
- React
- Tailwind CSS
