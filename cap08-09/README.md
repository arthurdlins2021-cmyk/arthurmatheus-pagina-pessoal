# Projeto CSS Zen Garden - Capítulos 8 e 9

## Autor
Arthur Matheus Soares de Oliveira

## Tema
Cyberpunk Neon Noturno

## Design de Referência
Mid Century Modern (Inspirado na distribuição de blocos limpos)

## Link de Referência
https://www.csszengarden.com/221/

## Descrição das Decisões de Layout
O projeto foi estruturado utilizando CSS Grid Layout para fazer a divisão principal entre a área de introdução/conteúdo e a barra lateral (sidebar). Nas seções internas de artigos (supporting), também apliquei o Grid para organizar os blocos lado a lado em telas maiores. O Flexbox foi utilizado de forma complementar para alinhar verticalmente os itens do menu de navegação e para distribuir os links de validação no rodapé do documento. A estética visual foca em um contraste de modo escuro hacker com cores fluorescentes ciano e magenta.

## Recursos Utilizados
* CSS Grid Layout (Estrutura geral e seções de conteúdo)
* Flexbox (Alinhamento de listas e rodapé)
* Variáveis CSS (:root para paleta de cores neon)
* Media Queries (Responsividade para desktop)
