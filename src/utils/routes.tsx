interface Routes {
  root: string;
  population: { root: string };
  crypto: { root: string };
  combined: { root: string };
}

const createResourceRoute = (resource: string) => ({
    root: `/${resource}`,
  });
  

export const routes : Routes = {
    root: '/',
    population: createResourceRoute('population'),
    crypto : createResourceRoute('crypto'),
    combined: createResourceRoute('combined'),
}
