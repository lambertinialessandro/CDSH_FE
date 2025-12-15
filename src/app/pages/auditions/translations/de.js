const dictionary = {
  auditions: {
    button: {
      submit: 'Abschicken',
    },
    error: {
      // Audition Selection
      auditionSelection_required: 'Mindestens eine Audition-Auswahl ist erforderlich.',
      auditionSelection_min: 'Bitte wählen Sie mindestens eine Option aus.',
      auditionSelection_presenz: 'Wenn Sie eine Präsenz-Audition gewählt haben, müssen Sie ein Datum auswählen.', // Adjusted message for the .test() condition

      // Personal Data
      vorname_required: 'Vorname ist erforderlich.',
      nachname_required: 'Nachname ist erforderlich.',
      geburtsdatum_required: 'Geburtsdatum ist erforderlich.',
      geburtsdatum_format: 'Falsches Datumsformat (TT.MM.JJJJ oder TT/MM/JJJJ).',
      staatsangehorigkeiten_required: 'Staatsangehörigkeit ist erforderlich.',
      muttersprache_required: 'Muttersprache ist erforderlich.',
      fremdsprachen_required: 'Fremdsprachen sind erforderlich.',
      pronomen_required: 'Pronomen-Auswahl ist erforderlich.',

      // File Upload
      durchsuchen_required: 'Ein Portraitfoto ist erforderlich.',

      // Contact
      strasse_required: 'Straße ist erforderlich.',
      hausnummer_required: 'Hausnummer ist erforderlich.',
      plz_required: 'Postleitzahl (PLZ) ist erforderlich.',
      ort_required: 'Ort ist erforderlich.',
      email_required: 'E-Mail-Adresse ist erforderlich.',
      email_format: 'Falsches E-Mail-Format.',
      telefon_required: 'Telefonnummer ist erforderlich.',
      telefon_format: 'Falsches Telefonnummern-Format.',

      // Education
      schulabschluss_required: 'Schulabschluss ist erforderlich.',
      tanzabschluss_required: 'Tänzerischer Abschluss ist erforderlich.',

      // Experience/Skills
      erfMogList_min: 'Mindestens eine Fähigkeit/Fähigkeit muss ausgewählt werden.',
      zusatzlicheFahigkeiten_required: 'Zusätzliche Fähigkeiten sind erforderlich.',

      // How did you hear about us?
      aufmerksamGeworden_required: 'Dieses Feld ist erforderlich.',

      // Checkboxes (Agreements)
      agreement_required: 'Zwingende Zustimmung ist erforderlich.',
      acceptDataVerbindlicheAnmeldung_isTrue: 'Sie müssen den Bedingungen für die verbindliche Anmeldung zustimmen.',
      acceptDataDatenschutz_isTrue: 'Sie müssen die Datenschutzbestimmungen akzeptieren.',

      // end message
      fillFormCompletely: 'Bitte Formular vollständig ausfüllen.',
    },
    message: {
      // audition_selection
      videoAudition: 'Video Audition',
      liveAudition: 'Live Audition',
      presenzAudition: 'Präsenz Audition',

      // personal info
      firstName: 'Vorname',
      lastName: 'Nachname',
      dateOfBirth: 'Geburtsdatum',
      nationalities: 'Staatsangehörigkeiten',
      motherTongue: 'Muttersprache',
      foreignLanguages: 'Fremdsprachen',
      pronouns: 'Pronomen',

      // Durchsuchen
      fileUpload: 'Durchsuchen',

      // Kontakt
      street: 'Strasse',
      houseNumber: 'Hausnummer',
      postalCode: 'PLZ',
      city: 'Ort',
      email: 'E-Mail',
      phone: 'Telefon',

      // Bisherige Ausbildung
      schoolQualification: 'Schulabschluss',
      danceQualification: 'Tänz. Abschluss',

      // erfahrung
      contemporary: 'Zeitgenössisch',
      modern: 'Modern',
      ballet: 'Ballet',
      improvisation: 'Improvisation',
      jazz: 'Jass',
      choreography: 'Choreographie',
      additionalSkills: 'Zusätzliche Fähigkeiten',

      // aufmerksam_geworden
      internetSearch: 'Internet-Recherche',
      schoolRecommendation: 'Empfehlung durch eine Schule',
      friends: 'Freunde',
      formerStudents: 'Ehemalige Schüler*innen',
      cdshPresentations: 'Vorstellungen der CDSH',
      socialMedia: 'Soziale Medien',
      flyersPosters: 'Flyer, Plakate',

      // accept_data
      bindingRegistrationAgreement:
        'Hiermit bestätige ich meine verbindliche Anmeldung für die Audition der CDSH zum oben angegebenen Zeitpunkt an angegebenem Ort und versichere, dass ich meine Angaben korrekt gemacht habe. Ich verpflichte mich hiermit, 60 Euro Gebühr für die Aufnahmeprüfung fristgerecht, spätestens zwei Wochen nach deiner Anmeldung zur Audition, an die CDSH zu überweisen. Sollte ich nicht zur Aufnahmeprüfung kommen können, jedoch spätestens zwei Wochen vorher per Mail oder telefonisch absagen, wird die von mir geleistete Zahlung abzüglich einer Bearbeitungsgebühr von 20 Euro rückerstattet. Die CDSH behandelt die vom Bewerber gemachten persönlichen Angaben sowie eventuell übermitteltes Bildmaterial vertraulich.',
      newsletterOptIn:
        'Ich möchte den CDSH-Newsletter empfangen. Ich weiß, dass ich mein Einverständnis jederzeit widerrufen kann.',
      dataPrivacyAccepted: 'Datenschutz gelesen und akzeptiert',

      // end message
      formSentSuccessfully: 'Formular korrekt versendet.',
    },
    title: {
      // Durchsuchen
      uploadPhotoDescription:
        'Bitte lade hier ein möglichst aktuelles Portraitfoto von dir hoch. Das Foto wird wie alle Daten, die du in dieses Formular eingibst, vertraulich behandelt und nicht an Dritte weitergegeben. Mögliche Dateiformate: JPG, GIF, PNG, BMP, max. 3 MB',

      // Kontakt
      contact: 'Kontakt',

      // title-bis-aus
      previousEducation: 'Bisherige Ausbildung',

      // title-erfahrung
      experienceIn: 'Erfahrung in',
      multipleSelectionPossible: 'Mehrfachauswahl möglich',

      // title-auf-gew
      howDidYouHear: 'Wie bist du auf uns aufmerksam geworden?',
    },
  },
};

export default dictionary;
