// Valencià and Matemáticas: original questions adapted from the supplied worksheets.
const subjectTopicCatalog=[
 ['math-numbers','Números grandes','Lee, descompón y compara números de hasta nueve cifras.','123','numeros-grandes','mathematics'],
 ['math-products','Multiplicaciones','Practica productos por varias cifras, con ceros y sin ellos.','×','multiplicaciones','mathematics'],
 ['math-distributive','Propiedad distributiva','Multiplica una suma o una resta paso a paso.','(+)','propiedad-distributiva','mathematics'],
 ['math-operations','Operaciones combinadas','Paréntesis, multiplicaciones, divisiones, sumas y restas.','÷','operaciones-combinadas','mathematics'],
 ['val-accents','L’accentuació','Agudes, planes, esdrúixoles i accents oberts o tancats.','à','accentuacio','valenciano'],
 ['val-vowels','Diftongs i hiats','Practica les vocals i la separació en síl·labes.','ai','diftongs-i-hiats','valenciano'],
 ['val-digraphs','Els dígrafs','Reconeix els dígrafs i aprén com se separen.','ny','digrafs','valenciano'],
 ['val-verbs','Els temps verbals','Ahir, hui o demà: tria la forma verbal adequada.','hui','temps-verbals','valenciano']
].map(([id,name,desc,icon,slug,subject],i)=>({id,name,desc,icon,slug,subject,color:subject==='mathematics'?'#529c90':'#c59642',soft:subject==='mathematics'?'#e9f6f1':'#fcf4e2'}));
const formatNumber=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'.');
function numericQuestion(topic,prompt,word,result,explanation,alternatives){const values=[result,...(alternatives||[result+10,result-10,result+1])].filter(n=>Number.isInteger(n)&&n>=0);const options=[...new Set(values)].slice(0,4).map(formatNumber);add(topic,prompt,word,options,formatNumber(result),explanation);bank[bank.length-1].numericAnswer=result}
const numberNames=[
 [2346170,'Dos millones trescientos cuarenta y seis mil ciento setenta'],[4045706,'Cuatro millones cuarenta y cinco mil setecientos seis'],[6709530,'Seis millones setecientos nueve mil quinientos treinta'],[9340005,'Nueve millones trescientos cuarenta mil cinco'],[4125500,'Cuatro millones ciento veinticinco mil quinientos'],[6385200,'Seis millones trescientos ochenta y cinco mil doscientos'],[8609017,'Ocho millones seiscientos nueve mil diecisiete'],[9038710,'Nueve millones treinta y ocho mil setecientos diez'],[79000099,'Setenta y nueve millones noventa y nueve'],[12000202,'Doce millones doscientos dos'],[950095000,'Novecientos cincuenta millones noventa y cinco mil'],[32450765,'Treinta y dos millones cuatrocientos cincuenta mil setecientos sesenta y cinco']
];
numberNames.forEach(([n,name])=>numericQuestion('math-numbers','¿Qué número representa este nombre?',name,n,`${name}: ${formatNumber(n)}. Separamos las unidades en grupos de tres cifras: millones, millares y unidades.`,[n+1000,n+100000,n-100]));
[
 [3643507,6,100000],[6217460,2,100000],[9032053,3,10000],[15870640,5,1000000],[83568005,8,10000000],[692003900,6,100000000],[843720000,4,10000000],[2346170,7,10]
].forEach(([n,d,place])=>{
 const names={1:'Unidades',10:'Decenas',100:'Centenas',1000:'Unidades de millar',10000:'Decenas de millar',100000:'Centenas de millar',1000000:'Unidades de millón',10000000:'Decenas de millón',100000000:'Centenas de millón'};
 const positions=[place,place/10,place*10,1,10,100,1000].filter(p=>names[p]);
 const options=[...new Set(positions)].slice(0,4).map(p=>names[p]);
 add('math-numbers','¿Qué posición ocupa la cifra indicada?',`El ${d} en ${formatNumber(n)}`,options,names[place],`El ${d} está en las ${names[place].toLowerCase()}. Por eso representa ${formatNumber(d*place)} unidades: ${d} × ${formatNumber(place)} = ${formatNumber(d*place)}.`);
});
[
 [3643507,'3.000.000 + 600.000 + 40.000 + 3.000 + 500 + 7','3.000.000 + 600.000 + 4.000 + 3.000 + 500 + 7'],
 [9032053,'9.000.000 + 30.000 + 2.000 + 50 + 3','9.000.000 + 300.000 + 2.000 + 50 + 3'],
 [692003900,'600.000.000 + 90.000.000 + 2.000.000 + 3.000 + 900','600.000.000 + 9.000.000 + 2.000.000 + 3.000 + 900']
].forEach(([n,a,b])=>add('math-numbers','Elige la descomposición correcta.',formatNumber(n),[a,b],a,`Cada cifra aporta su valor según la posición: ${a} = ${formatNumber(n)}.`));
[[79099000,79000099],[12000202,12202000],[950095000,950950000],[843720000,83568005]].forEach(([a,b])=>add('math-numbers','¿Qué signo corresponde?',`${formatNumber(a)} ___ ${formatNumber(b)}`,['>','<','='],a>b?'>':'<',`Comparamos de izquierda a derecha. ${formatNumber(a)} es ${a>b?'mayor':'menor'} que ${formatNumber(b)}.`));
const products=[[3457,36],[6382,54],[7261,345],[8254,572],[736,450],[564,720],[863,870],[736,503],[578,604],[647,905],[1427,194],[421,49],[537,58],[245,32],[608,205],[125,408],[309,170],[804,306],[452,63],[219,504]];
products.forEach(([a,b])=>{const terms=String(b).split('').reverse().map((d,i)=>Number(d)*10**i).filter(Boolean);const steps=terms.map(t=>`${formatNumber(a)} × ${formatNumber(t)} = ${formatNumber(a*t)}`).join('; ');numericQuestion('math-products','Calcula la multiplicación.',`${formatNumber(a)} × ${formatNumber(b)}`,a*b,`${steps}. Sumamos los productos parciales: ${formatNumber(a*b)}.`,[a*b+a,a*b-a,a*b+10*b]);bank[bank.length-1].calculation={type:'product',a,b}});
const distributive=[[4,3,7,'+'],[3,5,8,'+'],[6,4,9,'+'],[7,2,6,'+'],[9,8,3,'+'],[3,5,4,'−'],[5,8,3,'−'],[7,7,6,'−'],[9,9,2,'−'],[8,6,5,'−'],[2,5,8,'+'],[3,7,4,'−']];
distributive.forEach(([a,b,c,op])=>{const result=a*(op==='+'?b+c:b-c);numericQuestion('math-distributive','Aplica la propiedad distributiva y calcula.',`${a} × (${b} ${op} ${c})`,result,`${a} × ${b} ${op} ${a} × ${c} = ${a*b} ${op} ${a*c} = ${result}.`,[result+a,result-a,a*b+c]);bank[bank.length-1].calculation={type:'distributive',a,b,c,op}});
[[4,3,7],[3,5,8],[6,4,9],[7,2,6],[9,8,3]].forEach(([a,b,c])=>add('math-distributive','¿Qué expresión aplica bien la propiedad distributiva?',`${a} × (${b} + ${c})`,[`${a} × ${b} + ${a} × ${c}`,`${a} × ${b} + ${c}`,`${a} + ${b} × ${c}`],`${a} × ${b} + ${a} × ${c}`,`Hay que multiplicar ${a} por los dos sumandos, ${b} y ${c}, y sumar ambos productos.`));
const combined=[
 ['18 + 6 × 4',42,'Primero 6 × 4 = 24; después 18 + 24 = 42.',96],['42 − 24 ÷ 3',34,'Primero 24 ÷ 3 = 8; después 42 − 8 = 34.',6],['9 × 5 − 16 + 7',36,'9 × 5 = 45; después 45 − 16 = 29 y 29 + 7 = 36.',22],['36 ÷ 4 + 8 × 3',33,'36 ÷ 4 = 9 y 8 × 3 = 24; después 9 + 24 = 33.',51],['(18 + 6) × 4',96,'Primero el paréntesis: 18 + 6 = 24; después 24 × 4 = 96.',42],['(42 − 24) ÷ 3',6,'42 − 24 = 18; después 18 ÷ 3 = 6.',34],['50 − (14 + 6 × 2)',24,'Dentro del paréntesis: 6 × 2 = 12 y 14 + 12 = 26; después 50 − 26 = 24.',10],['(35 − 15) ÷ 5 + 9',13,'35 − 15 = 20; luego 20 ÷ 5 = 4; por último 4 + 9 = 13.',5],['28 − 10 + 6 − 4',20,'De izquierda a derecha: 28 − 10 = 18; 18 + 6 = 24; 24 − 4 = 20.',8],['32 ÷ 4 × 3',24,'División y multiplicación tienen la misma prioridad: 32 ÷ 4 = 8; 8 × 3 = 24.',2],['40 ÷ 5 ÷ 2 × 6',24,'De izquierda a derecha: 40 ÷ 5 = 8; 8 ÷ 2 = 4; 4 × 6 = 24.',96],['19 + 11 − 15 + 5',20,'De izquierda a derecha: 19 + 11 = 30; 30 − 15 = 15; 15 + 5 = 20.',10],['(14 + 6) × (12 − 7)',100,'Resolvemos los dos paréntesis: 20 × 5 = 100.',70],['(48 ÷ 6) + (9 × 3)',35,'48 ÷ 6 = 8 y 9 × 3 = 27; sumamos 8 + 27 = 35.',51],['5 + 4 × 3',17,'4 × 3 = 12; después 5 + 12 = 17.',27],['(5 + 4) × 3',27,'5 + 4 = 9; después 9 × 3 = 27.',17],['20 − 24 ÷ 4',14,'24 ÷ 4 = 6; después 20 − 6 = 14.',1],['30 − 5 × 4',10,'La multiplicación va antes: 5 × 4 = 20; después 30 − 20 = 10.',100],['45 − (12 + 8) × 2',5,'12 + 8 = 20; 20 × 2 = 40; finalmente 45 − 40 = 5.',50]
];
combined.forEach(([word,a,e,wrong])=>{numericQuestion('math-operations','Resuelve respetando el orden de las operaciones.',word,a,e,[wrong,a+2,a+10]);bank[bank.length-1].calculation={type:'expression',expression:word}});
[
 ['4 × (? + 2) = 28',5,'28 ÷ 4 = 7; por tanto ? + 2 = 7 y ? = 5.'],['30 − ? × 3 = 12',6,'El producto debe ser 18 porque 30 − 18 = 12; 18 ÷ 3 = 6.'],['(18 + ?) ÷ 4 = 6',6,'El paréntesis debe valer 24: 6 × 4 = 24; 24 − 18 = 6.']
].forEach(([w,a,e])=>numericQuestion('math-operations','¿Qué número falta?',w,a,e));
[
 ['6 + 4 × 5 = 50',['(6 + 4) × 5','6 + (4 × 5)','(6 + 4 × 5)'],'(6 + 4) × 5','6 + 4 = 10; después 10 × 5 = 50.'],
 ['24 − 8 ÷ 2 = 8',['(24 − 8) ÷ 2','24 − (8 ÷ 2)','(24 − 8 ÷ 2)'],'(24 − 8) ÷ 2','24 − 8 = 16; después 16 ÷ 2 = 8.'],
 ['3 × 7 − 2 = 15',['3 × (7 − 2)','(3 × 7) − 2','(3 × 7 − 2)'],'3 × (7 − 2)','7 − 2 = 5; después 3 × 5 = 15.']
].forEach(([w,o,a,e])=>add('math-operations','¿Dónde hacen falta los paréntesis?',w,o,a,e));
[['15 + 5 × 2','(15 + 5) × 2',25,40],['36 ÷ (6 + 3)','36 ÷ 6 + 3',4,9]].forEach(([a,b,x,y])=>add('math-operations','Compara los resultados: ¿qué signo falta?',`${a} ___ ${b}`,['>','<','='],x<y?'<':'>',`La primera expresión vale ${x} y la segunda vale ${y}: ${x} < ${y}.`));
const valStress=[['arròs','Aguda','ar-ròs'],['camió','Aguda','ca-mi-ó'],['jardí','Aguda','jar-dí'],['melons','Aguda','me-lons'],['Albalat','Aguda','Al-ba-lat'],['camí','Aguda','ca-mí'],['fesol','Aguda','fe-sol'],['ordinador','Aguda','or-di-na-dor'],['plàtan','Plana','plà-tan'],['ànec','Plana','à-nec'],['xufa','Plana','xu-fa'],['taronja','Plana','ta-ron-ja'],['carpeta','Plana','car-pe-ta'],['rètol','Plana','rè-tol'],['màquina','Esdrúixola','mà-qui-na'],['música','Esdrúixola','mú-si-ca'],['brúixola','Esdrúixola','brúi-xo-la'],['pàgina','Esdrúixola','pà-gi-na'],['València','Esdrúixola','Va-lèn-ci-a'],['història','Esdrúixola','his-tò-ri-a']];
valStress.forEach(([w,a,s])=>add('val-accents','Segons la síl·laba tònica, com és la paraula?',w,['Aguda','Plana','Esdrúixola'],a,`${w}: ${s}. La síl·laba tònica és ${a==='Aguda'?'l’última':a==='Plana'?'la penúltima':'l’antepenúltima'}.`));
[
 ['arros','arròs','arros','És aguda acabada en vocal + s; porta accent obert en la o.'],['platan','plàtan','platan','És plana acabada en -an: porta accent obert en la a.'],['camio','camió','camio','És aguda acabada en vocal; la o porta accent tancat.'],['jardi','jardí','jardi','És aguda acabada en vocal; la i porta accent tancat.'],['maquina','màquina','maquina','És esdrúixola: sempre porta accent gràfic.'],['musica','música','musica','És esdrúixola i porta accent tancat en la u.'],['cafe','café','cafe','És aguda acabada en vocal; en valencià, café porta accent tancat.'],['telefon','telèfon','telefon','És plana acabada en -on: porta accent gràfic.'],['mobil','mòbil','mobil','És plana acabada en l; la o porta accent obert.'],['melons','melons','mélons','És aguda acabada en -ons: no acaba en vocal, vocal seguida de s, -en ni -in; no porta accent.'],['xufa','xufa','xúfa','És plana acabada en vocal: no porta accent.'],['pagina','pàgina','pagina','És esdrúixola i sempre porta accent gràfic.']
].forEach(([w,a,b,e])=>add('val-accents','Tria la forma escrita correctament.',w,[a,b],a,e));
choiceRows('val-accents','Quin tipus d’accent porta la vocal marcada?', ['Obert (`)','Tancat (´)'],[['à','Obert (`)','La a només porta accent obert: à.'],['è','Obert (`)','È porta accent obert.'],['ò','Obert (`)','Ò porta accent obert.'],['é','Tancat (´)','É porta accent tancat.'],['í','Tancat (´)','La i porta accent tancat.'],['ú','Tancat (´)','La u porta accent tancat.']]);
const valVowels=[['paella','Hiat','pa-e-lla'],['feina','Diftong','fei-na'],['veí','Hiat','ve-í'],['raïm','Hiat','ra-ïm'],['cuina','Diftong','cui-na'],['poeta','Hiat','po-e-ta'],['bou','Diftong','bou'],['aire','Diftong','ai-re'],['neu','Diftong','neu'],['peu','Diftong','peu'],['teatre','Hiat','te-a-tre'],['Maria','Hiat','Ma-ri-a'],['guant','Diftong','guant'],['quatre','Diftong','qua-tre'],['aigua','Diftong','ai-gua'],['aeroport','Hiat','a-e-ro-port']];
valVowels.forEach(([w,a,s])=>{add('val-vowels','La paraula conté un diftong o un hiat?',w,['Diftong','Hiat'],a,`${w}: ${s}. ${a==='Diftong'?'Les vocals del diftong es pronuncien en la mateixa síl·laba.':'Les vocals del hiat es pronuncien en síl·labes diferents.'}`);if(s.includes('-'))add('val-vowels','Quina separació en síl·labes és correcta?',w,[s,s.replace('-','')],s,`La separació és ${s}: ${a==='Hiat'?'el hiat se separa':'el diftong es manté unit'}.`)});
const valDigraphs=[['barraca','rr','bar-ra-ca'],['canya','ny','ca-nya'],['collita','ll','co-lli-ta'],['caixa','ix','cai-xa'],['cotxe','tx','cot-xe'],['figuera','gu','fi-gue-ra'],['alqueria','qu','al-que-ri-a'],['massa','ss','mas-sa'],['Espanya','ny','Es-pa-nya'],['carro','rr','car-ro'],['palla','ll','pa-lla'],['paquet','qu','pa-quet']];
valDigraphs.forEach(([w,d,s])=>{add('val-digraphs','Quin dígraf conté la paraula?',w,[d,...['rr','ny','ll','tx','gu','qu','ss','ix'].filter(x=>x!==d).slice(0,3)],d,`El dígraf de ${w} és ${d}: dues lletres representen un so.`);add('val-digraphs','Com se separa correctament?',w,[s,s.replace('-','')],s,`La separació correcta és ${s}. ${['rr','ss','ix','tx'].includes(d)?`El grup ${d} se separa entre síl·labes en este cas.`:`El dígraf ${d} es manté unit.`}`)});
[
 ['Ahir nosaltres ___ paella.',['vam menjar','menjarem','mengem'],'vam menjar','Ahir indica passat: vam menjar.'],
 ['Demà els cosins ___ en metro.',['vindran','venen','van vindre'],'vindran','Demà indica futur: vindran.'],
 ['Cada dissabte la iaia ___ taronges.',['cull','collirà','va collir'],'cull','És una acció habitual en present: cull.'],
 ['La setmana passada vosaltres ___ el museu.',['vau visitar','visitareu','visiteu'],'vau visitar','La setmana passada indica passat: vau visitar.'],
 ['Demà jo ___ pel camí.',['passejaré','passege','vaig passejar'],'passejaré','Demà indica futur: passejaré.'],
 ['Ara tu ___ un conte.',['lliges','llegiràs','vas llegir'],'lliges','Ara indica present: lliges.'],
 ['Ahir ella ___ al parc.',['va anar','anirà','va'],'va anar','Ahir indica passat: va anar.'],
 ['Hui nosaltres ___ a classe.',['estem','estarem','vam estar'],'estem','La frase situa l’acció en el present: estem.'],
 ['Demà vosaltres ___ una cançó.',['cantareu','canteu','vau cantar'],'cantareu','Demà indica futur: cantareu.'],
 ['Cada matí ells ___ fruita.',['mengen','menjaran','van menjar'],'mengen','Cada matí presenta un hàbit: mengen.'],
 ['Ahir jo ___ una carta.',['vaig escriure','escric','escriuré'],'vaig escriure','Ahir indica passat: vaig escriure.'],
 ['L’any que ve nosaltres ___ més.',['llegirem','llegim','vam llegir'],'llegirem','L’any que ve indica futur: llegirem.']
].forEach(([w,o,a,e])=>add('val-verbs','Completa amb el temps verbal adequat.',w,o,a,e));
