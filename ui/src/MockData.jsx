/*
const mockData = [{
  category:"Ropa",
  product:"Camisa",
  brand:"CalvinKlein",
  sales:
  [{
    month: 'January',
    sales: 1
  },
  {
    month: 'February',
    sales: 4
  },
  {
    month: 'March',
    sales: 1
  },
  {
    month: 'April',
    sales: 20
  }
]},{
  category:"Ropa",
  product:"Camisa",
  brand:"AldeiaDosVentos",
  sales:
  [{
    month: 'January',
    sales: 23
  },
  {
    month: 'February',
    sales: 44
  },
  {
    month: 'March',
    sales: 16
  },
  {
    month: 'April',
    sales: 200
  }
]},{
  category:"Ropa",
  product:"Pantalones",
  brand:"AldeiaDosVentos",
  sales:
  [{
    month: 'January',
    sales: 210
  },
  {
    month: 'February',
    sales: 50
  },
  {
    month: 'March',
    sales: 150
  },
  {
    month: 'April',
    sales: 180
  }
]},{
  category:"Ropa",
  product:"Pantalones",
  brand:"TACO",
  sales:
  [{
    month: 'January',
    sales: 100
  },
  {
    month: 'February',
    sales: 100
  },
  {
    month: 'March',
    sales: 100
  },
  {
    month: 'April',
    sales: 101
  }]},
  {
    category:"Acessorio",
    product:"Chapeu",
    brand:"MadHatter",
    sales:
    [{
      month: 'January',
      sales: 1
    },
    {
      month: 'February',
      sales: 4
    },
    {
      month: 'March',
      sales: 1
    },
    {
      month: 'April',
      sales: 20
    }
  ]},{
    category:"Acessorio",
    product:"Chapeu",
    brand:"Nike",
    sales:
    [{
      month: 'January',
      sales: 23
    },
    {
      month: 'February',
      sales: 44
    },
    {
      month: 'March',
      sales: 16
    },
    {
      month: 'April',
      sales: 200
    }
  ]},{
    category:"Acessorio",
    product:"Sapato",
    brand:"Havaianas",
    sales:
    [{
      month: 'January',
      sales: 210
    },
    {
      month: 'February',
      sales: 50
    },
    {
      month: 'March',
      sales: 150
    },
    {
      month: 'April',
      sales: 180
    }
  ]},
  {
    category:"Acessorio",
    product:"Sapato",
    brand:"Riff",
    sales:
    [{
      month: 'January',
      sales: 100
    },
    {
      month: 'February',
      sales: 100
    },
    {
      month: 'March',
      sales: 100
    },
    {
      month: 'April',
      sales: 101
    }
  ]
}]
*/
const selector = 
{ropa:
  {camisa:
    {CalvinKlein:
      [{month:"January",sales:12},
      {month:"February",sales:23},
      {month:"March",sales:12},
      {month:"April",sales:13}],
    AldeiaDosVentos:
      [{month:"January",sales:55},
      {month:"February",sales:56},
      {month:"March",sales:27},
      {month:"April",sales:44}]
    },
  pantalones:
    {AldeiaDosVentos:
      [{month:"January",sales:22},
      {month:"February",sales:23},
      {month:"March",sales:12},
      {month:"April",sales:33}],
    TACO:
      [{month:"January",sales:10},
      {month:"February",sales:10},
      {month:"March",sales:11},
      {month:"April",sales:10}]
    }
  },
acessorio:
  {chapeu:
    {MadHatter:
      [{month:"January",sales:1},
      {month:"February",sales:0},
      {month:"March",sales:1},
      {month:"April",sales:2}],
    Nike:
      [{month:"January",sales:3},
      {month:"February",sales:4},
      {month:"March",sales:5},
      {month:"April",sales:12}]
    },
  sapato:
    {Havaianas:
      [{month:"January",sales:1200},
      {month:"February",sales:1214},
      {month:"March",sales:700},
      {month:"April",sales:650}],
    Riff:
      [{month:"January",sales:10},
      {month:"February",sales:5},
      {month:"March",sales:10},
      {month:"April",sales:14}]
    }
  }
}

export default selector;