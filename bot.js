const venom = require('venom-bot');

venom.create({
  session: 'kimetsu-session',  // pasta para salvar sessão
  headless: true,              // Modo headless obrigatório no servidor
  useChrome: false,            // Usar Chromium interno do Puppeteer
})
.then(client => start(client))
.catch(error => console.log(error));

function start(client) {
  client.onMessage(async (message) => {
    // seu código de comandos aqu
    if (!message.body) return;

    // Normaliza o comando: tira espaços em branco e deixa tudo em minúsculo
    const command = message.body.trim().toLowerCase();




      //sistema ADM
if (command === '!hidetag') {
  const groupMetadata = await client.getGroupMembers(message.chatId);

  const mentions = groupMetadata.map(member => member.id);
  const mentionNames = groupMetadata.map(member => `@${member.id.split('@')[0]}`).join(' ');

  await client.sendMentioned(
    message.chatId,
    `🚨 Chamada geral! ${mentionNames}`,
    mentions
  );
}



    switch (command) {

       // SISTEMA GERAL
      case '!sistemas':
        await client.sendText(message.from, `
        > Sistemas[⚙]

》═══════~◈~═══════《

> 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁á 𝘁𝗼𝗱𝗮𝘀 𝗮𝘀 𝗽𝗮𝗹𝗮𝘃𝗿𝗮𝘀 𝗰𝗵𝗮𝘃𝗲𝘀 𝗽𝗮𝗿𝗮 𝘀𝘂𝗽𝗿𝗶𝗿 𝗾𝘂𝗮𝗹𝗾𝘂𝗲𝗿 𝗱ú𝘃𝗶𝗱𝗮 𝘀𝗼𝗯𝗿𝗲 𝗼 𝗥𝗣𝗚, 𝗰𝗮𝘀𝗼 𝘁𝗲𝗻𝗵𝗮 𝗮𝗹𝗴𝘂𝗺𝗮 𝗱ú𝘃𝗶𝗱𝗮 𝗾𝘂𝗲 𝗻ã𝗼 𝗲𝘀𝘁𝗲𝗷𝗮 𝗻𝗲𝘀𝘀𝗮 𝗹𝗶𝘀𝘁𝗮, 𝗽𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗰𝗼𝗻𝘀𝘂𝗹𝘁𝗲 𝘂𝗺 𝗔𝗗𝗠.


✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
❛ ━━━━━ ･❪ 𝘀𝗼𝗺𝗲𝗻𝘁𝗲 𝗽𝗮𝗿𝗮 𝗼𝗻𝗶'𝘀❫ ･━━━━━ ❜
> !ficha.oni
> !hab.Oni
> !evolução.oni
> !Missão.oni
> !loja.oni

❰ 𝘀𝗶𝘀𝘁𝗲𝗺𝗮 𝗴𝗲𝗿𝗮𝗹 ❱
> !evolução 
> !xp
> !spam
> !recompensas.lvl
> !Mapa
> !combate
> !Hab.Her

❛ ━━━━━ ･❪ 𝘀𝗼𝗺𝗲𝗻𝘁𝗲 𝗽𝗮𝗿𝗮 𝘀𝗹𝗮𝘆𝗲𝗿𝘀❫ ･━━━━━ ❜
> !treino.resp 
> !Sentidos
> !Ficha.Slayer
> !Hab.Uni
> !Hab.slayer
> !Marca
> !Evolução.slayer
> !Missão.slayer
> !Loja.atirador
> !Química 
> !Loja.slayes
───────⊹⊱✫⊰⊹───────
> (Lembre-se de usar '!' para funcionar)
> Qualquer dúvida consulte um ADM.
    `);
        break;
      case '!xp':
      await client.sendText(message.from, `Tabela de Progressão de Nível 
Na tabela abaixo estão listados os níveis, as recompensas e os requisitos a serem alcançados para a evolução. A experiência (XP) não é cumulativa, havendo reset de XP a cada nível, retornando ao 0XP.
Exemplo: ao ganhar mais pontos de experiência (XP) do que o requesito do nível seguinte, deve-se fazer a subtração (XP obtido - XP requisito).
Na prática: do nível 0 ao nível 2 é necessário uma quantia de 250XP, mas o treino solo dá 300XP para quem completa, portanto evoluindo o personagem ao nível dois através da seguinte conta:
300-100-150=50
XP obtido - requisito lvl 1 - requisito lvl 2 = XP restante.

Nível 0 - Inicial
Recompensa: não tem
Nível 1 - 100XP
Recompensa: 200 pontos
Nível 2 - 150XP
Recompensa: 220 pontos
Nível 3 - 200XP
Recompensa: 240 pontos
Nível 4 - 250XP
Recompensa: 260 pontos
Nível 5 - 300XP
Recompensa: 280 pontos
Nível 6 - 400XP
Recompensa: 300 pontos
Nível 7 - 500XP
Recompensa: 340 pontos
Nível 8 - 600XP
Recompensa: 380 pontos
Nível 9 - 700XP
Recompensa: 420 pontos
Nível 10 - 800XP
Recompensa: 460 pontos
Nível 11 - 950XP
Recompensa: 520 pontos
Nível 12 - 1100XP
Recompensa: 580 pontos
Nível 13 - 1250XP
Recompensa: 640 pontos
Nível 14 - 1400XP
Recompensa: 700 pontos 
Nível 15 - 1550XP
Recompensa: 700 pontos
Nível 16 - 1700XP
Recompensa: 700 pontos
Nível 17 - 1850XP
Recompensa: 700 pontos
Nível 18 - 2000XP
Recompensa: 700 pontos 
Nível 19 - 2150XP
Recompensa: 700 pontos 
Nível 20 - 2300XP
Recompensa: 700 pontos 
Nível 21 - 2500XP
Recompensa: 700 pontos 
Nível 22 - 2700XP
Recompensa: 700 pontos 
Nível 23 - 2900XP
Recompensa: 700 pontos
Nível 24 - 3100XP
Recompensa: 700 pontos  
Nível 25 - 3300XP
Recompensa: 700 pontos 
Nível 26 - 3600XP
Recompensa: 700 pontos 
Nível 27 - 3900XP
Recompensa: 700 pontos 
Nível 28 - 4200XP
Recompensa: 700 pontos 
Nível 29 - 4500XP
Recompensa: 700 pontos 
Nível 30 - 4800XP
Recompensa: 700 pontos
Nível 31 - 5100XP
Recompensa: 700 pontos 
Nível 32 - 5400XP
Recompensa: 700 pontos 
Nível 33 - 5700XP
Recompensa: 700 pontos 
Nível 34 - 6000XP
Recompensa: 700 pontos 
Nível 35 - 6300XP
Recompensa: 700 pontos 
Nível 36 - 6600XP
Recompensa: 700 pontos
Nível 37 - 6900XP
Recompensa: 700 pontos 
Nível 38 - 7200XP
Recompensa: 700 pontos 
Nível 39 - 7500XP
Recompensa: 700 pontos 
Nível 40 - 7900XP
Recompensa: 700 pontos 
Nível 41 - 8300XP
Recompensa: 700 pontos 
Nível 42 - 8700XP
Recompensa: 700 pontos 
Nível 43 - 9100XP
Recompensa: 700 pontos 
Nível 44 - 9500XP
Recompensa: 700 pontos 
Nível 45 - 9900XP
Recompensa: 700 pontos 
Nível 46 - 10300XP
Recompensa: 700 pontos 
Nível 47 - 10700XP
Recompensa: 700 pontos
Nível 48 - 11100XP
Recompensa: 700 pontos 
Nível 49 - 11500XP
Recompensa: 700 pontos 
Nível 50 - 12000XP
Recompensa: 700 pontos`);
        break;
      case '!treino':
      await client.sendText(message.from, `.鬼滅の刃
「⚒」𝐒𝐈𝐒𝐓𝐄𝐌𝐀 𝐃𝐄 𝐓𝐑𝐄𝐈𝐍𝐎

□̶̷ ׄ𝗖𝗢𝗠𝗢 𝗙𝗨𝗡𝗖𝗜𝗢𝗡𝗔
⤿ O treino pode ser:
• 𝖳𝗋𝖾𝗂𝗇𝗈 𝖿𝗂𝗌𝗂𝖼𝗈, 𝖻𝖺𝖙𝖺𝗅𝗁𝖺
• 𝖮𝗎 𝗎𝗆𝖺 𝗇𝖺𝗋𝗋𝖺çã𝗈 𝖽𝖾 𝗉𝖺𝗌𝗌𝖺𝖽𝗈 (𝖿𝗅𝖺𝗌𝗁𝖻𝖺𝖼𝗄)

⤿ Mínimo: 250 palavras
⤿ Máximo: 3 por semana

□̶̷  ׄ𝗧𝗥𝗘𝗜𝗡𝗢 𝗗𝗜𝗔́𝗥𝗜𝗢

⤿ Cada treino = +300 XP + 1.500 a 3.000 PC (será avaliado)

□̶̷  ׄ𝗠𝗢𝗗𝗔𝗟𝗜𝗗𝗔𝗗𝗘𝗦 𝗖𝗢𝗢𝗣𝗘𝗥𝗔𝗧𝗜𝗩𝗔𝗦
⤿ Dupla = +500 XP + 3.000 PC (2 por semana)
⤿ Trio = +750 XP 5.000 PC (1 por semana)
⤿ Quarteto ou mais = +1000 XP 7.000 PC(1 por semana)
Obs: o player poderá escolher entre UMA modalidade de treino cooperativo por semana, seguindo as limitações dela.
Exemplo: se optar por treino em dupla, poderá fazer os 2/2 na semana, mas não poderá treinar em trio ou quarteto.

⤿ Mínimo: 5 cenas por pessoa
⤿ Mínimo: 100 palavras


(Obs: ao completar e receber sua recompensa, mande a atualização no grupo de atualizações, com data, a quantia recebida e prints, obrigado.)
⸻`);
        break;
      case '!hab.uni':
      await client.sendText(message.from, `• 「🌎」 • Habilidades Universais

──────────────────────

↳ Tais habilidades tanto Onis quanto caçadores poderão ter

──────────────────────

• 「🐺」 • Presença Aterrorizante

──────────────────────

↳ Essa habilidade tem o intuito de transmitir um medo e terror ainda maior em seus alvos, causando intencionalmente reações químicas no cérebro, ativando a tal habilidade tem o poder de sobrecarregar seus alvos com medo intenso, durando por 5 turnos, suficiente para distorcer sua percepção do ambiente ( -50% da percepção, sendo a quantidade da sua percepção divida por 2. ), o adversário que estiver sob efeito ainda poderá atacar, mas não realizará golpes tão precisos ( -50 % de agilidade e de força, sendo a quantidade da sua força e agilidade dividida por 2. ). 
(A habilidade tem um alcance de no máximo 15 metros e pode atingir mais de uma pessoa ao mesmo tempo). 
Alvos com coragem implacável são parcialmente imunes a essa habilidade, aqueles que possuem o combate inconsciente ativado ficam automaticamente imunes. 
Caso possua fúria eterna ativada, concentração extrema ativada ou transformação demoníaca ativada, ficarão imunes.
 Caso o usuário desta habilidade estiver usando passividade oculta ou ocultamento de presença, tais serão desativadas.

──────────────────────

• 「🦇」 • Percepção de Morcego ( Despertar )

──────────────────────

↳ A percepção de morcego amplia a intensidade de sua audição ( x1.5 )

Obs: Habilidade apenas para usuários do sentido Audição.

──────────────────────

• 「🐘」 • Percepção de Elefante ( Despertar )

──────────────────────

↳ A percepção de elefante amplia a intensidade do seu olfato. ( x1.5 )

Obs: Habilidade apenas para o usuário do sentido Olfato.

──────────────────────

• 「🦅」 • Percepção de Águia ( Despertar )

──────────────────────

↳ A Percepção de Águia amplia a intensidade da sua visão ( x1.5 )

Obs: Habilidades apenas para usuários do sentido Visão

──────────────────────

• 「🐗」 • Percepção Animal ( Despertar )

──────────────────────

↳ A Percepção Animal amplia a intensidade do seu tato, dessa forma você ira sentir quando alguém está te olhando e terá um arrepio na respectiva ( x1.5 )

Obs: Habilidade apenas para usuários do sentido Tato.

──────────────────────

• 「🌫」 • Ocultamento de Presença

──────────────────────

↳ Uma habilidade em que é usada para ocultar sua presença, sendo necessário estar fora da vista de seu inimigo para que funcione.
Caso ataque ou fale algo, essa habilidade será desativada, sendo identificado.
( Oculta cheiros, passos, sons e etc. Caso o adversário possua a percepção animal, percepção de morcego, percepção de elefante ou outras habilidades que aumentam os sentidos ( Menos visão. ) ele irá te achar. )

──────────────────────

• 「💪」 • Controle Muscular

──────────────────────

↳ Caso você tenha ferimentos profundos que lhe causem hemorragias, poderá fechar seus músculos para que possa fechar os ferimentos, isso ocorre com a circulação de venenos, é possível o expelir por onde entrou tendo que ficar 2 turnos parado (caso o ferimento não seja coberto). 
Você pode parar a pulsação de seu coração e ficar inconsciente por 2 turnos caso esteja em uma luta ou 15 minutos caso fora de uma luta, como segunda opção, para caso o ferimento esteja coberto e não seja possível expelir o veneno. 
Em caso de Oni, o mesmo não ficará inconsciente.

──────────────────────

• 「⭕」 • Impacto Acertivo

──────────────────────

↳ Sempre no seu primeiro ataque acertado em seu inimigo, o dano/força é multiplicado por 2x, sendo classificado por um impacto acertivo.

──────────────────────

• 「👺」 • Concentração Extrema

──────────────────────

↳ Concentração extrema é um estado mental onde, todo o seu foco se centra em um único objetivo, seja ele qual for, durante o uso dessa habilidade seus olhos começam a sangrar e seu corpo se move com todas as suas forças parar fazer o objetivo com total maestria, precisão e perfeição, ignorando qualquer coisa que aconteça a sua volta ou a si mesmo ficando com Constituição do Dragão e uma coragem implacável e 4x de atributo até que seu objetivo seja completado, ou caso sua energia seja esgotada ou você morra tentando fazer tal, quando usado, está como se fosse piloto automático, ou seja, você pode desviar de ataques à sua frente, porém caso seja das direções esquerda, direita, e costas terá uma  grande dificuldade em desviar.
(Gasta 2 de  energia/fome por turno ativado)

──────────────────────

• 「🌀」 • Destreza Superior

──────────────────────

↳ A destreza lhe dará um buff 1.5x em seus status de velocidade, além de poder se movimentar e mudar sua posição no ar, quando se tornar Hashira/Lua Superior, o buff aumentará para 2x.

──────────────────────

• 「🤸‍♀」 • Flexibilidade Superior

──────────────────────

↳ Você poderá flexionar seu corpo o quanto quiser, também é possível mover seus órgãos de lugar (desde que não seja uma distância absurda da normal) para não ser atacado num ponto vital.

──────────────────────

• 「🤼‍♂」 • Adaptação ao Combate

──────────────────────

↳ Caso você esteja numa batalha em que seu inimigo seja mais veloz que você, você poderá se adaptar ao mesmo, ficando com a mesma velocidade que ele, assim se acostumando com seu estilo de luta. Demora 3 turnos para ter tal adaptação. 
( Habilidade poderá ser ativada apenas após os 3 turnos. )

──────────────────────

• 「💫」 • Coragem Implacável

──────────────────────

↳ A habilidade o deixa quase imune a qualquer indução de medo e a habilidade de presença aterrorizante, tendo a capacidade de passar 3 turnos sem o efeito do medo, caso lute com um inimigo com mais pontos que você em agilidade, terá um buff temporário de 1.5x nesse atributo por toda a batalha.
 ( Além de conseguir coragem o bastante para quebrar o feitiço do Kekkijutsu: Sonhos Profundos e então despertar com uma cena descritiva. )
( Não funciona para a presença yoriichi. )

──────────────────────

• 「☢」 • Resistência ao Veneno

──────────────────────

↳  No caso dos Onis, você adapta seu corpo a qualquer tipo de veneno ou drogas. Caso você possua a regeneração aprimorada a adaptação será feita instantaneamente, assim se tornando imune a tal. Para se adaptar a venenos que levam glicínia na fórmula (isso também serve para caso coma alguém com fisiologia venenosa), será necessário antes ter tido contato com uma pequena quantidade de glicínias (cerca de 10 gramas), tal quantia pode ser comprada. Caso não faça esse processo de adaptação, o veneno não te matará, mas vai fazer com que seu corpo derreta em certas partes, com isso vai demorar cerca de 4 turnos para você se adaptar e regenerar o estrago (caso tenha regeneração aprimorada o tempo será reduzido para 2 turno). 

No caso dos humanos, terá resistência aos venenos, evitando de ser morto por tais. Porém apenas venenos como Saliva Ácida (Kekkijutsu), são necessários ir ao médico.

──────────────────────

• 「☦」 • Ocultamento de Espírito

──────────────────────

↳ Com essa habilidade sua mente poderá ser totalmente limpa, ocultando suas emoções e pensamentos (nem sentidos aguçados poderão sentir). Instinto de execução passaram a permanecer neutras como se fosse uma "planta"; essa habilidade anula a leitura de espírito.
Essa habilidade é desbloqueada após o level 25.

Obs: Usuários dessa habilidade não poderão ter a habilidade: Leitura de espírito ou o território supremo 

──────────────────────

• 「✝」 • Leitura de Espírito

──────────────────────

↳ Leitura de espírito se consiste em uma técnica que ao ser ativada o usuário consegue antecipar os movimentos, prever movimentos de seu adversário tendo possibilidade de fazer ataques, contra-ataques e defesas que teriam uma grande eficácia pelo espírito de batalha, mas caso seu adversário consiga ocultar o próprio espírito de batalha esta técnica se torna inútil, essa habilidade é usada de acordo com seu atributo de percepção, a cada 500 pontos nesse atributo, podera ler 1 movimento, depois de usar o máximo que pode, terá um intervalo de 2 turnos sem ler novamente, em seguida poderá prever mais uma vez, assim podendo fazer esse processo apenas 2 vezes por batalha.
( Lembrando todo movimento conta, então seja bem específico qual movimento pretende prever, ex: Em uma ação alguém pula e corta, pular é um movimento e cortar é outro. )

Obs: Usuários dessa habilidade não poderão ter a habilidade: Ocultamento de Espírito

──────────────────────

• 「💊」 • Conhecimento Médico

──────────────────────

↳ Com o conhecimento médico será possível fazer remédios, drogas e antídotos, também podendo usar o conhecimento para curar ou matar.

──────────────────────

• 「🏋‍♂」 • Densidade Muscular

──────────────────────

↳ A densidade muscular lhe dará 1,5x a mais de força. Também seus músculos terão uma resistência maior, dando um buf de 1.5x em resistência, dificultando o quebrar de ossos com pancadas e/ou cortes.

──────────────────────

• 「❇」 • Território Supremo

──────────────────────

↳ O  território supremo está removendo sua intenção de matar, seu oponente não será capaz de prever seus movimentos facilmente, enquanto o mundo transparente está se concentrando na menor quantidade de movimento para prever a ação, essa habilidade concentra na intenção dos movimentos. 
Essa habilidade é mais parecida com o sentido apurado tato, ela pode prever a direção e o objetivo do ataque se eles tiverem a intenção de matar. 
( Em resumo, funciona como uma junção perfeita da Leitura de Espírito tendo o mesmo limite que essa habilidade e o Ocultamento de Espírito. ).
Habilidade desbloqueada no level 40.

Obs: Usuários dessa habilidade não poderão ter as habilidades: Ocultamento de Espírito e Leitura de espírito.

──────────────────────

• 「💨」 • Último Suspiro

──────────────────────

↳ Quando o usuário dessa habilidade é desmaiado ou fica inconsciente, ganhará 1 ação extra antes de ser totalmente apagado, tendo a mesma força e agilidade do ataque recebido, após a ação o mesmo irá desmaiar ou ficará inconsciente normalmente.
( Nessa ação não poderá ser usada nenhum tipo de buff, apenas os buffs passivos de atributo. )

──────────────────────`);
      case '!spam':
      await client.sendText(message.from, `.ㅤ             
                        ⏜ֵᚐ︵໋✿ࠬꪆ
                       ຯ໋໑̽❀̸࣪࣪▪ꪆᩧ࣭࣭ٜࠬ𖠇ᰰ࣭࣭࣭࣭ٜ᭡
              𝙺𝙸𝙼𝙴𝚃𝚂𝚄 𝙽𝙾 𝚈𝙰𝙸𝙱𝙰
                        ❶ sᥱɑson
𝑨 𝒗𝒊𝒅𝒂 𝒑𝒐𝒅𝒆 𝒔𝒆𝒓 𝒕𝒂̃𝒐 𝒊𝒏𝒔𝒕𝒂́𝒗𝒆𝒍 𝒒𝒖𝒂𝒏𝒕𝒐 𝒐 𝒄𝒍𝒊𝒎𝒂. 𝑴𝒖𝒅𝒂𝒏𝒅𝒐 𝒄𝒐𝒏𝒔𝒕𝒂𝒏𝒕𝒆𝒎𝒆𝒏𝒕𝒆, 𝒏𝒖𝒏𝒄𝒂 𝒆𝒔𝒕𝒂𝒈𝒏𝒂𝒏𝒅𝒐. 𝑵𝒆𝒎 𝒔𝒆𝒎𝒑𝒓𝒆 𝒗𝒂𝒊 𝒇𝒊𝒄𝒂𝒓 𝒆𝒏𝒔𝒐𝒍𝒂𝒓𝒂𝒅𝒐, 𝒎𝒂𝒔 𝒂 𝒏𝒆𝒗𝒆 𝒕𝒂𝒎𝒃𝒆́𝒎 𝒏𝒂̃𝒐 𝒅𝒖𝒓𝒂 𝒑𝒂𝒓𝒂 𝒔𝒆𝒎𝒑𝒓𝒆. 𝑺𝒆𝒎𝒑𝒓𝒆 𝒒𝒖𝒆 𝒂 𝒇𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆 𝒄𝒉𝒆𝒈𝒂 𝒂𝒐 𝒇𝒊𝒎, 𝒄𝒂𝒓𝒓𝒆𝒈𝒂 𝒐 𝒄𝒉𝒆𝒊𝒓𝒐 𝒅𝒆 𝒔𝒂𝒏𝒈𝒖𝒆.
                  ֵ    ֵ   ֵ        ٜ        ֵ   ֵ    ֵ
❧ Não recomendado para aqueles que tem estômago fraco e apegos emocionais.

    ⤿̸✿̶⃞꯭໋✦𝐒tɑtus:
        ╌⃪໋─̸ Em divulgação.
    ⤿̸✿̶⃞꯭໋✦𝐆ênero:
        ╌⃪໋─̸ Anime
    ⤿̸✿̶⃞꯭໋✦𝐓emɑ́ticɑ:
        ╌⃪໋─̸ terror, conteúdo altamente explícito.
        ╌⃪໋─̸ Semi textual, +5 Linhas.
        ╌⃪໋─̸ Apenas 2D 
    ⤿̸✿̶⃞꯭໋✦𝐍úcleo:
        ╌⃪໋─̸ Kimetsu no Yaiba
    ⤿̸✿̶⃞꯭໋✦𝐃esigner:
        ╌⃪໋─̸☽໋ℒִׄuᥟׄᥲִ ꪡׄᦢִ᥆ׄɗִ☾໋
    ⤿̸✿̶⃞꯭໋✦𝐀dministrɑçɑ̃o:
        ╌⃪໋─̸ __ Pedro Nascimento
        ╌⃪໋─̸  __ GB.Biel
        ╌⃪໋─̸ __ Darkness
    ⤿̸✿̶⃞꯭໋╌⃪✦𝐋ink:
        ╌⃪໋─̸ https://chat.whatsapp.com/I2siHP5avtS2LQOIaY1K4k

                        𝐒inopseꪆᩧ࣭࣭ٜࠬ𖠇ᰰ࣭࣭࣭࣭ٜ

        ╌⃪໋─̸  ɴᴏ ᴀɴᴏ ᴅᴇ 1.200 ɴᴏ Jᴀᴘᴀ̃ᴏ, ᴜᴍ ᴍᴇ́ᴅɪᴄᴏ ғᴏɪ ᴠɪsɪᴛᴀʀ ᴀ ᴍᴀɴsᴀ̃ᴏ ᴋɪʙᴜᴛsᴜᴊɪ, ᴏ ᴍᴇsᴍᴏ ғᴏɪ ᴠᴇʀ ᴜᴍ ᴘᴀᴄɪᴇɴᴛᴇ ǫᴜᴇ sᴇʀɪᴀ ᴏ ᴅᴀʏᴍɪᴏ ᴅᴀ ғᴀᴍɪ́ʟɪᴀ, ᴏ ᴊᴏᴠᴇᴍ ᴋɪʙᴜᴛsᴜᴊɪ ɴᴀ̃ᴏ ᴛɪɴʜᴀ sᴀᴜ́ᴅᴇ ʙᴏᴀ, ᴏ ᴍᴇsᴍᴏ ᴊᴀ́ sᴏғʀɪᴀ ᴅᴇsᴅᴇ ᴄʀɪᴀɴᴄ̧ᴀ ᴘᴏʀ ᴜᴍᴀ ᴅᴏᴇɴᴄ̧ᴀ ᴛᴇʀʀɪ́ᴠᴇʟ ᴀ ǫᴜᴀʟ ᴏ ᴀғᴇᴛᴀᴠᴀ ғɪsɪᴄᴀᴍᴇɴᴛᴇ, ᴘᴀssᴀᴅᴏ ᴜᴍ ᴛᴇᴍᴘᴏ ᴏ ᴊᴏᴠᴇᴍ ᴋɪʙᴜᴛsᴜᴊɪ ᴊᴀ́ ɴᴀ̃ᴏ ᴛɪɴʜᴀ ᴍᴀɪs ᴇsᴘᴇʀᴀɴᴄ̧ᴀs ᴅᴇ sᴇʀ ᴄᴜʀᴀᴅᴏ ᴘᴇʟᴏ ᴍᴇ́ᴅɪᴄᴏ, ᴇɴᴛᴀ̃ᴏ ᴏ ᴍᴀᴛᴏᴜ....ᴘᴏʀᴇᴍ ᴀǫᴜᴇʟᴇ ʀᴇᴍᴇ́ᴅɪᴏ ᴇsᴛᴀᴠᴀ sɪᴍ ғᴀᴢᴇɴᴅᴏ ᴇғᴇɪᴛᴏ ɴᴏ ᴊᴏᴠᴇᴍ, ᴍᴀs ᴊᴀ́ ᴇʀᴀ ᴛᴀʀᴅᴇ ᴘᴏɪs ᴇʟᴇ ᴊᴀ́ ᴛɪɴʜᴀ ғɪɴᴀʟɪᴢᴀᴅᴏ ᴏ ᴍᴇ́ᴅɪᴄᴏ, ɴᴇssᴇ ᴍᴇsᴍᴏ ɪɴsᴛᴀɴᴛᴇ ᴏ sᴏʟ ᴄᴏᴍᴇᴄ̧ᴏᴜ ᴀ ʀᴀɪᴀ ᴇ́ ᴏs ʀᴀɪᴏs sᴏʟᴀʀᴇs ᴀᴄᴇʀᴛᴀʀᴀᴍ ᴀǫᴜᴇʟᴇ ɢᴀʀᴏᴛᴏ ғᴀᴢᴇɴᴅᴏ ᴀssɪᴍ ǫᴜᴇ ᴏ ᴍᴇsᴍᴏ sᴇ Qᴜᴇɪᴍᴀssᴇ ᴄᴏᴍ ᴏs ʀᴀɪᴏs sᴏʟᴀʀᴇs ᴅᴇsᴄᴏʙʀɪɴᴅᴏ ᴀssɪᴍ ǫᴜᴇ sᴜᴀ ғʀᴀǫᴜᴇᴢᴀ ᴜ́ɴɪᴄᴀ ᴇʀᴀ ᴏ sᴏʟ.

 Pᴀssᴀᴅᴏs ᴏs ᴀɴᴏs, ᴀǫᴜᴇʟᴇ ᴊᴏᴠᴇᴍ ʜᴀᴠᴇʀɪᴀ sᴇ ᴛᴏʀɴᴀᴅᴏ ᴏ sᴇʀ ᴍᴀɪs ᴘᴏᴅᴇʀᴏsᴏ ᴅᴀ ᴛᴇʀʀᴀ ᴄᴏɴʜᴇᴄɪᴅᴏ ᴄᴏᴍᴏ ᴏ Rᴇɪ ᴅᴏs Oɴɪs, ᴘᴏʀᴇ́ᴍ ᴏs ᴅᴇᴜsᴇs ᴇɴᴠɪᴀʀᴀᴍ ᴜᴍᴀ ᴄʀɪᴀɴᴄ̧ᴀ ᴘᴀʀᴀ ᴘᴀʀᴀʀ ᴀǫᴜᴇʟᴇ sᴇʀ, ᴏ sᴇᴜ ɴᴏᴍᴇ ᴇʀᴀ Yᴏʀɪɪᴄʜɪ Tsᴜɢɪᴋᴜɴɪ ᴏ ᴘᴏʀᴛᴀᴅᴏʀ ᴅᴀ ʀᴇsᴘɪʀᴀᴄ̧ᴀ̃ᴏ ɪɴɪᴄɪᴀʟ, ᴏs ᴅᴏɪs ᴇɴᴄᴏɴᴛʀᴀʀᴀᴍ-sᴇ ᴇ́ ᴛɪᴠᴇʀᴀᴍ ᴜᴍᴀ ʙᴀᴛᴀʟʜᴀ ᴏɴᴅᴇ ᴏ Lᴏʀᴅ ᴏɴɪ sᴀɪᴜ ᴅᴇʀʀᴏᴛᴀᴅᴏ ᴘᴏʀᴇ́ᴍ ᴄᴏɴsᴇɢᴜɪᴜ ғᴜɢɪʀ, Yᴏʀɪɪᴄʜɪ Tsᴜɢɪᴋᴜɴɪ ᴘᴏʀᴇ́ᴍ ɴᴀ̃ᴏ ᴄᴏɴsᴇɢᴜɪᴜ ᴄᴏɴᴄʟᴜɪʀ ᴀ ᴍɪssᴀ̃ᴏ ᴅɪᴠɪɴᴀ, ᴘᴏʀᴇ́ᴍ ᴀɴᴛᴇs ᴅᴇ sᴇʀ ᴛʀᴀɪ́ᴅᴏ ᴘᴏʀ sᴇᴜ ɪʀᴍᴀ̃ᴏ ᴘᴀssᴏᴜ sᴇᴜs ᴇɴsɪɴᴀᴍᴇɴᴛᴏs ᴀ ᴜʙᴜʏᴀsʜɪᴋɪ ᴏ ʜᴏᴍᴇᴍ ǫᴜᴇ sᴇʀɪᴀ ʀᴇsᴘᴏɴsᴀ́ᴠᴇʟ ᴘᴏʀ ᴇʟɪᴍɪɴᴀʀ ᴏ Lᴏʀᴅ. ᴅᴇssᴇ ᴍᴏᴅᴏ ɪɴɪᴄɪᴀɴᴅᴏ ᴀ ʟᴏɴɢᴀ ᴊᴏʀɴᴀᴅᴀ ᴅᴏs ᴄᴀᴄ̧ᴀᴅᴏʀᴇs ᴠs ᴏs Oɴɪs. AGORA DEEM O SEU MELHOR HAHAHA
                  
                  • ˡᵘⁿᵃ ʷᵒᵒᵈ ᵈᵉˢⁱᵍⁿᵉʳ •`);
        break;
      case '!recompensas.lvl':
      await client.sendText(message.from, `☀ RECOMPENSAS POR NÍVEIS 🌕

SLAYER

Nível 1: 1° slot de respiração

Nivel 15: +slot de habilidade

Nivel 25: +slot de habilidade criada

Nível 35: +slot de respiração

Nivel 40: +habilidade: Prodígio(Caso mereça)

Nível 45: +slot de habilidade

Nível 50: +1 slot de habilidade criada 
+2 slot de habilidade

Nível 60: +2 slot de habilidade criada

Nível 70: +3 slots de habilidade

ONI

Nível 10: 1° slot de kekkijutsu

Nivel 15: +habilidade: 1° dose sangue Muzan

Nivel 25: +2 Slot de Habilidade

Nivel 30: +habilidade: 2° dose sangue Muzan

Nível 35: +2 slots de habilidade criada

NÍVEL 40: +1 sorteio de kekkijutsu

Nível 45: +5 poderes criados ( kekkijutsu Inicial )

Nível 50: +habilidades: 3° dose sangue Muzan
+ Herança Sanguínea +3 slot de habilidade

Nível 60: +1 slot habilidade criada

Nível 70: +1 slot habilidade criada`);
        break;
      case '!mapa':
      await client.sendText(message.from, `🗺 MAPA 🗺

LADO SUL

⛰Monte Sagiri

O monte Sagiri é um monte que se localiza ao sul, mais conhecido por sua paisagem cheia de névoa é também onde os portadores da respiração da Água geralmente treinam.

⛰ MONTE NATAGUMO

o monte Natagumo se localiza ao sul, um local cheio de árvores de Pinheiro é com grandes relevos

🛖VILA MOCHI
uma pequena Vila localizada ao sul, a alguns quilômetros do Monte Natagumo

🛖VILA AMAKISHI
uma Vila com grandes campos de arroz ao redor, local conhecido por sua beleza radiante

🏘ASUR

Uma pequena cidade ao sul, localizada perto do Monte Sagiri, ferrovias percorrem pelo local

🛖KAYO

uma pequena Vila onde uma possui um enorme lago ao redor

🌆KYOTO

Uma enorme cidade onde possui grande comércio, grandes ferrovias percorrem o local

🏯TEMPLO FUGI

um grande tempo localizado perto de Kyoto, local de adoração

🚧FERROVIA

uma ferrovia onde moradores pegam trem para viajar para outros lugares

LADO NORTE

🌇TÓQUIO

Uma grande cidade onde se realiza grande comércio, conhecida por sua grande fartura

🚧FERROVIA

ferrovia de Tóquio, local onde moradores pegam trem para viajar

🏯TEMPLO AGANARI

um enorme templo localizado perto de Tóquio

🏘HOARU

grande cidade localizada perto shizuoka

🏘Shizuoka

uma grande cidade de pescadores, se localiza perto do Monte fugi

🗻MONTE FUGI

um enorme monte(vulcão) que é coberto de neve, um local extremamente frio onde apenas os mais fortes sobrevivem

⛩DISTRITO VERMELHO

um local perto da cidade de Tóquio onde a lei é o prazer carnal


LADO OESTE

🕋TEMPLO YANG

um templo conhecido por sempre estar com barulhos recorrentes

🛖Vila Yaguti

uma Vila que é farta de alimentos e que se tornará brevemente Nagasaki

🎑VILA DOS FERREIROS

uma Vila mistériosa onde apenas ubuyashiki sabe onde está

⚔QUARTEL GENERAL
o quartel dos caçadores de demônios

🏞VALE OSAKA
um enorme vale onde possui árvores com mais de 20 metros

🏞VALE KARAKURI
LADO SUDESTE
um vale coberto de névoa, conhecido por seu grande cheiro de enxofre

🏘AMAKARU
cidade pequena, geralmente Onis são avistados por aquele local

🏘KAMISHI

uma cidade pequena, conhecida por suas fontes termais

🎑VALE DA NEVE

um vale coberto de neve com uma linda paisagem

🏞VALE DO FIM

um local com grandes relevos é uma densa floresta`);
        break;
      case '!combate':
      await client.sendText(message.from, `鬼滅の刃
「⚔」𝐒𝐈𝐒𝐓𝐄𝐌𝐀 𝐃𝐄 𝐂𝐎𝐌𝐁𝐀𝐓𝐄

□̶̷  ׄ𝗙𝗢𝗥𝗖̧𝗔
⤿ 𝖣𝖾𝖿𝗂𝗇𝖾 𝗈 𝗉𝖾𝗌𝗈 𝗆á𝗑𝗂𝗆𝗈 𝗊𝗎𝖾 𝗈 𝗉𝖾𝗋𝗌𝗈𝗇𝖺𝗀𝖾𝗆 𝗉𝗈𝖽𝖾 𝗅𝖾𝗏𝖺𝗇𝗍𝖺𝗋, 𝖾𝗆𝗉𝗎𝗋𝗋𝖺𝗋 𝗈𝗎 𝗌𝖾𝗀𝗎𝗋𝖺𝗋 𝖼𝗈𝗆 𝖿𝖺𝖼𝗂𝗅𝗂𝖽𝖺𝖽𝖾.
𝖣𝗂𝗏𝗂𝖽𝖾 𝖺 𝖿𝗈𝗋ç𝖺 𝖻𝖺𝗌𝖾 𝗉𝗈𝗋 𝟤.
𝗘𝘅𝗲𝗺𝗽𝗹𝗼: 
𝖴𝗆 𝗉𝖾𝗋𝗌𝗈𝗇𝖺𝗀𝖾𝗆 𝖼𝗈𝗆 𝟪𝟢 𝖽𝖾 𝖿𝗈𝗋ç𝖺:
• 𝖢𝖺𝗎𝗌𝖺 𝟪𝟢 𝖽𝖾 𝖽𝖺𝗇𝗈
• 𝖢𝗈𝗇𝗌𝖾𝗀𝗎𝖾 𝗂𝗇𝗍𝖾𝗋𝖺𝗀𝗂𝗋 𝖼𝗈𝗆 𝗈𝖻𝗃𝖾𝗍𝗈𝗌 𝖽𝖾 𝖺𝗍é 𝟦𝟢 𝗄𝗀

□̶̷  ׄ𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗𝗘
⤿ 𝖣𝖾𝖿𝗂𝗇𝖾 𝗈 𝗊𝗎ã𝗈 𝗋á𝗉𝗂𝖽𝗈 𝗈 𝗉𝖾𝗋𝗌𝗈𝗇𝖺𝗀𝖾𝗆 𝗌𝖾 𝗆𝗈𝗏𝖾.
𝖣𝗂𝗏𝗂𝖽𝖾 𝖺 𝗏𝖾𝗅𝗈𝖼𝗂𝖽𝖺𝖽𝖾 𝖻𝖺𝗌𝖾 𝗉𝗈𝗋 𝟤.
𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
• 𝟨𝟢 𝖽𝖾 𝗏𝖾𝗅𝗈𝖼𝗂𝖽𝖺𝖽𝖾 = 𝟥𝟢 𝗆/𝗌

□̶̷  ׄ𝗥𝗘𝗦𝗜𝗦𝗧𝗘̂𝗡𝗖𝗜𝗔
⤿ 𝖱𝖾𝗉𝗋𝖾𝗌𝖾𝗇𝗍𝖺 𝗈 𝗍𝗈𝗍𝖺𝗅 𝖽𝖾 𝖽𝖺𝗇𝗈 𝗊𝗎𝖾 𝗈 𝗉𝖾𝗋𝗌𝗈𝗇𝖺𝗀𝖾𝗆 𝖺𝗀𝗎𝖾𝗇𝗍𝖺 𝖺𝗇𝗍𝖾𝗌 𝖽𝖾 𝗌𝖾𝗋 𝖽𝖾𝗋𝗋𝗈𝗍𝖺𝖽𝗈.
𝖬𝗎𝗅𝗍𝗂𝗉𝗅𝗂𝖼𝖺 𝖺 𝗏𝗂𝖽𝖺 𝖻𝖺𝗌𝖾 𝗉𝗈𝗋 𝟣𝟢.
𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
• 𝟣𝟢𝟢 𝖽𝖾 𝗏𝗂𝖽𝖺 = 𝟣.𝟢𝟢𝟢 𝖽𝖾 𝗏𝗂𝖽𝖺 𝗍𝗈𝗍𝖺𝗅

□̶̷  ׄ𝗥𝗘𝗦𝗣𝗜𝗥𝗔𝗖̧𝗔̃𝗢 | 𝗘𝗡𝗘𝗥𝗚𝗜𝗔
⤿ ...
𝖠 𝖼𝖺𝖽𝖺 𝟣𝟢𝟢 𝗉𝗈𝗇𝗍𝗈𝗌 𝖽𝖾 𝗋𝖾𝗌𝗉𝗂𝗋𝖺çã𝗈 = +𝟣 𝖽𝖾 𝖾𝗇𝖾𝗋𝗀𝗂𝖺
Para recuperar e fácil, basta vocês descansarem 2 turnos, para recuperar dois pontos de energia, mas, não poderam fazer movimentos bruscos, como correr, lutar, ou usar formas(caso gaste todos pontos de respiração, irá morrer suforcado por falta de ar, e o pulmão comprimido) 
𝗘𝘅𝗲𝗺𝗽𝗹𝗼:
• 𝟤𝟢𝟢 𝖽𝖾 𝗋𝖾𝗌𝗉𝗂𝗋𝖺çã𝗈 = 𝟤 pts d𝖾 𝖾𝗇𝖾𝗋𝗀𝗂𝖺

□̶̷  DISTÂNCIA
⤿ Expecificamente para dano em área, Quanto maior for seu ataque mais lento ele será.
Exemplo:
* Alvo á cerca de 5 metros de distância
 Se cheguei a 100.000 de agilidade e realizo um ataque em área, Na escala de 5 metros. Eu divido 100.000 (Agilidade) por 5 (Metros) Assim, Resultando a velocidade do ataque em comparação a distância.

100.000 ÷ 5 = 20.000

 Assim, O ataque em área tem 20.000 de Agilidade

□̶̷  ׄFOME
⤿ ...
O sistema é parecido com o sistema de respiração, porém, os onis perdem o controle, caso não comem para recuperar, e perdem 99% de seus atributos total`);
        break;
      case '!hab.herdadas':
      await client.sendText(message.from, `🗒 LISTA DE HABILIDADES HERDADAS 🗒

Basicamente a descrição das habilidades que você recebe por nível.

──────────────────────

• 「📚」 • Prodígio

──────────────────────

↳ Prodígio é uma habilidade desenvolvida pelo tempo, podendo criar suas próprias formas da sua respiração, sendo 5 formas no máximo.
( 1 forma por dia. )
Ao se tornar Hashira, com essa habilidade você poderá criar sua própria respiração, sendo variante da sua respiração atual, podendo criar a respiração e 5 formas em 5 dias, em seguida poderá criar mais 5 formas por dia, sendo 10 formas no total, tendo que fazer uma ação explicativa aprendendo e fazendo ela.
Não ocupa slot.

──────────────────────

• 「🩸」 • 1° Dose Sangue Muzan

──────────────────────

↳ A 1° dose se refere à que os oni's completos recebem, ela lhe oferece um aumento contínuo de 1,5x em todos os atributos.
Ocupa slot.

──────────────────────

• 「🩸」 • 2° Dose Sangue Muzan

──────────────────────

↳ A 2° dose se refere à que os Luas inferiores recebem, ela lhe oferece mais um aumento contínuo de 1,5x em todos os atributos, deixando o buff total da dose em 3x.
Habilidade modificadora, não ocupa slot, assumirá a posição da 1° dose sangue muzan.

──────────────────────

• 「🩸」 • 3° Dose Sangue Muzan

──────────────────────

↳ A 3° dose se refere à que os Luas Superiores recebem, ela lhe oferece mais um aumento contínuo de 2x em todos os atributos, deixando o buff total da dose em 5x.
Habilidade modificadora, não ocupa slot, assumirá a posição da 2° dose sangue muzan.

──────────────────────

• 「⚜」 • Herança Sanguínea

──────────────────────

Os oni's herdam a capacidade supernatural de transformar humanos em demônios, para conseguir isso precisa injetar uma grande dose do seu próprio sangue no humano, tendo que rodar uma /chance no grupo de comandos, caso der negativo a pessoa morre não conseguindo completar a transformação.
Para executar a transformação, terá que injetar seu sangue por 3 turnos ou 3 vezes no humano.
Não ocupa slot.
Serve para transforma o player em híbrido também

──────────────────────

• 「🪯」 • Híbridos

──────────────────────

Os híbridos são seres totalmente diferentes dos onis normais, eles são capazes de obter respiração ou até criar suas próprias técnicas de respiração híbrida com kekkijutsu, igual ao Kokushibou além de serem extremamente habilidosos com a espada

como se torna um híbrido

o usuário deverá encontrar algum player que seja um híbrido ou pedir para algum oni do clã Tsuki para transformá-lo em oni, deverá estar acima do level 20

Obs:o oni deve ser um kizuki

Você terá um sorteio que irá mostrar se você vai poder usar respiração ou não

──────────────────────

• 「⚠」 • Marechi Intoxicante

──────────────────────

↳ Pessoas que são classificadas como Marechi's, tendo um sague considerado como especial para os oni's.
Quando seu sangue é derramado em batalha é capaz de destrair ou atrapalhar a concentração do oni, sendo pelo cheiro ou pela visão do sangue, obrigando o oni olhar para o usuário por 1 turno, assim perdendo uma ação/turno.
(Onis recebem 20% a menos de resistência e 30% a menos em percepção)
( Caso o oni esteja muito perto, entre 1 a 3 metros, ele poderá atacar. )
( Kamados-oni são imunes a essa habilidade. )
( Concentração Extrema ativada deixa o alvo imune. )

──────────────────────`);
        break;
      case '!sentidos':
      await client.sendText(message.from, `SENTIDOS
» Os sentidos são a forma em que você percebe o mundo ao todo, serve para perceber inimigos e desviar de ataques surpresas.
_________________________________________
「👁」 Visão


» Sua visão é totalmente aprimorada, capaz de perceber inimigos ao longe apenas vendo seus rastros, e consegue encherga minimamente no escuro, o suficiente para não tropeçar ou achar um oni de surpresa.
_________________________________________

「👂」 Audição

» Sua audição e fora do comum, consegue perceber sons em 360° com precisão de onde o posicionamento está, tanto em baixo da terra tanto em cima de si.
_________________________________________

「👃」 Olfato

» Seu olfato é igual ao de um animal, capaz de perceber cheiros que outros não consegue até mesmo desconhecem, seu olfato é capaz de achar inimigos a longas distância apenas seguindo o cheiro dela.
_________________________________________

「✋」 tato

» Seu tato e totalmente apurado, sua pele e sensível a qualquer mudança, podendo percebe partículas no ar e presença de qualquer inimigos ao seu redor, você sentirá um arrepio total quando estiver um inimigo a sua espreita.
_________________________________________`);
        break;




        // SISTEMA SLAYER
      case '!ficha.slayer':
      await client.sendText(message.from, `
        ࣭࣭࣭࣭࣭ٜ ᷼ ࣭࣭࣭࣭ٜ፝֯֟͞ ᷼ ࣭࣭࣭ٜ       ࣭࣭࣭࣭ٜ࿚࣭࣭࣭ٜ፝֯֟࣪࣪࣪࣪۬᷼͡࿙࣭࣭࣭࣭ٜ֟֯፝࣪࣪࣪۬͡࿚࣭࣭࣭ٜ፝֯֟࣪࣪࣪࣪۬᷼͡࿙࣭࣭࣭࣭ٜ       ࣭࣭࣭ٜ ᷼ ࣭࣭࣭࣭ٜ֟֯፝͞ ᷼ ࣭࣭࣭࣭࣭ٜ
                    ࣭࣭࣭࣭࣭ٜٜ✾࣭࣭࣭࣭࣭ٜٜ݊১𐇽۫❟ᨳ໋̣۫✿ٜ〬⤹🎎⤸ٜ✿〫۫ᨳ໋̣𐇽❟۫১࣭࣭࣭࣭ٜٜ݊✾࣭࣭࣭࣭࣭ٜٜ
                   ғɪᴄʜᴀ ᴅᴇᴍᴏɴs-sʟᴀʏᴇʀ
                        ᶜᵃᶜ̧ᵃᵈᵒʳ ᵈᵉ ᵒⁿⁱ

   
  ━֟፝֯━━̸━━̷ ΝϴᎷᎬ: 
  ━֟፝֯━━̸━━̷ Ꮖᗞᗩᗞᗴ: 
  ━֟፝֯━━̸━━̷ 𝐺𝐸𝑁𝐸𝑅𝑂: 
  ━֟፝֯━━̸━━̷ ᎪᏙᎪͲᎪᎡ: ↓
xᴘ: 0
ᴘᴄ: 0
ɴɪ́ᴠᴇʟ: 0
¥: 0

  ━֟፝֯━━̸━━̷ ᏟᏞᎪ̃: 

  ━֟፝֯━━̸━━̷ 𝐑𝐀𝐍𝐊: cidadão

  ━֟፝֯━━̸━━̷ ᎡᎬՏᏢᏆᎡᎪᏟ̧ϴ̃ᎬՏ: 

  ━֟፝֯━━̸━━̷ ҒϴᎡᎷᎪՏ:

 ━֟፝֯━━̸━━̷ ᎻᎪᏴᏆᏞᏆᎠᎪᎠᎬՏ:
 ␥ 
 ␥ 

 ━֟፝֯━━̸━━̷ ᎻᎪᏴ/ᏟᏞᎪ̃: 
 ␥
 ␥
 ␥
 ␥
 ␥

━֟፝֯━━̸━━̷ ᎪͲᎡᏆᏴႮͲϴՏ: 500 para distribuir._

␥ Força: 
␥ Agilidade: 
␥ Respiração: 
␥ Resistência: 
␥ Percepção: 


  ━֟፝֯━━̸━━̷ ᎬϘႮᏆᏢᎪᎷᎬΝͲϴՏ: 
 ␥ Katana enferrujada🔐
 ␥ 
 ␥ 
 ␥
 ␥

   ━֟፝֯━━̸━━̷  ՏᎬΝͲᏆᎠϴ: 

   ━֟፝֯━━̸━━̷ ᎻᏆՏͲϴ́ᎡᏆᎪ:`);
        break;
      case '!hab.slayer':
      await client.sendText(message.from, `• 「🫂」 • Habilidades humanas

──────────────────────

↳ Tais habilidades só poderão ser utilizadas por humanos

──────────────────────

• 「🥀」 • Fisiologia Venenosa

──────────────────────

↳ Esta habilidade consiste em transformar seu corpo, em uma refeição completamente venenosa para Onis. São cerca de 37 kg de glicínia em toda a extensão de seu corpo (cabelo, órgãos, unhas, pele, etc) sendo mais que o suficiente para que um Oni morra. Seu sangue exposto será também letal a demônios, poderá banhar um pouco dele em sua Nichirin e perfurar o Oni dando um corte venenoso ( O dano do veneno atingue a vida ignorando a resistência automatica, o veneno continuará nele por vários turnos, tirando 50% ou 25% da força/dano do ataque normal por turno, isso é variado graças a resistência do oni. ), não necessitando de fato o decapitar (não é algo muito versátil, mas ainda sim uma opção). O procedimento pode ser feito tomando porções médias de glicínia por 4 dias. Para manter a fisiologia venenosa ativa é necessário renovar a dose de glicínia ao menos duas vezes por semana (pode renovar a dose duas vezes no mesmo dia, mas em horários diferentes, como se fosse um remédio). Para isso será o mesmo processo de treino: faça a ação e marque um registrador para aprovar.

──────────────────────

• 「🗣」 • Concentração Total

──────────────────────

↳ Se trata de absorver uma quantidade maximizada de oxigênio para que o usuário possa aumentar suas habilidades físicas e concentração mental ao máximo, até um ponto em que ele pode igualar e superar a força de um demônio. Sendo comumente usado para golpes decisivos por conta de suas limitações.
A concentração total so pode ser ativada por 1 turno em humanos normais e a cada rank aumenta em 1 o máximo de turnos ativado, fora isso ao ativar ganha um buff de 1.5x em força e agilidade.

──────────────────────

• 「🔪」 • Lâmina Furtiva

──────────────────────

↳ Uma a quatro lâminas é escondida dentre suas roupas, seja sapatos, ou entre demais objetos, a lâmina furtiva que normalmente é feita é aquela que quando se pressiona uma parte do sapato, a lâmina rapidamente é ativada e usada para atacar. É banhada em glicínia ou outros venenos, a lâmina tem cerca de 10/15 cm. Caso um Oni possua mutação corporal ou mutação celular, será possível acoplar a lâmina em seu próprio corpo.
A lâmina dará um dano padrão, já o veneno irá ser a metade da força do ataque, também ignorando a resistência automática do inimigo.
Para dominar essa habilidade, terá que ser do clã Kocho ou ter conhecimento médico.
( Também necessita de 10 gramas de glicínia transformados em líquido para cada lâmina. )

──────────────────────

• 「🌬」 • Concentração Constante

──────────────────────

↳ A Concentração constante é uma respiração superior a concentração total, sendo usada por bastante tempo, ou melhor... por 24 horas por dia.
Essa habilidade é um modificador para a respiração da concentração total, fazendo-a ser ilimitada, seu buff de 1.5x em força e agilidade é automático e passa a ser 2x. 
Resumindo, a concentração total passa a ser usada por toda batalha, sem a necessidade de ser ativada, estando sempre presente.
( Essa respiração pode ser aprendida apenas nos ranks Tsuguko e Hashira. )

──────────────────────

• 「👤」 • Mundo Transparente

──────────────────────

↳ Mundo transparente é uma visão especial que permite ser possível ver dentro das pessoas. 
( Nota-se seus órgãos, músculos, pulsações e etc. )
A habilidade quando ativada traz a sensação de câmera lenta, só pode ser treinada ao se tornar um usuário da marca.
Com essa habilidade poderá prever movimentações, ataques e defesas pelos 6 primeiros turnos de uma batalha e poderá desviar de 4 ataques mesmo com a velocidade inferior.
Não ocupa slot. ( /marca-slayer )
──────────────────────

• 「🔥」 • Nichirim Carmesim

──────────────────────

↳ Tal se assemelha mais como uma habilidade na qual se tonaliza sua Nichirin com a cor vermelho carmesim, que é desbloqueada junto do mundo transparente, após despertar a Marca Slayer. Com a Nichirin, após cortar um membro de um demônio, terá sua regeneração dificultada, até mesmo dificultando o Oni em reconectar os membros caídos. Esta Nichirin não é ativada o tempo todo, portanto deverá a ativar em sua ação.
Seus cortes ignoram a resistência automática do inimigo e paralisam sua cura ( Assim o impedindo de usar qualquer método de cura, a cada corte é 3 turnos de duração. ) por 5 turnos. 
Não ocupa slot. ( /marca-slayer )
──────────────────────


• 「👊」 • Combate Corpo a Corpo

──────────────────────

↳ Com essa habilidade o slayer consegue lutar tanto com uma katana quanto apenas usando seus punhos e pernas desferindo murros e chutes poderosos, com isso ficando totalmente útil mesmo sem estar empunhando uma espada.
Usuários dessa habilidade contém um buff em golpes desarmados de 2x em força e 3x de agilidade, além de seus golpes sem armas serem 100% do atributo de força.
( Sem essa habilidade os socos, chutes e cabeçadas dos slayers são a metade da força de seu atributo. )

──────────────────────

• 「🗡」 • Lâmina Ressoante

──────────────────────

↳ Essa habilidade consiste em obter cortes mais densos e bloqueios reforçados, tendo capacidades superiores com a nichirin.
Assim ganhando um buff de 2x força e velocidade em danos cortantes e podendo defender 5 ataques sem perder vida pelo sistema de defesa.
( 5 defesas por batalha. )
Também gera imunidade a habilidade densidade óssea, podendo cortar normalmente.

──────────────────────
• 「😮‍💨」 • Respiração de recuperação

──────────────────────

↳ o usuário quando está em apuros caído no chão ou encurralado respira fundo maximizando o ar em seus pulmões e transfere a energia adquirida para seus músculos o empurrando para fora do ataque do inimigo 
(Basicamente você esquiva de qualquer golpe mas só uma vez)

──────────────────────

•「🤸‍♂」• Flexibilidade

──────────────────────

Desenvolvida por caçadores capazes de contorcer seus corpos como serpentes, essa técnica permite atravessar passagens estreitas, torcer membros em ângulos impossíveis e escapar de presas mortais. A flexibilidade se tornou uma arma furtiva e inesperada nas mãos de Slayers criados na arte do improviso corporal.

buff: 2x agilidade passivo

──────────────────────

•「🫲🫱」• Ambidestria

──────────────────────

A rara capacidade de usar ambas as mãos (ou pés) com a mesma destreza. Em batalha, isso permite empunhar duas armas, alternar golpes e confundir inimigos. Para alguns, é um dom natural; para outros, resultado de anos de treino duro. Mas sempre uma vantagem letal para quem domina o combate corpo a corpo.

buff:o usuário ganha 1,5x em força passiva assim que equipa a arma

──────────────────────

•「⚔」• Samurai

──────────────────────

Herdeiros de uma tradição ancestral, os Samurais caçadores lutam com honra, disciplina e armas forjadas com história. Com armaduras leves, máscaras e katanas passadas por gerações, são guerreiros completos que encaram demônios como quem encara o destino. Cada corte carrega legado e propósito.

buff:capacidade de ignorar 2 ataques dos onis sem sofrer dores, 1,5x em resistência passiva

──────────────────────

•「💨」• Respiração de Cura
Diferente das outras técnicas respiratórias, essa se foca na recuperação de ferimentos internos. Ela atua em hemorragias, lesões ocultas e danos profundos. Pode ser usada até três vezes por batalha. Não é uma cura total, mas é o suficiente para manter o Slayer de pé por mais um round.

Buff:o usuário regenera 5.000.000 de hp, pode ser ultizado apenas 3 vezes em batalha
_________________________________________`);
        break;
      case '!evolução.slayer':
      await client.sendText(message.from, `📈 SISTEMA DE EVOLUÇÃO DOS SLAYERS (CAÇADA DE ONIS) 📈

⚔ [ CAÇADA E ASCENSÃO DE RANK ] ⚔

Para evoluir como um Slayer (Caçador de Oni), o jogador deve demonstra competência em batalha, caçando e exterminando Onis. A progressão na hierarquia dos Caçadores é baseada na quantidade e dificuldade dos Onis derrotados.

1. Caçada de Onis:



> O jogador deve enviar um texto narrando a batalha contra no máximo 10 Onis comuns ou incomuns dependendo do nível do player, com no mínimo 300 palavras, descrevendo a luta, estratégias, e consequências do combate, rendem pontos de extermínio (PE).



2. Solicitação de Promoção:



> Ao atingir a quantidade de PE necessária para um novo cargo, o jogador deve solicitar a promoção. O ADM revisará as caçadas e aprovará a ascensão conforme a coerência e qualidade.

🗡 [ PONTOS DE CAÇADA – CLASSIFICAÇÃO DOS SLAYERS ] 🗡

Cargo	Nível Mínimo	Pontos de Caçada (PCaç)	Requisitos Especiais

Mizunoto	—	—	Sobreviver à Seleção Final
Mizunoe	5 PE 
Kanoto	15 Pe
Kanoe	27	8 25 Pe
Tsuchinoto	35 Pe
Tsuchinoe	50 PE
Hinoto	 70 PE
Hinoe	90 PE
Kinoto	 100 Pe
Kinoe	120
Tsuguko	200 PE e ser	Apadrinhado por um Hashira
Hashira:	Derrotar um Kizuki de no mínimo nível 40


🎯 [ CLASSIFICAÇÃO DOS ONIS ] 🎯

Tipo de Oni	PE Concedido

Oni comum (sem nome)	1 PE
Oni Incomum nome e técnicas menores, como garras ou algo do tipo 5 PE(Pode caçar após chegar a mizunoe)
Oni mutante 20 PE(Pode caçar após chegar a Hinoto)
Oni Completo 35 PE (Pode caçar após chegar a Hinoto)
Lua inferior: 50 PE (Caçar apenas um quando chegar a Tsugoko)
Lua Superior: 200 PE


📜 [ REGRAS ADICIONAIS ] 📜

Missões conjuntas reduzem o PE ganho pela metade, a não ser que o jogador tenha finalizado o Oni.

Falsas narrações ou caçadas sem coerência não contam para progressão.

ADM pode conceder bônus de PE em casos de narração excepcional.

A progressão de Tsuguko para Hashira só pode ocorrer após a morte, promoção ou aposentadoria de um Hashira vigente (exceto em eventos especiais).

Clãs que Slayers ganham mais pontos ao matar e Onis ao absorver:

Kibutsuji 
Hakuji
Doma`);
        break;
      case '!missão.slayer':
      await client.sendText(message.from, `SISTEMA DE MISSÕES DIÁRIAS

Como funciona:

> Todo Semana você poderá fazer até 5 missões.
> As missões são baseadas no seu nível, cada missão  cena deve ser feita com coerência, caso contrário irá morrer., e só estão disponíveis após completar a Seleção Final.
> Você pode acumular missões em uma única narração, mas precisa ter o 1,3× do nível mínimo da missão mais difícil da sequência (também aumenta o número necessário de palavras.).

MISSÕES DISPONÍVEIS

-----------------
Derrote 1 Oni incomum
Nível mínimo: 15

RECOMPENSAS:
300XP - 300PC
1 - Chifre
-----------------

Patrulhe uma vila atacada por Onis comuns (mínimo 3 derrotados)
Nível mínimo: 20

RECOMPENSAS:
400XP - 1 PE - 350PC
2 - Dentes de Oni
-----------------

Investigue a presença de um Oni incomum em área montanhosa
Nível mínimo: 25

RECOMPENSAS:
600XP - 5 PE - 400PC
1 - Garras Demoníacas
-----------------

Neutralize dois Onis incomuns em missão noturna
Nível mínimo: 27

RECOMPENSAS:
800XP - 8 PE - 500PC
1 - Máscara Oni Quebrada
-----------------

Derrote um Oni mutante solitário em floresta escura
Nível mínimo: 35

RECOMPENSAS:
1000XP - 20 PE - 700PC
1 - Núcleo de Mutação
-----------------

Recupere sobreviventes em um vilarejo tomado por Onis comuns (mínimo 3 derrotados)
Nível mínimo: 36

RECOMPENSAS:
1200XP - 1 PE - 750PC
3 - Dentes de Oni
-----------------


Elimine 3 Onis mutantes em área urbana abandonada
Nível mínimo: 38

RECOMPENSAS:
1500XP - 10 PE - 800PC
1 - fragmentos de sangue do Muzan
-----------------


Missão de contenção: segure um Oni mutante com kekkijutsu (sorteio) até o reforço chegar
Nível mínimo: 40

RECOMPENSAS:
1800XP - 20 PE - 900PC
1 - 100ml de Sangue do oni
-----------------


mate o Oni mutante (kekkijutsu sorteado)
Nível mínimo: 43

RECOMPENSAS:
2000XP - 25 PE - 1000PC
1 - 500ml de sangue do oni
-----------------


Sobreviva até o amanhecer de um oni completo (kekkijutsu sorteado)
Nível mínimo: 45

RECOMPENSAS:
2500XP - 35 PE - 1200PC
1 - 300ml de sangue do oni
-----------------


Elimine um oni completo (kekkijutsu sorteado.)
Nível mínimo: 50

RECOMPENSAS:
_3000XP - 40 PE - 1500PC
1 - 1l de sangue do oni
-----------------`);
        break
      case '!loja.atirador':
      await client.sendText(message.from, `Seja bem-vindo à loja do Sistema de Atirador

---
> Para aprender, funciona basicamente a mesma coisa que as respirações.
---

•「🔫」• Sistema do Atirador
» Seus usuário são incapazes de utilizar as técnicas de Respiração, então decidiram partir para algo mais perfurante.

Tabela de balas:
5 balas - 500 PC
10 balas - 1000 PC

Após aprender todo o sistema, poderá criar suas próprias técnicas, apenas consulte a Administração.`);
        break;
      case '!química':
      await client.sendText(message.from, `QUÍMICA DEMONÍACA

> Os Humanos tem uma ótima capacidade cerebral, podendo criar armas, armaduras, casas, até mesmo... Armas biológicas.

Sangue
A cada 100ml de sangue de de oni, é possível fazer 1 dose de infusão, cada dose dura 2 turnos até se decipar totalmente, o valor do sangue e determinado de qual oni foi coletado, o grau não importa. {A Habilidade 'conhecimentos médicos", possibilita fazer as suas experiências com metade do custo, e deixa 100% de taxa de acerto e a cara 1 oni morto vc consegue 50ml de sangue.}

Funções
Usando o sangue dos onis, e capaz de utilizar seu kekkijutsu pelo tempo que a quantidade de ml determinar, seja criando balas explosivas, congelantes ou flamejantes,  ou criar bolas de espinho, ou banhar sua espada de sangue, fazendo seus cortes lançar fios cortes, ou impactos de socos devastadores.

Como Criar

> {Clãs Kocho e Tamayo não necessitam de escolha.}

Voce deverá escolher se vai utilizar ou não, usuários de química demoníaca ficam incapazes de utilizar respirações {a não ser os clãs citados}

Para criar, além do sangue, você precisa criar uma cena de 250 palavras, criando sua arma, e as suas funções, após isso deve fazer um teste de sorte. 1d20.
> -10 seu experimento falha e você perde o sangue 

> +10 seu experimento dá certo.`);
        break;
      case '!loja.slayer':
      await client.sendText(message.from, `⚔ 𝗟𝗢𝗝𝗔 𝗗𝗢 𝗖𝗢𝗥𝗣𝗢 – "𝗞𝗔𝗭𝗔𝗡𝗔 𝗗𝗢 𝗧𝗘𝗠𝗣𝗟𝗢"

> Oculta no porão de um antigo templo, apenas Slayers autorizados têm acesso. Aqui, ervas sagradas, bombas especializadas e armas silenciosas são armazenadas para quem luta contra as criaturas da noite.

____

🧪 Drogas Medicinais e Venenos

• Erva Curativa de Montanha — 200 pts

> Recupera 5 ponto de estamina, usada em bandagens.

• Pó de Glicínia — 1000 pts

> Pode paralisar temporariamente um Oni (emvenenamento em combate).
> Só funciona se inalado.

• Soro de Antídoto Rápido — 800 pts

> Anula venenos ou toxinas do tipo Oni em 1 turno.

• Tintura de Glicínia Pura — 2500 pts

> Causa dano contínuo em Onis ao ser aplicada em lâminas ou bombas ou balas.


🧷 Equipamentos e Armas Leves

• Kunai de Glicínia (x3) — 600 pts

> Kunais embebidas em glicínia, ótimo para manter distância.

• Bomba de Fumaça(×2) — 500 pts

> Cobre o campo de visão, útil para fuga ou distração.

• Fios de Prata Trançados — 400 pts

> Ideal para armadilhas silenciosas.`);
        break;
      case '!treino.resp':
      await client.sendText(message.from, `📈 SISTEMA DE TREINO DE RESPIRAÇÕES 📈

🧘‍♂ [ TREINO DE FORMA DE RESPIRAÇÃO ] 🧘‍♂

Para aprender novas formas de respiração, o jogador deve se encontrar com um ex Hashira, um Tsugoko ou um Hashira da respiração que deseja aprender. O treino é dividido em duas etapas:

1. Encontro com o Mentor: 
> O jogador deve encontrar um mentor qualificado (ex Hashira, Tsugoko ou Hashira) que seja especializado na respiração desejada. O encontro pode ser feito em qualquer local apropriado e deve ser organizado em uma cena única.

2. Treinamento das Formas: 
> O treinamento consiste em aprender uma nova forma de respiração. Cada forma requer um treino de 500 palavras por dia durante dois dias consecutivos. O jogador deve enviar os textos para aprovação do ADM, que avaliará a precisão e a aplicação da forma aprendida. O jogador precisa demonstrar progresso e entendimento da técnica durante o treinamento.

Ao final dos dois dias, o ADM avaliará o progresso e, se aprovado, o jogador poderá adicionar a nova forma de respiração ao seu repertório.

🎓 [ REQUISITOS ] 🎓

- Para um novo aprendiz: 
> O jogador precisa ter um slot de respiração livre e ter afinidade com a mesma
- Para o mentor:
> O mentor deve ser um ex Hashira, Tsugoko ou Hashira com a respiração desejada completa, pode ser um NPC ou um player nesse cargo.

Ao final do treinamento, o jogador ganhará XP e PC (Pontos de Compra) de acordo com a qualidade e o progresso demonstrado durante o treino.`);
        break;
        break;
      case '!marca':
      await client.sendText(message.from, `「🔥」𝐌𝐀𝐑𝐂𝐀 𝐃𝐎 𝐂𝐀Ç𝐀𝐃𝐎𝐑

A Marca do Caçador é uma bênção rara, um despertar sobrenatural que rompe completamente os limites humanos. Ela concede aos portadores uma força descomunal, sentidos aguçados e reflexos que beiram o sobrenatural, permitindo enfrentar até os Onis mais poderosos.

 🩸 Forma de Obtenção

A Marca não surge por acaso. Para despertá-la, é necessário cumprir três exigências fundamentais.

Primeiro, o caçador precisa atingir o nível 45 ou superior, representando que já possui um domínio avançado sobre sua respiração e técnicas de combate.

Além disso, é obrigatório realizar 30 treinos junto de alguém que possua a Marca. Esses treinos não são simples combates, mas sessões intensas de aprendizado, resistência, aprimoramento e superação física e mental, onde o corpo do caçador começa lentamente a se adaptar ao conceito da Marca.

Por fim, mesmo após cumprir esses requisitos, a Marca só se manifesta em uma situação de morte iminente 30% da vida total, quando o corpo é levado ao limite absoluto, com ferimentos extremos ou em um estado onde qualquer golpe a mais poderia significar o fim. Nesse instante, é possível realizar um teste de ativação: se bem-sucedido, a Marca se manifesta, trazendo consigo o poder e as consequências que carrega.

Sem cumprir esses três requisitos — nível, treino e situação de vida ou morte — a Marca não pode ser despertada de forma alguma.

_________________________________

 🌙 Marca de Nascença

Alguns indivíduos extremamente raros possuem a Marca desde o nascimento. Isso só é possível para membros de linhagens muito específicas, descendentes diretos de ancestrais que carregaram a Marca por gerações.

Os clãs Tsugikuni, Tsuki e Kamado possuem essa possibilidade rara. Aqueles que nascem com ela já possuem o estado de Marca de forma permanente desde a infância, sem necessidade de treinos, risco de morte ou qualquer outra condição.

Além disso, a Marca hereditária não traz efeitos colaterais. Esses indivíduos não sofrem com desgaste físico extremo, não envelhecem mais rápido e não estão sujeitos às falhas do corpo que outros portadores enfrentam.

_________________________________

 ⚡ Buffs e Evolução da Marca

Tsukis não podem evoluir sua marca.

Ao ser ativada pela primeira vez, a Marca concede um buff imediato de ×5 em Força, Agilidade e Percepção, além de ×2 em Resistência, permitindo que o corpo suporte a pressão intensa desse estado.

A cada combate subsequente onde a Marca é ativada, seu poder cresce, aumentando para ×6, depois ×7, até atingir ×8, ponto em que ela se torna permanente.

Após essa etapa, o usuário ainda pode evoluí-la através de treinos e domínio absoluto sobre seu próprio corpo e energia, chegando a ×9 e, no ápice da perfeição, ao limite máximo de ×10, onde a Marca manifesta seu potencial total.

Além dos aumentos de atributos, o portador ganha reflexos sobre-humanos, capazes de reagir e prever ataques em velocidades que seriam invisíveis para qualquer ser normal.

_________________________________

 ⚠ Consequências

Para aqueles que não nasceram com a Marca, seu uso vem com um preço alto. Enquanto não se torna permanente, o corpo sofre riscos severos: envelhecimento acelerado, 2 vezes mais rápido, e possibilidade de colapso físico, especialmente se a Marca for mantida além do limite do corpo.

Se a ativação for forçada sem controle adequado, pode resultar em morte por falência orgânica, onde o corpo simplesmente não suporta a pressão de operar em níveis tão além da capacidade humana.

Uma vez tornada permanente, os riscos de morte desaparecem, mas o envelhecimento acelerado permanece como cicatriz desse poder conquistado.`);
        break;





         // SISTEMA ONI
      case '!ficha.oni':
      await client.sendText(message.from, `
        ࣭࣭࣭࣭࣭ٜ ᷼ ࣭࣭࣭࣭ٜ፝֯֟͞ ᷼ ࣭࣭࣭ٜ       ࣭࣭࣭࣭ٜ࿚࣭࣭࣭ٜ፝֯֟࣪࣪࣪࣪۬᷼͡࿙࣭࣭࣭࣭ٜ֟֯፝࣪࣪࣪۬͡࿚࣭࣭࣭ٜ፝֯֟࣪࣪࣪࣪۬᷼͡࿙࣭࣭࣭࣭ٜ       ࣭࣭࣭ٜ ᷼ ࣭࣭࣭࣭ٜ֟֯፝͞ ᷼ ࣭࣭࣭࣭࣭ٜ
                    ࣭࣭࣭࣭࣭ٜٜ✾࣭࣭࣭࣭࣭ٜٜ݊১𐇽۫❟ᨳ໋̣۫✿ٜ〬⤹🎎⤸ٜ✿〫۫ᨳ໋̣𐇽❟۫১࣭࣭࣭࣭ٜٜ݊✾࣭࣭࣭࣭࣭ٜٜ
                   ғɪᴄʜᴀ ᴅᴇᴍᴏɴs-sʟᴀʏᴇʀ
                        ᵒⁿⁱ

   
  ━֟፝֯━━̸━━̷ ΝϴᎷᎬ: 
  ━֟፝֯━━̸━━̷ Ꮖᗞᗩᗞᗴ: 
  ━֟፝֯━━̸━━̷ 𝐺𝐸𝑁𝐸𝑅𝑂: 
  ━֟፝֯━━̸━━̷ ᎪᏙᎪͲᎪᎡ: ↓
xᴘ: 0
ᴘᴄ: 0
ɴɪ́ᴠᴇʟ: 0
¥: 0

  ━֟፝֯━━̸━━̷ ᏟᏞᎪ̃: 

  ━֟፝֯━━̸━━̷ 𝐑𝐀𝐍𝐊: cidadão

  ━֟፝֯━━̸━━̷ 𝐊𝐄𝐊𝐊𝐈𝐉𝐔𝐓𝐒𝐔: 

  ━֟፝֯━━̸━━̷ ҒϴᎡᎷᎪՏ:

 ━֟፝֯━━̸━━̷ ᎻᎪᏴᏆᏞᏆᎠᎪᎠᎬՏ:
 ␥ 
 ␥ 

 ━֟፝֯━━̸━━̷ ᎻᎪᏴ/ᏟᏞᎪ̃: 
 ␥
 ␥
 ␥
 ␥
 ␥l

━֟፝֯━━̸━━̷ ᎪͲᎡᏆᏴႮͲϴՏ: 500 para distribuir._

␥ Força: 
␥ Agilidade: 
␥ Kekkijutsu: 
␥ Resistência: 
␥ Percepção: 


  ━֟፝֯━━̸━━̷ ᎬϘႮᏆᏢᎪᎷᎬΝͲϴՏ: 
 ␥
 ␥ 
 ␥ 
 ␥
 ␥

   ━֟፝֯━━̸━━̷  ՏᎬΝͲᏆᎠϴ: 

   ━֟፝֯━━̸━━̷ ᎻᏆՏͲϴ́ᎡᏆᎪ:
`);
        break;
              case '!hab.oni':
      await client.sendText(message.from, `• 「👹」 • Habilidades Oni

──────────────────────

↳ Essas habilidades poderão ser utilizadas apenas por Onis

──────────────────────

• 「🍗」 • Controle de Fome

──────────────────────

↳ Tamayo e Yushiro são Onis que possuem tal habilidade, ela consiste em fazer com que não seja necessário matar humanos para se alimentar. Você consegue viver normalmente comendo coisas que humanos comem, mas sangue ainda faz parte de sua dieta, para se manter alimentado de verdade serão necessários ao menos 350 ml de sangue humano a cada 4 dias, caso não cumpra esse requisito você irá ficar totalmente insano, sedento por carne humana e atacara o primeiro que aparecer na sua frente.

──────────────────────

• 「💉」 • Reforço Sanguíneo

──────────────────────

↳ Uma habilidade mostrada por Rui, onde ele usa seu próprio sangue para reforçar e aumentar significativamente a potência de seu Kekkijutsu, o tornando mais poderoso e dando uma coloração cor de sangue. Usando essa habilidade, o seu Kekkijutsu ganha mais potência sendo 2x em força e em resistência e velocidade.
( Habilidade deve ser ativada, tendo que está na cena avisando que está "on". )

──────────────────────

• 「♨」 • Supressão de Insanidade

──────────────────────

↳ Uma capacidade demonstrada por Daki onde ela consegue suprimir e ocultar a necessidade de comer humanos. Diferente do controle de fome onde o portador necessita de pouco para saciar a fome, essa habilidade só a reprime, não a deixando de existir. Caso a fome seja suprimida por mais de 4 dias, o Oni simplesmente entra em estado de loucura e fica sujeito a praticar canibalismo, assim podendo acabar se alimentando de tanto humanos quanto outros Onis; para sair desse estado será necessário comer ao menos 3 humanos (ou Onis). Beber 2 litros de sangue humano também pode ajudar.

──────────────────────

• 「👤」 • Passividade Oculta

──────────────────────

↳ Esta habilidade se baseia no ato de se misturar na multidão, com ela ativada cria-se uma ilusão de que o Oni que a utiliza é humano, ocultando assim suas características demoníacas como seu cheiro respectivo e aparência (Essa habilidade não se aplica a humanos que tenham Percepção de Morcego e Percepção de Elefante). A passividade oculta tem seu efeito anulado caso o Oni apresente uma intenção assassina ou gestos hostis (com a intenção de ferir); outros Onis poderão ver sua forma original mesmo com a habilidade ativada, mas seu cheiro ficará um tanto estranho para eles.

──────────────────────

• 「⏱」 • Núcleo Apócrifo

──────────────────────

↳ Uma habilidade igualada ao ponto de conexão, porém esta consiste em ser feita em solo, você é o próprio núcleo. Ao fazer um corpo falsificado o verdadeiro estará na parte interna de seu coração, ou outro órgão interno (pulmão, rim, estômago, etc), isso faz com que seu corpo falso ao ser decapitado, não morra e siga combatendo. Para morrer é necessário que seu corpo original seja cortado no meio, tal tem o tamanho de um boneco. Pode ser identificado com o sentido apurado audição.

──────────────────────

• 「㊙」 • Absorção

──────────────────────

↳ Uma forma mais fácil de comer humanos e ainda sem deixar rastros. Cada humano leva cerca de 3 turnos para absorver, mas caso queira aproveitar melhor a absorção, esse tempo pode ser estendido até no máximo 5 turnos (além de tal, você pode absorver qualquer coisa para dentro de si).

Ao absorver uma pessoa após 3 turnos você ganha os Atributos dela para si.
E ao absorver após 5 você pode pegar uma habilidade dela para si (consultar o adm para saber se tal habilidade é permitida)
──────────────────────

• 「❤‍🩹」 • Regeneração Aprimorada

──────────────────────

↳ Sua regeneração é instantânea. Caso tenha um braço decepado poderá o recuperar no mesmo instante e assim por diante, também curando 50% de sua vida uma vez na batalha depois para ficar se curando durante a batalha a porcentagem diminui para 20%.
(Exclusivo para clas específicos ou kizukis)
──────────────────────

• 「🦴」 • Densidade Óssea

──────────────────────

↳ Seus ossos terão a resistência aumentada de um buff contínuo de 1.5x, fazendo com que uma Nichirin comum tenha a possibilidade de se quebrar caso seja para decepar algum membro seu, isso inclui a sua arte demoníaca por ser feita a partir de seu sangue e carne. Apenas slayers com formas superiores ao seus atributos poderão te decapitar, ou caso possuem Nichirins Shinobi, Nichirin Himejima, Nichirin Carmesim, Nichirin modificada ou ambidestria.

──────────────────────

• 「🧫」 • Fusão Celular

──────────────────────

↳ Usado para que você possa transformar um objeto em seu próprio corpo (ou parte dele) como, por exemplo, um trem. É possível criar lodos de carne e manipular o objeto escolhido como desejar, você pode escolher onde seu pescoço estará, mas deverá deixar em sua ação a localização do mesmo. Para se fundir com algum objeto leva um certo período de tempo, sendo: 

↳ Para se fundir totalmente com um objeto pequeno: 1 turno inteiro.

↳ Para se fundir totalmente com um objeto médio: 3 turnos inteiros.

↳ Para se fundir totalmente com um objeto grande: 4 turnos inteiros.

↳ Para se fundir totalmente com um objeto gigante: 6 turnos inteiros.

──────────────────────

• 「🧬」 • Mutação Celular

──────────────────────

↳ Poderá modificar suas células, assim conseguindo coisas como sua aparência ou resistência de uma forma mais aprofundada ( 1.5x de resistência temporária por uma batalha inteira caso use para reforçar.. ), ao seu desejo. Como deixar sua pele macia para evitar muito impacto, mudar tonalidade dos cabelos, resistência dos mesmos. Pode-se fazer os mesmo com ossos e outros.

─────────────────────
──────────────────────

• 「🦵」 • Mutação Corporal

──────────────────────

↳ Com a mutação corporal você pode modificar seu corpo ao necessário, como aumentar de tamanho, criar novos braços, também podendo aumentar sua resistência, outros tipos de mutação externa.
( 1.5x de bônus  temporariamente por uma batalha inteira caso use para reforçar algum Atributo. )


──────────────────────

• 「💢」 • Vontade Indomável

──────────────────────

↳ Ao ter seu pescoço decapitado, você pode o reconectar novamente por vontade própria, a fim de ser imune a decapitação, porém o processo é limitado. Caso seja decapitado mais de 3 vezes no mesmo combate, o processo de imunidade irá falhar e você morrerá. A vontade indomável também servirá como um tipo de coragem implacável. Em todo caso, para ativar essa habilidade preciso fazer uma ação de 400 caracteres explicando o porquê dela.

──────────────────────

• 「🩸」 • Solidificação Sanguínea

──────────────────────

↳ Com essa habilidade, caso um de seus membros principais (braços, pernas, torso, pescoço) sejam decepados, seu sangue irá endurecer e se solidificar, assim irá reconectar seus membros antes que caiam no chão e, caso caiam, será possível criar fios de sangue até o membro caído e puxar de volta, o reconectando, podendo fazer isso 3 vezes por membro.
( Caso os fios que vão juntar seu pescoço forem cortados você morre. )

──────────────────────

• 「➰」 • Suporte Dominante

──────────────────────

↳ Quando o portador dessa habilidade tem um membro cortado ( Menos pescoço. ) ou parte do tórax, da ferida aberta sai três tentáculos de sangue que em grande velocidade se envolvem na nichirin/algo que fez o ataque, exatamente no momento da efetuação do corte, em seguida endurecem, deixando a tal arma/algo presa(o), com a possibilidade de ser esmagada/quebrada.
Para tal acontecimento, o alvo terá que se passar 2 turnos preso e o usuário ter a força a cima da resistência do inimigo/nichirin, a resistência dos tentáculos são de 2x e a velocidade de 2x, o tentáculo impede qualquer movimento para os lados, assim obrigando o alvo a puxar na base da força o membro ou nichirin.

──────────────────────

• 「🔱」 • Exuberância de Tridente

──────────────────────

↳ Usuário dessa habilidade obtém uma capacidade superior em batalha, tendo uma força e uma resistência contida em seu corpo.
Uma força elevada em suas garras e presas, tendo um ataque cortante de 2x.
Também contendo uma resistência superior em sua pele, sendo imune a cortes de lâminas em 3 turnos por batalha ( Deve ser ativada. )


──────────────────────

• 「🪨」 • Duro como Rocha

──────────────────────

↳ Usuário cria uma camada extra que se une a sua pele, obtendo uma capacidade de resistência aprimorada, capaz de resistir a ataques poderosos, essa habilidade gera um buff passivo no atributo de resistência, sendo 1.5x.
Além do buff, o usuário terá uma vantagem em batalha, para que seus membros sejam decapitados, serão necessários dois cortes no mesmo local do corpo, assim recebendo apenas 20% do dano do primeiro ataque.

──────────────────────

•「🩸」• Sangue Venenoso

──────────────────────

O sangue do oni carrega em si uma maldição natural. Ao ser exposto ao ar ou entrar em contato com carne humana, transforma-se em um veneno silencioso que invade o corpo do inimigo, enfraquecendo seus músculos e perturbando seus sentidos. Basta um arranhão, um respingo, uma gota — e a decadência começa. É um aviso cruel de que até o sangue de um demônio é uma arma.

Buff:causa 500.000 de dano no hp por cena é deixa o oponente enfraquecido tendo a chance de errar ataques, caso seja kizuki inferior irá dar 1.000.000 é caso superior 1.500.000

Obs:hashiras não erram ataques

──────────────────────

•「⛓」• Pescoço de Ferro

──────────────────────

A cabeça é o ponto fraco de qualquer oni, mas nem todos se curvam a essa fraqueza. Com essa técnica, o pescoço se reforça com camadas densas de carne demoníaca e fibras endurecidas, tornando-se quase impossível de cortar. São necessários pelo menos quatro golpes certeiros para sequer alcançar o osso. Um verdadeiro desafio para qualquer caçador que mire seu colar de lâminas.

Buff:ignora 4 vezes o ataque direto no pescoço, após concluir as 4 defesas você não poderá mais se defender com está habilidade

──────────────────────
 
•「⚔」• Garras Profanas

──────────────────────

As mãos do oni são moldadas em armas naturais. Suas garras crescem, se afiam e adquirem dureza comparável ao aço. Cortes se tornam profundos, escudos se partem, e carne viva se rasga com facilidade. São mais do que ferramentas de destruição — são extensões de sua malícia pura.

Buff: 1,5x passivos + 2x de ataque

──────────────────────

•「🩸」• Sangue Aprimorado

──────────────────────

Com o avanço de seu poder, o sangue do oni se enriquece em energia demoníaca, potencializando suas técnicas de combate. Mesmo as primeiras formas de seus kenkijutsus se tornam devastadoras, como se estivesse sempre em seu auge. Sua força flui no ritmo do sangue, e cada técnica carrega mais impacto e precisão.

buff:3x de ataque

──────────────────────

•「🦠」• Adrenalina Demoníaca

──────────────────────

Em meio à batalha, a dor se torna irrelevante. A adrenalina infernal percorre o corpo do oni, anulando o sofrimento, mesmo que esteja mutilado ou queimado. Ele continua lutando como se intacto estivesse, como se o corpo ignorasse a lógica e obedecesse apenas à vontade. Um instinto cego de combate, movido apenas por ódio e fome.

buff: 3x resistência passiva
──────────────────────`);
        break;
      case '!evolução.oni':
      await client.sendText(message.from, `📈 SISTEMA DE EVOLUÇÃO DEMONÍACA (ALIMENTAÇÃO) 📈

🩸 [ ALIMENTAÇÃO E CRESCIMENTO DO KEKKIJUTSU] 🩸

Para evoluir seus Kekkijutsus, o Oni deve consumir sangue humano de forma constante e consciente. A evolução é dividida em duas etapas:

1. Caçada:

> O Oni precisa caçar humanos (NPCs ou jogadores, conforme a aprovação do ADM). Cada vítima , podendo ser 10 por cena, deve ser descrita em um texto com no mínimo 300 palavras, demonstrando a captura e o consumo, caso queira tentar achar um marechi use o comando /Chance.
Cada humano consumido concede uma quantidade de Quantidade de Sangue (QS), que acumulam e permitem a evolução.(O ADM determina qual a quantidade de sangue é ganho e o requerido pra evoluir seu kekkijutsu)


2. Evolução Demoníaca:



> Após acumular uma determinada quantidade de Quantidade de Sangue, o Oni poderá desbloquear evoluções de forma ampliada como mutações demoníacas (como chifres, olhos extras, pele endurecida, etc.)ou até chegando a um novo nível, outro requisito nescessário pra evoluir pra um novo tipo de oni e não só subindo de nível como anteriormente.
Para evoluir, o jogador deve enviar um texto de 300 palavras descrevendo a evolução a qual ocorrerá em si mesmo, sendo dada pelo ADM.
🧬 [ TABELA DE PONTOS DE SANGUE - EVOLUÇÃO ] 🧬
(Valores podem ser ajustados pelo ADM com base na qualidade das caçadas)

Nível de Evolução	 Quantidade de Sangue (QS) Necessários	Benefício Liberado

Oni comum: já começa 

Oni Incomum:5 QS	+1 nova habilidade menor ou aumento de atributos permanente 

Oni mutante: 35 QS	Mutação física (ex: garras, chifres),× 1,5 em um atributo

Oni completo: 50 QS	Sangue de muzan (Atributos ×1,5)

Lua inferior: 100 QS	Forma Alternativa, nível de lua inferior (tendo que derrotar uma para entrar no rank) 
(Transformação única, tendo o sangue de muzan com 2× nos atributos )

Lua superior:500 PS	Nível de um lua superior (3× nos atributos)


🧠 [ REGRAS DE CONSUMO ] 🧠

Humanos comuns (NPC): 0.5 PS(ou seja o consumo de 10 humanos comuns é de no máximo 5)

Caçadores de baixo nível:  1 Qs(tendo um maior risco em combate e podendo ter uma chance de se ter na cena)

Caçadores experientes:5 QS (Só em narrações ou no nível de 25 em Qs)

Tsugokos: 10 QS (só em narrações afinal são aprendizes de hashira)

Hashira: 25 QS 

Sangue marechi: 50 QS(Uma chance muito rara, caso aconteça  um oni normal pode subir até o nível de um inferior rapidamente)

Outro Oni (caso absorvido): variável


☠ [ CONDIÇÕES ESPECIAIS ] ☠
Se um Oni consumir sangue de um usuário de um clã raro (como Kamado, Shinazugawa, Kibutsuji, etc.), poderá desbloquear efeitos colaterais únicos (à escolha do ADM).

Clãs raros: 
Kamado
Shinazugawa 
Tokito`);
        break;
      case '!missão.oni':
      await client.sendText(message.from, `SISTEMA DE MISSÕES DIÁRIAS

Como funciona:

> Todo Semana você poderá fazer até 5 missões.
> As missões são baseadas no seu nível, cada missão precisa de pelo menos 300 palavras para serem válidas., e só estão disponíveis após ser reconhecido como útil..
> Você pode acumular missões em uma única narração, mas precisa ter o 1,3× do nível mínimo da missão mais difícil da sequência (também aumenta o número necessário de palavras.).

MISSÕES DISPONÍVEIS

-----------------
Derrote 1 Slayer Mizunoto
Nível mínimo: 15

RECOMPENSAS:
300XP - 300PC
1 - Nichirin quebrada
-----------------

Invada uma vila (mínimo 3 derrotados)
Nível mínimo: 20

RECOMPENSAS:
400XP - 1 PE - 350PC
3 - Nichirin quebradas
-----------------

Derrote o Slayer Mizunoe em área montanhosa
Nível mínimo: 25

RECOMPENSAS:
600XP - 5 PE - 400PC
1 - empunhadura quebrada
-----------------

Neutralize dois Slayers Mizunoe em missão noturna
Nível mínimo: 27

RECOMPENSAS:
800XP - 8 PE - 500PC
2 - Máscara Quebrada
-----------------

Derrote um Slayer Kanoe solitário em floresta escura
Nível mínimo: 35

RECOMPENSAS:
1000XP - 20 PE - 700PC
1 - Lâmina de Nichirin
-----------------

mate os Slayers que tentarem salvar os reféns em um vilarejo
Nível mínimo: 36

RECOMPENSAS:
1200XP - 1 PE - 750PC
3 - empunhadura
-----------------


Elimine 3 Slayers Tsuchinoto em área urbana abandonada
Nível mínimo: 38

RECOMPENSAS:
1500XP - 10 PE - 800PC
1 - Fragmento de Máscara
-----------------


Elimine 2 Slayer Hinoto que invadiu sua área
Nível mínimo: 40

RECOMPENSAS:
1800XP - 20 PE - 900PC
1 - Coração de Slayer
-----------------


Elimine 3 Slayer Hinoto na área do lírio azul
Nível mínimo: 43

RECOMPENSAS:
2000XP - 25 PE - 1000PC
1 - Pó de lírio azul
-----------------

Sobreviva ao Slayer Tsuguko (respiração sorteada)
Nível mínimo: 45

RECOMPENSAS:
2500XP - 35 PE - 1200PC
1 - Haori completo
-----------------


derrote 1 Slayer Tsuguko (respiração sorteada)
Nível mínimo: 50

RECOMPENSAS:
3000XP - 40 PE - 1500PC
1 - Haori completo
-----------------`);
        break;
      case '!loja.oni':
      await client.sendText(message.from, `🛒 𝗟𝗢𝗝𝗔 𝗗𝗢 𝗢𝗡𝗜 – "𝗚𝗨𝗘𝗜𝗦𝗔 𝗦𝗔𝗡𝗚𝗥𝗘𝗡𝗧𝗔"

> Uma casa discreta no submundo de um distrito do entretenimento. O cheiro de carne fresca e sangue paira no ar. Aqui, Onis vêm se abastecer para manterem sua fome sob controle… ou liberar sua verdadeira fúria.


🍖 Carnes Demoníacas 

• Coração Humano Fresco — 300 pts

> Sabor intenso, +1 de fome.

• Músculo Trincado de Guerreiro — 600 pts

> Rico em sangue e adrenalina, ideal antes de combates longos, diminuindo o gasto de fome pela metade por 3 turnos.
> Ao comer de novo seu sangue pode colapsar.

• Carne Envenenada — 200 pts

> Recupera 1 de fome, mas causa confusão se usada em excesso.


💉 Drogas Demoníacas
Uso único em batalha.

• Soro de Regeneração Forçada — 800 pts

> Acelera cura por 3 turnos. (uso limitado)

• Tinta de Sangue Concentrada — 1200 pts

> Potencializa o Kekkijutsu por 1 turno (x2 de dano base).
> Causa fadiga no uso seguinte.

• Essência de Oni Superior — 3000 pts

> Transforma por 1 cena o corpo do usuário, dando ×2 dado em força e velocidade. (restrito a Onis experientes)`);
        break;


        // CLÃS SLAYER
        case '!simo':
      await client.sendText(message.from, `•「🎯」• Clã Simo

•「🎯」• Mira Implacável
O usuário possui uma precisão quase sobrenatural, conseguindo acertar pontos vitais com facilidade.

Buff ×2 de percepção e ×1,5 de agilidade passivo

_______________________________________

•「❄」• Paciência do Caçador
A calma absoluta permite que o usuário espere o momento perfeito para disparar, aumentando a chance de acerto crítico e dano.

Ganha ×2 em força e agilidade, e ×3 em percepção enquanto tiver no modo
_______________________________________

•「🕵‍♂」• Passos Silenciosos
O usuário se move com extrema furtividade, sendo praticamente indetectável. 

Buff de ×2 de agilidade e percepção enquanto estiver furtivo.
_______________________________________

•「🌫」• Ocultamento de Presença
Como a névoa da madrugada, aquele que domina essa técnica desaparece aos olhos comuns. Seu corpo, seus sons, sua respiração e até seus instintos se apagam temporariamente, tornando-se um espectro vagante entre as sombras. Apenas os mais sensitivos poderão senti-lo, mas nunca vê-lo. Porém, assim que atacar, sua presença se revelará novamente — como uma faca saindo da bainha silenciosamente.

Oculta totalmente sua presença, tornasse invisível a olho nu, sendo percebido apenas por habilidades que envolva sentidos (menos visão), ativa até que o usuário ataque ou fale ou seja atacado.

___________________________________


•「✝」• Coragem de Espírito
A mente que domina seus impulsos, oculta suas emoções e camufla suas intenções torna-se uma fortaleza impenetrável. O usuário desta técnica é um enigma vivo; cada movimento é imprevisível, cada decisão é um mistério. A leitura de sua alma é vedada, como se estivesse coberta por véus espirituais. Não importa o quanto o oponente tente decifrá-lo — será sempre como olhar para um abismo sem fundo.


Tornasse impossível de ser lido, escondendo suas ações.
___________________________________`);
        break;

      case '!uzui':
      await client.sendText(message.from, `•「🎭」• Clã Uzui

Possível criar a respiração do som ao conseguir o segundo slot sem precisar de roll.

•「🎉」• Deus festeiro.
» Seu corpo nunca para, seus músculos, circulação e batimentos sempre estão no seu máximo, seu corpo sempre parece estar no auge.

Buff de ×1,5 de força e ×2 Agilidade passivo

_______________________________________

•「🔈」• evolução sonora
» Quanto mais você luta, mais forte fica, sendo capaz de desviar e contra atacar como se fosse brincadeira.

Buff: gasto de 5 de energia para ativar, de 1 a 3 turnos, buff ×1,5, 3 a 5 turnos, buff ×2, 7 turnos pra cima buff de ×3,5.

_______________________________________

•「🪇」•frenesi festeiro
» Em quase  morte, os membros desse clã ativam seu último rescuso, podendo atacar como se estivessem 100% sem gasto de energia e sem perda de vida, porém após, o usuário não conseguirá se mover por 3 turnos.

Buff: ×3 em tudo, por 5 turnos.

_______________________________________

•「☢」• Resistência a Veneno
Entre os caçadores, poucos sobrevivem a toxinas mortais sem algum tipo de preparo. Essa habilidade permite ao usuário suportar o envenenamento com resistência além da carne, retardando seus efeitos por até cinco turnos. Durante esse tempo, o corpo se fortalece contra o avanço da dor e da paralisia, ganhando segundos preciosos que podem decidir entre a morte silenciosa ou a vitória amarga.

_______________________________________

•「🫲🫱」• Ambidestria
A rara capacidade de usar ambas as mãos (ou pés) com a mesma destreza. Em batalha, isso permite empunhar duas armas, alternar golpes e confundir inimigos. Para alguns, é um dom natural; para outros, resultado de anos de treino duro. Mas sempre uma vantagem letal para quem domina o combate corpo a corpo.

_________________________________________`);
        break;

      case 'iguro':
      await client.sendText(message.from, `•「🐍」• Clã Iguro

Possui a capacidade de criar a respiração da cobra sem o 2 slot e sorteio.

•「🐍」• Víbora Oculta
O usuário canaliza a essência de uma víbora, adquirindo agilidade e furtividade excepcionais, podendo surpreender inimigos desprevenidos.


Buff de 1,5 Agilidade e percepção passivo
_______________________________________

•「🦎」• Pele Reptiliana
A pele do usuário se torna escamosa e resistente, conferindo maior proteção contra cortes e impactos.

Buff de ×1,5 de força e ×2 de resistência passivo

_______________________________________

•「🕷」• Veneno Paralítico
_O usuário pode inocular um veneno paralisante nos inimigos com seus ataques físicos ou armas.

diminui a velocidade do oponente em 30% por 2 turnos, reseta caso for acertado novamente.
_______________________________________

•「⚡」• impacto Acertivo
Um ataque direcionado ao ponto vital do inimigo. Baseado em leitura e estratégia, esse golpe visa ser letal com um só movimento. Porém, sua eficácia depende do comportamento do inimigo e da frieza do Slayer. Não é força bruta — é intenção mortal e controle absoluto do instante.

*buff: 2x percepção 3x agilidade é força, pode ser ultizado apenas 3 vezes em combate

_________________________________________

•「🤸‍♂」• Flexibilidade
Desenvolvida por caçadores capazes de contorcer seus corpos como serpentes, essa técnica permite atravessar passagens estreitas, torcer membros em ângulos impossíveis e escapar de presas mortais. A flexibilidade se tornou uma arma furtiva e inesperada nas mãos de Slayers criados na arte do improviso corporal.

buff: 2x agilidade passivo
_________________________________________`);
        break;

      case '!himejima':
      await client.sendText(message.from, `•「🪨」• Clã Himejima

•「💪」• Força Divina
» A musculatura sobrenatural dos membros deste clã concede uma vantagem constante em combate.

Buff ×3 de força passivo

_______________________________________

•「👁」• Cegueira Iluminada
» A cegueira é uma maldição convertida em bênção. O usuário é completamente imune a ilusões visuais e técnicas baseadas em engano visual. Em troca, todos os outros sentidos são aguçados.

Podendo escolher mais 1 além da audição

_______________________________________

•「🫀」• escuta Cardíaca
» O coração do inimigo é como um tambor em meio ao silêncio. O usuário pode escutar as batidas e alterações no ritmo cardíaco dos oponentes, prevendo intenções hostis e ataques surpresa.

Buff de ×3 de percepção passivo.

Imune a ataques surpresas ou emboscadas, seja ela preparadas ou o próprio oponente.

_______________________________________

•「💪」• Densidade Muscular
A Densidade Muscular em combate corpo a corpo pode ser considerada uma técnica contra onis entre linhas de frente frenéticas e decisões de risco de morte. Ela varia conforme a adrenalina do corpo, reforçando temporariamente a musculatura, dando mais potência e exigindo menos esforço físico. Um poder bruto, ativado pela urgência da sobrevivência.

Buff: 6x resistência +3x ataque, ativos apenas em batalha


_________________________________________

• 「🧠」• Controle Muscular
Técnica refinada e decisiva em combates importantes, o Controle Muscular permite ao Slayer manipular seus músculos para ignorar ferimentos, suportar pesos extremos ou resistir à dor. Porém, após o uso, vem um forte desgaste, como se carregasse correntes pesadas. É uma habilidade que exige treino rigoroso e sangue frio.

buff:5x resistência passiva é defesa, ativa apenas em batalha

_________________________________________`);
        break;        

      case '!ubuyashiki':
      await client.sendText(message.from, `•「🕯」• Clã Ubuyashiki

ganho de 20% a mais de XP

•「🧠」• Intuição Precisa
» A sabedoria acumulada gera um sexto sentido estratégico. O usuário prevê a intenção do inimigo no turno seguinte, anulando uma ação ofensiva.

Tempo de 1 turno
_______________________________________

•「📿」• Comando Espiritual
» Uma presença tão firme que inspira aliados ao redor. Durante 3 turnos, todos os aliados ganham ×4 em todos os atributos, mesmo em estado crítico.

_______________________________________

•「🪔」• Sacrifício Sereno
» Em momentos de maior tensão, o usuário pode converter parte de sua vida restante para proteger um aliado, recebendo o dano no lugar. Se isso for feito, o próximo ataque do aliado causará o dobro de dano.

_______________________________________

•「✝」• Coragem de Espírito
A mente que domina seus impulsos, oculta suas emoções e camufla suas intenções torna-se uma fortaleza impenetrável. O usuário desta técnica é um enigma vivo; cada movimento é imprevisível, cada decisão é um mistério. A leitura de sua alma é vedada, como se estivesse coberta por véus espirituais. Não importa o quanto o oponente tente decifrá-lo — será sempre como olhar para um abismo sem fundo.


Tornasse impossível de ser lido, escondendo suas ações.

___________________________________

•「💫」• Coragem Implacável
Em meio ao terror e à pressão do desconhecido, aquele que carrega a Coragem Implacável se ergue sem hesitação. Nenhuma ameaça, intimidação ou presença sombria é capaz de abalar sua postura ou quebrar seu ímpeto. O coração permanece firme, os olhos fixos no inimigo, e a mente afiada como uma lâmina. Essa coragem transcende o medo natural, criando brechas na moral do oponente e abrindo caminho para contra-ataques estratégicos.

Fica imune a induções de medo, e ganha um buff de ×1,5 de força ao ser intimidado.

___________________________________`);
        break;

      case '!kocho':
      await client.sendText(message.from, `•「🦋」• Clã Kocho

Pode criar a respiração dos insetos

•「🧪」• Toxina Letal
O usuário é mestre na aplicação de venenos. Seus golpes corpo a corpo ou com lâmina aplicam toxinas.

Todo ataque aplica envenenamento, que reduz 30% da força do Oni
_______________________________________

•「🦋」• Dança Fluida
Seus movimentos são graciosos e imprevisíveis, como o bater de asas de uma borboleta.

Buff ×2 agilidade passivo

_______________________________________

•「🩹」• Precisão Anatômica
O usuário conhece pontos vitais do corpo humano e demoníaco. Quando acerta um golpe crítico, pode anular habilidades regenerativas.

Seus ataques podem desativar uma parte do corpo do oni ou parar sua regeneração no local, a menos que ele corte fora.
_______________________________________

•「☢」• Resistência a Veneno
Entre os caçadores, poucos sobrevivem a toxinas mortais sem algum tipo de preparo. Essa habilidade permite ao usuário suportar o envenenamento com resistência além da carne, retardando seus efeitos por até cinco turnos. Durante esse tempo, o corpo se fortalece contra o avanço da dor e da paralisia, ganhando segundos preciosos que podem decidir entre a morte silenciosa ou a vitória amarga.

humanos: tornasse imune ao sangue venenoso dos onis.

onis: Não morre rapidamente com o veneno de glicínia, porém para se curar totalmente precisa canaliza toda sua resistência em 1 só ponto por 3 turnos.

_________________________________________

•「💨」• Respiração de Cura
Diferente das outras técnicas respiratórias, essa se foca na recuperação de ferimentos internos. Ela atua em hemorragias, lesões ocultas e danos profundos. Pode ser usada até três vezes por batalha. Não é uma cura total, mas é o suficiente para manter o Slayer de pé por mais um round.

Buff:o usuário regenera 5.000.000 de hp, pode ser ultizado apenas 3 vezes em batalha

_________________________________________`);
        break;

      case '!hashibira':
      await client.sendText(message.from, `•「🐗」• Clã Hashibira 

Possível criar a respiração da besta ao conseguir o segundo slot de respiração sem precisar de roll.

•「🐾」• Instinto Bestial
O usuário luta guiado por sentidos primitivos. Em combate, ele pode prever movimentos hostis com base no instinto puro.

Buff ×2 Percepção e ×1,5 Agilidade.
_______________________________________

•「💥」• Rajada de Impacto
Uma técnica explosiva de combate corpo a corpo onde o usuário canaliza toda a sua força em múltiplos ataques seguidos.

Sequência de 4 ataques totalmente imprevisíveis.

Buffs: 1ª soco ×1,5 - 2ª soco ×2 -  3ª soco ×2,5 - 4ª soco ×3, força e agilidade.

_______________________________________

•「🦴」• Flexão Animal
O corpo do usuário é tão adaptável quanto o de um predador selvagem. Ele pode deslocar membros para escapar de golpes, atravessar brechas ou atacar de ângulos impossíveis..

Consegue deslocar seu braço e conseguir aumentar seu alcance em 2 metros, sendo imune a imobilização, ao esticar, receberá um buff de ×1,5 de velocidade e força, porém perde 3% da vida.
_________________________________________

•「🤸‍♂」• Flexibilidade
Desenvolvida por caçadores capazes de contorcer seus corpos como serpentes, essa técnica permite atravessar passagens estreitas, torcer membros em ângulos impossíveis e escapar de presas mortais. A flexibilidade se tornou uma arma furtiva e inesperada nas mãos de Slayers criados na arte do improviso corporal.

buff: 2x agilidade passivo
_________________________________________


•「🫲🫱」• Ambidestria
A rara capacidade de usar ambas as mãos (ou pés) com a mesma destreza. Em batalha, isso permite empunhar duas armas, alternar golpes e confundir inimigos. Para alguns, é um dom natural; para outros, resultado de anos de treino duro. Mas sempre uma vantagem letal para quem domina o combate corpo a corpo.

buff:o usuário ganha 1,5x em força passiva assim que equipa a arma
_________________________________________`);
        break;

      case '!shinazugawa.oni':
      await client.sendText(message.from, `•「🧪」• Clã Shinazugawa (Versão Devorador de Onis)

•「🧪」• Devorador de Maldição
O usuário pode consumir a carne de onis para aumentar sua própria força. Ao devorar partes de um inimigo demoníaco, ele ganha ×5 em força e resistência e seu kekkijutsu por 3 turnos. Efeitos aumentam se for carne de um oni superior.

Caso for de um oni superior, dará um buff de ×7

Depois dos 3 turnos poderá comer novamente, limite de 5 vezes por combate, caso coma novamente, rolará um roll de Hybrido.
_______________________________________

•「🧬」• Mutação Predatória
O corpo do usuário sofre alterações temporárias após devorar um oni, gerando garras ou dentes mais potentes.

Durante a traformação o usuário ganha ×2 força e agilidade, em ataques corpo a corpo
_______________________________________

•「🦴」• Fome Sanguinária
Quando a sede por carne toma conta, o usuário entra em estado de frenesi: ganha ×2 em agilidade e ×1,5 em percepção por 1 turno. Após isso, sofre uma penalidade de ×0,8 em respiração, exigindo descanso ou alimentação novamente.

Caso não coma um oni 3 turnos dois de desativar a habilidade "Devorador de Maldição"
_______________________________________

•「🥊」• Combate Corpo a Corpo
Através de treinos extremos e contato direto com criaturas demoníacas, o Slayer desenvolve golpes capazes de ferir onis mesmo sem o uso de lâminas. Seus socos, chutes e agarrões carregam uma força brutal, multiplicando o impacto por ×3 contra demônios. Ideal para os que lutam com o próprio corpo como arma.

buff: 3x quando enfrentar o oni corpo a corpo

_________________________________________

•「🐺」• Presença Aterrorizante
Existe algo de primal e inquietante na presença daquele que carrega essa marca. Assim que põe os pés no campo de batalha, um silêncio estranho se espalha. Os corações dos inimigos batem descompassados, suas mãos tremem, seus reflexos diminuem. O medo, muitas vezes invisível, se manifesta na forma de um fardo insuportável, reduzindo a força e a velocidade de seus adversários. Uma aura selvagem e dominante, como a de um predador noturno.


Reduz 30% da velocidade do inimigo a causar medo.

___________________________________`);
        break;        

      case '!shinazugawa.slayer':
      await client.sendText(message.from, `•「🩸」• Clã Shinazugawa (Versão Marechi – Sangue Raro) 

•「🩸」• Sangue Proibido
O sangue raro do usuário emana um cheiro que enfraquece onis ao seu redor.

Enquanto exposto, onis sofrem um redutor de 40% na percepção e 30% na resistência durante 3 turnos.

_______________________________________

•「🗡」• Carnificina Pura
_O usuário entra em um estado de fúria absoluta, atacando sem hesitar. 

buff de ×2 de força e ×1,5 Agilidade por 3 turnos, após perde 25% da sua percepção por 2 turnos.
_______________________________________

•「🔥」• Raiva Controlada
Através de treinamento brutal, o usuário consegue canalizar sua fúria em combate preciso.

Buff de ×1,5 De força e agilidade passivo 
_______________________________________

•「🐺」• Presença Aterrorizante
Existe algo de primal e inquietante na presença daquele que carrega essa marca. Assim que põe os pés no campo de batalha, um silêncio estranho se espalha. Os corações dos inimigos batem descompassados, suas mãos tremem, seus reflexos diminuem. O medo, muitas vezes invisível, se manifesta na forma de um fardo insuportável, reduzindo a força e a velocidade de seus adversários. Uma aura selvagem e dominante, como a de um predador noturno.


Reduz 30% da velocidade do inimigo a causar medo.
___________________________________

•「💫」• Coragem Implacável
Em meio ao terror e à pressão do desconhecido, aquele que carrega a Coragem Implacável se ergue sem hesitação.  Nenhuma ameaça, intimidação ou presença sombria é capaz de abalar sua postura ou quebrar seu ímpeto. O coração permanece firme, os olhos fixos no inimigo, e a mente afiada como uma lâmina. Essa coragem transcende o medo natural, criando brechas na moral do oponente e abrindo caminho para contra-ataques estratégicos.

Fica imune a induções de medo, e ganha um buff de ×1,5 de força ao ser intimidado.

___________________________________`);
        break;

      case '!agatsuma':
      await client.sendText(message.from, `•「⚡」• Clã Agatsuma

Possível aprender a 7° forma da respiração do trovão.

•「⚡」• Filho do trovão

» Os membros do clã agatsuma, tem uma força extraordinária em suas pernas, podendo soltar impulsos e correr por horas no máximo da sua velocidade sem se cansar, como se fosse um teleporte.

Buff ×2 de Agilidade passivo

2 esquivas impulsivas por batalha, enquanto esquiva ficará parcialmente invisível, como se fosse um teleporte.
_______________________________________

•「😴」• Luta inconsciente

» O Usuário após passar por um momento de extremo medo, ou desmaio, despertará seu verdadeiro poder, lutando desacordado se guiando apenas pelo seu extinto, e vontade de matar, podendo ser usado 1 vez por batalha.

Buff ×2 de Força ×3 Agilidade, ×3 Percepção, duração de 6 turnos, após os 6 turnos o usuário cairá onde está por 1 turno.


_______________________________________

•「💥」• Eco do Relâmpago.

» Seu corpo reage antes mesmo da sua mente processar. Quando percebe o menor sinal de ameaça, seu reflexo corta o ar como um raio, desviando ou contra-atacando instantaneamente.

» pode ser usado até 3 vezes por batalha, acerto garantido após o uso.

___________________________________

•「🤼‍♂」• Adaptação ao Combate
A luta é um diálogo entre corpos. O usuário desta técnica observa atentamente cada passo, cada impulso, cada hesitação de seu oponente. Após três turnos de análise, seu corpo assimila os padrões e copia a velocidade do inimigo, igualando os atributos de movimento. Não se trata de imitação — mas de evolução em tempo real, transformando a observação em armas e a paciência em vantagem._


Após ver 3 cenas do seu adversário, copia seus atributos em agilidade.
____________________________________

•「⚡」• impacto Acertivo
Um ataque direcionado ao ponto vital do inimigo. Baseado em leitura e estratégia, esse golpe visa ser letal com um só movimento. Porém, sua eficácia depende do comportamento do inimigo e da frieza do Slayer. Não é força bruta — é intenção mortal e controle absoluto do instante.

buff: 2x percepção 3x agilidade é força, pode ser ultizado apenas 3 vezes em combate`);
        break;

      case '!rengoku':
      await client.sendText(message.from, `•「🔥」• Clã Rengoku

Possível aprender a 9° forma da respiração das chamas

•「🔥」• Chama Indomável
» A chama ardente que queima dentro do usuário nunca se apaga, tornando seus membros fortes e imparáveis.

Buff ×2 de força e resistência
_______________________________________

•「🌋」• Explosão de Paixão
» Quando a emoção alcança seu ápice, o usuário desencadeia uma explosão que torna seus movimentos imprevisíveis e letais como um chama.

Buff ×2 de força e agilidade o resto da batalha
Ativa quando a batalha começa a fica cada vez mais intensa
_______________________________________

•「🛡」• Escudo de Brasas
» Seus membros são totalmente resistente a dores extremas, podendo suportar golpes sem sofrer muito danos.

Apenas danos de corte de afeta, danos de impacto não faz efeito em você apenas o dano.

Buff de ×3 de resistência por 3 turnos.

_______________________________________

•「💫」• Coragem Implacável
Em meio ao terror e à pressão do desconhecido, aquele que carrega a Coragem Implacável se ergue sem hesitação. Nenhuma ameaça, intimidação ou presença sombria é capaz de abalar sua postura ou quebrar seu ímpeto. O coração permanece firme, os olhos fixos no inimigo, e a mente afiada como uma lâmina. Essa coragem transcende o medo natural, criando brechas na moral do oponente e abrindo caminho para contra-ataques estratégicos.

Fica imune a induções de medo, e ganha um buff de ×1,5 de força ao ser intimidado.

___________________________________

•「💪」• Densidade Muscular
A Densidade Muscular em combate corpo a corpo pode ser considerada uma técnica contra onis entre linhas de frente frenéticas e decisões de risco de morte. Ela varia conforme a adrenalina do corpo, reforçando temporariamente a musculatura, dando mais potência e exigindo menos esforço físico. Um poder bruto, ativado pela urgência da sobrevivência.

Buff: 6x resistência +3x ataque, ativos apenas em batalha

_________________________________________`);
        break;

      case '!tomioka':
      await client.sendText(message.from, `•「🌊」• Clã Tomioka

Capaz de aprender a 11° forma de respiração da água.

•「🌊」• Corrente Tranquila
A calma profunda do usuário o torna inabalável mesmo sobre perigo extremo.

Buff ×2 de percepção e × 1,5 velocidade

_________________________________________

•「💧」• Fluxo Preciso
_» os golpe do usuário, se tornam limpo e calmo, sendo impossível de perceber a intenção dos mesmo, tornando seus ataques imprevisível por 3 turnos.

Buff ×1,5 força e agilidade.
_________________________________________

•「🌫💧」• Silêncio Afiado
Uma técnica furtiva e cortante, que transforma o usuário em um predador silencioso. No turno de ativação, seu primeiro ataque ignora defesa e pode atingir diretamente o ponto vital do inimigo, com um bônus de ×2  força e agilidade.

_________________________________________

•「🤼‍♂」• Adaptação ao Combate
A luta é um diálogo entre corpos. O usuário desta técnica observa atentamente cada passo, cada impulso, cada hesitação de seu oponente. Após três turnos de análise, seu corpo assimila os padrões e copia a velocidade do inimigo, igualando os atributos de movimento. Não se trata de imitação — mas de evolução em tempo real, transformando a observação em armas e a paciência em vantagem.


Após ver 3 cenas do seu adversário, copiara seus atributos em agilidade.
___________________________________

•「🐺」• Presença Aterrorizante
Existe algo de primal e inquietante na presença daquele que carrega essa marca. Assim que põe os pés no campo de batalha, um silêncio estranho se espalha. Os corações dos inimigos batem descompassados, suas mãos tremem, seus reflexos diminuem. O medo, muitas vezes invisível, se manifesta na forma de um fardo insuportável, reduzindo a força e a velocidade de seus adversários. Uma aura selvagem e dominante, como a de um predador noturno.

Reduz 30% da velocidade do inimigo a causar medo.

___________________________________`);
        break;        

      case '!tokito':
      await client.sendText(message.from, `•「🌫」• Clã Tokito

Possui a capacidade de aprender até a 6° forma da respiração da lua.

•「🌫」• Névoa Flutuante
O usuário se movimenta como se fosse parte da neblina: leve, rápida e difícil de prever.

Buff ×2 de velocidade por 3 turnos dentro da neblina

_________________________________________

•「🕊」• Mente Serena
A serenidade do clã permite ao usuário manter o foco mesmo sob pressão mortal, observando seu inimigo por 2 turnos poderá desviar dos seus ataques com precisão.

Pode desviar 3 vezes sem sofrer nenhum dano.
_________________________________________

•「🌀」• Estilo Desvanecente
_Em combate, o usuário pode ativar essa técnica para se mover de forma tão suave e veloz que parece desaparecer e reaparecer. 

Após desaparecer, seu próximo ataque terá 100% de acerto independente da velocidade de ambos.

_________________________________________

•「✝」• Coragem de Espírito
A mente que domina seus impulsos, oculta suas emoções e camufla suas intenções torna-se uma fortaleza impenetrável. O usuário desta técnica é um enigma vivo; cada movimento é imprevisível, cada decisão é um mistério. A leitura de sua alma é vedada, como se estivesse coberta por véus espirituais. Não importa o quanto o oponente tente decifrá-lo — será sempre como olhar para um abismo sem fundo.


Tornasse impossível de ser lido, escondendo suas ações.

_________________________________________

•「🌫」• Ocultamento de Presença
Como a névoa da madrugada, aquele que domina essa técnica desaparece aos olhos comuns. Seu corpo, seus sons, sua respiração e até seus instintos se apagam temporariamente, tornando-se um espectro vagante entre as sombras. Apenas os mais sensitivos poderão senti-lo, mas nunca vê-lo. Porém, assim que atacar, sua presença se revelará novamente — como uma faca saindo da bainha silenciosamente.

Oculta totalmente sua presença, tornasse invisível a olho nu, sendo percebido apenas por habilidades que envolva sentidos (menos visão), ativa até que o usuário ataque ou fale ou seja atacado.

___________________________________`);
        break;

      case '!kanroji':
      await client.sendText(message.from, `•「💖」• Clã Kanroji

•「💗」• Força do Afeto Ardente
A força do usuário vem da paixão intensa e sincera. Quando sua determinação emocional atinge o ápice, ele libera ataques com uma leveza devastadora.

Buff ×2 de força e agilidade por 3 turnos.

___________________________________

•「🎀」• Estilo Flexível
o corpo dos membros são mais fortes e flexíveis que o padrão, agindo com bastante velocidade e graciosidade mais sem perder a força bruta.

Buff passivo de ×2 de força passivo.

___________________________________

•「💫」• Coração Inabalável
Ao ser atingido por emoções genuínas, como amor ou dor, o corpo responde com intensidade.

ignora qualquer ferimento e continua agindo normalmente. Buff de ×3 de resistência por 5 turnos.

___________________________________

•「🤸‍♂」• Flexibilidade
Desenvolvida por caçadores capazes de contorcer seus corpos como serpentes, essa técnica permite atravessar passagens estreitas, torcer membros em ângulos impossíveis e escapar de presas mortais. A flexibilidade se tornou uma arma furtiva e inesperada nas mãos de Slayers criados na arte do improviso corporal.

buff: 2x agilidade passivo

_________________________________________

•「⚡」• impacto Acertivo
Um ataque direcionado ao ponto vital do inimigo. Baseado em leitura e estratégia, esse golpe visa ser letal com um só movimento. Porém, sua eficácia depende do comportamento do inimigo e da frieza do Slayer. Não é força bruta — é intenção mortal e controle absoluto do instante.

buff: 2x percepção 3x agilidade é força, pode ser ultizado apenas 3 vezes em combate
_________________________________________`);
        break;

      case '!kamado':
      await client.sendText(message.from, `•「🔥」• Clã Kamado

_______________________________________

•「🔥」• Herdeiros do Sol
» O Clã Kamado carrega no sangue a dança do sol, seus corpos possuem uma resistência sobrenatural ao calor e ao cansaço. Seus pulmões são mais desenvolvidos, permitindo uma respiração mais eficiente, e seus músculos suportam movimentos extremos sem quebrar.

Buff ×2 de Força e ×1,5 de velocidade passivo.
Recebe 10% de redução de dano por queimaduras ou calor.

_______________________________________

•「❤‍🔥」• Vontade Inquebrável
» Quando sua vida, ou de alguém que ama, está em perigo, o verdadeiro espírito dos Kamado desperta. Suas chamas internas se elevam, ignorando dor, exaustão e até ferimentos fatais por alguns momentos.

Buff ×2 de Força, ×2 de Agilidade, ×2 de Resistência por 4 turnos.
Pode ser usado uma vez por batalha. Ao acabar, o usuário perde 20% da vida total.

_______________________________________

•「☀」• Dança do Deus do Fogo
» O usuário executa uma sequência de golpes em alta velocidade, que envolvem o inimigo em chamas solares. Cada movimento é preciso, fluido e devastador, como uma dança que incendeia tudo ao redor.

 Permite desferir até  4 ataques consecutivos no mesmo turno, podendo dividir entre alvos, cada ataque deixa queimaduras que queima por 3 turnos dando o dano total da habilidade.
Buff  de ×3 de Agilidade e ×3 de Força apenas nesse turno.
Pode ser usado 2 vezes por batalha.
___________________________________

•「💫」• Coragem Implacável
Em meio ao terror e à pressão do desconhecido, aquele que carrega a Coragem Implacável se ergue sem hesitação. Nenhuma ameaça, intimidação ou presença sombria é capaz de abalar sua postura ou quebrar seu ímpeto. O coração permanece firme, os olhos fixos no inimigo, e a mente afiada como uma lâmina. Essa coragem transcende o medo natural, criando brechas na moral do oponente e abrindo caminho para contra-ataques estratégicos.

Fica imune a induções de medo, e ganha um buff de ×1,5 de força ao ser intimidado.

___________________________________
•「🤼‍♂」• Adaptação ao Combate
A luta é um diálogo entre corpos. O usuário desta técnica observa atentamente cada passo, cada impulso, cada hesitação de seu oponente. Após três turnos de análise, seu corpo assimila os padrões e copia a velocidade do inimigo, igualando os atributos de movimento. Não se trata de imitação — mas de evolução em tempo real, transformando a observação em armas e a paciência em vantagem.


Após ver 3 cenas do seu adversário, copiara seus atributos em agilidade.
___________________________________`);
        break;

      case '!tsugikuni':
      await client.sendText(message.from, `•「☀」• Clã Tsugikuni

_______________________________________

•「☀」• Sangue do Primordial
» Descendentes diretos do primeiro caçador supremo, os Tsugikuni nasceram com corpos fora do padrão humano. Sua força, velocidade e percepção estão muito além do comum, e sua presença emana uma aura sufocante, que faz até o ar parecer mais pesado.

Buff ×2 de Força, ×2 de Agilidade e ×1,5 de Percepção passivo.
Todos os inimigos no campo sofrem -1,5 de Agilidade e -1,5 de Força enquanto o Tsugikuni estiver presente.

_______________________________________

•「👁」• Pressão Sobrenatural
» A simples existência de um Tsugikuni faz até seres poderosos hesitarem. Seu olhar e sua presença física esmagam o espírito e quebram o foco do inimigo, tornando qualquer tentativa de enfrentamento uma tortura psicológica e física.

» Ao ativar, todos os inimigos no campo sofrem:
-40% em Agilidade, -30% em força e -30% em Percepção por 4 turnos.
Pode ser usado 1 vez por batalha.
Inimigos com menos de 50% da vida entram em estado de "Pânico", tendo 50% de chance de perder o turno.

_______________________________________

•「🔱」• Predador Supremo
» O ápice da linhagem Tsugikuni não está em técnicas ou estilos, mas na superioridade física e mental esmagadora. O usuário ativa todos os reflexos, músculos e sentidos além dos limites, tornando-se uma verdadeira máquina de caça perfeita.

Ativa por 5 turnos:

* O usuário ganha 3 esquivas perfeitas, que podem ser usadas a qualquer momento nesses turnos (esquiva garantida, até de ataques surpresa ou em área).
* Buff de ×3 de Agilidade e ×3 de Percepção.
* Ataques têm acerto garantido durante esse efeito.
  Pode ser usado 1 vez por batalha.

_______________________________________

•「💫」• Coragem Implacável
Em meio ao terror e à pressão do desconhecido, aquele que carrega a Coragem Implacável se ergue sem hesitação. Nenhuma ameaça, intimidação ou presença sombria é capaz de abalar sua postura ou quebrar seu ímpeto. O coração permanece firme, os olhos fixos no inimigo, e a mente afiada como uma lâmina. Essa coragem transcende o medo natural, criando brechas na moral do oponente e abrindo caminho para contra-ataques estratégicos.

Fica imune a induções de medo, e ganha um buff de ×1,5 de força ao ser intimidado.

___________________________________

•「🤼‍♂」• Adaptação ao Combate
A luta é um diálogo entre corpos. O usuário desta técnica observa atentamente cada passo, cada impulso, cada hesitação de seu oponente. Após três turnos de análise, seu corpo assimila os padrões e copia a velocidade do inimigo, igualando os atributos de movimento. Não se trata de imitação — mas de evolução em tempo real, transformando a observação em armas e a paciência em vantagem.


Após ver 3 cenas do seu adversário, copiara seus atributos em agilidade.
___________________________________`);
        break;


        //CLÃS ONIS
      case '!kibutsuji':
      await client.sendText(message.from, `•「🩸」• Clã Kibutsuji

_______________________________________

•「🩸」• Sangue do Rei Demônio
» Portadores diretos do sangue original de Muzan, os Kibutsuji manifestam habilidades que ultrapassam os limites físicos e espirituais dos vivos. Seu corpo se adapta, se regenera e ataca com perfeição monstruosa. Cada célula pulsa com autoridade demoníaca.

Buff passivo:

* ×2,5 de Força, ×2 de Agilidade, ×2 de Resistência e ×2 de Percepção.
* Regeneração de 7% da vida por turno.
* Imunidade total a doenças, venenos, paralisias e cegueira.
* Pode moldar o corpo livremente (ex: gerar membros extras, lâminas de carne, tentáculos, olhos).

_______________________________________

•「🧬」• Domínio Genético — Manipulação Total
» O corpo do usuário pode mudar de forma a qualquer momento. Ele pode esticar, multiplicar, endurecer ou transformar partes do corpo em armas, órgãos extras ou defesas monstruosas. Uma adaptação viva ao combate.

Ativo por 3 turnos:

* ×2 de Resistência, ×2 de Agilidade.
* Pode escolher 1 efeito por turno:
  • Criar +2 braços para atacar mais vezes.
  • Gerar uma armadura orgânica, reduzindo dano em 40%.
  • Esticar os membros, atacando à distância ou múltiplos inimigos.
  Pode ser usado 2 vezes por batalha.

_______________________________________

•「🦠」• Infecção de Sangue Demoníaco
» Seu sangue é uma arma viva. Ao atingir o inimigo, ele se infiltra silenciosamente, corrompendo por dentro com veneno espiritual, causando dor insuportável, confusão e enfraquecimento físico.

Quando ativado:

* Todos os ataques por 2 turnos aplicam “Infecção Demoníaca”:
  • -30% de Agilidade e -30% de Resistência no inimigo.
  • Inimigo recebe dano contínuo igual a 10% da vida atual por turno (máx. 3 turnos).
  • Se o inimigo cair abaixo de 20% de vida com a infecção ativa, ele explode em carne maldita, causando dano em área.
 Pode ser usado 1 vez por batalha.

_______________________________________
•「🧬」• Controle Molecular
Manipulando a estrutura mais íntima de seu corpo, o oni pode alterar sua forma física à vontade. Chifres se projetam do crânio, garras surgem dos dedos, espinhos crescem nas costas — tudo moldado a partir de suas próprias células. Não é ilusão, mas transformação orgânica bruta, uma extensão natural de sua monstruosidade.

Buff:modificações aderam 3x em resistência

Obs:o buff é ativo apenas em batalha
_________________________________________

•「🧫」• Modificação Corporal
Mais profunda que o controle molecular, essa habilidade permite ao oni reformular completamente sua anatomia. Braços extras, pernas alongadas, caudas, olhos por todo o corpo — cada célula obedece à sua vontade, criando formas bizarras e aterradoras. É a essência da mutação demoníaca: instável, grotesca e eficaz.

Buff:modificações aderam 2,5x de resistência passiva

Obs:funciona apenas em batalha
_________________________________________`);
        break;

      case '!tsuki':
      await client.sendText(message.from, `•「🌙」• Clã Tsuki

_______________________________________

•「🌙」• Sangue da Lua Eterna
» Carregando a maldição e a dádiva do primeiro espadachim que se rendeu às trevas, os descendentes do Clã Tsuki possuem corpos sobre-humanos, percepção além dos sentidos naturais e uma regeneração absurda. Seus corpos são a mistura perfeita entre poder demoníaco e técnica suprema.

Buff ×2 de Força, ×2 de Resistência e ×1,5 de Percepção passivo.
Recupera 5% da vida total a cada turno passivamente.

_______________________________________

•「👁‍🗨」• Olhar Lunar – Mil Olhos do Abismo
» Através dos múltiplos olhos que surgem pelo corpo ou apenas na visão sobrenatural herdada, o usuário enxerga cada movimento, intenção e até fluxo de energia vital. Nada passa despercebido, tornando-o praticamente inalvejável e letal.

» Ao ativar por 3 turnos:

* 2 esquivas perfeitas garantidas.
* Buff de ×2 de Percepção e ×1,5 de Agilidade.
* Todos os ataques inimigos perdem 30% de precisão.
* Permite ver inimigos ocultos, invisíveis ou tentando fugir.
  Pode ser usado 1 vez por batalha.

_______________________________________

•「🌑」• Eclipse Carmesim
» O ápice do Clã Tsuki se manifesta em um estado onde sua presença é tão sufocante que parece que a própria luz é apagada. Durante esse Eclipse, o usuário move-se como uma sombra impossível de rastrear, e seus golpes cortam o espaço, a carne e a alma.

» Ativa por 4 turnos:

* Buff de ×3 de Agilidade, ×3 de Força e ×2 de Percepção.
* Durante esse efeito, os ataques ignoram 50% da resistência do alvo.
* Enquanto esse efeito está ativo, nenhum inimigo pode se esconder, ficar invisível ou fugir do combate.
  Pode ser usado 1 vez por batalha.

  ___________________________________

  •「💫」• Coragem Implacável
Em meio ao terror e à pressão do desconhecido, aquele que carrega a Coragem Implacável se ergue sem hesitação. Nenhuma ameaça, intimidação ou presença sombria é capaz de abalar sua postura ou quebrar seu ímpeto. O coração permanece firme, os olhos fixos no inimigo, e a mente afiada como uma lâmina. Essa coragem transcende o medo natural, criando brechas na moral do oponente e abrindo caminho para contra-ataques estratégicos.

Fica imune a induções de medo, e ganha um buff de ×1,5 de força ao ser intimidado.

___________________________________

•「🤼‍♂」• Adaptação ao Combate
A luta é um diálogo entre corpos. O usuário desta técnica observa atentamente cada passo, cada impulso, cada hesitação de seu oponente. Após três turnos de análise, seu corpo assimila os padrões e copia a velocidade do inimigo, igualando os atributos de movimento. Não se trata de imitação — mas de evolução em tempo real, transformando a observação em armas e a paciência em vantagem.


Após ver 3 cenas do seu adversário, copiara seus atributos em agilidade.
___________________________________`);
        break;

      case '!douma':
      await client.sendText(message.from, `•「❄」• Clã Douma

•「💀」• Névoa Congelante
O usuário cria uma névoa gélida ao redor, congelando tudo que toca e enfraquecendo a resistência dos inimigos. Ganha ×2 em kekkijutsu e ×1,7 em resistência enquanto a névoa estiver ativa.

______________________________________

•「☠」• Dança da Morte Gelada
Com movimentos graciosos, o usuário ataca com rapidez e força cortantes que parecem congelar o tempo. Ganha ×2,2 em agilidade e ×1,8 em força para ataques físicos e kekkijutsu durante 3 turnos.

______________________________________

•「🧠」• Frieza Mental
A calma absoluta do usuário permite controlar a batalha estrategicamente, aumentando a percepção e reduzindo erros. Ganha ×2,5 em percepção e ×1,5 em kekkijutsu para manipular ataques e defesas.

______________________________________

•「☢」• Resistência a Veneno
Entre os caçadores, poucos sobrevivem a toxinas mortais sem algum tipo de preparo. Essa habilidade permite ao usuário suportar o envenenamento com resistência além da carne, retardando seus efeitos por até cinco turnos. Durante esse tempo, o corpo se fortalece contra o avanço da dor e da paralisia, ganhando segundos preciosos que podem decidir entre a morte silenciosa ou a vitória amarga.
______________________________________

•「🧪」• Absorção
O corpo do oni se torna uma prisão viva. Ao capturar suas vítimas, ele é capaz de envolvê-las com sua carne e absorvê-las completamente, restando apenas suas roupas e ossos. Ao absorver um caçador ou outro ser poderoso, o oni pode herdar uma de suas habilidades — um tributo sombrio à força que conquistou. Um poder proibido, mas devastador.

_________________________________________`);
        break;

      case '!hantengu':
      await client.sendText(message.from, `•「🌀」• Clã Hantengu

•「👥」• Multiplicidade Assassina
O usuário cria múltiplas projeções de si mesmo, confundindo e atacando os inimigos de vários ângulos ao mesmo tempo. Ganha ×2 em agilidade e ×1,8 em percepção para esquiva e ataques simultâneos.

______________________________________

•「🗡」• Lâminas Etéreas
As projeções geram lâminas cortantes que podem atacar com força sobrenatural, perfurando defesas rígidas. Ganha ×2 em força e ×1,7 em agilidade durante ataques com as lâminas.

______________________________________

•「🛡」• Invulnerabilidade Fragmentada
A capacidade de dispersar seu corpo permite que o usuário evite danos e regenera-se rapidamente. Ganha ×2,5 em resistência e ×1,5 em recuperação por turno.
_________________________________________

•「🧫」• Modificação Corporal
Mais profunda que o controle molecular, essa habilidade permite ao oni reformular completamente sua anatomia. Braços extras, pernas alongadas, caudas, olhos por todo o corpo — cada célula obedece à sua vontade, criando formas bizarras e aterradoras. É a essência da mutação demoníaca: instável, grotesca e eficaz.

_________________________________________
•「🐺」• Presença Aterrorizante
Existe algo de primal e inquietante na presença daquele que carrega essa marca. Assim que põe os pés no campo de batalha, um silêncio estranho se espalha. Os corações dos inimigos batem descompassados, suas mãos tremem, seus reflexos diminuem. O medo, muitas vezes invisível, se manifesta na forma de um fardo insuportável, reduzindo a força e a velocidade de seus adversários. Uma aura selvagem e dominante, como a de um predador noturno.

___________________________________`);
        break;

      case '!gyokko':
      await client.sendText(message.from, `•「🎨」• Clã Gyokko

•「🖌」• Criaturas Abissais
O usuário cria criaturas feitas de barro e água maligna que atacam e defendem, controladas à distância. Ganha ×2 em percepção para controlar múltiplos alvos e ×1,6 em resistência das criaturas.

______________________________________

•「🌀」• Forma Mutante
O corpo do usuário pode se transformar em uma massa maleável, aumentando a resistência e a agilidade para esquivas inesperadas. Ganha ×2,2 em agilidade e ×1,8 em resistência durante a transformação.

______________________________________

•「💧」• Manipulação Sombria
O usuário controla a água ao seu redor para ataques precisos e defesas dinâmicas. Ganha ×1,5 em força para golpes controlados e ×1,5 em percepção para ajustar os movimentos.

______________________________________

•「🐺」• Presença Aterrorizante
Existe algo de primal e inquietante na presença daquele que carrega essa marca. Assim que põe os pés no campo de batalha, um silêncio estranho se espalha. Os corações dos inimigos batem descompassados, suas mãos tremem, seus reflexos diminuem. O medo, muitas vezes invisível, se manifesta na forma de um fardo insuportável, reduzindo a força e a velocidade de seus adversários. Uma aura selvagem e dominante, como a de um predador noturno.

___________________________________

•「🧬」• Controle Molecular
Manipulando a estrutura mais íntima de seu corpo, o oni pode alterar sua forma física à vontade. Chifres se projetam do crânio, garras surgem dos dedos, espinhos crescem nas costas — tudo moldado a partir de suas próprias células. Não é ilusão, mas transformação orgânica bruta, uma extensão natural de sua monstruosidade.

_________________________________________`);
        break;

      case '!dakyutaro':
      await client.sendText(message.from, `•「🍂」• Clã Dakyutaro

•「🍃」• Dança das Lâminas Gêmeas
O usuário manipula duas lâminas afiadas com extrema agilidade, desferindo ataques rápidos e precisos que perfuram até as defesas mais sólidas. Ganha ×2,3 em agilidade e ×1,8 em força durante a dança.

______________________________________

•「🕸」• Teia de Sombra
O usuário cria uma teia pegajosa e quase invisível para prender e imobilizar os inimigos, dificultando a movimentação e ataques. Ganha ×2 em percepção para detectar ameaças e ×1,6 em resistência para manter a teia firme.

______________________________________

•「🌪」• Fúria Implacável
A explosão de força e velocidade do usuário causa ataques devastadores em área, rompendo defesas e derrubando oponentes. Ganha ×2,5 em força e ×2 em agilidade durante a fúria.

______________________________________

•「🤼‍♂」• Adaptação ao Combate
A luta é um diálogo entre corpos. O usuário desta técnica observa atentamente cada passo, cada impulso, cada hesitação de seu oponente. Após três turnos de análise, seu corpo assimila os padrões e copia a velocidade do inimigo, igualando os atributos de movimento. Não se trata de imitação — mas de evolução em tempo real, transformando a observação em armas e a paciência em vantagem._

___________________________________

•「🩸」• Sangue Venenoso
O sangue do oni carrega em si uma maldição natural. Ao ser exposto ao ar ou entrar em contato com carne humana, transforma-se em um veneno silencioso que invade o corpo do inimigo, enfraquecendo seus músculos e perturbando seus sentidos. Basta um arranhão, um respingo, uma gota — e a decadência começa. É um aviso cruel de que até o sangue de um demônio é uma arma.

_________________________________________`);
        break;

      case '!rui':
      await client.sendText(message.from, `•「🕷」• Clã Rui

•「🕸」• Teia Venenosa
O usuário cria teias com veneno paralisante, capazes de incapacitar adversários com contato. Ganha ×2 em percepção para mirar e ×1,7 em resistência para suportar ataques enquanto usa as teias.

______________________________________

•「⚔」• Golpes Precisos
Com movimentos calculados, o usuário desfere ataques que atingem pontos vitais, causando danos críticos. Ganha ×2,2 em força e ×1,8 em agilidade para ataques focados.

______________________________________

•「🌪」• Velocidade Letal
O usuário se move com uma rapidez mortal, dificultando qualquer defesa e contra-ataque. Ganha ×2,5 em agilidade e ×1,5 em percepção para antecipar movimentos inimigos.

______________________________________

•「🌫」• Ocultamento de Presença
Como a névoa da madrugada, aquele que domina essa técnica desaparece aos olhos comuns. Seu corpo, seus sons, sua respiração e até seus instintos se apagam temporariamente, tornando-se um espectro vagante entre as sombras. Apenas os mais sensitivos poderão senti-lo, mas nunca vê-lo. Porém, assim que atacar, sua presença se revelará novamente — como uma faca saindo da bainha silenciosamente.

___________________________________

•「🐺」• Presença Aterrorizante
Existe algo de primal e inquietante na presença daquele que carrega essa marca. Assim que põe os pés no campo de batalha, um silêncio estranho se espalha. Os corações dos inimigos batem descompassados, suas mãos tremem, seus reflexos diminuem. O medo, muitas vezes invisível, se manifesta na forma de um fardo insuportável, reduzindo a força e a velocidade de seus adversários. Uma aura selvagem e dominante, como a de um predador noturno.

___________________________________`);
        break;

      case '!tamayo':
      await client.sendText(message.from, `•「🌸」• Clã Tamayo

•「🩸」• Perfume da Ilusão
O usuário libera uma névoa sutil com aroma alterado que confunde os sentidos e distorce a realidade ao redor. Ganha ×2,2 em percepção e ×1,5 em agilidade para desviar e manipular combates.

______________________________________

•「💉」• Sangue Envenenado
O sangue do usuário contém toxinas especiais que enfraquecem e paralisam quem entra em contato. Ganha ×2 em resistência e ×1,7 em força contra alvos envenenados.

______________________________________

•「🧠」• Controle Frio
A mente fria e estratégica do usuário permite prever ações e armar armadilhas complexas. Ganha ×2,5 em percepção e ×1,6 em resistência ao lidar com múltiplos inimigos.

______________________________________

•「☦」• Leitura de Espírito
A percepção se afia como uma lâmina espiritual. Aqueles que desenvolvem essa técnica são capazes de sentir os ecos da alma de seus inimigos: intenções ocultas, medo reprimido, vontade de matar. O combate deixa de ser apenas físico e se transforma em uma dança entre instintos. Surpresas raramente o atingem, pois já são sentidas segundos antes de acontecer. Um dom de poucos, mas que exige sacrifícios — não se pode ocultar o que se aprende a perceber.

___________________________________

•「💫」• Coragem Implacável
Em meio ao terror e à pressão do desconhecido, aquele que carrega a Coragem Implacável se ergue sem hesitação. Nenhuma ameaça, intimidação ou presença sombria é capaz de abalar sua postura ou quebrar seu ímpeto. O coração permanece firme, os olhos fixos no inimigo, e a mente afiada como uma lâmina. Essa coragem transcende o medo natural, criando brechas na moral do oponente e abrindo caminho para contra-ataques estratégicos.

___________________________________`);
        break;

      case '!akaza':
      await client.sendText(message.from, `•「🥋」• Clã Akaza

•「🔥」• Punho Incandescente
O usuário concentra força e calor em seus golpes, causando danos devastadores e queimaduras profundas. Ganha ×2,5 em força e ×1,7 em resistência durante ataques corpo a corpo.

___________________________________

•「⚡」• Velocidade Explosiva
A explosão de velocidade permite ao usuário se mover tão rápido que seus golpes são quase impossíveis de prever. Ganha ×2,3 em agilidade e ×1,5 em percepção para antecipar movimentos.

___________________________________

•「🛡」• Pele de Ferro
A resistência do usuário é tão alta que suporta ataques pesados e condições extremas, quase imune a danos físicos. Ganha ×3 em resistência durante a ativação da habilidade.

___________________________________

•「⛓」• Pescoço de Ferro
A cabeça é o ponto fraco de qualquer oni, mas nem todos se curvam a essa fraqueza. Com essa técnica, o pescoço se reforça com camadas densas de carne demoníaca e fibras endurecidas, tornando-se quase impossível de cortar. São necessários pelo menos quatro golpes certeiros para sequer alcançar o osso. Um verdadeiro desafio para qualquer caçador que mire seu colar de lâminas.

_________________________________________

•「🤼‍♂」• Adaptação ao Combate
A luta é um diálogo entre corpos. O usuário desta técnica observa atentamente cada passo, cada impulso, cada hesitação de seu oponente. Após três turnos de análise, seu corpo assimila os padrões e copia a velocidade do inimigo, igualando os atributos de movimento. Não se trata de imitação — mas de evolução em tempo real, transformando a observação em armas e a paciência em vantagem._

__________________________________`);
        break;

      default:
        // Se quiser, pode mandar algo quando o comando não for reconhecido
        // await client.sendText(message.from, 'Comando não reconhecido. Use !sistemas para ver comandos.');
        break;
    }

  });
}



