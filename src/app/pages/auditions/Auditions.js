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
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { selectAuditionsData, setAuditionsData } from 'app/store/app/pageSlice';
import { useEffect, useMemo, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import ClosedAuditionPage from '../general/ClosedAuditionPage';
import ErrorPage from '../general/ErrorPage';
import LoadingPage from '../general/LoadingPage';
import { ns as ns_audition } from './translations';

function Auditions() {
  const dispatch = useDispatch();
  const { t } = useTranslation([ns_audition]);
  const { title, message, error: error_t, button } = t(ns_audition);
  const theme = useTheme();
  const userLanguage = useSelector(selectUserLanguage);

  const auditionsData = useSelector((state) => selectAuditionsData(state, userLanguage));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          .required(error_t.auditionSelection_required)
          .min(1, error_t.auditionSelection_min)
          .test('min-items-for-presenz', error_t.auditionSelection_presenz, (value) => {
            if (!value || !value.includes('as_presenz')) {
              return value.length >= 1;
            }
            return value.length >= 2;
          }),
        //
        vorname: yup.string().trim().required(error_t.vorname_required),
        nachname: yup.string().trim().required(error_t.nachname_required),
        geburtsdatum: yup
          .string()
          .required(error_t.geburtsdatum_required)
          .matches(dateRegex, { message: error_t.geburtsdatum_format }),
        staatsangehorigkeiten: yup.string().required(error_t.staatsangehorigkeiten_required),
        muttersprache: yup.string().required(error_t.muttersprache_required),
        fremdsprachen: yup.string().required(error_t.fremdsprachen_required),
        pronomen: yup.string().required(error_t.pronomen_required),
        //
        durchsuchen: yup.string().required(error_t.durchsuchen_required),
        //
        strasse: yup.string().trim().required(error_t.strasse_required),
        hausnummer: yup.string().required(error_t.hausnummer_required),
        plz: yup.string().required(error_t.plz_required),
        ort: yup.string().trim().required(error_t.ort_required),
        email: yup.string().required(error_t.email_required).matches(emailRegex, { message: error_t.email_format }),
        telefon: yup
          .string()
          .required(error_t.telefon_required)
          .matches(phoneRegex, { message: error_t.telefon_format }),
        //
        schulabschluss: yup.string().required(error_t.schulabschluss_required),
        tanzabschluss: yup.string().required(error_t.tanzabschluss_required),
        //
        erf_mog_list: yup.array().of(yup.string()).min(1, error_t.erfMogList_min),
        zusatzliche_fahigkeiten: yup.string().required(error_t.zusatzlicheFahigkeiten_required),
        //
        aufmerksam_geworden: yup.string().required(error_t.aufmerksamGeworden_required),
        //
        accept_data_verbindliche_anmeldung: yup
          .bool()
          .required(error_t.agreement_required)
          .isTrue(error_t.acceptDataVerbindlicheAnmeldung_isTrue),
        accept_data_newsletter_empfangen: yup.bool(),
        accept_data_datenschutz: yup
          .bool()
          .required(error_t.agreement_required)
          .isTrue(error_t.acceptDataDatenschutz_isTrue),
      }),
    [title, message, error_t, button]
  );

  const presenzSubSelection = useMemo(() => {
    const dynamicDates = auditionsData?.auditions_list || [];
    return dynamicDates;
  }, [auditionsData]);

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
            subSelection: presenzSubSelection,
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
    [title, message, presenzSubSelection]
  );

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(validation),
  });
  const { handleSubmit, control, reset, formState } = methods;
  const { errors, isValid } = formState;

  const formFields = useMemo(
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
  );

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
  console.log('errors', errors);
  const hasErrors = Object.keys(errors).length > 0;
  console.log('hasErrors', hasErrors);

  useEffect(() => {
    if (hasErrors) {
      setHasBeenSend(false);
    }
  }, [hasErrors]);

  useEffect(() => {
    if (auditionsData) {
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1);

    fetch(`http://localhost/plainkit-main/api/auditions?lang=${userLanguage}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setAuditionsData({ userLanguage, data }));
      })
      .catch((error) => {
        if (userLanguage === 'en') {
          const mockData = {
            header: {
              title: 'Auditions',
              intro:
                'If you are interested in our **entrance exams**, you can register for the video audition. It is equivalent to an on-site audition and essentially consists of submitting videos, which we use as the basis for our evaluation.',
              image: `${process.env.PUBLIC_URL}/assets/images/auditions/cdsh-willkommen-1.png`,
            },
            auditions_list: [
              {
                value: '01.01.26, Rotterdam',
                label: '01.01.26, Rotterdam',
              },
              {
                value: '16.01.25, Hamburg',
                label: '16.01.25, Hamburg',
              },
            ],
            settings: {
              auditions_active: true,
              download_link_text: 'Download Checklist 2025',
              download_file: `${process.env.PUBLIC_URL}/assets/images/auditions/export_tools.pdf`,
            },
          };
          dispatch(setAuditionsData({ userLanguage, data: mockData }));
        } else {
          const mockData = {
            header: {
              title: 'Auditions',
              intro:
                'Du kannst dich bei Interesse an unseren Aufnahmepr\u00fcfungen f\u00fcr die Video Audition registrieren. Sie ist gleichwertig mit einer Audition vor Ort und besteht im Wesentlichen aus der Einsendung von Videos, die uns als Bewertungsgrundlage dienen.',
              image: `${process.env.PUBLIC_URL}/assets/images/auditions/cdsh-willkommen-1.png`,
            },
            auditions_list: [
              {
                value: '01.01.26, Rotterdam',
                label: '01.01.26, Rotterdam',
              },
              {
                value: '16.01.25, Hamburg',
                label: '16.01.25, Hamburg',
              },
            ],
            settings: {
              auditions_active: true,
              download_link_text: 'Download Checkliste 2025',
              download_file: `${process.env.PUBLIC_URL}/assets/images/auditions/export_tools.pdf`,
            },
          };
          dispatch(setAuditionsData({ userLanguage, data: mockData }));
        }

        // TODO: commented for temp deploy
        // console.error('Fetching error:', error);
        // setError(error);
      })
      .finally(() => {
        setLoading(false);
        clearTimeout(timeout);
      });
  }, [userLanguage]);

  const handleDownload = () => {
    if (auditionsData?.settings?.download_file) {
      window.open(auditionsData.settings.download_file, '_blank');
    }
  };

  if (loading) return <LoadingPage />;
  if (error || !auditionsData) {
    return <ErrorPage />;
  }
  if (!auditionsData.settings.auditions_active) {
    return <ClosedAuditionPage />;
  }

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
            {auditionsData.header.title}
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
            onClick={handleDownload}
          >
            {auditionsData.settings.download_link_text}
          </Typography>
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={auditionsData.header.image}
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
              {auditionsData.header.title}
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
              onClick={handleDownload}
            >
              {auditionsData.settings.download_link_text}
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
          <div lineHeight="normal" className="text-center">
            <ReactMarkdown components={renderers} children={auditionsData.header.intro} />
          </div>
        </Box>
      </Box>
      {auditionsData.settings.auditions_active && (
        <Box
          component="section"
          className="flex justify-center items-start"
          sx={{ py: { xs: '55px', md: '110px' }, px: { xs: '24px', md: '48px' }, gap: { xs: '24px', md: '48px' } }}
        >
          <form
            onSubmit={onSubmitHandler}
            noValidate
            className="overflow-y-hidden w-full max-w-[1280px] h-full flex flex-col px-1 py-6"
          >
            <FormProvider {...methods}>
              <Box className="h-full grid grid-cols-12 gap-4 md:gap-8 pt-2">
                {formFields}
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
                      {error_t.fillFormCompletely}
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
      )}
    </>
  );
}

export default Auditions;
