"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  option = {
    color: ["#66FF66", "#FF8888"],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['2010年', '2020年'],
      textStyle: {
        color: "rgba(255,255,255,0.5)"
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLabel: {
        color: "#fff"
      }
    },
    yAxis: {
      type: 'category',
      data: ['英国', '德国', '日本', '中国', '美国'],
      axisLabel: {
        color: "#fff"
      },
      axisTick: {
        show: false
      }
    },
    series: [{
      name: '2010年',
      type: 'bar',
      data: [2.48, 3.4, 5.7, 6.09, 14.99]
    }, {
      name: '2020年',
      type: 'bar',
      data: [2.8, 3.8, 4.9, 14.7, 21]
    }]
  }; // 把配置给实例对象

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  myChart.setOption(option);
})();

setTimeout(function () {
  var myChart = echarts.init(document.querySelector(".line .chart"));
  option = {
    color: ["#99FFFF", "#99FF99", "#FF8888"],
    legend: {
      textStyle: {
        color: "rgba(255,255,255,0.5)"
      }
    },
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [['product', '2014', '2015', '2016', '2017', '2018', '2019'], ['美国', 5906, 5980, 5785, 6359, 6598, 5588], ['日本', 2825, 2698, 2705, 2972, 3175, 3039], ['欧盟15国', 5650, 5572, 5126, 5832, 6376, 6429]]
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        color: "#fff"
      }
    },
    yAxis: {
      gridIndex: 0,
      axisLabel: {
        color: "#fff"
      },
      axisTick: {
        show: false
      }
    },
    grid: {
      top: '55%'
    },
    series: [{
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: {
        focus: 'series'
      },
      color: "#99FFFF"
    }, {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: {
        focus: 'series'
      },
      color: "#99FF99"
    }, {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: {
        focus: 'series'
      },
      color: "	#FF8888"
    }, {
      type: 'pie',
      id: 'pie',
      radius: '30%',
      center: ['50%', '25%'],
      emphasis: {
        focus: 'data'
      },
      label: {
        formatter: '{b}: {@2012} ({d}%)'
      },
      encode: {
        itemName: 'product',
        value: '2012',
        tooltip: '2012'
      }
    }]
  };
  myChart.on('updateAxisPointer', function (event) {
    var xAxisInfo = event.axesInfo[0];

    if (xAxisInfo) {
      var dimension = xAxisInfo.value + 1;
      myChart.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart.setOption(option);
});

(function () {
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

      }
    },
    legend: {
      data: ['对中国出口', '自中国进口'],
      textStyle: {
        color: "rgba(255,255,255,0.5)"
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'value',
      axisLabel: {
        color: "#fff"
      }
    }],
    yAxis: [{
      type: 'category',
      axisTick: {
        show: false
      },
      data: ['印度', '英国', '德国', '日本', '美国'],
      axisLabel: {
        color: "#fff"
      }
    }],
    series: [{
      name: '对中国出口',
      type: 'bar',
      color: "#acb",
      stack: '总量',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [-171, -301, -1077, -1347, -1066]
    }, _defineProperty({
      name: '自中国进口',
      type: 'bar',
      color: "#f10",
      stack: '总量',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [683, 655, 859, 1692, 4522]
    }, "color", "#fff")]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

(function () {
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  option = {
    color: ["#66FF66", "#FF8888"],
    tooltip: {},
    legend: {
      data: ['欧盟', '美国'],
      top: "0%",
      right: "10%",
      textStyle: {
        color: "rgba(255,255,255,0.5)"
      }
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: [{
        name: '机电产品',
        max: 2500,
        color: "#FFFF77"
      }, {
        name: '家具、玩具',
        max: 600,
        color: "#FFFF77"
      }, {
        name: '纺织品及原料',
        max: 500,
        color: "#FFFF77"
      }, {
        name: '贱金属制品',
        max: 400,
        color: "#FFFF77"
      }, {
        name: '塑料橡胶',
        max: 300,
        color: "#FFFF77"
      }, {
        name: '轻工产品',
        max: 250,
        color: "#FFFF77"
      }]
    },
    series: [{
      name: '欧盟vs美国',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [{
        value: [2343, 401, 440, 301, 170, 133],
        name: '欧盟'
      }, {
        value: [2173, 554, 372, 241, 205, 174],
        name: '美国'
      }]
    }]
  }; // 使用刚指定的配置项和数据显示图表。

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})(); // 图表也等比例缩放


window.addEventListener("resize", function () {
  // 让我们的图表调用 resize这个方法
  myChart.resize();
});