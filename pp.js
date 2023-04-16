var sidebarOpen = false;

var sidebar = document.getElementById("sidebar");

function openSidebar()
{
    if(!sidebarOpen)
    {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}
function closeSidebar()
{
    if(!sidebarOpen)
    {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

// ----- CHARTS
/*
var barChartOptions = {
    series: [{
    data: [10, 8, 6, 4, 2],
    name: "Products",
  }],
    chart: {
    type: 'bar',
    background: "transparent",
    height: 250,
    toolbar: {
        show: false,
    }
  },
  plotOptions: {
    bar: {
        distrbuted:true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:"20%"
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
      opacity: 1,
  },
  grid: {
      borderColor: "#55596e",
      yaxis: {
          lines: {
              show:true,
          }
      },
      xaxis: {
          lines: {
              show: true,
          }
      }

  },
  
  legend: {
      labels: {
          colors: "#f5f7ff",
      },
      show: true,
      position: "top",
  }, 
  stroke: {
      colors: ["transparent"],
      show: true,
      width:2
  },
  tooltip: {
      shared:true,
      intersect: false,
      theme: "dark",
  },


  xaxis: {
    categories: ['Laptop', 'Phone', 'Monitor', 'Headpones', 'Camera' ],
  title: {
      style:{
          color: "#f5f7ff",
      },
  },
  axisBorder: {
      show:true,
      color: "#55596e"
  },
  axisTicks: {
      show: true,
      color: "#55596e"
  },
  labels: {
      style: {
          colors: "f5f7ff",
      },
  },
  },
  yaxis: {
  title: {
      text:"Count",
      style:{
          color: "#f5f7ff",
      },
  },
  axisBorder: {
      show:true,
      color: "#55596e"
  },
  axisTicks: {
      show: true,
      color: "#55596e"
  },
  labels: {
      style: {
          colors: "f5f7ff",
      },
  },
  },
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();
*/
  // Area chart
  var options = {
    series: [{
    name: 'Spinning',
    data: [44, 55, 41, 67, 22, 43, 40]
  }, {
    name: 'Transportation',
    data: [13, 23, 20, 8, 13, 27 , 32]
  }, {
    name: 'Carding',
    data: [11, 17, 15, 15, 21, 14, 19]
  }, {
    name: 'Heating & Cooling',
    data: [21, 7, 25, 13, 22, 8, 12]
  }],
    chart: {
    type: 'bar',
    height: 250,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  xaxis: {
    type: 'datetime',
    categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
      '01/05/2011 GMT', '01/06/2011 GMT', '01/07/2011 GMT'
    ],
  },
  legend: {
    position: 'top',
    offsetY: 0
  },
  fill: {
    opacity: 1
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
  chart.render();

  // piechart
  var options = {
    series: [44, 55, 41, 17,],
    chart: {
    width: 340,
    type: 'donut',
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270
    },
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'gradient',
  },
  legend: {
    formatter: function(val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex]
    }
  },
  title: {
    text: 'Top emissions by type'
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
          
        position: 'left',
        offsetY: 20
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#area-chart"), options);
  chart.render();

/*
  var areaChartOptions = {
    series: [{
    name: 'Purchase Orders',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Sales',
    data: [11,32,45,32,34,52,41]
  }],
    chart: {
    height: 250,
    type: 'area',
    background: "transparent",
    stacked: false,
    toolbar: {
        show: false,
    },
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  dataLabels: {
     enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type:'solid',
    opacity: [0.35, 1],
  },
  labels: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Series A',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Series B',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if(typeof y !== "undefined") {
          return  y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();
*/
 
  $(document).ready(function(){
    //jquery for toggle sub menus
    $('.sub-btn').click(function(){
      $(this).next('.sub-menu').slideToggle();
      $(this).find('.dropdown').toggleClass('rotate');
    });
  });






