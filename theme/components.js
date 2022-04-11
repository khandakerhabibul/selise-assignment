export const components = {
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
        },
      },
      defaultProps: {
        // The props to change the default for.
        disableElevation: true, // No more elevation!
      },
    },
  },
};
