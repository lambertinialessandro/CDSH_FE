import Home from 'app/wireframe/pages/home/Home';

import CDSH from 'app/wireframe/pages/school/CDSH';
/* import School from 'app/wireframe/pages/school/School'; */
import Staff from 'app/wireframe/pages/school/staff/Staff';
import Students from 'app/wireframe/pages/school/Students';

import Auditions from 'app/wireframe/pages/education/Auditions';
/* import Education from 'app/wireframe/pages/education/Education'; */
import Infos from 'app/wireframe/pages/education/Infos';
import PostGraduation from 'app/wireframe/pages/education/PostGraduation';
import Program from 'app/wireframe/pages/education/Program';

import Graduation from 'app/wireframe/pages/projects/Graduation';
/* import Projects from 'app/wireframe/pages/projects/Projects'; */
import SoloProject from 'app/wireframe/pages/projects/SoloProject';
import Class from 'app/wireframe/pages/school/Class';
import Showcase from 'app/wireframe/pages/projects/Showcase';

/* const navigationConfig_old = [
	{
		path: '/home',
		component: Home,
		props: {
			exact: true
		}
	},
	{
		path: '/school',
		component: School,
		props: {
			exact: true
		},
		children: [
			{
				path: '/school/staff',
				component: Staff,
				props: {
					exact: true
				}
			},
			{
				path: '/school/faculty',
				component: Faculty,
				props: {
					exact: true
				}
			},
			{
				path: '/school/students',
				component: Students,
				props: {
					exact: true
				}
			},
			{
				path: '/school/own-work',
				component: OwnWork,
				props: {
					exact: true
				}
			},
			{
				path: '/school/final-projects',
				component: FinalProject,
				props: {
					exact: true
				}
			},
			{
				path: '/school/fiends-and-partner',
				component: FriendsAndPartners,
				props: {
					exact: true
				}
			}
		]
	},
	{
		path: '/training',
		component: Training,
		props: {
			exact: true
		},
		children: [
			{
				path: '/training/training-structure',
				component: TrainingStructure,
				props: {
					exact: true
				}
			},
			{
				path: '/training/auditions',
				component: Auditions,
				props: {
					exact: true
				}
			},
			{
				path: '/training/infos-for-international-students',
				component: InfosForInternationalStudents,
				props: {
					exact: true
				}
			}
		]
	},
	{
		path: '/further-education',
		component: FurtherEducation,
		props: {
			exact: true
		}
	},
	{
		path: '/blog',
		component: Blog,
		props: {
			exact: true
		}
	},
	{
		path: '/contact',
		component: Contact,
		props: {
			exact: true
		},
		children: [
			{
				path: '/contact/newsletter',
				component: Newsletter,
				props: {
					exact: true
				}
			}
		]
	}
]; */

function generateNavigation(title) {
	return [
		{
			name: title.home,
			path: '/home',
			component: Home,
			props: {
				exact: true
			},
			children: []
		},
		{
			name: title.school,
			path: '/school',
			/* component: School, */
			props: {
				exact: true
			},
			children: [
				{
					name: title.schoolCDSH,
					path: '/school/CDSH',
					component: CDSH,
					props: {
						exact: true
					}
				},
				{
					name: title.schoolStaff,
					path: '/school/staff',
					component: Staff,
					props: {
						exact: true
					},
					children: [
						{
							name: title.schoolStudents,
							path: '/school/staff/:staffUrlName',
							component: Staff,
							props: {
								exact: true
							}
						}
					]
				},
				{
					name: title.schoolStudents,
					path: '/school/students',
					component: Students,
					props: {
						exact: true
					},
					children: [
						{
							name: title.schoolStudents,
							path: '/school/students/:className',
							component: Class,
							props: {
								exact: true
							}
						}
					]
				}
			]
		},
		{
			name: title.education,
			path: '/education',
			/* component: Education, */
			props: {
				exact: true
			},
			children: [
				{
					name: title.educationProgram,
					path: '/education/program',
					component: Program,
					props: {
						exact: true
					}
				},
				{
					name: title.educationPostGraduation,
					path: '/education/post-graduation',
					component: PostGraduation,
					props: {
						exact: true
					}
				},
				{
					name: title.educationInfos,
					path: '/education/infos',
					component: Infos,
					props: {
						exact: true
					}
				},
				{
					name: title.educationAuditions,
					path: '/education/auditions',
					component: Auditions,
					props: {
						exact: true
					}
				}
			]
		},
		{
			name: title.projects,
			path: '/projects',
			/* component: Projects, */
			props: {
				exact: true
			},
			children: [
				{
					name: title.projectsSoloProjects,
					path: '/projects/solo-project',
					component: SoloProject,
					props: {
						exact: true
					},
					children: [
						{
							name: title.projectsSoloProjects,
							path: '/projects/solo-project/:soloTitle',
							component: SoloProject,
							props: {
								exact: true
							}
						}
					]
				},
				{
					name: title.projectsGraduations,
					path: '/projects/graduation',
					component: Graduation,
					props: {
						exact: true
					},
					children: [
						{
							name: title.projectsGraduations,
							path: '/projects/graduation/:graduationTitle',
							component: Graduation,
							props: {
								exact: true
							}
						}
					]
				},
				{
					name: title.projectsShowcase,
					path: '/projects/showcase',
					component: Showcase,
					props: {
						exact: true
					}
				}
			]
		}
	];
}

export default generateNavigation;
