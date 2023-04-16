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
   
// stacked chart -


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

  $(document).ready(function(){
    //jquery for toggle sub menus
    $('.sub-btn').click(function(){
      $(this).next('.sub-menu').slideToggle();
      $(this).find('.dropdown').toggleClass('rotate');
    });
  });






