export const POPULATION =
  'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
export const CRYPTO = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export const mockApiData = {
  india: {
    data: [
      {
        'ID Nation': '01000IN',
        Nation: 'India',
        'ID Year': 2021,
        Year: '2021',
        Population: 1393409038,
        'Slug Nation': 'india',
      },
      {
        'ID Nation': '01000IN',
        Nation: 'India',
        'ID Year': 2020,
        Year: '2020',
        Population: 1380004385,
        'Slug Nation': 'india',
      },
      {
        'ID Nation': '01000IN',
        Nation: 'India',
        'ID Year': 2019,
        Year: '2019',
        Population: 1366417754,
        'Slug Nation': 'india',
      },
      {
        'ID Nation': '01000IN',
        Nation: 'India',
        'ID Year': 2018,
        Year: '2018',
        Population: 1352642280,
        'Slug Nation': 'india',
      },
      {
        'ID Nation': '01000IN',
        Nation: 'India',
        'ID Year': 2017,
        Year: '2017',
        Population: 1338676785,
        'Slug Nation': 'india',
      },
    ],
    source: [
      {
        measures: ['Population'],
        annotations: {
          source_name: 'Census of India',
          source_description:
            'The Census of India is conducted by the Office of the Registrar General and Census Commissioner of India.',
          dataset_name: 'India Population Census',
          dataset_link: 'https://censusindia.gov.in/',
          table_id: 'B01001',
          topic: 'Population',
          subtopic: 'Demographics',
        },
        name: 'india_population_census',
        substitutions: [],
      },
    ],
  },
  china: {
    "data": [
      {
        "ID Nation": "01000CN",
        "Nation": "China",
        "ID Year": 2021,
        "Year": "2021",
        "Population": 1444216107,
        "Slug Nation": "china"
      },
      {
        "ID Nation": "01000CN",
        "Nation": "China",
        "ID Year": 2020,
        "Year": "2020",
        "Population": 1439323776,
        "Slug Nation": "china"
      },
      {
        "ID Nation": "01000CN",
        "Nation": "China",
        "ID Year": 2019,
        "Year": "2019",
        "Population": 1433783686,
        "Slug Nation": "china"
      },
      {
        "ID Nation": "01000CN",
        "Nation": "China",
        "ID Year": 2018,
        "Year": "2018",
        "Population": 1427647786,
        "Slug Nation": "china"
      },
      {
        "ID Nation": "01000CN",
        "Nation": "China",
        "ID Year": 2017,
        "Year": "2017",
        "Population": 1421021791,
        "Slug Nation": "china"
      }
    ],
    "source": [
      {
        "measures": ["Population"],
        "annotations": {
          "source_name": "National Bureau of Statistics of China",
          "source_description": "The National Bureau of Statistics of China conducts population surveys and census.",
          "dataset_name": "China Population Census",
          "dataset_link": "http://www.stats.gov.cn/english/Statisticaldata/CensusData/",
          "table_id": "B01001",
          "topic": "Population",
          "subtopic": "Demographics"
        },
        "name": "china_population_census",
        "substitutions": []
      }
    ]
  },
  brazil: {
    "data": [
      {
        "ID Nation": "01000BR",
        "Nation": "Brazil",
        "ID Year": 2021,
        "Year": "2021",
        "Population": 213993437,
        "Slug Nation": "brazil"
      },
      {
        "ID Nation": "01000BR",
        "Nation": "Brazil",
        "ID Year": 2020,
        "Year": "2020",
        "Population": 212559417,
        "Slug Nation": "brazil"
      },
      {
        "ID Nation": "01000BR",
        "Nation": "Brazil",
        "ID Year": 2019,
        "Year": "2019",
        "Population": 211049527,
        "Slug Nation": "brazil"
      },
      {
        "ID Nation": "01000BR",
        "Nation": "Brazil",
        "ID Year": 2018,
        "Year": "2018",
        "Population": 209469333,
        "Slug Nation": "brazil"
      },
      {
        "ID Nation": "01000BR",
        "Nation": "Brazil",
        "ID Year": 2017,
        "Year": "2017",
        "Population": 207833831,
        "Slug Nation": "brazil"
      }
    ],
    "source": [
      {
        "measures": ["Population"],
        "annotations": {
          "source_name": "Instituto Brasileiro de Geografia e Estatística (IBGE)",
          "source_description": "The Instituto Brasileiro de Geografia e Estatística (IBGE) conducts demographic surveys and census in Brazil.",
          "dataset_name": "Brazil Population Census",
          "dataset_link": "https://www.ibge.gov.br/en/statistics/population.html",
          "table_id": "B01001",
          "topic": "Population",
          "subtopic": "Demographics"
        },
        "name": "brazil_population_census",
        "substitutions": []
      }
    ]
  }
  
};
