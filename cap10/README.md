# Projeto Recriação Responsiva - Capítulo 10

## Autor
[Seu Nome Aqui]

## Site Escolhido
[cite_start]Spotify (Inspirado na interface visual e cores da Homepage) [cite: 203, 204]

## Link do Site Original
[cite_start]https://www.spotify.com [cite: 206]

## Objetivo Visual do Projeto
[cite_start]Desenvolver uma interpretação simplificada e totalmente responsiva da página inicial, focando na conversão do usuário (chamada para ação) e na demonstração de recursos em formato de cards[cite: 55, 57, 208].

## Estratégia Responsiva e Tecnologias
* [cite_start]Estratégia Mobile-First pura expandindo com `min-width` [cite: 65, 66]
* [cite_start]CSS Grid Layout para a seção de diferenciais/cards [cite: 72, 75]
* [cite_start]Flexbox para alinhamento estrutural do cabeçalho [cite: 72, 74]
* [cite_start]Tipografia dinâmica utilizando a função `clamp()` no título principal [cite: 80, 82]

## Breakpoints Implementados
* [cite_start]`768px` (Tablets): Mudança do menu para horizontal e grid em 2 colunas[cite: 71, 212].
* [cite_start]`1024px` (Desktops): Alinhamento do grid em 3 colunas e limitação de largura máxima[cite: 64, 213].
* [cite_start]`1440px` (Telas Grandes): Ampliação do espaçamento (padding) da seção hero[cite: 214].

## Principais Dificuldades e Adaptações
[cite_start]A maior dificuldade foi realizar a transição do menu de navegação vertical em dispositivos móveis para uma estrutura limpa e horizontal em telas maiores usando exclusivamente CSS, sem auxílio de JavaScript[cite: 17, 224]. [cite_start]O layout foi adaptado para focar em componentes essenciais de blocos[cite: 222].
