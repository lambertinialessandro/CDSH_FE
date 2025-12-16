const dictionary = {
  auditions: {
    button: {
      submit: 'Submit',
    },
    error: {
      // Audition Selection
      auditionSelection_required: 'At least one audition selection is required.',
      auditionSelection_min: 'Please select at least one option.',
      auditionSelection_presenz: 'If you selected an In-person Audition, you must also select an available date.', // Adjusted message for the .test() condition
      
      // Personal Data
      vorname_required: 'First name is required.',
      nachname_required: 'Last name is required.',
      geburtsdatum_required: 'Date of birth is required.',
      geburtsdatum_format: 'Wrong date format (DD.MM.YYYY or DD/MM/YYYY).',
      staatsangehorigkeiten_required: 'Nationality is required.',
      muttersprache_required: 'Mother tongue is required.',
      fremdsprachen_required: 'Foreign languages are required.',
      pronomen_required: 'Pronoun selection is required.',
      
      // File Upload
      durchsuchen_required: 'A portrait photo is required.',
      
      // Contact
      strasse_required: 'Street name is required.',
      hausnummer_required: 'House number is required.',
      plz_required: 'Postal code (PLZ) is required.',
      ort_required: 'City/Location is required.',
      email_required: 'Email is required.',
      email_format: 'Wrong email format.',
      telefon_required: 'Phone number is required.',
      telefon_format: 'Wrong phone format.',
      
      // Education
      schulabschluss_required: 'School leaving qualification is required.',
      tanzabschluss_required: 'Dance qualification is required.',
      
      // Experience/Skills
      erfMogList_min: 'At least one skill/ability must be selected.',
      zusatzlicheFahigkeiten_required: 'Additional skills are required.',
      
      // How did you hear about us?
      aufmerksamGeworden_required: 'This field is required.',
      
      // Checkboxes (Agreements)
      agreement_required: 'Mandatory agreement is required.',
      acceptDataVerbindlicheAnmeldung_isTrue: 'You must agree to the terms for binding registration.',
      acceptDataDatenschutz_isTrue: 'You must accept the data privacy policy.',

      // end message
      fillFormCompletely: 'Please fill out the form completely.',
    },
    message: {
      // audition_selection
      videoAudition: 'Video Audition',
      liveAudition: 'Live Audition',
      presenzAudition: 'In-person Audition', // or "Live Audition" depending on context, using "In-person" to distinguish from "Live"
      // Note: "Präsenz Audition" often means "In-person" or "Physical Presence"

      // personal info
      firstName: 'First Name',
      lastName: 'Last Name',
      dateOfBirth: 'Date of Birth',
      nationalities: 'Nationalities',
      motherTongue: 'Mother Tongue',
      foreignLanguages: 'Foreign Languages',
      pronouns: 'Pronouns',

      // Durchsuchen (File Upload)
      fileUpload: 'Browse',

      // Kontakt (Contact)
      street: 'Street',
      houseNumber: 'House Number',
      postalCode: 'Postal Code (PLZ)',
      city: 'City',
      email: 'E-Mail',
      phone: 'Phone',

      // Bisherige Ausbildung (Previous Education)
      schoolQualification: 'School Leaving Qualification',
      danceQualification: 'Dance Qualification',

      // erfahrung (Experience)
      contemporary: 'Contemporary',
      modern: 'Modern',
      ballet: 'Ballet',
      improvisation: 'Improvisation',
      jazz: 'Jazz',
      choreography: 'Choreography',
      additionalSkills: 'Additional Skills',

      // aufmerksam_geworden (How did you hear about us?)
      internetSearch: 'Internet Search',
      schoolRecommendation: 'Recommendation by a School',
      friends: 'Friends',
      formerStudents: 'Former Students',
      cdshPresentations: 'CDSH Performances or Presentations',
      socialMedia: 'Social Media',
      flyersPosters: 'Flyers, Posters',

      // accept_data (Agreements)
      bindingRegistrationAgreement:
        'I hereby confirm my binding registration for the CDSH audition at the time and place specified above and assure that my information is correct. I hereby commit to transferring the €60 audition fee to CDSH promptly, no later than two weeks after my audition registration. Should I be unable to attend the audition, but cancel by email or phone at least two weeks in advance, the payment made by me will be refunded minus a processing fee of €20. The CDSH treats the personal information provided by the applicant, as well as any transmitted image material, confidentially.',
      newsletterOptIn: 'I would like to receive the CDSH newsletter. I know that I can revoke my consent at any time.',
      dataPrivacyAccepted: 'Data privacy read and accepted',

      // end message
      formSentSuccessfully: 'Form submitted successfully.',
    },
    title: {
      // Durchsuchen (File Upload Title)
      uploadPhotoDescription:
        'Please upload a recent portrait photo of yourself here. The photo, like all data you enter in this form, will be treated confidentially and will not be passed on to third parties. Possible file formats: JPG, GIF, PNG, BMP, max. 3 MB',

      // Kontakt (Contact Title)
      contact: 'Contact',

      // title-bis-aus (Previous Education Title)
      previousEducation: 'Previous Education',

      // title-erfahrung (Experience Title)
      experienceIn: 'Experience in',
      multipleSelectionPossible: 'Multiple selection possible',

      // title-auf-gew (How did you hear about us? Title)
      howDidYouHear: 'How did you hear about us?',
    },
  },
};

export default dictionary;
