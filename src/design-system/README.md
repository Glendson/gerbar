# Design System Migration Plan

## Objetivo

Refatorar apenas a camada visual do frontend do Gerbar para manter o mesmo fluxo operacional, mas entregar um visual mais próximo do tema dark premium POS solicitado.

## Tokens

- `colors.ts`: base de fundo, superfícies, bordas, texto, ações e estado positivo.
- `spacing.ts`: escala mínima para manter conforto visual em mobile e tablet.
- `radius.ts`: bordas consistentes para cards, inputs e botões.
- `shadows.ts`: elevação suave para profundidade.
- `typography.ts`: hierarquia legível para usuários acima de 50 anos.

## Componentes entregues

- `AppShell`
- `Header`
- `Tabs`
- `StatCard`
- `TableCard`
- `HistoryCard`
- `ProductCard`
- `ProductModal`
- `OpenTableModal`
- `EmptyState`
- `StatusBadge`
- `PageContainer`

## Arquitetura de migração

1. Consolidar tokens da UI.
2. Introduzir shells e containers compartilhados.
3. Migrar componentes existentes para a nova base visual.
4. Preservar lógica de estado e persistência.
5. Validar compilação e regressão visual.

## Responsividade

- Mobile: stack vertical, botões grandes e fácil leitura.
- Tablet: layout com grid estável e cards com espaçamento confortável.
- Desktop: painel principal em duas colunas com maior densidade visual sem perder hierarquia.

## Regras de manutenção

- Não alterar fluxo de mesas, pagamentos, loja, estado ou persistência.
- Priorizar ação principal com contraste alto.
- Usar poucos textos, botões touch-friendly e espaços expansivos.
