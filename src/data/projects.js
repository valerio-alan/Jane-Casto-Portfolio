export default {
	data: [
		{
			title: 'Covid-19 in California',
			description: 'Analyzing a strange relationship between infection and mortality rates in Northern California.',
			img: 'project_images/Covid-19 in California.png',
			link: 'https://public.tableau.com/app/profile/jane.casto/viz/Covid-19DatainCalifornia/Dashboard1',
			tags: ['Tableau', 'Excel/Sheets'],
		},
		{
			title: 'R Visualizations',
			description: 'Examples of some of my ggplot2 visualizations in R.',
			img: 'project_images/Infection Rates Plot.png',
			link: '/projects/Portfolio-Visualization-Examples.html',
			tags: ['R', 'ggplot2'],
		},
		{
			title: 'LARC Disparities',
			description: 'Analyzing the relationship between long-acting reversible contraceptives and race.',
			img: 'project_images/LARC_image.png',
			link: '/projects/Health Policy_ LARC and Race.pdf',
			tags: ['Stata', 'Policy', 'Healthcare'],
		},
		{
			title: 'Modern School Segregation',
			description: 'Examining racial disparities within schools of the same zip codes in California.',
			img: 'project_images/Racial Skewing Box Plots.png',
			link: '/projects/Modern Day School Segregation_ Policy Brief.pdf',
			tags: ['R', 'Excel/Sheets', 'Policy'],
		},
		{
			title: 'Coming Soon',
			description: 'This website is still under construction. Check back soon for more projects!',
			img: 'https://placehold.co/512',
			link: '',
			tags: [],
		},
	],
	tags: {
		Tableau: { color: '#d3874c', textColor: 'dark' },
		'Excel/Sheets': { color: '#6ca963', textColor: 'dark' },
		R: { color: '#6499ee', textColor: 'light' },
		ggplot2: { color: '#a985e9', textColor: 'dark' },
		Stata: { color: '#d47bab', textColor: 'light' },
		Policy: { color: '#be923e', textColor: 'dark' },
		Healthcare: { color: '#e4786d', textColor: 'dark' },
	},
}
