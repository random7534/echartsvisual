
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var dataAxis = [ '19-7', '19-8', '19-9', '19-10', '19-11', '19-12', '20-1', '20-2', '20-3', '20-4', '20-5', '20-6', '20-7', '20-8', '20-9', '20-10', '20-11', '20-12', '21-1','21-2'];
  var data = [221,214,218,212,221,238,230,292, 184, 199, 206, 212, 236,234,238,236,266,281,264,204,];
  var yMax = 400;
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
        show:true,
        containLabel: true,
       
        
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
            data: [250, 229, 238, 274, 301, 292, 303]
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
            data: [258, 252, 262, 284, 308, 300, 306]
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
            data: [279, 278, 286, 310, 342, 330, 359]
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
            data: [286, 297, 309, 321, 315, 342, 360]
        },
    ]
};
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
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
         show:false
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
              data: [71,11, 27, 35, 24, 31, 68],
              
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
              data: [53, 72, 21, 31, 21, 21, 80]
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
              data: [78, 101, 21, 38, 17, 33, 84]
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
              data: [90, 101, 25, 38, 18, 37,77]
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
              data: [94, 110, 25, 39,23, 30, 87]
          },
        
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
        data: [43, 43, 45, 46, 52, 49, 37],
        coordinateSystem: 'polar',
        name: '商业服务',
        stack: 'a',
        emphasis: {
            focus: 'series'
        }
    }, {
        type: 'bar',
        data: [9, 8, 8, 9, 10, 10, 9],
        coordinateSystem: 'polar',
        name: '运输',
        stack: 'a',
        emphasis: {
            focus: 'series'
        }
    }, {
        type: 'bar',
        data: [22, 24, 26, 25, 27, 25, 13],
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
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
  // 图表也等比例缩放
  window.addEventListener("resize", function() {
    myChart.resize();
  });

