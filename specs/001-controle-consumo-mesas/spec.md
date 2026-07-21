# Feature Specification: Controle de Consumo de Mesas

**Feature Branch**: `001-controle-consumo-mesas`

**Created**: 2026-07-21

**Status**: Draft

**Input**: User description: "a aplicação já foi montada, agora quero melhorar o design para ficar mais touch-first, com quadrados representando as mesas; ao clicar em cada quadrado, deve abrir uma janela ou modal com tudo o que foi gasto na mesa; o sistema é em Portugal, então tudo deve usar euro; o cadastro de produto e o valor deve ser feito em modal acessado por botão; ao fechar uma mesa, ela deve sair da janela principal e ir para o histórico do dia, separado do histórico do mês; se a pessoa quiser reabrir a mesa, ela deve ir no histórico, clicar ali e reabrir; o visual precisa ficar mais clean, simples e fácil de usar."

## User Scenarios & Validation *(mandatory)*

### User Story 1 - Painel principal touch-first com mesas em quadrados (Priority: P1)

O atendente deve ver rapidamente as mesas do dia como blocos grandes e fáceis de tocar, com foco no atendimento de serviço imediato e sem excesso de informação na tela principal.

**Why this priority**: A visão geral da operação precisa ser clara e rápida para uma equipe de restaurante que trabalha em movimento e precisa tomar decisões em poucos segundos.

**Independent Test**: Um atendente consegue abrir o painel principal, identificar visualmente as mesas em quadrados e abrir o detalhe da conta de uma mesa com um único toque.

**Acceptance Scenarios**:

1. **Given** que o operador está na tela principal, **When** ele observa o painel de mesas, **Then** cada mesa aparece como um bloco quadrado, fácil de tocar e com indicação clara do seu estado.
2. **Given** que uma mesa está aberta, **When** o operador toca no respectivo quadrado, **Then** um modal ou janela de detalhe abre com os itens consumidos, o total e as ações disponíveis para a comanda.

---

### User Story 2 - Gestão do catálogo em modal e uso de euro (Priority: P1)

O usuário do sistema precisa registrar produtos com preço em euro, usando uma ação explícita por botão e mantendo o fluxo principal simples e sem distrações.

**Why this priority**: O catálogo é uma parte central do controle de consumo, e a organização do cadastro precisa tornar a operação mais rápida e menos sujeita a erros.

**Independent Test**: Um usuário consegue abrir o modal de cadastro de produto por botão, inserir nome e valor em euro e confirmar que o produto fica disponível para uso nas mesas.

**Acceptance Scenarios**:

1. **Given** que o usuário deseja cadastrar um produto, **When** ele usa o botão dedicado de cadastro, **Then** um modal é aberto para inserir o nome e o valor do produto.
2. **Given** que um produto é cadastrado, **When** o valor é exibido no sistema, **Then** a moeda usada é euro e o valor aparece de forma consistente em toda a interface.

---

### User Story 3 - Fechar, separar histórico e reabrir mesa pelo histórico (Priority: P1)

Quando a mesa é encerrada, ela deve sair da área principal e ser organizada em histórico diário separado do histórico mensal, com possibilidade de reabertura direta a partir desse histórico.

**Why this priority**: Esse fluxo evita confusão na tela principal, melhora a clareza do atendimento e mantém o histórico de faturamento organizado por período.

**Independent Test**: Um operador consegue fechar uma mesa, confirmar que ela sai da visão principal, localizar o registro no histórico do dia e reabrir a mesa a partir desse histórico.

**Acceptance Scenarios**:

1. **Given** que uma mesa está aberta e com consumo registrado, **When** o operador fecha a mesa, **Then** essa mesa deixa de aparecer na janela principal e passa a compor o histórico do dia.
2. **Given** que a mesa já foi fechada, **When** o operador consulta o histórico do dia e o histórico do mês, **Then** as duas visões ficam separadas e organizadas por período.
3. **Given** que uma mesa fechada está no histórico, **When** o operador abre esse registro e usa a ação de reabrir, **Then** a mesa volta ao fluxo ativo e pode continuar sendo controlada.

---

### Edge Cases

- O que acontece quando o atendente tenta reduzir a quantidade de um item até zero?
- Como o sistema trata uma mesa com itens parcialmente pagos e ainda aberta?
- O que acontece quando o usuário tenta cadastrar um produto com nome inválido ou preço em vazio?
- Como o sistema responde quando a mesma mesa é fechada, reaberta e volta a ter itens alterados no mesmo dia?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST present active tables on the main screen as large touch-friendly square blocks instead of dense list entries.
- **FR-002**: The system MUST allow the user to open a detail window or modal for a selected table directly from the square representing that table.
- **FR-003**: The system MUST show each table detail with customer name, items consumed, total currently due, and the available actions to manage the command.
- **FR-004**: The system MUST use euro as the default currency throughout the interface for products, totals, and history summaries.
- **FR-005**: The system MUST allow the application user to open a dedicated product-registration modal through a clear button action.
- **FR-006**: The system MUST keep the main board focused on open tables only and remove closed tables from that primary view once the closing action is confirmed.
- **FR-007**: The system MUST keep day history and month history separated as distinct views or areas for review.
- **FR-008**: The system MUST allow a closed table to be reopened from its historical record so the command can continue if needed.
- **FR-009**: The system MUST keep the total amount of each table updated automatically as items are added, adjusted, or marked as paid.
- **FR-010**: The system MUST capture the current date and time whenever a table activity or product registration is recorded.
- **FR-011**: The system MUST provide a simple way to review table status, consumption, and totals without requiring dense or hidden navigation.
- **FR-012**: The system MUST keep the product catalog organized, easy to maintain, and protected against duplicate or inconsistent entries.

### Key Entities *(include if feature involves data)*

- **Mesa**: Representa uma operação ativa do restaurante, identificada pelo nome do cliente e pelo seu estado de aberta, fechada ou reaberta.
- **Produto**: Representa um item comercial disponível para venda, com nome, preço em euro e data de cadastro.
- **Item de Consumo**: Representa cada produto adicionado à mesa, com quantidade, valor parcial e estado de pagamento.
- **Histórico Diário**: Representa o conjunto de mesas encerradas e movimentadas no dia atual.
- **Histórico Mensal**: Representa o conjunto de movimentações organizadas por mês para análise e consulta posterior.
- **Usuário do Sistema**: Representa quem administra o catálogo e controla as mesas durante o atendimento.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A staff member can identify and open a table from the main board in under 5 seconds during peak service.
- **SC-002**: 95% of table changes are reflected in the visible total immediately after the action is completed.
- **SC-003**: Closed tables are removed from the main operational view and remain available in the daily and monthly history flows.
- **SC-004**: The business user can register and maintain the product list through a single clear modal action without additional navigation steps.
- **SC-005**: The operation remains visually clean, easy to scan, and suitable for fast touch-driven service on phone and tablet screens.

## Assumptions

- The primary users are restaurant staff and the application administrator who manages the product catalog.
- The main board should prioritize the current service day and keep the interaction simple for a fast-paced environment.
- Product prices are maintained in euro because the target operational context is Portugal.
- Tables are identified by customer name rather than a table number, and the same customer record may be reopened later from the historical view.
- The first release continues to focus on local day-to-day usage and does not require external reporting or a separate backend service.
