import { createSlice } from '@reduxjs/toolkit';

export const selectAboutUsData = (state, userLanguage) => state.app.page.aboutUsData?.[userLanguage];
export const selectAktuelleData = (state, userLanguage) => state.app.page.aktuelleData?.[userLanguage];
export const selectAuditionsData = (state, userLanguage) => state.app.page.auditionsData?.[userLanguage];
export const selectAusbuildungData = (state, userLanguage) => state.app.page.ausbuildungData?.[userLanguage];
export const selectFaqData = (state, userLanguage) => state.app.page.faqData?.[userLanguage];
export const selectAgbData = (state, userLanguage) => state.app.page.agbData?.[userLanguage];
export const selectProtectionData = (state, userLanguage) => state.app.page.protectionData?.[userLanguage];
export const selectImpressumData = (state, userLanguage) => state.app.page.impressumData?.[userLanguage];
export const selectHomeData = (state, userLanguage) => state.app.page.homeData?.[userLanguage];
export const selectStudentsData = (state, userLanguage) => state.app.page.studentsData?.[userLanguage];
export const selectTeamData = (state, userLanguage) => state.app.page.teamData?.[userLanguage];

export const selectSelectedProject = (state, userLanguage) => state.app.page.selectedProject?.[userLanguage];
export const selectSelectedStudent = (state, userLanguage) => state.app.page.selectedStudent?.[userLanguage];
export const selectSelectedMember = (state, userLanguage) => state.app.page.selectedMember?.[userLanguage];

const initialState = {
  aboutUsData: {},
  aktuelleData: {},
  auditionsData: {},
  ausbuildungData: {},
  faqData: {},
  agbData: {},
  protectionData: {},
  impressumData: {},
  homeData: {},
  studentsData: {},
  teamData: {},

  selectedProject: {},
  selectedStudent: {},
  selectedMember: {},
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setAboutUsData: (state, { payload: { userLanguage, data } }) => {
      state.aboutUsData[userLanguage] = data;
    },
    setAktuelleData: (state, { payload: { userLanguage, data } }) => {
      state.aktuelleData[userLanguage] = data;
    },
    setAuditionsData: (state, { payload: { userLanguage, data } }) => {
      state.auditionsData[userLanguage] = data;
    },
    setAusbuildungData: (state, { payload: { userLanguage, data } }) => {
      state.ausbuildungData[userLanguage] = data;
    },
    setFaqData: (state, { payload: { userLanguage, data } }) => {
      state.faqData[userLanguage] = data;
    },
    setAgbData: (state, { payload: { userLanguage, data } }) => {
      state.agbData[userLanguage] = data;
    },
    setProtectionData: (state, { payload: { userLanguage, data } }) => {
      state.protectionData[userLanguage] = data;
    },
    setImpressumData: (state, { payload: { userLanguage, data } }) => {
      state.impressumData[userLanguage] = data;
    },
    setHomeData: (state, { payload: { userLanguage, data } }) => {
      state.homeData[userLanguage] = data;
    },
    setStudentsData: (state, { payload: { userLanguage, data } }) => {
      state.studentsData[userLanguage] = data;
    },
    setTeamData: (state, { payload: { userLanguage, data } }) => {
      state.teamData[userLanguage] = data;
    },

    setSelectedProject: (state, { payload: { userLanguage, data } }) => {
      state.selectedProject[userLanguage] = data;
    },
    setSelectedStudent: (state, { payload: { userLanguage, data } }) => {
      state.selectedStudent[userLanguage] = data;
    },
    setSelectedMember: (state, { payload: { userLanguage, data } }) => {
      state.selectedMember[userLanguage] = data;
    },
  },
  /* extraReducers: {} */
});

export const {
  setAboutUsData,
  setAktuelleData,
  setAuditionsData,
  setAusbuildungData,
  setFaqData,
  setAgbData,
  setProtectionData,
  setImpressumData,
  setHomeData,
  setStudentsData,
  setTeamData,

  setSelectedProject,
  setSelectedStudent,
  setSelectedMember,
} = pageSlice.actions;

export default pageSlice.reducer;
