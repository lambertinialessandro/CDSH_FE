import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const staff = [
  {
    name: 'Javier Báez',
    role: 'School Director',
    src: '/assets/img/staff/cdsh-javier-baez-262x262.jpg',
    subjects: ['Choreography'],
    description: [
      'born in Mexico, began studying ballet and modern dance in San Luis Potosì at the Escuela Estatal de Danza. He graduated from the school of the Ballet Independiente in Mexico City. He performed on numerous national and international tours and gave many guest appearances.',
      'As a dancer, Javier worked with the Ballett Independiente, at the State Theater Lübeck, the Metropol Theater Berlin and with the Tanzcompany Lübeck as well as TanzOrtNord and gave guest performances at the Hamburg State Opera.',
      'In 1996, Javier began teaching at the Irene-Olk School in Lübeck where he taught Graham technique and ballet, as well as at other private contemporary dance institutes and various dance companies. He has been in charge of the CDSH since 2005 where he also works as a choreographer.',
    ],
  },
  {
    name: 'Raul Valdez',
    role: 'Artistic direction',
    src: '/assets/img/staff/cdsh-raul-valdez-262x262.jpg',
    subjects: ['Choreography', 'Contemporary'],
    description: [
      'was born in Santo Domingo and studied classical ballet and contemporary dance in the Dominican Republic, at the Dance Theatre Harlem in New York and at the Escuela Nacional de Danza in Cuba.',
      'Raul danced in Europe and Central America with Oscar Araiz, Antonio Gomes and Anna Maria Stekelmann, as well as with the dance ensemble “Danzahoy” with Jeremy Nelson, David Zambrano, Clover Roope and Risa Steinberg. Raul performed on numerous tours all over the world. As a choreographer and dancer he worked at the state theatres in Braunschweig and Karlsruhe, and also gave guest performances at the state theatre in Bern. In 1999, he was awarded the »Prix Dom Perignon« choreographic prize by the Hamburg Ballet John Neumeier.',
      'Raul has worked as a contemporary dance and choreography instructor in vocational schools all over the world for many years.',
    ],
  },
  {
    name: 'Sina Rundel',
    role: 'Operational management',
    src: '/assets/img/staff/cdsh-sina-rundel-262x262.jpg',
    subjects: ['History of Dance'],
    description: [
      'completed her Bachelor of Arts in Art, Music and Media: Organization and Communication at the Philipps University Marburg in 2011. After starting her Master’s degree in Art History at the University of Hamburg, she began training as a contemporary stage dancer at CDSH Contemporary Dance School Hamburg in 2012, graduating in 2015. She received her master’s degree in art history in 2018.',
      'Sina has worked as a dancer in projects by Hamburg-based choreographer Orthia Feuße Strakenbrock and is a permanent ensemble member of Sticky Trace Company. As a production assistant, she supervised two productions of the same in 2016. Sina has participated in choreography competitions with her solo choreography Gespräch mit meiner Oberfläche, she gave workshops on bodylinguistic translation processes for young people, and works as a guest choreographer and teacher of dance and movement in the field of inclusive theater. She has been part of Ursina Tossi’s productions REVENANTS and fux as her artistic assistant and has been working as a freelance producer for Hamburg-based choreographers since 2022. As such, she has supervised Raymond Liew Jin Pin’s production Maria Cencaru – A Southeast Asian Cis-Sis Reunion. In addition to her dance-related work, Sina has also been involved in event management in an art and museum context.',
      'Since November 2016, she has been a teacher and Assistant Director, and from March 2020 to December 2021, Operational Manager of CDSH. Since January 2022 she is Communication Manager and Student Support at CDSH.',
    ],
  },
  {
    name: 'Martin Stöckle',
    role: 'Commercial consultant',
    src: '/assets/img/staff/Martin-f2-v4-webCDSH-6438-1-262x262.jpg',
    subjects: [],
    description: [],
  },
];

const teachers = [
  {
    name: 'Javier Báez',
    role: 'School Director',
    src: '/assets/img/staff/cdsh-javier-baez-262x262.jpg',
    subjects: ['Choreography'],
    description: [
      'born in Mexico, began studying ballet and modern dance in San Luis Potosì at the Escuela Estatal de Danza. He graduated from the school of the Ballet Independiente in Mexico City. He performed on numerous national and international tours and gave many guest appearances.',
      'As a dancer, Javier worked with the Ballett Independiente, at the State Theater Lübeck, the Metropol Theater Berlin and with the Tanzcompany Lübeck as well as TanzOrtNord and gave guest performances at the Hamburg State Opera.',
      'In 1996, Javier began teaching at the Irene-Olk School in Lübeck where he taught Graham technique and ballet, as well as at other private contemporary dance institutes and various dance companies. He has been in charge of the CDSH since 2005 where he also works as a choreographer.',
    ],
  },
  {
    name: 'Raul Valdez',
    role: 'Artistic direction',
    src: '/assets/img/staff/cdsh-raul-valdez-262x262.jpg',
    subjects: ['Choreography', 'Contemporary'],
    description: [
      'was born in Santo Domingo and studied classical ballet and contemporary dance in the Dominican Republic, at the Dance Theatre Harlem in New York and at the Escuela Nacional de Danza in Cuba.',
      'Raul danced in Europe and Central America with Oscar Araiz, Antonio Gomes and Anna Maria Stekelmann, as well as with the dance ensemble “Danzahoy” with Jeremy Nelson, David Zambrano, Clover Roope and Risa Steinberg. Raul performed on numerous tours all over the world. As a choreographer and dancer he worked at the state theatres in Braunschweig and Karlsruhe, and also gave guest performances at the state theatre in Bern. In 1999, he was awarded the »Prix Dom Perignon« choreographic prize by the Hamburg Ballet John Neumeier.',
      'Raul has worked as a contemporary dance and choreography instructor in vocational schools all over the world for many years.',
    ],
  },
  {
    name: 'Sina Rundel',
    role: 'Operational management',
    src: '/assets/img/staff/cdsh-sina-rundel-262x262.jpg',
    subjects: ['History of Dance'],
    description: [
      'completed her Bachelor of Arts in Art, Music and Media: Organization and Communication at the Philipps University Marburg in 2011. After starting her Master’s degree in Art History at the University of Hamburg, she began training as a contemporary stage dancer at CDSH Contemporary Dance School Hamburg in 2012, graduating in 2015. She received her master’s degree in art history in 2018.',
      'Sina has worked as a dancer in projects by Hamburg-based choreographer Orthia Feuße Strakenbrock and is a permanent ensemble member of Sticky Trace Company. As a production assistant, she supervised two productions of the same in 2016. Sina has participated in choreography competitions with her solo choreography Gespräch mit meiner Oberfläche, she gave workshops on bodylinguistic translation processes for young people, and works as a guest choreographer and teacher of dance and movement in the field of inclusive theater. She has been part of Ursina Tossi’s productions REVENANTS and fux as her artistic assistant and has been working as a freelance producer for Hamburg-based choreographers since 2022. As such, she has supervised Raymond Liew Jin Pin’s production Maria Cencaru – A Southeast Asian Cis-Sis Reunion. In addition to her dance-related work, Sina has also been involved in event management in an art and museum context.',
      'Since November 2016, she has been a teacher and Assistant Director, and from March 2020 to December 2021, Operational Manager of CDSH. Since January 2022 she is Communication Manager and Student Support at CDSH.',
    ],
  },
  {
    name: 'Yolanda Morales',
    src: '/assets/img/staff/Foto-Yolanda-555x555.jpg',
    subjects: ['Choreography'],
    description: [
      'born in Mexico, is a Hamburg based choreographer, dancer and performer. After receiving her dance education at the Universidad de Ciencias y Artes in Chiapas and at the Universidad in Puebla (BUAP) (Acap-INBA) in  Mexico, she completed the Master in Performance Studies at the University of Hamburg in 2018.',
      'Her work focuses on the dystopic/utopic space as a space of resistence, the development of fictitious bodies responding to politcal, social and enviromental issues of this contemporary world from a feminist approach using reconstruction, recontextualization and reinterpretation of movement as a form of social and political resistance. Yolanda dedicates her work to current political and social issues, especially from Latin America that resonate worldwide.',
      'Her productions 2666, NERVEN and HORSES have been and are invited to festivals in Germany and internationally. In cooperation with the Markk Museum and supported by the program #TakePart from the Fonds Darstellende Künste, Morales has developed the project MOVING IMAGINATIVE BODIES, a format of open rehearsals and workshops. She showed her solo works on different stages and in galleries of Mexico and Germany. Among others, Yolanda works with the choreographers Patricia Carolin Mai, Yolanda Gutiérrez, Fernanda Ortiz, Barbara Schmidt Rohr, Juan Dominguez and Arantxa and José Vidal. Recently she has worked as a choreographer with the artistic collective POOL by YOVO! YOVO! and the Theater Peripherie directed by Ute Bansemir in Frankfurt.',
      'Since 2022 Yolanda is choreographing for and with the first educational year of the Contemporary Dance School Hamburg.',
    ],
  },
  {
    name: 'Ursina Tossi',
    src: '/assets/img/staff/cdsh-ursina-tossi-555x555.jpg',
    subjects: ['Choreography', 'Improvisation', 'Guest choreographer', 'Guest teacher'],
    description: [
      'studied dance and philosophy in Mannheim/Ludwigshafen and choreography at ArtEZ in Arnhem, Netherlands. She has worked with Aki Kato, Filip van Huffel, Tamaki Serizawa, Angela Guereiro, Angela Kecinski, Fernanda Ortiz and is active in Treffen Total.In 2005 Ursina founded the tossi-company, in 2008 the all1-forum, an interdisciplinary festival for art and dance. In 2011 she received the DanceWEB scholarship at the Impuls Tanz Festival in Vienna, in 2012 she was resident choreographer at K3 - Choreografisches Zentrum Tanzplan/Hamburg. From 2014-16 she was a research assistant and lecturer in Performance Studies at the Uni-Hamburg.',
      'In co-production with Kampnagel and Tanzfaktur Cologne, Ursina has produced BARE BODIES 2017, BLUE MOON 2018, WITCHES 2019, REVENANTS 2020 and FUX 2021 - a piece for young audiences with and without visual impairment - and COSMICBODIES 2022 - a piece about alien bodies and extreme othering. She held the DanceWeb fellowship at the Vienna Impuls Dance Festival and the 8-month residency at K3 in 2012. Her work combines dance and political discourse with intense physicality. Ursinas pieces arise from a queer-feminist position and together with the people she works with. The aesthetics are inspired by pop culture, science fiction, activism, movies, the horror genre and the visual arts. They convince the audience with strong images, dance virtuosity, content and choreographic conciseness and atmospheric density. Artistic access and integrated audio description are part of her work.',
      'Ursina has been teaching Contemporary and Improvisation at CDSH since 2010 and choreographing in collaboration with first and second years students. Since 2022 Ursina is teaching Improvisation and choreographs for and with the second educational year at Contemporary Dance School Hamburg.',
    ],
  },
  {
    name: 'Monique Smith-Dowell',
    src: '/assets/img/staff/Monique-Smith-McDowell-555x555.jpg',
    subjects: ['Pilates'],
    description: [
      'is a British choreographer, performer and Pilates instructor based in Hamburg. She completed her training at London Contemporary Dance School. Throughout her career Monique follows an inquisitive desire to explore how other movement forms influence the contemporary language of dance movement.',
      'As a dancer, she has had the pleasure to work with Disney’s The Lion King, Cats the musical, Jessica Nupen, Ursina Tossi, Sticky Trace Company, Barak Marshall and Richard Alston Dance Company to name a few.',
      'In 2021, Monique guest choreographed in collaboration with Sticky Trace Company, on the choreography ‘Frenzy’ for the students of CDSH.',
      'Monique’s debut solo choreography, a co-production with K3|Tanzplan, “In the Black” premiered 2023 at Kampnagel.',
      'Since 2021, Monique is a certified BASI Pilates trainer, and has had the pleasure to train dancers across Hamburg on how to build strength and mobility, maintain healthy practices and aid injury rehabilitation.',
    ],
  },
  {
    name: 'Irina Vikulina',
    src: '/assets/img/staff/cdsh-irina-vikulina-555x555.jpg',
    subjects: ['Yoga'],
    description: [
      'was born in Russia. After completing her engineering studies as a medical technician, Irina studied contemporary dance and yoga in Moscow/St. Petersburg and formed her own dance company.',
      'In 2009, Irina completed her training at the CDSH Contemporary Dance School Hamburg and courses in Pilates technique. Residency at  Kampnagel (Hamburg). She developed choreographies for the Hamburger Sprechwerk. Irina’s extensive educational work focuses on yoga, Pilates and contemporary dance.',
    ],
  },
  {
    name: 'Gioia De Piccoli',
    src: '/assets/img/staff/5F4F3F1C-B442-4101-BE1D-ADA992E1DC3C-555x555.jpeg',
    subjects: ['Contemporary'],
    description: [
      'born in Italy (Venice) in 1997, started her dance studies at the age of 11 mostly concentrating on Ballet and contemporary. In 2015 she graduated as professional dancer at LaChance Ballet (Rome) where she also graduated as a theacher the next year.',
      'She continued her studies at CDSH-Contemporary Dance School Hamburg to graduate in 2019. Gioia worked as a dancer for the band Still in Search in 2016, in 2018 she was dancing with Sticky Trace Company, directed by Uta Engel, for the project “Leaving”. Since 2020 Gioia is a member of Company 2525 working on the projects “Brain” and “Perzeption” as well as a dancer of the HDC-Hamburg Dance Company, directed by Javier Báez-Velez.',
    ],
  },
];

const workshops = [
  {
    name: 'Javier Báez',
    role: 'School Director',
    src: '/assets/img/staff/cdsh-javier-baez-262x262.jpg',
    subjects: ['Choreography'],
    description: [
      'born in Mexico, began studying ballet and modern dance in San Luis Potosì at the Escuela Estatal de Danza. He graduated from the school of the Ballet Independiente in Mexico City. He performed on numerous national and international tours and gave many guest appearances.',
      'As a dancer, Javier worked with the Ballett Independiente, at the State Theater Lübeck, the Metropol Theater Berlin and with the Tanzcompany Lübeck as well as TanzOrtNord and gave guest performances at the Hamburg State Opera.',
      'In 1996, Javier began teaching at the Irene-Olk School in Lübeck where he taught Graham technique and ballet, as well as at other private contemporary dance institutes and various dance companies. He has been in charge of the CDSH since 2005 where he also works as a choreographer.',
    ],
  },
  {
    name: 'Raul Valdez',
    role: 'Artistic direction',
    src: '/assets/img/staff/cdsh-raul-valdez-262x262.jpg',
    subjects: ['Choreography', 'Contemporary'],
    description: [
      'was born in Santo Domingo and studied classical ballet and contemporary dance in the Dominican Republic, at the Dance Theatre Harlem in New York and at the Escuela Nacional de Danza in Cuba.',
      'Raul danced in Europe and Central America with Oscar Araiz, Antonio Gomes and Anna Maria Stekelmann, as well as with the dance ensemble “Danzahoy” with Jeremy Nelson, David Zambrano, Clover Roope and Risa Steinberg. Raul performed on numerous tours all over the world. As a choreographer and dancer he worked at the state theatres in Braunschweig and Karlsruhe, and also gave guest performances at the state theatre in Bern. In 1999, he was awarded the »Prix Dom Perignon« choreographic prize by the Hamburg Ballet John Neumeier.',
      'Raul has worked as a contemporary dance and choreography instructor in vocational schools all over the world for many years.',
    ],
  },
  {
    name: 'Sina Rundel',
    role: 'Operational management',
    src: '/assets/img/staff/cdsh-sina-rundel-262x262.jpg',
    subjects: ['History of Dance'],
    description: [
      'completed her Bachelor of Arts in Art, Music and Media: Organization and Communication at the Philipps University Marburg in 2011. After starting her Master’s degree in Art History at the University of Hamburg, she began training as a contemporary stage dancer at CDSH Contemporary Dance School Hamburg in 2012, graduating in 2015. She received her master’s degree in art history in 2018.',
      'Sina has worked as a dancer in projects by Hamburg-based choreographer Orthia Feuße Strakenbrock and is a permanent ensemble member of Sticky Trace Company. As a production assistant, she supervised two productions of the same in 2016. Sina has participated in choreography competitions with her solo choreography Gespräch mit meiner Oberfläche, she gave workshops on bodylinguistic translation processes for young people, and works as a guest choreographer and teacher of dance and movement in the field of inclusive theater. She has been part of Ursina Tossi’s productions REVENANTS and fux as her artistic assistant and has been working as a freelance producer for Hamburg-based choreographers since 2022. As such, she has supervised Raymond Liew Jin Pin’s production Maria Cencaru – A Southeast Asian Cis-Sis Reunion. In addition to her dance-related work, Sina has also been involved in event management in an art and museum context.',
      'Since November 2016, she has been a teacher and Assistant Director, and from March 2020 to December 2021, Operational Manager of CDSH. Since January 2022 she is Communication Manager and Student Support at CDSH.',
    ],
  },
  {
    name: 'Yolanda Morales',
    src: '/assets/img/staff/Foto-Yolanda-555x555.jpg',
    subjects: ['Choreography'],
    description: [
      'born in Mexico, is a Hamburg based choreographer, dancer and performer. After receiving her dance education at the Universidad de Ciencias y Artes in Chiapas and at the Universidad in Puebla (BUAP) (Acap-INBA) in  Mexico, she completed the Master in Performance Studies at the University of Hamburg in 2018.',
      'Her work focuses on the dystopic/utopic space as a space of resistence, the development of fictitious bodies responding to politcal, social and enviromental issues of this contemporary world from a feminist approach using reconstruction, recontextualization and reinterpretation of movement as a form of social and political resistance. Yolanda dedicates her work to current political and social issues, especially from Latin America that resonate worldwide.',
      'Her productions 2666, NERVEN and HORSES have been and are invited to festivals in Germany and internationally. In cooperation with the Markk Museum and supported by the program #TakePart from the Fonds Darstellende Künste, Morales has developed the project MOVING IMAGINATIVE BODIES, a format of open rehearsals and workshops. She showed her solo works on different stages and in galleries of Mexico and Germany. Among others, Yolanda works with the choreographers Patricia Carolin Mai, Yolanda Gutiérrez, Fernanda Ortiz, Barbara Schmidt Rohr, Juan Dominguez and Arantxa and José Vidal. Recently she has worked as a choreographer with the artistic collective POOL by YOVO! YOVO! and the Theater Peripherie directed by Ute Bansemir in Frankfurt.',
      'Since 2022 Yolanda is choreographing for and with the first educational year of the Contemporary Dance School Hamburg.',
    ],
  },
  {
    name: 'Ursina Tossi',
    src: '/assets/img/staff/cdsh-ursina-tossi-555x555.jpg',
    subjects: ['Choreography', 'Improvisation', 'Guest choreographer', 'Guest teacher'],
    description: [
      'studied dance and philosophy in Mannheim/Ludwigshafen and choreography at ArtEZ in Arnhem, Netherlands. She has worked with Aki Kato, Filip van Huffel, Tamaki Serizawa, Angela Guereiro, Angela Kecinski, Fernanda Ortiz and is active in Treffen Total.In 2005 Ursina founded the tossi-company, in 2008 the all1-forum, an interdisciplinary festival for art and dance. In 2011 she received the DanceWEB scholarship at the Impuls Tanz Festival in Vienna, in 2012 she was resident choreographer at K3 - Choreografisches Zentrum Tanzplan/Hamburg. From 2014-16 she was a research assistant and lecturer in Performance Studies at the Uni-Hamburg.',
      'In co-production with Kampnagel and Tanzfaktur Cologne, Ursina has produced BARE BODIES 2017, BLUE MOON 2018, WITCHES 2019, REVENANTS 2020 and FUX 2021 - a piece for young audiences with and without visual impairment - and COSMICBODIES 2022 - a piece about alien bodies and extreme othering. She held the DanceWeb fellowship at the Vienna Impuls Dance Festival and the 8-month residency at K3 in 2012. Her work combines dance and political discourse with intense physicality. Ursinas pieces arise from a queer-feminist position and together with the people she works with. The aesthetics are inspired by pop culture, science fiction, activism, movies, the horror genre and the visual arts. They convince the audience with strong images, dance virtuosity, content and choreographic conciseness and atmospheric density. Artistic access and integrated audio description are part of her work.',
      'Ursina has been teaching Contemporary and Improvisation at CDSH since 2010 and choreographing in collaboration with first and second years students. Since 2022 Ursina is teaching Improvisation and choreographs for and with the second educational year at Contemporary Dance School Hamburg.',
    ],
  },
  {
    name: 'Monique Smith-Dowell',
    src: '/assets/img/staff/Monique-Smith-McDowell-555x555.jpg',
    subjects: ['Pilates'],
    description: [
      'is a British choreographer, performer and Pilates instructor based in Hamburg. She completed her training at London Contemporary Dance School. Throughout her career Monique follows an inquisitive desire to explore how other movement forms influence the contemporary language of dance movement.',
      'As a dancer, she has had the pleasure to work with Disney’s The Lion King, Cats the musical, Jessica Nupen, Ursina Tossi, Sticky Trace Company, Barak Marshall and Richard Alston Dance Company to name a few.',
      'In 2021, Monique guest choreographed in collaboration with Sticky Trace Company, on the choreography ‘Frenzy’ for the students of CDSH.',
      'Monique’s debut solo choreography, a co-production with K3|Tanzplan, “In the Black” premiered 2023 at Kampnagel.',
      'Since 2021, Monique is a certified BASI Pilates trainer, and has had the pleasure to train dancers across Hamburg on how to build strength and mobility, maintain healthy practices and aid injury rehabilitation.',
    ],
  },
  {
    name: 'Irina Vikulina',
    src: '/assets/img/staff/cdsh-irina-vikulina-555x555.jpg',
    subjects: ['Yoga'],
    description: [
      'was born in Russia. After completing her engineering studies as a medical technician, Irina studied contemporary dance and yoga in Moscow/St. Petersburg and formed her own dance company.',
      'In 2009, Irina completed her training at the CDSH Contemporary Dance School Hamburg and courses in Pilates technique. Residency at  Kampnagel (Hamburg). She developed choreographies for the Hamburger Sprechwerk. Irina’s extensive educational work focuses on yoga, Pilates and contemporary dance.',
    ],
  },
  {
    name: 'Gioia De Piccoli',
    src: '/assets/img/staff/5F4F3F1C-B442-4101-BE1D-ADA992E1DC3C-555x555.jpeg',
    subjects: ['Contemporary'],
    description: [
      'born in Italy (Venice) in 1997, started her dance studies at the age of 11 mostly concentrating on Ballet and contemporary. In 2015 she graduated as professional dancer at LaChance Ballet (Rome) where she also graduated as a theacher the next year.',
      'She continued her studies at CDSH-Contemporary Dance School Hamburg to graduate in 2019. Gioia worked as a dancer for the band Still in Search in 2016, in 2018 she was dancing with Sticky Trace Company, directed by Uta Engel, for the project “Leaving”. Since 2020 Gioia is a member of Company 2525 working on the projects “Brain” and “Perzeption” as well as a dancer of the HDC-Hamburg Dance Company, directed by Javier Báez-Velez.',
    ],
  },
];

const guests = [
  {
    name: 'Javier Báez',
    role: 'School Director',
    src: '/assets/img/staff/cdsh-javier-baez-262x262.jpg',
    subjects: ['Choreography'],
    description: [
      'born in Mexico, began studying ballet and modern dance in San Luis Potosì at the Escuela Estatal de Danza. He graduated from the school of the Ballet Independiente in Mexico City. He performed on numerous national and international tours and gave many guest appearances.',
      'As a dancer, Javier worked with the Ballett Independiente, at the State Theater Lübeck, the Metropol Theater Berlin and with the Tanzcompany Lübeck as well as TanzOrtNord and gave guest performances at the Hamburg State Opera.',
      'In 1996, Javier began teaching at the Irene-Olk School in Lübeck where he taught Graham technique and ballet, as well as at other private contemporary dance institutes and various dance companies. He has been in charge of the CDSH since 2005 where he also works as a choreographer.',
    ],
  },
  {
    name: 'Raul Valdez',
    role: 'Artistic direction',
    src: '/assets/img/staff/cdsh-raul-valdez-262x262.jpg',
    subjects: ['Choreography', 'Contemporary'],
    description: [
      'was born in Santo Domingo and studied classical ballet and contemporary dance in the Dominican Republic, at the Dance Theatre Harlem in New York and at the Escuela Nacional de Danza in Cuba.',
      'Raul danced in Europe and Central America with Oscar Araiz, Antonio Gomes and Anna Maria Stekelmann, as well as with the dance ensemble “Danzahoy” with Jeremy Nelson, David Zambrano, Clover Roope and Risa Steinberg. Raul performed on numerous tours all over the world. As a choreographer and dancer he worked at the state theatres in Braunschweig and Karlsruhe, and also gave guest performances at the state theatre in Bern. In 1999, he was awarded the »Prix Dom Perignon« choreographic prize by the Hamburg Ballet John Neumeier.',
      'Raul has worked as a contemporary dance and choreography instructor in vocational schools all over the world for many years.',
    ],
  },
  {
    name: 'Sina Rundel',
    role: 'Operational management',
    src: '/assets/img/staff/cdsh-sina-rundel-262x262.jpg',
    subjects: ['History of Dance'],
    description: [
      'completed her Bachelor of Arts in Art, Music and Media: Organization and Communication at the Philipps University Marburg in 2011. After starting her Master’s degree in Art History at the University of Hamburg, she began training as a contemporary stage dancer at CDSH Contemporary Dance School Hamburg in 2012, graduating in 2015. She received her master’s degree in art history in 2018.',
      'Sina has worked as a dancer in projects by Hamburg-based choreographer Orthia Feuße Strakenbrock and is a permanent ensemble member of Sticky Trace Company. As a production assistant, she supervised two productions of the same in 2016. Sina has participated in choreography competitions with her solo choreography Gespräch mit meiner Oberfläche, she gave workshops on bodylinguistic translation processes for young people, and works as a guest choreographer and teacher of dance and movement in the field of inclusive theater. She has been part of Ursina Tossi’s productions REVENANTS and fux as her artistic assistant and has been working as a freelance producer for Hamburg-based choreographers since 2022. As such, she has supervised Raymond Liew Jin Pin’s production Maria Cencaru – A Southeast Asian Cis-Sis Reunion. In addition to her dance-related work, Sina has also been involved in event management in an art and museum context.',
      'Since November 2016, she has been a teacher and Assistant Director, and from March 2020 to December 2021, Operational Manager of CDSH. Since January 2022 she is Communication Manager and Student Support at CDSH.',
    ],
  },
  {
    name: 'Yolanda Morales',
    src: '/assets/img/staff/Foto-Yolanda-555x555.jpg',
    subjects: ['Choreography'],
    description: [
      'born in Mexico, is a Hamburg based choreographer, dancer and performer. After receiving her dance education at the Universidad de Ciencias y Artes in Chiapas and at the Universidad in Puebla (BUAP) (Acap-INBA) in  Mexico, she completed the Master in Performance Studies at the University of Hamburg in 2018.',
      'Her work focuses on the dystopic/utopic space as a space of resistence, the development of fictitious bodies responding to politcal, social and enviromental issues of this contemporary world from a feminist approach using reconstruction, recontextualization and reinterpretation of movement as a form of social and political resistance. Yolanda dedicates her work to current political and social issues, especially from Latin America that resonate worldwide.',
      'Her productions 2666, NERVEN and HORSES have been and are invited to festivals in Germany and internationally. In cooperation with the Markk Museum and supported by the program #TakePart from the Fonds Darstellende Künste, Morales has developed the project MOVING IMAGINATIVE BODIES, a format of open rehearsals and workshops. She showed her solo works on different stages and in galleries of Mexico and Germany. Among others, Yolanda works with the choreographers Patricia Carolin Mai, Yolanda Gutiérrez, Fernanda Ortiz, Barbara Schmidt Rohr, Juan Dominguez and Arantxa and José Vidal. Recently she has worked as a choreographer with the artistic collective POOL by YOVO! YOVO! and the Theater Peripherie directed by Ute Bansemir in Frankfurt.',
      'Since 2022 Yolanda is choreographing for and with the first educational year of the Contemporary Dance School Hamburg.',
    ],
  },
  {
    name: 'Ursina Tossi',
    src: '/assets/img/staff/cdsh-ursina-tossi-555x555.jpg',
    subjects: ['Choreography', 'Improvisation', 'Guest choreographer', 'Guest teacher'],
    description: [
      'studied dance and philosophy in Mannheim/Ludwigshafen and choreography at ArtEZ in Arnhem, Netherlands. She has worked with Aki Kato, Filip van Huffel, Tamaki Serizawa, Angela Guereiro, Angela Kecinski, Fernanda Ortiz and is active in Treffen Total.In 2005 Ursina founded the tossi-company, in 2008 the all1-forum, an interdisciplinary festival for art and dance. In 2011 she received the DanceWEB scholarship at the Impuls Tanz Festival in Vienna, in 2012 she was resident choreographer at K3 - Choreografisches Zentrum Tanzplan/Hamburg. From 2014-16 she was a research assistant and lecturer in Performance Studies at the Uni-Hamburg.',
      'In co-production with Kampnagel and Tanzfaktur Cologne, Ursina has produced BARE BODIES 2017, BLUE MOON 2018, WITCHES 2019, REVENANTS 2020 and FUX 2021 - a piece for young audiences with and without visual impairment - and COSMICBODIES 2022 - a piece about alien bodies and extreme othering. She held the DanceWeb fellowship at the Vienna Impuls Dance Festival and the 8-month residency at K3 in 2012. Her work combines dance and political discourse with intense physicality. Ursinas pieces arise from a queer-feminist position and together with the people she works with. The aesthetics are inspired by pop culture, science fiction, activism, movies, the horror genre and the visual arts. They convince the audience with strong images, dance virtuosity, content and choreographic conciseness and atmospheric density. Artistic access and integrated audio description are part of her work.',
      'Ursina has been teaching Contemporary and Improvisation at CDSH since 2010 and choreographing in collaboration with first and second years students. Since 2022 Ursina is teaching Improvisation and choreographs for and with the second educational year at Contemporary Dance School Hamburg.',
    ],
  },
  {
    name: 'Monique Smith-Dowell',
    src: '/assets/img/staff/Monique-Smith-McDowell-555x555.jpg',
    subjects: ['Pilates'],
    description: [
      'is a British choreographer, performer and Pilates instructor based in Hamburg. She completed her training at London Contemporary Dance School. Throughout her career Monique follows an inquisitive desire to explore how other movement forms influence the contemporary language of dance movement.',
      'As a dancer, she has had the pleasure to work with Disney’s The Lion King, Cats the musical, Jessica Nupen, Ursina Tossi, Sticky Trace Company, Barak Marshall and Richard Alston Dance Company to name a few.',
      'In 2021, Monique guest choreographed in collaboration with Sticky Trace Company, on the choreography ‘Frenzy’ for the students of CDSH.',
      'Monique’s debut solo choreography, a co-production with K3|Tanzplan, “In the Black” premiered 2023 at Kampnagel.',
      'Since 2021, Monique is a certified BASI Pilates trainer, and has had the pleasure to train dancers across Hamburg on how to build strength and mobility, maintain healthy practices and aid injury rehabilitation.',
    ],
  },
  {
    name: 'Irina Vikulina',
    src: '/assets/img/staff/cdsh-irina-vikulina-555x555.jpg',
    subjects: ['Yoga'],
    description: [
      'was born in Russia. After completing her engineering studies as a medical technician, Irina studied contemporary dance and yoga in Moscow/St. Petersburg and formed her own dance company.',
      'In 2009, Irina completed her training at the CDSH Contemporary Dance School Hamburg and courses in Pilates technique. Residency at  Kampnagel (Hamburg). She developed choreographies for the Hamburger Sprechwerk. Irina’s extensive educational work focuses on yoga, Pilates and contemporary dance.',
    ],
  },
  {
    name: 'Gioia De Piccoli',
    src: '/assets/img/staff/5F4F3F1C-B442-4101-BE1D-ADA992E1DC3C-555x555.jpeg',
    subjects: ['Contemporary'],
    description: [
      'born in Italy (Venice) in 1997, started her dance studies at the age of 11 mostly concentrating on Ballet and contemporary. In 2015 she graduated as professional dancer at LaChance Ballet (Rome) where she also graduated as a theacher the next year.',
      'She continued her studies at CDSH-Contemporary Dance School Hamburg to graduate in 2019. Gioia worked as a dancer for the band Still in Search in 2016, in 2018 she was dancing with Sticky Trace Company, directed by Uta Engel, for the project “Leaving”. Since 2020 Gioia is a member of Company 2525 working on the projects “Brain” and “Perzeption” as well as a dancer of the HDC-Hamburg Dance Company, directed by Javier Báez-Velez.',
    ],
  },
];

const getStaff = createAsyncThunk(
  'staff/getStaff',
  (data, thunkApi) =>
    /* Utils.apiCall(`${CONTEXTS}/findAllStaff`, 'GET', thunkApi, { meta: { withLoading: true } }) */
    staff
);
const getTeachers = createAsyncThunk(
  'staff/getTeachers',
  (data, thunkApi) =>
    /* Utils.apiCall(`${CONTEXTS}/findAllTeachers`, 'GET', thunkApi, { meta: { withLoading: true } }) */
    teachers
);
const getWorkshops = createAsyncThunk(
  'staff/getWorkshops',
  (data, thunkApi) =>
    /* Utils.apiCall(`${CONTEXTS}/findAllWorkshops`, 'GET', thunkApi, { meta: { withLoading: true } }) */
    workshops
);
const getGuests = createAsyncThunk(
  'staff/getGuests',
  (data, thunkApi) =>
    /* Utils.apiCall(`${CONTEXTS}/findAllGuests`, 'GET', thunkApi, { meta: { withLoading: true } }) */
    guests
);

export const getStaffDataSources = createAsyncThunk('staff/getStaffDataSources', async (data, thunkApi) => {
  const { dispatch } = thunkApi;

  const responseStaff = await dispatch(getStaff());
  if (responseStaff.meta.requestStatus !== 'fulfilled') {
  }

  const responseTeachers = await dispatch(getTeachers());
  if (responseTeachers.meta.requestStatus !== 'fulfilled') {
  }

  const responseWorkshops = await dispatch(getWorkshops());
  if (responseWorkshops.meta.requestStatus !== 'fulfilled') {
  }

  const responseGuests = await dispatch(getGuests());
  if (responseGuests.meta.requestStatus !== 'fulfilled') {
  }

  return {
    staff: responseStaff.payload,
    teachers: responseTeachers.payload,
    workshops: responseWorkshops.payload,
    guests: responseGuests.payload,
  };
});

export const selectStaffDataSources = (state) => state.app.staff.dataSources ?? {};

const initialState = {
  dataSources: {},
};

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {},
  /*  extraReducers: {
    [getStaffDataSources.fulfilled]: (state, { payload }) => {
      return { ...state, dataSources: payload };
    },
  }, */
});

// export const {} = staffSlice.actions;

export default staffSlice.reducer;
