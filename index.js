const particlesJSON = {
	particles: {
		number: {
			value: 6,
			density: {
				enable: true,
				value_area: 500,
			},
		},
		color: {
			value: "#00ff9f",
		},
		shape: {
			type: "polygon",
			stroke: {
				width: 2,
				color: "#00b8ff",
			},
			polygon: {
				nb_sides: 6,
			},
			image: {
				src: "img/github.svg",
				width: 100,
				height: 100,
			},
		},
		opacity: {
			value: 0.5,
			random: true,
		},
		size: {
			value: 10,
			random: true,
		},
		line_linked: {
			enable: false,
			distance: 300,
			color: "#bd00ff",
			opacity: 0.3,
			width: 2,
		},
		move: {
			enable: true,
			speed: 0.5,
			direction: "left",
			random: true,
			straight: true,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: true,
				mode: ["grab", "bubble"],
			},
			onclick: {
				enable: false,
				mode: "push",
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 0.7,
				},
			},
			bubble: {
				distance: 600,
				size: 12,
				duration: 1,
				opacity: 0.8,
				speed: 2,
			},
			repulse: {
				distance: 400,
				duration: 0.4,
			},
			push: {
				particles_nb: 20,
			},
			remove: {
				particles_nb: 10,
			},
		},
	},
	retina_detect: true,
};

particlesJS("particles-js", particlesJSON);
