# 🚀 Estudo de Caso: JavaScript Performance

Olá! Bem-vindo ao nosso estudo de caso focado na performance de diferentes métodos e abordagens em JavaScript. Utilizamos uma variedade de comparações para determinar qual abordagem é a mais performática em diferentes situações.

📜 **Lista de estudos comparativos:**

1. 🔄 **Map vs ForEach** 
    - **Arquivo**: [mapvsforEach.js](https://github.com/Felps03/performance/blob/main/1-mapvsforEach.js)
    * **Conclusão**: Com base no código fornecido e no objetivo de deletar propriedades com valor null:
        * **forEach**: É mais performático e atinge o objetivo desejado.
        * **map**: Não atinge o objetivo desejado e cria overhead ao criar um novo array sem necessidade.
2. 🎯 **Array.from().map vs Array.prototype.map.call**
    - **Arquivo**: [Array.from().map vs Array.prototype.map.call.js](https://github.com/Felps03/performance/blob/main/10-Array.from().map%20vs%20Array.prototype.map.call.js)
    * **Conclusão**:
        * **Array.from().map**: Abordagem mais direta e legível que primeiro converte a string em um array e, em seguida, mapeia cada caractere para sua versão em maiúsculas.
        * **Array.prototype.map.call**: Abordagem menos direta, mas potencialmente mais eficiente, aplicando map diretamente à string tratada como um objeto semelhante a um array.
3. 📊 **Reduce vs For loop vs Foreach**
    - **Arquivo**: [Reduce vs for loop vs foreach.js](https://github.com/Felps03/performance/blob/main/11-Reduce%20vs%20for%20loop%20vs%20foreach.js)
    * **Conclusão**:
        * **reduce**: Abordagem funcional e declarativa que é concisa, mas pode ser menos intuitiva para desenvolvedores não familiarizados com programação funcional.
        * **for loop**: Abordagem tradicional e imperativa, geralmente otimizada pela maioria dos engines de JavaScript.
        * **forEach**: Mais legível e declarativo do que um loop for, mas pode ter uma leve desvantagem em termos de eficiência para arrays muito grandes.
4. 🔁 **Loops em Geral**
    - **Arquivo**: [loops.js](https://github.com/Felps03/performance/blob/main/12-loops.js)
    * **Conclusão**:
        * **for loop**: Abordagem tradicional e eficiente, especialmente otimizada para grandes conjuntos de dados.
        * **for...of**: Loop moderno e legível introduzido com ES6. Pode ter uma leve desvantagem em termos de desempenho comparado ao loop for tradicional.
        * **forEach**: Abordagem funcional e declarativa. Embora seja legível, pode ser menos eficiente para grandes arrays devido à sobrecarga de chamadas de função.
5. 🧐 **Lodash isEmpty vs Nativo**
    - **Arquivo**: [lodash-isEmpty-vs-native.js](https://github.com/Felps03/performance/blob/main/2-lodash-isEmpty-vs-native.js)
    * **Conclusão**:
        * **lodash**: A função _.isEmpty é uma ferramenta robusta e confiável. É provável que seja mais lenta do que uma abordagem nativa direta, mas sua principal vantagem é a conveniência e confiabilidade.
        * **native**: Essa abordagem verifica se o objeto é vazio de uma maneira tradicional. Pode ser mais rápida que o Lodash em alguns casos, mas também é mais verbosa.
        * **native-es6**: Uma abordagem moderna e simplificada, que pode ser mais performática do que as outras devido à sua simplicidade.
6. ⏰ **Date.now() vs new Date().getTime() vs + new Date**
    - **Arquivo**: [Date.now() vs new Date().getTime() vs + new Date.js](https://github.com/Felps03/performance/blob/main/3-Date.now()%20vs%20new%20Date().getTime()%20vs%20%2B%20new%20Date.js)
    * **Conclusão**:
        * **Date.now()**: É a abordagem mais direta e provavelmente a mais rápida. Não envolve a criação de um novo objeto Date.
        * **new Date().getTime()**: Mais lento devido à criação de um novo objeto Date.
        * **+ new Date**: Rápido devido à coerção direta, mas pode não ser tão legível para todos os desenvolvedores.
7. 📝 **String() vs .toString() vs Template Strings**
    - **Arquivo**: [String() vs .toString() vs `${num}`.js](https://github.com/Felps03/performance/blob/main/4-String()%20vs%20.toString()%20vs%20%60%24%7Bnum%7D%60.js)
    * **Conclusão**:
        * **String()**: Abordagem universal que pode ser usada para converter qualquer tipo em uma string. É clara e concisa.
        * **.toString()**: Método específico disponível em muitos objetos em JavaScript. No contexto de números, oferece uma conversão direta para string.
        * **${num} (Template Literals)**: Uma maneira moderna e legível de interpolación de valores em strings, permitindo uma fácil conversão e incorporação de variáveis.
8. ✅ **Boolean vs !!2**
    - **Arquivo**: [Boolean vs !!2.js](https://github.com/Felps03/performance/blob/main/5-Boolean%20vs%20!!2.js)
    * **Conclusão**:
        * **!!**: Uma técnica concisa para converter valores em seu equivalente booleano. Pode não ser claro para todos os desenvolvedores, especialmente os menos experientes.
        * **length > 0**: Uma abordagem direta e autoexplicativa para verificar se um array está vazio. Mais verboso do que !!, mas sua intenção é imediatamente compreensível.
9. 🔄 **Async For vs Promise.All com Delay**
    - **Arquivo**: [async for vs promise.all delay.js](https://github.com/Felps03/performance/blob/main/6-async%20for%20vs%20promise.all%20delay.js)
    * **Conclusão**:
        * **asyncFor**: Itera sobre o array de forma sequencial e aguarda cada promessa resolver antes de prosseguir. Dado o array [1, 2, 3], leva aproximadamente 1500ms para ser concluído.
        * **asyncPromiseAll**: Executa todas as promessas em paralelo, resultando em um tempo de conclusão significativamente mais curto de aproximadamente 500ms para o mesmo array.
10. 🦄 **Uniq By vs Array Nativo**
    - **Arquivo**: [Uniq by vs Array.js](https://github.com/Felps03/performance/blob/main/7-Uniq%20by%20vs%20Array.js)
    * **Conclusão**:
        * **uniqBy**: Otimizado e legível, a função uniqBy do Lodash é uma excelente escolha para filtrar elementos únicos com base em propriedades específicas.
        * **Array Nativo**: Uma abordagem mais direta usando loops e arrays adicionais. Potencialmente mais lento para grandes conjuntos de dados e menos legível em comparação com o método uniqBy.
11. 🔍 **Estudo sobre RegExp**
    - **Arquivo**: [RegExp.js](https://github.com/Felps03/performance/blob/main/8-RegExp.js)
    * **Conclusão**:
        * **declare**: Ao usar uma expressão regular pre-declarada, o tempo medido reflete apenas o tempo de execução do método test.
        * **new RegExp**: Esta abordagem inclui o tempo para criar a expressão regular e executar o método test. Pode parecer mais lento que a abordagem pre-declarada, mas isso é devido à inclusão do tempo de criação.
12. 🔄 **For, forEach, for of, Map**
    - **Arquivo**: [For, forEach, for of, Map.js](https://github.com/Felps03/performance/blob/main/9-For%2C%20forEach%2C%20for%20of%2C%20Map.js)
    * **Conclusão**:
        * **for**: A abordagem mais rápida e eficiente para iterar sobre grandes arrays.
        * **forEach**: Mais declarativo, mas tem um overhead de chamadas de função.
        * **For...of**: Direto e legível, mas pode ser um pouco mais lento do que for.
map: Ideal para transformações, mas menos eficiente para simples iterações, pois cria um novo array.
---

💡 **Objetivo:**
Nosso principal objetivo é explorar e entender melhor como diferentes abordagens em JavaScript se comportam em termos de performance. Esperamos que este estudo de caso ajude desenvolvedores a tomarem decisões mais informadas sobre qual abordagem usar em seus projetos.

---

❓ **Como Contribuir:**
Se você tiver alguma sugestão, otimização ou observação sobre os testes, fique à vontade para abrir um PR ou issue.

---

❤️ Agradecemos pela sua visita e esperamos que o estudo seja útil!

---

**Nota:** A performance pode variar de acordo com o ambiente, versão do JavaScript e outras variáveis. Sempre teste em seu próprio ambiente para obter resultados mais precisos.