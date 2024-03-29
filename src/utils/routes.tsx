const createResourceRoute = (resource: string) => ({
    root: `/${resource}`,
  });
  

export const routes : any = {
    root: '/',
    population: createResourceRoute('population'),
    crypto : createResourceRoute('crypto'),
    combined: createResourceRoute('combined'),
}
