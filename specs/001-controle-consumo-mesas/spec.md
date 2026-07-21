# Feature Specification: Controle de Consumo de Mesas

**Feature Branch**: `001-controle-consumo-mesas`

**Created**: 2026-07-21

**Status**: Draft

**Input**: User description: "construa uma aplicacao que me ajude a gerenciar a parte de controle de consumo das mesas de um restaurante no dia a dia. as Mesas devem ter como colcoar o nome da pessoa da mesa pq nao eh usado por numero entao a comanda fica no nome do cliente , itens ou produtos, quantidades possibilidade de aumentar ou dimunuir e de dizer que ja foi apgo caso alguem queira so pagar 1 item. status se esta aberto ou fechado a mesa. Historico do dia e historico mensal. Valor total de casa mesa conforme for adicionando os itens de consumo. poder adicionar produtos de forma facil no sistema. a aplicacao deve ler a data e o horario atual . e o usuario da aplicacao que deve cadastrar os produtos que sao vendidos e os valores. acho que eh tudo isso que precisa se precisar de algo mais me ajude a completar."

## User Scenarios & Validation *(mandatory)*

### User Story 1 - Abrir e manter uma mesa com cliente identificado (Priority: P1)

O atendente deve conseguir registrar a mesa usando o nome da pessoa da mesa em vez de um número, manter a comanda vinculada ao cliente e acompanhar o estado da mesa durante o atendimento.

**Why this priority**: Esta jornada é o centro da operação diária do restaurante e permite que o consumo seja controlado de forma clara e rápida para a equipe.

**Independent Test**: Um atendente consegue abrir uma mesa, inserir o nome do cliente e verificar que a mesa aparece como aberta com o total e o histórico corretos.

**Acceptance Scenarios**:

1. **Given** que a mesa ainda não está em uso, **When** o atendente registra o nome do cliente e abre a mesa, **Then** a mesa passa a estar aberta e associada à comanda daquele cliente.
2. **Given** que uma mesa está aberta, **When** o atendente consulta a tela da mesa, **Then** o sistema mostra o nome do cliente, o status atual, os itens consumidos e o valor total acumulado.

---

### User Story 2 - Adicionar, ajustar e separar itens consumidos (Priority: P1)

O atendente deve conseguir incluir itens do cardápio na mesa, alterar quantidades e indicar quando algum item já foi pago, sem precisar recomeçar a comanda.

**Why this priority**: Esse fluxo é o que define a operação de fechamento de conta, porque o valor total muda conforme o atendimento avança.

**Independent Test**: O atendente consegue adicionar um produto, aumentar e diminuir a quantidade e marcar um item como pago sem afetar o restante da mesa.

**Acceptance Scenarios**:

1. **Given** que a mesa está aberta, **When** o atendente adiciona um produto com quantidade, **Then** o item entra na comanda e o valor total da mesa é recalculado imediatamente.
2. **Given** que um item já está na comanda, **When** o atendente aumenta ou diminui a quantidade ou marca o item como pago, **Then** o sistema atualiza o valor e o status do item de forma consistente.
3. **Given** que um cliente deseja pagar apenas um item, **When** o atendente marca esse item como pago, **Then** o restante da comanda continua disponível para acompanhamento.

---

### User Story 3 - Fechar, consultar histórico e controlar o catálogo de produtos (Priority: P2)

O usuário do sistema deve conseguir cadastrar produtos com seus valores, acompanhar o histórico diário e mensal da operação e fechar mesas quando o atendimento terminar.

**Why this priority**: Esse fluxo fornece controle administrativo do dia a dia e ajuda na organização do faturamento e da operação.

**Independent Test**: O usuário registra produtos, fecha uma mesa e consegue consultar registros do dia e do mês sem precisar consultar papel ou planilhas.

**Acceptance Scenarios**:

1. **Given** que o usuário precisa manter o catálogo atualizado, **When** ele cadastra um produto com seu valor, **Then** esse produto fica disponível para uso nas mesas.
2. **Given** que uma mesa foi encerrada, **When** o usuário consulta o histórico do dia ou do mês, **Then** o sistema apresenta o registro das mesas, itens e valores de forma organizada.
3. **Given** que a data e a hora atuais devem ser registradas no uso do sistema, **When** o usuário registra uma mesa ou um consumo, **Then** a operação fica vinculada ao momento correto do dia.

---

### Edge Cases

- O que acontece quando o atendente tenta reduzir a quantidade de um item até zero?
- Como o sistema trata uma mesa com itens parcialmente pagos e ainda não fechada?
- O que acontece quando o usuário tenta cadastrar um produto com nome ou valor inválidos?
- Como o sistema responde quando a mesma mesa é reaberta no mesmo dia ou em outro dia com um novo cliente?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST allow a user to open a table using the customer name as the identifier of the command instead of a table number.
- **FR-002**: The system MUST show each open table with its current status, customer name, consumed items, and total amount currently due.
- **FR-003**: The system MUST allow the user to add products to a table and define the quantity for each item.
- **FR-004**: The system MUST allow the user to increase or decrease the quantity of an item already added to a table.
- **FR-005**: The system MUST allow the user to mark an item as paid without removing it from the table history.
- **FR-006**: The system MUST allow the user to mark a table as open or closed according to the current service state.
- **FR-007**: The system MUST keep the total amount of each table updated automatically as items are added, changed, or paid.
- **FR-008**: The system MUST keep a daily history of table activity and a monthly history of all recorded consumption.
- **FR-009**: The system MUST provide a simple way for the application user to register products sold by the restaurant together with their values.
- **FR-010**: The system MUST capture the current date and time whenever a table activity or product registration is recorded.
- **FR-011**: The system MUST make it easy to search or review the status of tables and their related consumption records during the service day.
- **FR-012**: The system MUST prevent duplicate or inconsistent product registration by keeping the product list organized and easy to maintain.

### Key Entities *(include if feature involves data)*

- **Mesa**: Representa uma operação ativa do restaurante, identificada pelo nome do cliente e pelo status de aberta ou fechada.
- **Produto**: Representa um item comercial disponível para venda, com nome e valor associado.
- **Item de Consumo**: Representa um produto adicionado à mesa, com quantidade, valor parcial e indicação de pagamento.
- **Histórico**: Representa o registro diário e mensal das mesas, itens e valores movimentados.
- **Usuário do Sistema**: Representa quem cadastra os produtos e opera o controle de consumo no dia a dia.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A staff member can open a table, add products, and update quantities in under 1 minute for a typical single-table service.
- **SC-002**: 95% of table operations are reflected in the total value shown immediately after changes are made.
- **SC-003**: Daily and monthly histories are available for review on the same working day without manual re-entry.
- **SC-004**: The business user can register and maintain the product list without relying on external spreadsheets or paper records.
- **SC-005**: The operation remains clear and simple enough for fast service, with minimal steps between opening a table and closing the account.

## Assumptions

- The primary users are restaurant staff and the application administrator who manages the sales catalog.
- The first release focuses on the restaurant's daily service workflow and does not need advanced financial reporting beyond daily and monthly histories.
- Product values are maintained by the system user and become available for all table operations from that point onward.
- Tables are identified by the customer name used during service, and each table can be opened and closed as the service progresses.
- The system is expected to work in a single-location restaurant workflow with local day-to-day management of consumption and totals.
