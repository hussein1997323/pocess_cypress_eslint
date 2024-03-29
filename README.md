


## teste_cy_hu
Este é um projeto de amostra para testes básicos com Cypress.

 ## Pré-requisitos
É necessário ter o Node.js e o npm instalados para executar este projeto.

Utilizei as versões v18.16.1 e 9.8.1 do Node.js e npm, respectivamente. Recomendo que você utilize as mesmas versões ou versões posteriores.

## Instalação
Para inicializar o arquivo package.json, execute npm init no terminal dentro da pasta do seu projeto.

Em seguida, execute npm install (ou npm i para uma versão abreviada) para instalar as dependências de desenvolvimento.

## Desktop
Execute npm test (ou npm t para uma versão abreviada) para executar os testes no modo headless em uma janela de visualização de desktop.

## Testes
Você pode executar os testes simulando uma janela de visualização desktop ou móvel.

 ## Móvel
Execute npm run test:mobile para executar os testes no modo headless para visualização móvel.

Ou execute npm run cy:open para abrir o Cypress no modo interativo.

## Headless
Execute npm run cypress run para finalizar e exibir na saída do console um resumo dos resultados dos testes, incluindo o número total de testes, quantos passaram, falharam e estão pendentes.

## Rodar Eslint
Execute npm run lint para rodar o Eslint.

## Descrição dos Testes
Foram realizados todos os testes possíveis. Após a execução, foram identificadas algumas melhorias necessárias no código, pois algumas falhas não estão sendo exibidas. Foi observado o aviso do Eslint: "warning: use data-* attribute selectors instead of classes or tag names cypress/require-data-selectors". No entanto, ao seguir essa recomendação, o código não é reconhecido pelo Cypress.

Para executar os testes, é necessário navegar até a pasta cypress, em seguida, acessar a pasta e2e e, por fim, abrir o arquivo login.cy.js e substituir o e-mail pelo seu para efetuar os testes de login, que levarão até a confirmação do e-mail.

## Boa práticas de desenvolvimento
.eslintrc contém as configurações específicas do ESLint para este projeto. Dentro da pasta estão as configurações e suas finalidades:

## observação
Para realizar o login com sucesso, siga estas instruções:

Navegue até o diretório "e2e" no seu projeto.
Abra o arquivo 'login.cy.js'.
No teste 'entra na página com sucesso', substitua o endereço de e-mail atualmente inserido no método 'it()' pelo seu endereço de e-mail válido.
Após isso, execute o seguinte comando no terminal do VS Code: npx cypress open. Isso abrirá a interface do Cypress, onde você poderá executar os testes.

Quando chegar à etapa de confirmação de e-mail, acesse sua caixa de entrada de e-mail e confirme o e-mail recebido. Após a confirmação, o teste será concluído com sucesso