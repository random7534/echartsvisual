(function() {
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  var dataAxis = [ '19-7', '19-8', '19-9', '19-10', '19-11', '19-12', '20-1', '20-2', '20-3', '20-4', '20-5', '20-6', '20-7', '20-8', '20-9', '20-10', '20-11', '20-12', '21-1','21-2'];
  var data = [137,133,138,134,142,136,135,128,132,134,95,90,105,112,118,121,132,127,132,127,129];
  var yMax = 150;
  var dataShadow = [];
  for (var i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
  }
  
  option = {
     
      xAxis: {
          data: dataAxis,
          axisLabel: {
              inside: true,
              textStyle: {
                  color: '#ff0'
              }
          },
          axisTick: {
              show: false
          },
          axisLine: {
              show: false
          },
          z: 10
      },
      yAxis: {
          axisLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              textStyle: {
                  color: '#999'
              }
          }
      },
      dataZoom: [
          {
              type: 'inside'
          }
      ],
      series: [
          {
              type: 'bar',
              showBackground: true,
              itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                          {offset: 0, color: '#83bff6'},
                          {offset: 0.5, color: '#188df0'},
                          {offset: 1, color: '#188df0'}
                      ]
                  )
              },
              emphasis: {
                  itemStyle: {
                      color: new echarts.graphic.LinearGradient(
                          0, 0, 0, 1,
                          [
                              {offset: 0, color: '#2378f7'},
                              {offset: 0.7, color: '#2378f7'},
                              {offset: 1, color: '#83bff6'}
                          ]
                      )
                  }
              },
              data: data
          }
      ]
  };
  var zoomSize = 6;
  myChart.on('click', function (params) {
      console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      myChart.dispatchAction({
          type: 'dataZoom',
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      });
  });
  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

 
   
    myChart.setOption(option);

})();

(function() {

    var myChart = echarts.init(document.querySelector(".line .chart"));
 
    var data = {
      year: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    };
    var option = {
      color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
     
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              label: {
                  backgroundColor: '#6a7985'
              }
          }
      },
      legend: {
          data: ['第一季度', '第二季度', '第三季度', '第四季度'],
          textStyle:{
            color:"#ff0"
        },
    
      },
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
            axisLine:{
                lineStyle:{
                    color:"rgba(255,255,255,0.5)"
                }
            }
            
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisTick:{
                show:false,
            },
            axisLine:{
                lineStyle:{
                    color:"rgba(255,255,255,0.5)"
                }
            }
        },
      
    ],
      series: [
          {
              name: '第一季度',
              type: 'line',
              stack: '总量',
              smooth: true,
              lineStyle: {
                  width: 0
              },
              showSymbol: false,
              areaStyle: {
                  opacity: 0.8,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(128, 255, 165)'
                  }, {
                      offset: 1,
                      color: 'rgba(1, 191, 236)'
                  }])
              },
              emphasis: {
                  focus: 'series'
              },
              data: [104, 105, 111, 112, 116, 115, 111]
          },
          {
              name: '第二季度',
              type: 'line',
              stack: '总量',
              smooth: true,
              lineStyle: {
                  width: 0
              },
              showSymbol: false,
              areaStyle: {
                  opacity: 0.8,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(0, 221, 255)'
                  }, {
                      offset: 1,
                      color: 'rgba(77, 119, 255)'
                  }])
              },
              emphasis: {
                  focus: 'series'
              },
              data: [118, 120, 122, 123, 121, 121, 111]
          },
          {
              name: '第三季度',
              type: 'line',
              stack: '总量',
              smooth: true,
              lineStyle: {
                  width: 0
              },
              showSymbol: false,
              areaStyle: {
                  opacity: 0.8,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(55, 162, 255)'
                  }, {
                      offset: 1,
                      color: 'rgba(116, 21, 219)'
                  }])
              },
              emphasis: {
                  focus: 'series'
              },
              data: [119, 119, 122, 123, 121, 121, 111]
          },
          {
              name: '第四季度',
              type: 'line',
              stack: '总量',
              smooth: true,
              lineStyle: {
                  width: 0
              },
              showSymbol: false,
              areaStyle: {
                  opacity: 0.8,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(255, 0, 135)'
                  }, {
                      offset: 1,
                      color: 'rgba(135, 0, 157)'
                  }])
              },
              emphasis: {
                  focus: 'series'
              },
              data: [111, 117, 111, 118, 126, 121, 114]
          },
      ]
  };
  myChart.setOption(option);
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
(function() {
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {          
            type: 'shadow'      
        }
    },
    legend: {
        data: ['19年四季度', '20年一季度', '20年二季度', '20年三季度', '20年四季度'],
        textStyle:{
            color:"#ff0"
        },
        top:"5%",
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
     //   不显示x轴
    xAxis: {
        show: false
    },
    yAxis: {
        type: 'category',
        data: ['金融服务', ' 商品服务', '运输', '其他商业服务', '建筑', '保险与养老服务', '信息业服务'],
         //   不显示y轴
        axisLine:{
            show:false
        },
            //   不显示y轴刻度
        axisTick:{
            show:false
        },
        axisLabel:{
            color:"#fff"
        }
    },
    series: [
        {
            name: '19年四季度',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [104,197, 236, 83, 321, 139, 114]
        },
        {
            name: '20年一季度',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [98, 151, 225, 78, 315, 141, 95]
        },
        {
            name: '20年二季度',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [95, 138, 137, 77, 246, 147, 92]
        },
        {
            name: '20年三季度',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [94, 156, 166,79, 245, 160,94]
        },
        {
            name: '20年四季度',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [98, 157, 185, 84,284, 166, 98]
        }
    ]
};

  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
(function() {
    var myChart = echarts.init(document.querySelector(".line1 .chart"));
    option = {
      angleAxis: {
          type: 'category',
          data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
          axisLine:{
            lineStyle:{
                color:"rgba(255,255,255,0.5)"
            }
        }
      },
      radiusAxis: {
      },
      polar: {
      },
      series: [{
          type: 'bar',
          data: [46, 47, 49, 52, 53, 56, 43],
          coordinateSystem: 'polar',
          name: '商业服务',
          stack: 'a',
          emphasis: {
              focus: 'series'
          }
      }, {
          type: 'bar',
          data: [9, 9, 9, 8, 11, 11, 7],
          coordinateSystem: 'polar',
          name: '运输',
          stack: 'a',
          emphasis: {
              focus: 'series'
          }
      }, {
          type: 'bar',
          data: [9, 10, 11, 12, 13, 14, 3],
          coordinateSystem: 'polar',
          name: '旅游业',
          stack: 'a',
          emphasis: {
              focus: 'series'
          }
      }],
      legend: {
          show: true,
          data: ['商业服务', '运输', '旅游业'],
          textStyle:{
            color:"#ff0",
        },
      }
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
  // 图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
