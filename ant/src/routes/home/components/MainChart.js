import React from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/theme/macarons';
import CHARTCONFIG from 'constants/chartConfig';

const COLOR = {
  success:    'rgba(139,195,74,.7)',
  info:       'rgba(89, 99, 90,.7)',
  text:       'rgba(0, 0, 0,.7)',
  gray:       '#EDF0F1'
}

let combo = {};

combo.option = {
  title: {
    text: 'U.S. Mortgage Securities Issuance ($B)',
    textStyle: {
      color: '#000000'
    }
  },
  legend: {
    show: true,
    x: 'right',
    y: 'top',
    data: ['Agency', 'Non-Agency']
  },
  grid: {
    x: 40,
    y: 60,
    x2: 40,
    y2: 30,
    borderWidth: 0
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: COLOR.gray
      }
    }
  },
  xAxis: [
    {
      type : 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#607685'
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#f3f3f3'
        }
      },
      data : [1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
    }
  ],
  yAxis: [
    {
      type : 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#607685'
        }
      },
      splitLine: {
        lineStyle: {
          color: CHARTCONFIG.color.splitLine
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: CHARTCONFIG.color.splitArea
        }
      }
    }
  ],
  series: [
    {
      name:'Agency',
      type:'line',
      stack: 'Sum',
      animation: false,
      smooth:true,
      itemStyle: {
        normal: {
          color: COLOR.info,
          areaStyle: {
            color: COLOR.info,
            type: 'default'
          }
        },
      },
      data:[443.44,  546.12,  954.22,  883.60,  584.37,  1479.00,  2039.46,  2789.09,  1409.87,  1329.81,  1199.32,  1405.45,  1323.95,  2088.59,  1921.33,  1653.15,  2119.17,  1982.01,  1265.16,  1601.42,  1880.24,  1710.79,  1628.76],
      symbol: 'none',
      legendHoverLink: false,
      z: 2
    },
    {
      name:'Non-Agency',
      type:'line',
      stack: 'Sum',
      animation: false,
      smooth:true,
      itemStyle: {
        normal: {
          color: COLOR.success,
          areaStyle: {
            color: COLOR.success,
            type: 'default'
          }
        }
      },
      data:[108.35,  179.09,  306.35,  237.98,  195.51,  337.71,  475.42,  748.03,  1018.45,  1434.33,  1491.80,  1028.72,  70.03,  83.50,  91.26,  71.64,  75.95,  138.19,  174.48,  199.27,  163.95,  224.00,  269.88],
      symbol: 'none',
      legendHoverLink: false,
      z: 3
    }
  ]
};

const Chart = () => (
  <div className="box box-default mb-4">
    <div className="box-body">
      <ReactEcharts option={combo.option} theme={"macarons"} style={{height: '250px'}} />
    </div>
  </div>
);

export default Chart;
