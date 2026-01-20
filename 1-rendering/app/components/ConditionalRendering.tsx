export const ConditionalRendering = () => {
  const isLoading = false;

  // Alternativ 1
  if (isLoading) {
    return <>Laddar...</>;
  } else {
    return <>Visa datat efter laddning</>;
  }

  // Alternativ 2
  //   return isLoading ? <>Laddar</> : <>Visa datat efter laddning</>;

  // Alternativ 3
  //   return isLoading && <>Visa datat efter laddning</>;
};
