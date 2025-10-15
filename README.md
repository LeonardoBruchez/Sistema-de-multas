# Sistema de Multas (Treino JavaScript)

Projeto simples para praticar JavaScript, HTML e CSS, simulando um sistema de multas do DETRAN. O foco é exercitar manipulação do DOM, eventos, validações básicas e armazenamento em navegador (se desejado).

## Objetivos de aprendizado
- Praticar JavaScript (ES6+): seletores, eventos, arrays/objetos, módulos simples.
- Manipular o DOM para criar, listar e atualizar registros.
- Aplicar validações e feedback visual ao usuário.
- (Opcional) Persistência com `localStorage`.

## Como executar
- Opção 1: Abra o arquivo `index.html` diretamente no navegador (duplo clique).
- Opção 2: Use uma extensão como "Live Server" (VS Code) para servir o projeto.
- Opção 3 (opcional): Servidor estático
  - Node.js instalado → `npx serve .` ou `npx http-server .`
  - Acesse o endereço indicado pelo terminal (ex.: `http://localhost:3000`).

## Estrutura do projeto
```
.
├─ index.html   # Página principal da aplicação
├─ style.css    # Estilos da interface
└─ script.js    # Lógica em JavaScript (manipulação do DOM e dados)
```

## Tecnologias
- HTML5
- CSS3
- JavaScript (ES6+)

## Boas práticas sugeridas
- Separar lógica em funções pequenas e descritivas.
- Validar entradas antes de criar/atualizar registros.
- Evitar acoplamento forte entre UI e dados (ex.: usar funções de renderização).
- Tratar estados vazios (sem registros) com mensagens amigáveis.

## Próximos passos (roadmap)
- Componentizar partes da UI (ex.: linhas de tabela, formulários).
- Adicionar máscaras e validações mais robustas.
- Salvar e carregar dados do `localStorage`.
- Exportar CSV/JSON das multas.
- Paginação ou virtualização para muitas linhas.
- Testes básicos (ex.: validação de cálculo de totais).

## Como contribuir
1. Faça um fork do repositório.
2. Crie uma branch: `git checkout -b feat/sua-feature`.
3. Comite suas mudanças: `git commit -m "feat: descreva sua mudança"`.
4. Envie a branch: `git push origin feat/sua-feature`.
5. Abra um Pull Request descrevendo a motivação e o que foi alterado.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

## Créditos
- Autor: Leonardo Cassiano Bruchez Pereira
