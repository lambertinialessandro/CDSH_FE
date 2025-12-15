import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { dateRegex } from 'app/constants/regex';
import ChipCheckboxList from 'app/shared-components/formComponents/ChipCheckboxList';
import CustomMultilineTextField from 'app/shared-components/formComponents/CustomMultilineTextField';
import CustomTextField from 'app/shared-components/formComponents/CustomTextField';
import GridCheckboxGroup from 'app/shared-components/formComponents/GridCheckboxGroup';
import GridRadioGroup from 'app/shared-components/formComponents/GridRadioGroup';
import OutputFormSubtitle from 'app/shared-components/formComponents/OutputFormSubtitle';
import OutputFormTitle from 'app/shared-components/formComponents/OutputFormTitle';
import SpecialGridRadioGroup from 'app/shared-components/formComponents/SpecialGridRadioGroup';
import UploadButton from 'app/shared-components/formComponents/UploadButton';
import { useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

function Auditions() {
  const theme = useTheme();

  const defaultValues = useMemo(() => {
    return {
      auditionSelection: '',
      //
      vorname: '',
      nachname: '',
      geburtsdatum: '',
      staatsangehorigkeiten: '',
      muttersprache: '',
      fremdsprachen: '',
      pronomen: '',
      //
      strasse: '',
      hausnummer: '',
      plz: '',
      ort: '',
      email: '',
      telefon: '',
      //
      schulabschluss: '',
      tanzabschluss: '',
      //
      erf_zeitgenossisch: false,
      erf_modern: false,
      erf_ballet: false,
      erf_improvisation: false,
      erf_jass: false,
      erf_choreographie: false,
      zusatzliche_fahigkeiten: '',
      //
      aufmerksam_geworden: [],
      //
      verbindliche_anmeldung: false,
      newsletter_empfangen: false,
      datenschutz: false,
    };
  }, []);
  const validation = useMemo(
    () =>
      yup.object().shape({
        //
        vorname: yup.string().required(),
        nachname: yup.string().required(),
        geburtsdatum: yup.string().matches(dateRegex, { message: 'Wrong format' }).required(),
        staatsangehorigkeiten: yup.string().required(),
        muttersprache: yup.string().required(),
        fremdsprachen: yup.string().required(),
        pronomen: yup.string().required(),
        //
      }),
    []
  );
  const inputs = useMemo(
    () => [
      //auditionSelection: '',
      {
        id: 'audition_selection',
        Component: SpecialGridRadioGroup,
        colSpan: 'col-span-12',
        options: [
          { value: 'as_video', label: 'Video Audition' },
          { value: 'as_live', label: 'Live Audition' },
          {
            value: 'as_presenz',
            label: 'Präsenz Audition',
            subSelection: [
              { value: '24.08.25, Rotterdam', label: '24.08.25, Rotterdam' },
              { value: '25.08.25, Rotterdam', label: '25.08.25, Rotterdam' },
              { value: '26.08.25, Rotterdam', label: '26.08.25, Rotterdam' },
              { value: '27.08.25, Rotterdam', label: '27.08.25, Rotterdam' },
            ],
          },
        ],
      },
      //
      {
        id: 'empty-space-00',
        Component: ({ input: { sx } }) => <Box sx={sx} />,
        sx: { margin: {xs: '24px 0', md: '48px 0'} },
        colSpan: 'col-span-12',
      },
      //
      {
        id: 'vorname',
        placeholder: 'Vorname',
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-6',
      },
      {
        id: 'nachname',
        placeholder: 'Nachname',
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-6',
      },
      {
        id: 'geburtsdatum',
        placeholder: 'Geburtsdatum',
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-6',
      },
      {
        id: 'staatsangehorigkeiten',
        placeholder: 'Staatsangehörigkeiten',
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-6',
      },
      {
        id: 'muttersprache',
        placeholder: 'Muttersprache',
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-6',
      },
      {
        id: 'fremdsprachen',
        placeholder: 'Fremdsprachen',
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-6',
      },
      {
        id: 'pronomen',
        placeholder: 'Pronomen',
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-6',
      },
      {
        id: 'empty-space-01',
        Component: Box,
        colSpan: 'col-span-6',
      },
      // Durchsuchen
      {
        id: 'title-img-upl',
        label:
          'Bitte lade hier ein möglichst aktuelles Portraitfoto von dir hoch. Das Foto wird wie alle Daten, die du in dieses Formular eingibst, vertraulich behandelt und nicht an Dritte weitergegeben. Mögliche Dateiformate: JPG, GIF, PNG, BMP, max. 3 MB',
        Component: OutputFormSubtitle,
        colSpan: 'col-span-12',
        margin: {xs: '14px 0 0 0', md: '28px 0 0 0'},
      },
      {
        id: 'durchsuchen',
        label: 'Durchsuchen',
        Component: UploadButton,
        size: 'small',
        required: true,
        colSpan: 'col-span-12',
      },
      // Kontakt
      {
        id: 'title-kontakt',
        label: 'Kontakt',
        Component: OutputFormTitle,
        colSpan: 'col-span-12',
        margin: { xs: '26px 0 0 0', md: '54px 0 0 0' },
      },
      {
        id: 'strasse',
        placeholder: 'Strasse',
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-6',
      },
      {
        id: 'hausnummer',
        placeholder: 'Hausnummer',
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-6',
      },
      {
        id: 'plz',
        placeholder: 'PLZ',
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-6',
      },
      {
        id: 'ort',
        placeholder: 'Ort',
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-6',
      },
      {
        id: 'email',
        placeholder: 'E-Mail',
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-6',
      },
      {
        id: 'telefon',
        placeholder: 'Telefon',
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-6',
      },
      // Bisherige Ausbildung
      {
        id: 'title-bis-aus',
        label: 'Bisherige Ausbildung',
        Component: OutputFormTitle,
        colSpan: 'col-span-12',
        margin: { xs: '26px 0 0 0', md: '54px 0 0 0' },
      },
      {
        id: 'schulabschluss',
        placeholder: 'Schulabschluss',
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-6',
      },
      {
        id: 'tanzabschluss',
        placeholder: 'Tänz. Abschluss',
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-6',
      },
      // Erfahrung in
      {
        id: 'title-erfahrung',
        label: 'Erfahrung in',
        Component: OutputFormTitle,
        colSpan: 'col-span-12',
        margin: { xs: '26px 0 0 0', md: '54px 0 0 0' },
      },
      {
        id: 'title-erf-mog',
        label: 'Mehrfachauswahl möglich',
        Component: OutputFormSubtitle,
        colSpan: 'col-span-12',
      },
      {
        id: 'subtitle-erf-mog',
        Component: ChipCheckboxList,
        colSpan: 'col-span-12',
        options: [
          { value: 'erf_zeitgenossisch', label: 'Zeitgenössisch' },
          { value: 'erf_modern', label: 'Modern' },
          { value: 'erf_ballet', label: 'Ballet' },
          { value: 'erf_improvisation', label: 'Improvisation' },
          { value: 'erf_jass', label: 'Jass' },
          { value: 'erf_choreographie', label: 'Choreographie' },
        ],
      },
      {
        id: 'zusatzliche_fahigkeiten',
        placeholder: 'Zusätzliche Fähigkeiten',
        Component: CustomMultilineTextField,
        hasEndDot: false,
        size: 'small',
        rows: 8,
        required: true,
        colSpan: 'col-span-12',
      },
      //
      {
        id: 'title-auf-gew',
        label: 'Wie bist du auf uns aufmerksam geworden?',
        Component: OutputFormTitle,
        colSpan: 'col-span-12',
        margin: { xs: '51px 0 32px 0', md: '102px 0 32px 0' },
      },
      {
        id: 'aufmerksam_geworden',
        Component: GridRadioGroup,
        colSpan: 'col-span-12',
        options: [
          { value: 'amr_gwr_internet', label: 'Internet-Recherche' },
          { value: 'amr_gwr_schule', label: 'Empfehlung durch eine Schule' },

          { value: 'amr_gwr_freunde', label: 'Freunde' },
          { value: 'amr_gwr_schuler', label: 'Ehemalige Schüler*innen' },

          { value: 'amr_gwr_vorstellungen', label: 'Vorstellungen der CDSH' },
          { value: 'amr_gwr_social', label: 'Soziale Medien' },

          { value: 'amr_gwr_flzer', label: 'Flyer, Plakate' },
        ],
      },
      //
      {
        id: 'empty-space-02',
        Component: ({ input: { sx } }) => <Box sx={sx} />,
        sx: { margin: { xs: '16px 0', md: '32px 0' } },
        colSpan: 'col-span-12',
      },
      //
      {
        id: 'accept_data',
        Component: GridCheckboxGroup,
        colSpan: 'col-span-12',
        options: [
          {
            colSpan: 12,
            value: 'verbindliche_anmeldung',
            label:
              'Hiermit bestätige ich meine verbindliche Anmeldung für die Audition der CDSH zum oben angegebenen Zeitpunkt an angegebenem Ort und versichere, dass ich meine Angaben korrekt gemacht habe. Ich verpflichte mich hiermit, 60 Euro Gebühr für die Aufnahmeprüfung fristgerecht, spätestens zwei Wochen nach deiner Anmeldung zur Audition, an die CDSH zu überweisen. Sollte ich nicht zur Aufnahmeprüfung kommen können, jedoch spätestens zwei Wochen vorher per Mail oder telefonisch absagen, wird die von mir geleistete Zahlung abzüglich einer Bearbeitungsgebühr von 20 Euro rückerstattet. Die CDSH behandelt die vom Bewerber gemachten persönlichen Angaben sowie eventuell übermitteltes Bildmaterial vertraulich.',
          },
          {
            colSpan: 12,
            value: 'newsletter_empfangen',
            label:
              'Ich möchte den CDSH-Newsletter empfangen. Ich weiß, dass ich mein Einverständnis jederzeit widerrufen kann.',
          },
          { colSpan: 12, value: 'datenschutz', label: 'Datenschutz gelesen und akzeptiert' },
        ],
      },
      {
        id: 'empty-space-03',
        Component: ({ input: { sx } }) => <Box sx={sx} />,
        sx: { margin: { xs: '16px 0', md: '32px 0' } },
        colSpan: 'col-span-12',
      },
    ],
    []
  );

  const { handleSubmit, control, reset, formState } = useForm({
    defaultValues,
    resolver: yupResolver(validation),
  });
  const { errors, isValid } = formState;

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  const onConfirmHandler = (data) => {};
  const onSubmitHandler = (ev) => {
    ev.preventDefault();
    handleSubmit(onConfirmHandler)(ev);
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <>
      <Box
        component="section"
        className="header relative flex items-center max-h-860-px"
        sx={{ height: { sx: '100%', md: `100vh` }, flexDirection: { xs: 'column-reverse', md: 'row' } }}
      >
        <Box
          className="flex-1 h-full flex-col justify-center items-start"
          sx={{
            display: { xs: 'none', md: 'flex' },
            zIndex: '2',
            width: { xs: '100%', md: '50%' },
            padding: { xs: '46px 56px 46px 56px', md: '0 56px 46px 56px' },
            gap: { xs: '8px', md: '18px' },
          }}
        >
          <Typography
            sx={{
              fontSize: '80px',
              fontWeight: '400',
              lineHeight: 'normal',
            }}
          >
            Auditions
          </Typography>
          <Typography
            className="rounded-full px-[18px] py-[6px]"
            sx={{
              color: '#000000',
              fontSize: '15px',
              fontWeight: '400',
              lineHeight: 'normal',
              background: theme.palette.primary.main,
            }}
          >
            Download Checkliste 2025
          </Typography>
        </Box>
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/assets/images/auditions/cdsh-willkommen-1.png`}
          className="flex-1 h-full relative"
          sx={{ objectFit: 'cover', width: { xs: '100%', md: '50%' } }}
        ></Box>
        <Box
          sx={{
            position: 'absolute',
            left: '24px',
            bottom: '12px',
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <Typography
            className="mix-blend-exclusion"
            sx={{
              fontSize: '50px',
              lineHeight: '55px',
              fontWeight: '400',
              color: 'white',
            }}
          >
            Auditions
          </Typography>
          <Typography
            className="rounded-full px-[18px] py-[6px]"
            sx={{
              color: '#000000',
              fontSize: '15px',
              fontWeight: '400',
              lineHeight: 'normal',
              background: theme.palette.primary.main,
            }}
          >
            Download Checkliste 2025
          </Typography>
        </Box>
      </Box>

      <Box
        component="section"
        className="px-[48px] flex justify-center items-start"
        sx={{
          background: theme.palette.secondary.main,
          gap: { xs: '24px', md: '48px' },
          py: { xs: '55px', md: '110px' },
        }}
      >
        <Box className="max-w-[1280px]">
          <Typography
            className="text-center"
            sx={{ color: '#000000 ', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400', lineHeight: 'normal' }}
          >
            Du kannst dich bei Interesse an unseren Aufnahmeprüfungen für die Video Audition registrieren. Sie ist
            gleichwertig mit einer Audition vor Ort und besteht im Wesentlichen aus der Einsendung von Videos, die uns
            als Bewertungsgrundlage dienen.
          </Typography>
        </Box>
      </Box>

      <Box
        component="section"
        className="px-[48px] flex justify-center items-start"
        sx={{ py: { xs: '55px', md: '110px' }, gap: { xs: '24px', md: '48px' } }}
      >
        <form
          onSubmit={onSubmitHandler}
          noValidate
          className="overflow-y-hidden w-full max-w-[1280px] h-full flex flex-col px-8 py-6"
        >
          <Box className="h-full grid grid-cols-12 gap-4 md:gap-8 pt-2">
            {useMemo(
              () =>
                inputs.map(({ id, Component, colSpan = 'col-span-12', ...input }) => {
                  return (
                    <Box key={id} className={`${colSpan}`}>
                      <Controller
                        name={id}
                        control={control}
                        render={({ field }) => {
                          return <Component input={input} field={field} error={errors[id]} />;
                        }}
                      />
                    </Box>
                  );
                }),
              [inputs, control, errors]
            )}
            <Box className="col-span-6">
              <Button
                type="submit"
                fullWidth
                disableRipple
                className="rounded-full max-w-fit py-[12px] px-[54px]"
                sx={{
                  fontSize: { xs: '20px', md: '40px' },
                  lineHeight: 'normal',
                  zIndex: 10,
                  transition: 'color 0.2s',
                  border: '1px solid black',
                  boxShadow: 0,
                  textTransform: 'capitalize',
                  backgroundColor: isValid ? 'primary.main' : 'white',
                  color: isValid ? 'white' : 'black',
                }}
              >
                Abschicken
              </Button>
            </Box>

            <Box className="col-span-6 flex justify-end items-center">
              {hasErrors && (
                <Typography
                  sx={{
                    color: '#000000',
                    fontSize: { xs: '12px', md: '15px' },
                    fontWeight: '400',
                  }}
                >
                  Bitte Formular vollständig ausfüllen.
                </Typography>
              )}
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default Auditions;
