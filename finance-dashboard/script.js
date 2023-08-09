var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');
function opensidebar(){
    if(!sidebar){
        sidebar.classList.add('sidebar-responsive');
        sidebarOpen=true;
    }
}
function closesidebar(){
    if(sidebar){
        sidebar.classList.remove('sidebar-responsive');
        sidebarOpen =false;

    }
}



var barChartOptions = {
    series: [{
    data: [10,8,6,2,1]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        show: false
    },
    
  },
  colors:[
    '#246dec',
    '#cc3c43',
    '#367952',
    '#f5b74f',
    '#4f35a1',
    '#246dac',
  ],
  plotOptions: {
    bar: {
        distributed: true,

      borderRadius: 5,
      horizontal: true,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show: false,
  },
  xaxis: {
    categories: ['Books', 'Laptop', 'Monitor', 'Headphones', 'Camera',
    ],
  },
  yaxis:{
    title:{
        text:'Count'
    }


  }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();


// area chart
      
var areaChartOptions = {
    series: [{
    name: 'purchase Order',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Sales Order',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area',
    toolbar:{
        show:
            false,
    
    },
  },
  colors:[
    '#4f35a1',
    '#246dec',
  ],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  labels:['jan','feb','march','april','june','july'],
  markers:{
    size: 0
  },
  yaxis: [
    {
        title:{
            text:'purchase order'
        },

    },
    {
        title:{
            text: 'sales order'
        },

    },
  ],
  tooltip:{
    shared: true,
    intersect: false,
    x:{
        format: 'dd/MM/yy HH:mm'
    },
  },
  opposite: true,

  
}

  var chart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  chart.render();
