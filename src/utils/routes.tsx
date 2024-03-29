const createResourceRoute = (resource: string) => ({
    root: `/${resource}`,
  });
  

export const routes = {
    root: '/',
    population: createResourceRoute('population'),
    crypto : createResourceRoute('crypto'),
    combined: createResourceRoute('combined'),
}
