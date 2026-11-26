// Shared grading rules. Accent marks remain significant; case and incidental spacing do not.
function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function normalizeWritten(value){return String(value).normalize('NFC').trim().toLocaleLowerCase('es').replace(/[’‘]/g,"'").replace(/[‐‑–−]/g,'-').replace(/\s*-\s*/g,'-').replace(/\s+/g,' ')}
function parseIntegerAnswer(value){const s=String(value).trim().replace(/\u00a0/g,' ');if(!/^-?(?:\d+|\d{1,3}(?:\.\d{3})+|\d{1,3}(?: \d{3})+)$/.test(s))return null;const n=Number(s.replace(/[. ]/g,''));return Number.isSafeInteger(n)?n:null}
function gradeAnswer(q,value){if(q.type==='number'){const n=parseIntegerAnswer(value);return n!==null&&n===q.numericAnswer}if(q.type==='text')return [q.answer,...(q.acceptedAnswers||[])].some(a=>normalizeWritten(a)===normalizeWritten(value));return value===q.answer}
// Keep the established question IDs and facts, but vary how children answer.
bank.forEach(q=>{
 if(q.numericAnswer!==undefined&&q.id%3!==0){q.type='number';q.prompt=q.prompt.replace('¿Qué número representa este nombre?','Escribe con cifras el número.');q.inputHint='Escribe un número entero. Puedes usar puntos o espacios para separar los millares.'}
 else if((['accents','diacritics','val-accents'].includes(q.topic)&&q.prompt.includes('escrit'))||(q.topic==='accents'&&q.prompt==='Elige la escritura correcta.')){
  if(q.id%2===0){q.type='text';q.prompt=q.topic==='val-accents'?'Escriu la paraula correctament, amb els accents necessaris.':'Escribe la palabra correctamente, con las tildes necesarias.';q.inputHint='Escribe la palabra completa. Los acentos sí cuentan.'}
 }
 else if(['syllables','val-vowels','val-digraphs'].includes(q.topic)&&/separa/i.test(q.prompt)&&q.id%2===0){q.type='text';q.prompt=q.topic.startsWith('val-')?'Separa la paraula en síl·labes amb guionets.':'Separa la palabra en sílabas con guiones.';q.inputHint='Ejemplo: ca-sa. Se permiten espacios alrededor de los guiones.'}
 else if(['diacritics','val-verbs'].includes(q.topic)&&q.id%2===0){q.type='text';q.prompt=q.topic==='val-verbs'?'Escriu la forma verbal que falta.':'Escribe la palabra o expresión que falta.';q.inputHint='Escribe solo lo que falta en el hueco. Los acentos sí cuentan.'}
});
// Letter-sized answers: the underscore represents exactly one missing letter.
[
 ['accents','cami_n','ó','camión lleva tilde porque es aguda terminada en n.'],['accents','rat_n','ó','Ratón es aguda y termina en n.'],['accents','_rbol','á','Árbol es llana y termina en l.'],['accents','m_sica','ú','Música es esdrújula y lleva tilde.'],
 ['vocabulary','_aca (animal)','v','Vaca, el animal, se escribe con v.'],['vocabulary','_aca (portaequipajes del coche)','b','Baca, el soporte para equipaje, se escribe con b.'],['vocabulary','tu_o (recipiente de pasta de dientes)','b','Tubo, el recipiente, se escribe con b.'],['vocabulary','tu_o (pasado del verbo tener)','v','Tuvo es una forma del verbo tener y se escribe con v.'],
 ['val-accents','arr_s','ò','Arròs porta accent obert en la o.'],['val-accents','cam_','í','Camí és aguda acabada en vocal i porta accent.'],['val-accents','pl_tan','à','Plàtan és plana acabada en -an i porta accent obert.'],['val-accents','caf_','é','En valencià, café porta accent tancat en la e.']
].forEach(([topic,word,answer,explanation])=>{add(topic,topic.startsWith('val-')?'Escriu només la lletra que falta, amb accent si cal.':'Escribe solo la letra que falta, con tilde si hace falta.',word,[answer],answer,explanation);Object.assign(bank[bank.length-1],{type:'text',inputHint:'Una sola letra. Incluye el acento si corresponde.'})});
[
 ['sentences','Ordena sujeto, verbo y complemento. La oración debe empezar por «La».','Forma una oración.',['La','niña','lee','cuentos.'],'La niña es el sujeto; lee cuentos es el predicado.'],
 ['sentences','Ordena sujeto, verbo y complemento. La oración debe empezar por «Los».','Forma una oración.',['Los','pájaros','construyen','nidos.'],'Los pájaros es el sujeto; construyen nidos es el predicado.'],
 ['verbs','Ordena estos tiempos desde antes hasta después.','Pasado, presente y futuro',['Ayer','Hoy','Mañana'],'Ayer indica pasado, hoy presente y mañana futuro.'],
 ['val-verbs','Ordena estes paraules des d’abans fins a després.','El pas del temps',['Ahir','Hui','Demà'],'Ahir indica passat, hui present i demà futur.'],
 ['math-operations','Ordena los pasos para resolver la operación.','45 − (12 + 8) × 2',['Sumar 12 + 8','Multiplicar 20 × 2','Restar 45 − 40'],'Primero el paréntesis, después la multiplicación y al final la resta. El resultado es 5.'],
 ['math-operations','Ordena los pasos para resolver la operación.','(35 − 15) ÷ 5 + 9',['Restar 35 − 15','Dividir 20 ÷ 5','Sumar 4 + 9'],'20 ÷ 5 + 9 = 4 + 9 = 13.'],
 ['math-distributive','Ordena los pasos para usar la propiedad distributiva.','4 × (3 + 7)',['Escribir 4 × 3 + 4 × 7','Calcular 12 + 28','Obtener 40'],'Multiplicamos por ambos sumandos y después sumamos los productos.'],
 ['reading','Ordena las ideas según aparecen en la lectura.','El orden del texto',['Aprender una lengua en contacto con personas','Comparar los sonidos de humanos y pájaros','Explicar el aprendizaje de nombres en chimpancés'],'Ese es el orden de los tres párrafos de la lectura.']
].forEach(([topic,prompt,word,tokens,explanation])=>{add(topic,prompt,word,tokens,tokens.join(' → '),explanation);Object.assign(bank[bank.length-1],{type:'order',orderTokens:tokens});if(topic==='reading')bank[bank.length-1].passage=languagePassage});

const valencianVerbClues={
 'vam menjar':['menjar','passat',['menjàrem']], 'vindran':['vindre','futur',[]], 'cull':['collir','present',[]], 'vau visitar':['visitar','passat',['visitàreu']], 'passejaré':['passejar','futur',[]], 'lliges':['llegir','present',[]], 'va anar':['anar','passat',['anà']], 'estem':['estar','present',[]], 'cantareu':['cantar','futur',[]], 'mengen':['menjar','present',[]], 'vaig escriure':['escriure','passat',['escriguí']], 'llegirem':['llegir','futur',[]]
};
bank.filter(q=>q.topic==='val-verbs'&&q.type!=='order').forEach(q=>{const[verb,tense,alternatives]=valencianVerbClues[q.answer];q.prompt=`Completa amb el verb «${verb}» en ${tense}.`;if(q.type==='text')q.acceptedAnswers=alternatives;if(q.answer==='estem')q.word='Ara mateix nosaltres ___ a classe.'});
bank.filter(q=>q.topic==='diacritics'&&q.type==='text').forEach(q=>{const base=q.answer.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();q.prompt=`Completa con «${base}», añadiendo tilde o separando palabras si hace falta.`});
