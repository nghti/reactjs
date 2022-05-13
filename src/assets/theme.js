// export default {
//   fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
//   space: [0, 4, 8, 16, 32, 64, 128, 256],
//   breakpoints: ['768px', '1280px'],
//   // http://chir.ag/projects/name-that-color/#FFFFFF
//   colors: {
//     white: '#ffffff',
//     blue_charcoal: '#000e1a',
//     alabaster: '#fafafa',
//   },
// };

const breakpoints = ['320px', '414px', '768px', '1024px', '1440px'];
// aliases
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

export default {
  breakpoints,
};
