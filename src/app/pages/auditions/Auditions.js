import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { dateRegex, emailRegex, phoneRegex } from 'app/constants/regex';
import ChipCheckboxList from 'app/shared-components/formComponents/ChipCheckboxList';
import CustomMultilineTextField from 'app/shared-components/formComponents/CustomMultilineTextField';
import CustomTextField from 'app/shared-components/formComponents/CustomTextField';
import GridCheckbox from 'app/shared-components/formComponents/GridCheckbox';
import GridRadioGroup from 'app/shared-components/formComponents/GridRadioGroup';
import OutputFormSubtitle from 'app/shared-components/formComponents/OutputFormSubtitle';
import OutputFormTitle from 'app/shared-components/formComponents/OutputFormTitle';
import SpecialGridRadioGroup from 'app/shared-components/formComponents/SpecialGridRadioGroup';
import UploadButton from 'app/shared-components/formComponents/UploadButton';
import { useEffect, useMemo, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { ns as ns_audition } from './translations';

function Auditions() {
  const { t } = useTranslation([ns_audition]);
  const { title, message, error, button } = t(ns_audition);
  const theme = useTheme();

  const defaultValues = useMemo(() => {
    return {
      audition_selection: [],
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
      erf_mog_list: [],
      zusatzliche_fahigkeiten: '',
      //
      aufmerksam_geworden: '',
      //
      accept_data_verbindliche_anmeldung: false,
      accept_data_newsletter_empfangen: false,
      accept_data_datenschutz: false,
    };
  }, []);
  const validation = useMemo(
    () =>
      yup.object().shape({
        audition_selection: yup
          .array()
          .of(yup.string())
          .required(error.auditionSelection_required)
          .min(1, error.auditionSelection_min)
          .test('min-items-for-presenz', error.auditionSelection_presenz, (value) => {
            if (!value || !value.includes('as_presenz')) {
              return value.length >= 1;
            }
            return value.length >= 2;
          }),
        //
        vorname: yup.string().trim().required(error.vorname_required),
        nachname: yup.string().trim().required(error.nachname_required),
        geburtsdatum: yup
          .string()
          .required(error.geburtsdatum_required)
          .matches(dateRegex, { message: error.geburtsdatum_format }),
        staatsangehorigkeiten: yup.string().required(error.staatsangehorigkeiten_required),
        muttersprache: yup.string().required(error.muttersprache_required),
        fremdsprachen: yup.string().required(error.fremdsprachen_required),
        pronomen: yup.string().required(error.pronomen_required),
        //
        durchsuchen: yup.string().required(error.durchsuchen_required),
        //
        strasse: yup.string().trim().required(error.strasse_required),
        hausnummer: yup.string().required(error.hausnummer_required),
        plz: yup.string().required(error.plz_required),
        ort: yup.string().trim().required(error.ort_required),
        email: yup.string().required(error.email_required).matches(emailRegex, { message: error.email_format }),
        telefon: yup.string().required(error.telefon_required).matches(phoneRegex, { message: error.telefon_format }),
        //
        schulabschluss: yup.string().required(error.schulabschluss_required),
        tanzabschluss: yup.string().required(error.tanzabschluss_required),
        //
        erf_mog_list: yup.array().of(yup.string()).min(1, error.erfMogList_min),
        zusatzliche_fahigkeiten: yup.string().required(error.zusatzlicheFahigkeiten_required),
        //
        aufmerksam_geworden: yup.string().required(error.aufmerksamGeworden_required),
        //
        accept_data_verbindliche_anmeldung: yup
          .bool()
          .required(error.agreement_required)
          .isTrue(error.acceptDataVerbindlicheAnmeldung_isTrue),
        accept_data_newsletter_empfangen: yup.bool(),
        accept_data_datenschutz: yup
          .bool()
          .required(error.agreement_required)
          .isTrue(error.acceptDataDatenschutz_isTrue),
      }),
    [title, message, error, button]
  );
  const inputs = useMemo(
    () => [
      //auditionSelection
      {
        id: 'audition_selection',
        Component: SpecialGridRadioGroup,
        required: true,
        colSpan: 'col-span-12',
        options: [
          { value: 'as_video', label: message.videoAudition },
          { value: 'as_live', label: message.liveAudition },
          {
            value: 'as_presenz',
            label: message.presenzAudition,
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
        sx: { margin: { xs: '24px 0', md: '48px 0' } },
        colSpan: 'col-span-12',
      },
      // personal info
      {
        id: 'vorname',
        placeholder: message.firstName,
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-12 md:col-span-6',
      },
      {
        id: 'nachname',
        placeholder: message.lastName,
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-12 md:col-span-6',
      },
      {
        id: 'geburtsdatum',
        placeholder: message.dateOfBirth,
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-12 md:col-span-6',
      },
      {
        id: 'staatsangehorigkeiten',
        placeholder: message.nationalities,
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-12 md:col-span-6',
      },
      {
        id: 'muttersprache',
        placeholder: message.motherTongue,
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-12 md:col-span-6',
      },
      {
        id: 'fremdsprachen',
        placeholder: message.foreignLanguages,
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-12 md:col-span-6',
      },
      {
        id: 'pronomen',
        placeholder: message.pronouns,
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-12 md:col-span-6',
      },
      {
        id: 'empty-space-01',
        Component: Box,
        colSpan: 'col-span-12 md:col-span-6',
      },
      // Durchsuchen
      {
        id: 'title-img-upl',
        label: title.uploadPhotoDescription,
        Component: OutputFormSubtitle,
        colSpan: 'col-span-12',
        margin: { xs: '14px 0 0 0', md: '28px 0 0 0' },
      },
      {
        id: 'durchsuchen',
        label: message.fileUpload,
        Component: UploadButton,
        size: 'small',
        required: true,
        colSpan: 'col-span-12',
      },
      // Kontakt
      {
        id: 'title-kontakt',
        label: title.contact,
        Component: OutputFormTitle,
        colSpan: 'col-span-12',
        margin: { xs: '26px 0 0 0', md: '54px 0 0 0' },
      },
      {
        id: 'strasse',
        placeholder: message.street,
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-12 md:col-span-6',
      },
      {
        id: 'hausnummer',
        placeholder: message.houseNumber,
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-12 md:col-span-6',
      },
      {
        id: 'plz',
        placeholder: message.postalCode,
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-12 md:col-span-6',
      },
      {
        id: 'ort',
        placeholder: message.city,
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-12 md:col-span-6',
      },
      {
        id: 'email',
        placeholder: message.email,
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-12 md:col-span-6',
      },
      {
        id: 'telefon',
        placeholder: message.phone,
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-12 md:col-span-6',
      },
      // Bisherige Ausbildung
      {
        id: 'title-bis-aus',
        label: title.previousEducation,
        Component: OutputFormTitle,
        colSpan: 'col-span-12',
        margin: { xs: '26px 0 0 0', md: '54px 0 0 0' },
      },
      {
        id: 'schulabschluss',
        placeholder: message.schoolQualification,
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-12 md:col-span-6',
      },
      {
        id: 'tanzabschluss',
        placeholder: message.danceQualification,
        Component: CustomTextField,
        size: 'small',
        required: true,
        colSpan: 'col-span-12 md:col-span-6',
      },
      // Erfahrung in
      {
        id: 'title-erfahrung',
        label: title.experienceIn,
        Component: OutputFormTitle,
        colSpan: 'col-span-12',
        margin: { xs: '26px 0 0 0', md: '54px 0 0 0' },
      },
      {
        id: 'title-erf-mog',
        label: title.multipleSelectionPossible,
        Component: OutputFormSubtitle,
        colSpan: 'col-span-12',
      },
      {
        id: 'erf_mog_list',
        Component: ChipCheckboxList,
        required: true,
        colSpan: 'col-span-12',
        options: [
          { value: 'erf_zeitgenossisch', label: message.contemporary },
          { value: 'erf_modern', label: message.modern },
          { value: 'erf_ballet', label: message.ballet },
          { value: 'erf_improvisation', label: message.improvisation },
          { value: 'erf_jass', label: message.jazz },
          { value: 'erf_choreographie', label: message.choreography },
        ],
      },
      {
        id: 'zusatzliche_fahigkeiten',
        placeholder: message.additionalSkills,
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
        label: title.howDidYouHear,
        Component: OutputFormTitle,
        colSpan: 'col-span-12',
        margin: { xs: '51px 0 32px 0', md: '102px 0 32px 0' },
      },
      {
        id: 'aufmerksam_geworden',
        Component: GridRadioGroup,
        required: true,
        colSpan: 'col-span-12',
        options: [
          { value: 'amr_gwr_internet', label: message.internetSearch },
          { value: 'amr_gwr_schule', label: message.schoolRecommendation },

          { value: 'amr_gwr_freunde', label: message.friends },
          { value: 'amr_gwr_schuler', label: message.formerStudents },

          { value: 'amr_gwr_vorstellungen', label: message.cdshPresentations },
          { value: 'amr_gwr_social', label: message.socialMedia },

          { value: 'amr_gwr_flzer', label: message.flyersPosters },
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
        id: 'accept_data_verbindliche_anmeldung',
        Component: GridCheckbox,
        required: true,
        colSpan: 'col-span-12',
        label: message.bindingRegistrationAgreement,
      },
      {
        id: 'accept_data_newsletter_empfangen',
        Component: GridCheckbox,
        colSpan: 'col-span-12',
        label: message.newsletterOptIn,
      },
      {
        id: 'accept_data_datenschutz',
        Component: GridCheckbox,
        required: true,
        colSpan: 'col-span-12',
        label: message.dataPrivacyAccepted,
      },
      {
        id: 'empty-space-03',
        Component: ({ input: { sx } }) => <Box sx={sx} />,
        sx: { margin: { xs: '16px 0', md: '32px 0' } },
        colSpan: 'col-span-12',
      },
    ],
    [title, message, error, button]
  );

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(validation),
  });
  const { handleSubmit, control, reset, formState, setError } = methods;
  const { errors, isValid } = formState;

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  const onConfirmHandler = async (data) => {
    console.log('data', data);
    // TODO: send the data to the server

    setHasBeenSend(true);
    reset(defaultValues);
  };
  const onSubmitHandler = (ev) => {
    ev.preventDefault();
    handleSubmit(onConfirmHandler)(ev);
  };

  const [hasBeenSend, setHasBeenSend] = useState(false);
  console.log("errors", errors)
  const hasErrors = Object.keys(errors).length > 0;
  console.log("hasErrors", hasErrors)

  useEffect(() => {
    if (hasErrors) {
      setHasBeenSend(false);
    }
  }, [hasErrors]);

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
            zIndex: '2',
            display: { xs: 'none', md: 'flex' },
            width: { xs: '100%', md: '50%' },
            padding: { xs: '46px 56px 46px 56px', md: '0 56px 46px 56px' },
            gap: { xs: '8px', md: '18px' },
          }}
        >
          <Typography
            sx={{
              fontSize: '80px',
              fontWeight: '400',
              lineHeight: '85px',
            }}
          >
            Auditions
          </Typography>
          <Typography
            className="rounded-full px-[18px] py-[6px] cursor-pointer"
            sx={{
              color: '#000000',
              fontSize: '15px',
              fontWeight: '400',
              lineHeight: 'normal',
              background: theme.palette.primary.main,
            }}
            onClick={() => {}}
          >
            Download Checkliste 2025
          </Typography>
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/assets/images/auditions/cdsh-willkommen-1.png`}
            className="flex-1 w-full"
            sx={{ objectFit: 'cover', height: { xs: '390px', md: '100%' } }}
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
              className="rounded-full px-[18px] py-[6px] cursor-pointer"
              sx={{
                color: '#000000',
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: 'normal',
                background: theme.palette.primary.main,
              }}
              onClick={() => {}}
            >
              Download Checkliste 2025
            </Typography>
          </Box>
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
        className="flex justify-center items-start"
        sx={{ py: { xs: '55px', md: '110px' }, px: {xs: "24px", md: "48px"}, gap: { xs: '24px', md: '48px' } }}
      >
        <form
          onSubmit={onSubmitHandler}
          noValidate
          className="overflow-y-hidden w-full max-w-[1280px] h-full flex flex-col px-1 py-6"
        >
          <FormProvider {...methods}>
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
                    color: isValid ? 'black' : 'black',
                  }}
                >
                  {button.submit}
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
                    {error.fillFormCompletely}
                  </Typography>
                )}
                {hasBeenSend && (
                  <Typography
                    sx={{
                      color: '#000000',
                      fontSize: { xs: '12px', md: '15px' },
                      fontWeight: '400',
                    }}
                  >
                    {message.formSentSuccessfully}
                  </Typography>
                )}
              </Box>
            </Box>
          </FormProvider>
        </form>
      </Box>
    </>
  );
}

export default Auditions;
