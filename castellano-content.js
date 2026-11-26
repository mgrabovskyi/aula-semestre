// Original interactive questions adapted from the worksheets supplied in November 2026.
// Source mapping and editorial choices are recorded in CONTENT.md.
const extraTopics=[
 ['determiners','Los determinantes','Artículos, demostrativos, posesivos y cantidades.','el','determinantes'],
 ['nominal','El grupo nominal','Descubre el núcleo, los determinantes y los complementos.','GN','grupo-nominal'],
 ['adjectives','Sustantivos y adjetivos','Nombres, cualidades, concordancia y grados del adjetivo.','Aa','sustantivos-y-adjetivos'],
 ['sentences','Los enunciados','Frases, oraciones, sujeto, predicado e intención.','¿?','enunciados'],
 ['verbs','Los verbos','Conjugaciones, personas, tiempos y formas verbales.','-ar','verbos'],
 ['adverbs','El adverbio','Lugar, tiempo, modo, cantidad y mucho más.','hoy','adverbios'],
 ['links','Preposiciones y conjunciones','Aprende a reconocer las palabras que unen.','y','preposiciones-y-conjunciones'],
 ['vocabulary','Vocabulario','Sinónimos, antónimos, significados y homónimos.','≃','vocabulario'],
 ['communication','La comunicación','Emisor, receptor, mensaje, código y canal.','↔','comunicacion'],
 ['reading','Comprensión lectora','Lee con atención y encuentra las ideas principales.','CL','comprension-lectora'],
 ['diacritics','La tilde diacrítica','Tú o tu, él o el… El contexto te da la pista.','tú','tilde-diacritica']
].map(([id,name,desc,icon,slug],i)=>({id,name,desc,icon,slug,color:['#8370cb','#529c90','#c59642','#6b94c7'][i%4],soft:['#f0ebfc','#e9f6f1','#fcf4e2','#eaf2fc'][i%4]}));
function choiceRows(topic,prompt,options,rows){rows.forEach(([word,answer,explanation])=>add(topic,prompt,word,options,answer,explanation))}
choiceRows('determiners','¿Qué clase de determinante aparece entre «comillas»?', ['Artículo','Demostrativo','Posesivo','Numeral','Indefinido','Interrogativo','Exclamativo'],[
 ['«Las» ventanas están abiertas.','Artículo','Las acompaña a ventanas e indica femenino plural.'],
 ['«Aquella» mochila pesa mucho.','Demostrativo','Aquella señala una mochila que está lejos del hablante.'],
 ['«Mis» rotuladores son nuevos.','Posesivo','Mis indica a quién pertenecen los rotuladores.'],
 ['Tengo «cinco» canicas.','Numeral','Cinco expresa una cantidad exacta.'],
 ['Hay «varias» cajas vacías.','Indefinido','Varias indica una cantidad imprecisa.'],
 ['¿«Cuántos» cuentos has leído?','Interrogativo','Cuántos acompaña a cuentos y pregunta por su cantidad.'],
 ['¡«Qué» sorpresa tan bonita!','Exclamativo','Qué acompaña a sorpresa en una exclamación.'],
 ['Vivo en el «tercer» piso.','Numeral','Tercer es ordinal: indica un lugar en un orden.'],
 ['«Nuestro» equipo ha ganado.','Posesivo','Nuestro expresa pertenencia a varios poseedores.'],
 ['«Ese» paraguas está mojado.','Demostrativo','Ese expresa distancia media.'],
 ['Quedan «pocas» galletas.','Indefinido','Pocas no indica un número exacto de galletas.'],
 ['«El» autobús llega pronto.','Artículo','El acompaña al sustantivo autobús.']]);
choiceRows('determiners','¿Qué distancia expresa el demostrativo?', ['Cercanía','Distancia media','Lejanía'],[
 ['Estos zapatos','Cercanía','Estos señala objetos próximos al hablante.'],['Esa carpeta','Distancia media','Esa expresa distancia media.'],['Aquellos árboles','Lejanía','Aquellos señala árboles lejanos.']]);
choiceRows('determiners','¿Qué tipo de numeral es?', ['Cardinal','Ordinal'],[
 ['Ocho libros','Cardinal','Ocho expresa una cantidad exacta.'],['La sexta fila','Ordinal','Sexta indica una posición.']]);
choiceRows('nominal','¿Qué función tiene la palabra entre «comillas»?', ['Núcleo','Determinante','Complemento'],[
 ['Los «gatos» negros','Núcleo','Gatos es el sustantivo alrededor del que se organiza el grupo.'],
 ['«Estas» flores blancas','Determinante','Estas va delante del sustantivo flores y lo determina.'],
 ['Un coche «rojo»','Complemento','Rojo es un adjetivo que añade una cualidad a coche.'],
 ['Mi «hermana» pequeña','Núcleo','Hermana es el sustantivo principal del grupo.'],
 ['«Tres» pájaros azules','Determinante','Tres precisa la cantidad de pájaros.'],
 ['La nieve «blanca»','Complemento','Blanca expresa una cualidad de nieve.'],
 ['«Nuestro» perro juguetón','Determinante','Nuestro indica a quién pertenece el perro.'],
 ['Unos «cuadernos» verdes','Núcleo','Cuadernos es el sustantivo que funciona como núcleo.'],
 ['El camino «estrecho»','Complemento','Estrecho complementa al sustantivo camino.'],
 ['«Algunas» estrellas brillantes','Determinante','Algunas acompaña al nombre y expresa cantidad imprecisa.'],
 ['La casa «aquella»','Complemento','En el análisis de la ficha, el demostrativo pospuesto complementa al sustantivo.'],
 ['El capítulo «quinto»','Complemento','En el análisis de la ficha, el numeral situado detrás del nombre funciona como complemento.']]);
choiceRows('nominal','Elige la afirmación correcta sobre el grupo nominal.', ['Se organiza alrededor de un sustantivo','Siempre contiene un verbo','Solo puede tener una palabra'],[
 ['El grupo nominal','Se organiza alrededor de un sustantivo','El sustantivo es el núcleo; puede ir acompañado de determinantes y complementos.']]);
choiceRows('adjectives','¿La palabra entre «comillas» es un sustantivo o un adjetivo?', ['Sustantivo','Adjetivo'],[
 ['La «montaña» nevada','Sustantivo','Montaña nombra una realidad: es un sustantivo.'],['Una tarde «tranquila»','Adjetivo','Tranquila expresa cómo es la tarde.'],['El perro está «contento».','Adjetivo','Contento expresa el estado del perro, aunque esté separado del nombre por un verbo.'],['El «jardín» pequeño','Sustantivo','Jardín nombra un lugar.']]);
choiceRows('adjectives','¿En qué grado está el adjetivo?', ['Positivo','Comparativo de superioridad','Comparativo de igualdad','Comparativo de inferioridad','Superlativo'],[
 ['Una niña alegre','Positivo','Alegre expresa una cualidad sin compararla ni intensificarla.'],
 ['Este camino es más largo que aquel.','Comparativo de superioridad','La estructura más… que compara expresando superioridad.'],
 ['Mi mochila es tan ligera como la tuya.','Comparativo de igualdad','Tan… como expresa igualdad.'],
 ['Esta caja es menos pesada que esa.','Comparativo de inferioridad','Menos… que expresa inferioridad.'],
 ['Una película divertidísima','Superlativo','La terminación -ísima expresa la cualidad en grado muy alto.'],
 ['El agua está muy fría.','Superlativo','Muy expresa la cualidad en un grado muy alto: superlativo absoluto.']]);
[
 ['Las casas son…',['blancas','blanco','blanca'],'blancas','Casas es femenino plural: el adjetivo debe ser blancas.'],
 ['Los caminos son…',['estrechos','estrecha','estrechas'],'estrechos','Caminos es masculino plural: concuerda con estrechos.'],
 ['La alumna está…',['contenta','contentos','contento'],'contenta','Alumna es femenino singular: concuerda con contenta.'],
 ['Los niños y las niñas están…',['alegres','alegre','alegras'],'alegres','Alegre tiene la misma forma para ambos géneros; su plural es alegres.']
].forEach(([w,o,a,e])=>add('adjectives','Completa respetando la concordancia.',w,o,a,e));
choiceRows('sentences','¿Es una frase sin verbo o una oración?', ['Frase sin verbo','Oración'],[
 ['¡Buenas tardes!','Frase sin verbo','El saludo tiene sentido completo y no contiene un verbo.'],
 ['La biblioteca abre temprano.','Oración','Abre es un verbo en forma personal.'],
 ['Prohibido el paso.','Frase sin verbo','Es un enunciado sin verbo en forma personal.'],
 ['Mis amigos leen en silencio.','Oración','Leen es una forma verbal personal.']]);
choiceRows('sentences','¿Qué intención expresa este enunciado?', ['Enunciativa','Interrogativa','Exclamativa','Exhortativa','Desiderativa','Dubitativa'],[
 ['Hoy tenemos clase de música.','Enunciativa','Informa de un hecho.'],['¿Dónde está mi estuche?','Interrogativa','Formula una pregunta.'],['¡Qué paisaje tan bonito!','Exclamativa','Expresa admiración.'],['Cierra la ventana, por favor.','Exhortativa','Pide que se realice una acción.'],['Ojalá deje de llover.','Desiderativa','Expresa un deseo; también se llama optativa.'],['Quizá venga mi primo.','Dubitativa','Expresa duda con quizá.']]);
[
 ['La profesora explica la lección.',['La profesora','explica la lección','la lección'],'La profesora','La profesora es de quien se dice que explica la lección.'],
 ['Los pájaros construyen un nido.',['Los pájaros','construyen un nido','un nido'],'Los pájaros','El sujeto concuerda en plural con construyen.']
].forEach(([w,o,a,e])=>add('sentences','¿Cuál es el sujeto?',w,o,a,e));
[
 ['Mi hermano dibuja un dragón.',['dibuja un dragón','Mi hermano','un dragón'],'dibuja un dragón','El predicado dice qué hace mi hermano e incluye el verbo dibuja.'],
 ['Los vecinos están contentos.',['están contentos','Los vecinos','contentos'],'están contentos','El predicado contiene el verbo están y lo que se dice de los vecinos.']
].forEach(([w,o,a,e])=>add('sentences','¿Cuál es el predicado?',w,o,a,e));
choiceRows('sentences','¿Qué tipo de predicado tiene?', ['Nominal','Verbal'],[
 ['La sopa está caliente.','Nominal','Está es copulativo y caliente es el atributo.'],['La niña salta a la comba.','Verbal','Salta es un verbo predicativo que expresa una acción.']]);
choiceRows('sentences','¿El sujeto está expreso u omitido?', ['Expreso','Omitido'],[
 ['Nosotros iremos al parque.','Expreso','Nosotros aparece escrito como sujeto.'],['Cantamos en el coro.','Omitido','El sujeto no aparece: la forma cantamos indica nosotros o nosotras.']]);
choiceRows('sentences','¿La oración es simple o compuesta?', ['Simple','Compuesta'],[
 ['Ana canta.','Simple','Contiene una sola forma verbal: canta.'],['Ana canta y Luis baila.','Compuesta','Contiene dos formas verbales: canta y baila.']]);
choiceRows('verbs','¿A qué conjugación pertenece este infinitivo?', ['Primera (-ar)','Segunda (-er)','Tercera (-ir)'],[
 ['saltar','Primera (-ar)','Los infinitivos terminados en -ar pertenecen a la primera conjugación.'],['beber','Segunda (-er)','Los infinitivos terminados en -er pertenecen a la segunda conjugación.'],['vivir','Tercera (-ir)','Los infinitivos terminados en -ir pertenecen a la tercera conjugación.'],['leer','Segunda (-er)','Leer termina en -er: segunda conjugación.']]);
choiceRows('verbs','¿Qué forma no personal es?', ['Infinitivo','Gerundio','Participio'],[
 ['comer','Infinitivo','El infinitivo sirve para nombrar el verbo.'],['cantando','Gerundio','El gerundio expresa la acción en desarrollo y termina aquí en -ando.'],['vivido','Participio','Vivido es el participio de vivir.'],['leyendo','Gerundio','Leyendo es el gerundio de leer.']]);
choiceRows('verbs','¿Qué tiempo expresa esta forma verbal?', ['Pasado','Presente','Futuro'],[
 ['Ayer jugué.','Pasado','Jugué sitúa la acción antes del momento actual.'],['Ahora estudio.','Presente','Estudio expresa lo que ocurre ahora.'],['Mañana viajaré.','Futuro','Viajaré sitúa la acción después del momento actual.']]);
choiceRows('verbs','¿La forma verbal es simple o compuesta?', ['Simple','Compuesta'],[
 ['hemos leído','Compuesta','Está formada por hemos, del verbo haber, y el participio leído.'],['escribieron','Simple','La forma verbal consta de una sola palabra.'],['había cantado','Compuesta','Había es una forma de haber; cantado es un participio.']]);
choiceRows('verbs','¿Qué modo verbal aparece?', ['Indicativo','Subjuntivo','Imperativo'],[
 ['María corre cada tarde.','Indicativo','Corre presenta la acción como real.'],['Ojalá ganemos el partido.','Subjuntivo','Ganemos expresa aquí un deseo.'],['¡Abre la puerta!','Imperativo','Abre da una orden afirmativa.']]);
[
 ['Nosotras bailamos.',['1.ª persona · plural','2.ª persona · singular','3.ª persona · plural'],'1.ª persona · plural','Bailamos concuerda con nosotras.'],
 ['Tú cantas.',['2.ª persona · singular','1.ª persona · plural','3.ª persona · singular'],'2.ª persona · singular','Cantas concuerda con tú.'],
 ['Ellos escriben.',['3.ª persona · plural','2.ª persona · plural','1.ª persona · singular'],'3.ª persona · plural','Escriben concuerda con ellos.'],
 ['La raíz de «cantar» es…',['cant-','canta-','-ar'],'cant-','Al quitar -ar al infinitivo cantar queda la raíz cant-.']
].forEach(([w,o,a,e])=>add('verbs','Elige la respuesta correcta.',w,o,a,e));
choiceRows('adverbs','¿Qué clase de adverbio aparece entre «comillas»?', ['Lugar','Tiempo','Modo','Cantidad','Afirmación','Negación','Duda'],[
 ['El perro duerme «aquí».','Lugar','Aquí indica dónde duerme.'],['Llegaremos «mañana».','Tiempo','Mañana indica cuándo llegaremos.'],['Has trabajado «bien».','Modo','Bien indica cómo has trabajado.'],['La sopa está «muy» caliente.','Cantidad','Muy intensifica el adjetivo caliente.'],['Yo «también» iré.','Afirmación','También añade una afirmación.'],['Hoy «no» saldremos.','Negación','No niega la acción de salir.'],['«Quizá» llueva.','Duda','Quizá expresa incertidumbre.'],['La estación está «lejos».','Lugar','Lejos indica una distancia o lugar.'],['«Ayer» fui al cine.','Tiempo','Ayer sitúa la acción en el tiempo.'],['Camina «despacio».','Modo','Despacio indica cómo camina.'],['Hemos comido «bastante».','Cantidad','Bastante expresa cuánto hemos comido.'],['Yo «tampoco» lo sé.','Negación','Tampoco añade una negación.']]);
choiceRows('adverbs','¿A qué palabra modifica el adverbio entre «comillas»?', ['A un verbo','A un adjetivo','A otro adverbio'],[
 ['Corre «rápidamente».','A un verbo','Rápidamente modifica al verbo corre: dice cómo corre.'],['Un libro «muy» interesante','A un adjetivo','Muy modifica al adjetivo interesante.'],['Vive «bastante» cerca.','A otro adverbio','Bastante modifica al adverbio cerca.']]);
choiceRows('links','¿Qué clase de palabra de enlace aparece entre «comillas»?', ['Preposición','Conjunción'],[
 ['Un regalo «para» Clara','Preposición','Para une regalo con su destinataria, Clara.'],['Pan «y» queso','Conjunción','Y une dos elementos y expresa suma.'],['Un libro «sobre» animales','Preposición','Sobre introduce el tema del libro.'],['Quiero salir, «pero» llueve.','Conjunción','Pero enlaza dos ideas que se contraponen.'],['Té «o» leche','Conjunción','O presenta dos opciones.'],['Paseamos «durante» una hora.','Preposición','Durante introduce un complemento de tiempo.'],['Una casa «sin» jardín','Preposición','Sin indica ausencia.'],['Ni corre «ni» salta.','Conjunción','Ni une dos acciones negadas.']]);
choiceRows('links','¿Qué clase de conjunción es?', ['Copulativa (suma)','Disyuntiva (opción)','Adversativa (contraste)'],[
 ['y','Copulativa (suma)','Y une añadiendo un elemento a otro.'],['o','Disyuntiva (opción)','O expresa una elección.'],['pero','Adversativa (contraste)','Pero contrapone dos ideas.'],['ni','Copulativa (suma)','Ni añade elementos en una expresión negativa.']]);
[
 ['Padres ___ hijos',['e','y','u'],'e','La conjunción y cambia a e ante el sonido /i/: hijos empieza por ese sonido.'],
 ['Siete ___ ocho',['u','o','e'],'u','La conjunción o cambia a u ante el sonido /o/.'],
 ['No es azul, ___ verde.',['sino','sin','sobre'],'sino','Sino corrige una idea negada anteriormente.'],
 ['Se esconden ___ la mesa.',['bajo','pero','ni'],'bajo','Bajo es una preposición que indica posición.']
].forEach(([w,o,a,e])=>add('links','Completa con la palabra de enlace adecuada.',w,o,a,e));
choiceRows('vocabulary','¿Son sinónimos o antónimos?', ['Sinónimos','Antónimos'],[
 ['bailar / danzar','Sinónimos','Ambos verbos expresan una acción semejante.'],['entrar / salir','Antónimos','Expresan acciones contrarias.'],['cabello / pelo','Sinónimos','Nombran lo mismo en este contexto.'],['sencillo / complicado','Antónimos','Expresan cualidades opuestas.'],['ocultar / esconder','Sinónimos','Ambas palabras significan poner algo fuera de la vista.'],['subir / bajar','Antónimos','Indican movimientos contrarios.'],['sendero / camino','Sinónimos','En este contexto nombran una vía para pasar.'],['alto / bajo','Antónimos','Son cualidades opuestas.']]);
[
 ['Un trozo de pan',['pedazo','vaso','plato'],'pedazo','Pedazo puede sustituir a trozo conservando el sentido.'],
 ['El triunfo del equipo',['victoria','derrota','ensayo'],'victoria','Victoria y triunfo tienen un significado semejante.'],
 ['Una alumna nueva',['estudiante','profesora','directora'],'estudiante','Estudiante es un sinónimo de alumna.'],
 ['Antónimo de posible',['imposible','inposible','desposible'],'imposible','Ante p se usa im- para formar imposible.'],
 ['Antónimo de cómodo',['incómodo','imcómodo','acomodado'],'incómodo','El prefijo in- forma incómodo.'],
 ['Antónimo de paciente',['impaciente','inpaciente','despaciente'],'impaciente','Ante p se usa im-: impaciente.'],
 ['Antónimo de constante',['inconstante','imconstante','reconstante'],'inconstante','In- indica aquí la cualidad contraria.']
].forEach(([w,o,a,e])=>add('vocabulary','Elige la palabra adecuada.',w,o,a,e));
choiceRows('vocabulary','Fíjate en los significados indicados: ¿es monosémica o polisémica?', ['Monosémica','Polisémica'],[
 ['tirita: pequeña tira adhesiva para cubrir una herida','Monosémica','En la ficha, tirita se presenta con un solo significado.'],
 ['olla: recipiente para cocinar / guiso preparado en él','Polisémica','Una misma palabra tiene varios significados relacionados.'],
 ['capa: prenda / nivel o cubierta de algo','Polisémica','Capa tiene varios significados relacionados.'],
 ['pie: parte del cuerpo / parte inferior de una lámpara','Polisémica','Pie puede nombrar ambas realidades: es polisémica.']]);
[
 ['La ___ come hierba.',['vaca','baca'],'vaca','Vaca es el animal; baca es el soporte sobre un vehículo.'],
 ['Pusimos las maletas en la ___ del coche.',['baca','vaca'],'baca','La baca sirve para llevar equipaje sobre el coche.'],
 ['¡___, qué alegría verte!',['Hola','Ola'],'Hola','Hola es un saludo; ola es una onda del mar.'],
 ['Una ___ llegó hasta la arena.',['ola','hola'],'ola','Ola nombra el movimiento del agua.'],
 ['El ___ de pasta de dientes está vacío.',['tubo','tuvo'],'tubo','Tubo es un recipiente; tuvo es una forma de tener.'],
 ['Ayer ___ mucha suerte.',['tuvo','tubo'],'tuvo','Tuvo es pasado del verbo tener.'],
 ['Saltamos la ___ del jardín.',['valla','vaya'],'valla','Valla es una cerca.'],
 ['Espero que ___ contigo.',['vaya','valla'],'vaya','Vaya es una forma del verbo ir.'],
 ['Tiene el ___ de los brazos muy claro.',['vello','bello'],'vello','Vello es el pelo corto del cuerpo.'],
 ['El paisaje era muy ___.',['bello','vello'],'bello','Bello significa bonito.'],
 ['Una piedra formó una ___ en el agua.',['onda','honda'],'onda','Onda es una ondulación; honda puede significar profunda.'],
 ['Esta piscina es muy ___.',['honda','onda'],'honda','Honda significa profunda.']
].forEach(([w,o,a,e])=>add('vocabulary','Completa según el significado de la frase.',w,o,a,e));
choiceRows('communication','¿Qué forma de comunicación predomina?', ['Gesto','Señal visual','Señal acústica','Lenguaje oral','Lenguaje escrito'],[
 ['Una persona saluda moviendo la mano.','Gesto','El movimiento de la mano transmite el saludo.'],
 ['Se enciende la luz verde del semáforo.','Señal visual','La información se recibe a través de la vista.'],
 ['Suena la alarma de una tienda.','Señal acústica','La alarma comunica mediante un sonido.'],
 ['Una profesora explica un problema hablando.','Lenguaje oral','Utiliza palabras habladas.'],
 ['Lees una nota que han dejado en tu mesa.','Lenguaje escrito','El mensaje está formado por palabras escritas.']]);
choiceRows('communication','Lucía dice a Pablo: «La excursión es mañana». ¿Qué elemento se pide?', ['Lucía','Pablo','La excursión es mañana','La lengua española','El aire que transmite la voz'],[
 ['¿Quién es el emisor?','Lucía','El emisor produce y envía el mensaje.'],
 ['¿Quién es el receptor?','Pablo','El receptor recibe el mensaje.'],
 ['¿Cuál es el mensaje?','La excursión es mañana','El mensaje es la información que se comunica.'],
 ['¿Cuál es el código?','La lengua española','El código es el sistema de signos utilizado: en este caso, el español.'],
 ['¿Cuál es el canal físico de esta conversación oral?','El aire que transmite la voz','El canal es el medio físico por el que se transmite el mensaje.']]);
[
 ['Marcos escribe a Sara: «Llegaré a las cinco». ¿Quién recibe el mensaje?',['Sara','Marcos','Las cinco'],'Sara','Sara es la destinataria, es decir, la receptora.'],
 ['Una locutora habla por la radio. ¿Quién es el emisor?',['La locutora','El oyente','La noticia'],'La locutora','La locutora es quien produce el mensaje.']
].forEach(([w,o,a,e])=>add('communication','Elige la respuesta correcta.',w,o,a,e));
const languagePassage={title:'¿Cómo aprendemos a hablar?',text:'En una entrevista, una especialista explica que el contacto con otras personas es muy importante para aprender una lengua. Menciona el caso de una niña que llegó a la adolescencia sin haber aprendido a hablar y después tuvo grandes dificultades para hacerlo. En la entrevista se proponen dos posibles causas: su estado de salud y la edad a la que comenzó a aprender.\n\nLa especialista compara el lenguaje humano con los sonidos de los pájaros. Según la lectura, ambos pueden producir sonidos rápidos y precisos y necesitan un periodo de aprendizaje. Las crías de los pájaros ensayan sus sonidos, de una manera que recuerda al balbuceo de los bebés. Además, algunos pájaros tienen dialectos diferentes según la zona.\n\nPor último, la entrevistada señala una diferencia con los chimpancés: las personas sienten la necesidad de poner nombre a las cosas. En los ejemplos de la entrevista, los chimpancés aprenden nombres para recibir un premio.',credit:'Adaptación didáctica de la entrevista de la ficha «CL - LA LENGUA», aportada para esta práctica.'};
[
 ['¿Cuál es el tema principal?',['El aprendizaje del lenguaje y su comparación con la comunicación animal','Las rutas de las aves migratorias','La alimentación de los chimpancés'],'El aprendizaje del lenguaje y su comparación con la comunicación animal','Las tres partes tratan sobre aprender a hablar y comparar la comunicación humana y animal.'],
 ['¿Qué facilita aprender una lengua, según el texto?',['El contacto con otras personas','Vivir sin escuchar a nadie','Aprender solo nombres de animales'],'El contacto con otras personas','La primera parte destaca la importancia del contacto con otras personas.'],
 ['¿Qué le sucedió a la niña mencionada?',['Tuvo grandes dificultades para aprender a hablar','Ya dominaba varias lenguas','Aprendió sin ninguna dificultad'],'Tuvo grandes dificultades para aprender a hablar','El texto dice que llegó a la adolescencia sin aprender a hablar y después le resultó muy difícil.'],
 ['¿Qué dos posibles causas se mencionan?',['Su salud y la edad de inicio del aprendizaje','El clima y la estación del año','Su altura y el lugar donde vivía'],'Su salud y la edad de inicio del aprendizaje','La entrevista propone el estado de salud y la edad a la que comenzó.'],
 ['¿Con qué animales se compara especialmente el lenguaje humano?',['Con los pájaros','Con los peces','Con las tortugas'],'Con los pájaros','La segunda parte compara los sonidos humanos con los de los pájaros.'],
 ['¿Qué tienen en común humanos y pájaros en la lectura?',['Necesitan un periodo de aprendizaje de sus sonidos','Emplean siempre las mismas palabras','Hablan todas las lenguas humanas'],'Necesitan un periodo de aprendizaje de sus sonidos','El texto menciona expresamente un periodo de aprendizaje.'],
 ['¿A qué se compara el ensayo de sonidos de las crías de pájaro?',['Al balbuceo de los bebés','A la lectura de un libro','A una conversación por escrito'],'Al balbuceo de los bebés','La comparación aparece en el segundo párrafo.'],
 ['¿Qué varía entre algunos pájaros según la zona?',['Sus dialectos','El número de patas','Su necesidad de agua'],'Sus dialectos','La lectura indica que algunos pájaros tienen dialectos de distintas zonas.'],
 ['¿Por qué aprenden nombres los chimpancés en los ejemplos del texto?',['Para recibir un premio','Para escribir un periódico','Para enseñar una lengua a los bebés'],'Para recibir un premio','La última parte relaciona ese aprendizaje con recibir una recompensa.'],
 ['¿Qué orden sigue la lectura?',['Aprendizaje humano → pájaros → chimpancés','Chimpancés → pájaros → aprendizaje humano','Pájaros → chimpancés → alimentación'],'Aprendizaje humano → pájaros → chimpancés','Primero habla del contacto humano; después de los pájaros; por último de los chimpancés.'],
 ['¿Qué título resume mejor la lectura?',['Aprender a hablar: humanos y animales','Cómo cuidar una mascota','Un viaje por el bosque'],'Aprender a hablar: humanos y animales','Ese título recoge el aprendizaje del lenguaje y la comparación con animales.'],
 ['¿Qué afirmación NO aparece en el texto?',['Los pájaros saben escribir','Los bebés balbucean','El contacto humano ayuda al aprendizaje'],'Los pájaros saben escribir','El texto habla de producir y aprender sonidos; no afirma que los pájaros escriban.']
].forEach(([w,o,a,e])=>{add('reading','Según la lectura, elige la respuesta correcta.',w,o,a,e);bank[bank.length-1].passage=languagePassage});
[
 ['___ tienes una mochila azul.',['Tú','Tu'],'Tú','Tú lleva tilde cuando es pronombre personal.'],
 ['He encontrado ___ estuche.',['tu','tú'],'tu','Tu acompaña a estuche: es posesivo y no lleva tilde.'],
 ['___ llegó antes que nosotros.',['Él','El'],'Él','Él es pronombre personal y lleva tilde.'],
 ['___ tren sale a las ocho.',['El','Él'],'El','El acompaña a tren: es artículo y no lleva tilde.'],
 ['Este regalo es para ___.',['mí','mi'],'mí','Mí es pronombre personal después de para.'],
 ['___ hermana juega al tenis.',['Mi','Mí'],'Mi','Mi es posesivo y acompaña a hermana.'],
 ['Ya ___ la respuesta.',['sé','se'],'sé','Sé es una forma del verbo saber.'],
 ['Ana ___ peina cada mañana.',['se','sé'],'se','Se es un pronombre y no lleva tilde.'],
 ['Espero que me ___ permiso.',['dé','de'],'dé','Dé es una forma del verbo dar.'],
 ['La mochila ___ Luis es verde.',['de','dé'],'de','De es una preposición.'],
 ['¿Quieres una taza de ___?',['té','te'],'té','Té nombra la bebida y lleva tilde diacrítica.'],
 ['Yo ___ ayudaré.',['te','té'],'te','Te es pronombre personal.'],
 ['___, quiero acompañarte.',['Sí','Si'],'Sí','Sí expresa afirmación.'],
 ['___ llueve, llevaremos paraguas.',['Si','Sí'],'Si','Si introduce una condición.'],
 ['Quiero un poco ___ de agua.',['más','mas'],'más','Más expresa cantidad.'],
 ['Quise ir, ___ no pude.',['mas','más'],'mas','Mas equivale a pero y no lleva tilde.'],
 ['___ no ha llegado; todavía lo esperamos.',['Aún','Aun'],'Aún','Aún equivale a todavía.'],
 ['___ los más pequeños participaron: nadie se quedó fuera.',['Aun','Aún'],'Aun','Aun equivale aquí a incluso.'],
 ['¿___ estás contenta?',['Por qué','Porque'],'Por qué','Por qué introduce una pregunta por la causa.'],
 ['Estoy contenta ___ has venido.',['porque','por qué'],'porque','Porque introduce la causa o explicación.']
].forEach(([w,o,a,e])=>add('diacritics','Completa con la opción correcta.',w,o,a,e));
// New examples extend existing sets; repeated worksheet files are not imported again.
const moreVowels=[['paella','Hiato','pa-e-lla'],['violeta','Diptongo','vio-le-ta'],['puerta','Diptongo','puer-ta'],['farmacéutico','Diptongo','far-ma-céu-ti-co'],['oasis','Hiato','o-a-sis'],['sitio','Diptongo','si-tio'],['serpiente','Diptongo','ser-pien-te'],['periódico','Diptongo','pe-rió-di-co'],['diente','Diptongo','dien-te'],['miedo','Diptongo','mie-do'],['traducción','Diptongo','tra-duc-ción'],['anchoa','Hiato','an-cho-a'],['pescadería','Hiato','pes-ca-de-rí-a'],['columpio','Diptongo','co-lum-pio'],['frecuente','Diptongo','fre-cuen-te'],['oeste','Hiato','o-es-te'],['zanahoria','Diptongo','za-na-ho-ria'],['diario','Diptongo','dia-rio'],['toalla','Hiato','to-a-lla'],['canoa','Hiato','ca-no-a'],['jaula','Diptongo','jau-la'],['creativo','Hiato','cre-a-ti-vo'],['peine','Diptongo','pei-ne'],['tranvía','Hiato','tran-ví-a'],['ciudad','Diptongo','ciu-dad'],['cacao','Hiato','ca-ca-o'],['magia','Diptongo','ma-gia'],['viaje','Diptongo','via-je'],['poeta','Hiato','po-e-ta'],['oído','Hiato','o-í-do'],['pueblo','Diptongo','pue-blo'],['labio','Diptongo','la-bio'],['teatro','Hiato','te-a-tro']];
moreVowels.forEach(([w,a,s])=>{if(!bank.some(q=>q.topic==='vowels'&&q.word===w))add('vowels','¿Diptongo o hiato?',w,['Diptongo','Hiato'],a,`${w} se separa así: ${s}. ${a==='Hiato'?'Las vocales del hiato van en sílabas distintas.':'Las vocales del diptongo permanecen en la misma sílaba.'}`)});
[
 ['saxofon','saxofón','saxofon','Es aguda y termina en n.'],['raton','ratón','raton','Es aguda y termina en n.'],['album','álbum','album','Es llana y termina en m, distinta de n o s.'],['arbol','árbol','arbol','Es llana y termina en l.'],['sofa','sofá','sofa','Es aguda y termina en vocal.'],['cesped','césped','cesped','Es llana y termina en d.'],['medico','médico','medico','Es esdrújula y lleva tilde.'],['cuentamelo','cuéntamelo','cuentamelo','Es sobreesdrújula y lleva tilde.'],['feliz','feliz','féliz','Es aguda y termina en z: no lleva tilde.'],['bondad','bondad','bóndad','Es aguda y termina en d: no lleva tilde.'],['director','director','directór','Es aguda y termina en r: no lleva tilde.'],['pie','pie','pié','Es monosílaba y no necesita tilde diacrítica.'],['fui','fui','fuí','Es monosílaba y no lleva tilde.']
].forEach(([w,a,b,e])=>{if(!bank.some(q=>q.topic==='accents'&&q.word===w))add('accents','Elige la escritura correcta.',w,[a,b],a,e)});
moreVowels.slice(0,18).forEach(([w,a,s])=>{if(!bank.some(q=>q.topic==='syllables'&&q.word===w))add('syllables','¿Cómo se separa en sílabas?',w,[s,s.replace('-','')],s,`La separación correcta es ${s}. ${a==='Hiato'?'El hiato se divide entre dos sílabas.':'Las vocales del diptongo permanecen juntas.'}`)});
choiceRows('pronouns','¿Qué tipo de pronombre es?', ['Tónico','Átono'],[
 ['usted','Tónico','Usted tiene acento propio y se usa para dirigirse formalmente a otra persona.'],['ustedes','Tónico','Ustedes tiene acento propio; se refiere a las personas a quienes se habla.'],['conmigo','Tónico','Conmigo es una forma tónica relacionada con la primera persona singular.'],['consigo','Tónico','Consigo es una forma tónica reflexiva de tercera persona.'],['os','Átono','Os es un pronombre sin acento propio que acompaña a un verbo.'],['las','Átono','En «Las vi ayer», las sustituye a un nombre y es un pronombre átono.']]);
choiceRows('sentences','¿La oración está en voz activa o pasiva?', ['Activa','Pasiva'],[
 ['El jardinero plantó las flores.','Activa','El sujeto, el jardinero, realiza la acción de plantar.'],['Las flores fueron plantadas por el jardinero.','Pasiva','El sujeto, las flores, recibe la acción; el verbo es fueron plantadas.'],['Los alumnos organizaron la fiesta.','Activa','Los alumnos realizan la acción de organizar.'],['La fiesta fue organizada por los alumnos.','Pasiva','La fiesta recibe la acción; fue organizada expresa voz pasiva.']]);
choiceRows('verbs','¿Qué clase de verbo se describe?', ['Regular','Irregular','Defectivo'],[
 ['Cantar mantiene su raíz y sigue el modelo: canto, cantabas, cantarán.','Regular','Cantar conserva la raíz cant- y sigue su modelo de conjugación.'],['Tener cambia su raíz en formas como tengo y tuve.','Irregular','Sus formas se apartan del modelo regular.'],['Llover se usa habitualmente en tercera persona singular para hablar del tiempo.','Defectivo','En su uso meteorológico no se emplean todas las personas de la conjugación.'],['Vivir sigue el modelo: vivo, viviste, viviremos.','Regular','Conserva viv- y las terminaciones del modelo de la tercera conjugación.']]);
[
 ['Adverbio formado a partir de «clara»',['claramente','claramenta','claramientos'],'claramente','Se añade -mente al adjetivo en femenino singular: clara + mente.'],
 ['Adverbio formado a partir de «rápida»',['rápidamente','rapidamiente','rápidomente'],'rápidamente','Se forma con rápida + mente y conserva la tilde del adjetivo.']
].forEach(([w,o,a,e])=>add('adverbs','Elige la formación correcta.',w,o,a,e));
[
 ['___ niñas llevan abrigo.',['Estas','Este','Estos'],'Estas','Niñas es femenino plural: el demostrativo debe concordar.'],
 ['Veo ___ árbol muy alto.',['aquel','aquella','aquellas'],'aquel','Árbol es masculino singular: concuerda con aquel.'],
 ['___ cuadernos están en la mesa.',['Nuestros','Nuestra','Nuestro'],'Nuestros','Cuadernos es masculino plural.'],
 ['He leído ___ páginas.',['muchas','mucho','muchos'],'muchas','Páginas es femenino plural: corresponde muchas.']
].forEach(([w,o,a,e])=>add('determiners','Completa con el determinante que concuerda.',w,o,a,e));
