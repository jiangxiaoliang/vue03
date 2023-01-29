<template>
  <div :style="{background: `url(${bg}) no-repeat`, backgroundSize: '100% 100%'}" class="box">
    <div style="color: white" class="box-left">
      <div class="box-left-card">
        <section>
          <div>较上日+{{store.chinaAdd.localConfirmH5}}</div>
          <div>{{store.chinaTotal.localConfirm}}</div>
          <div>本土现有确诊</div>
        </section>
        <section>
          <div>较上日+{{store.chinaAdd.nowConfirm}}</div>
          <div>{{store.chinaTotal.nowConfirm}}</div>
          <div>现有确诊</div>
        </section>
        <section>
          <div>较上日+{{store.chinaAdd.confirm}}</div>
          <div>{{store.chinaTotal.confirm}}</div>
          <div>累计确诊</div>
        </section>
        <section>
          <div>较上日+{{store.chinaAdd.noInfect}}</div>
          <div>{{store.chinaTotal.noInfect}}</div>
          <div>无症状感染者</div>
        </section>
        <section>
          <div>较上日+{{store.chinaAdd.importedCase}}</div>
          <div>{{store.chinaTotal.importedCase}}</div>
          <div>境外输入</div>
        </section>
        <section>
          <div>较上日+{{store.chinaAdd.dead}}</div>
          <div>{{store.chinaTotal.dead}}</div>
          <div>累计死亡</div>
        </section>
      </div>
      <div class="box-left-pie"></div>
      <div class="box-left-line"></div>
    </div>
    <div class="box-center" id="china"></div>
    <div style="color: white" class="box-right">
      <table class="table" cellspacing="0" border="1">
        <thead>
          <tr>
            <th>地区</th>
            <th>新增确诊</th>
            <th>累计确诊</th>
            <th>治愈</th>
            <th>死亡</th>
          </tr>
        </thead>
        <transition-group tag="tbody" enter-active-class="animate__animated animate__flipInY">
          <tr :key="item.name" v-for="item in store.item">
            <td align="center">{{item.name}}</td>
            <td align="center">{{item.today.confirm}}</td>
            <td align="center">{{item.total.confirm}}</td>
            <td align="center">{{item.total.heal}}</td>
            <td align="center">{{item.total.dead}}</td>
          </tr>
        </transition-group>
      </table>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { useNovidDataStore } from './stores'
import * as echarts from 'echarts'
import bg from './assets/bg.jpg'
import './assets/china.js'
import { geoCoordMap } from './assets/geomap'
import 'animate.css'

const store = useNovidDataStore()

onMounted(async () => {
  await store.getList()
  initCharts()
  initPie()
  initLine()
})

const initCharts = () => {
  const city = store.list.diseaseh5Shelf.areaTree[0].children
  store.item = city[2].children
  const mapData = city.map(v => {
    return {
      name: v.name,
      value: geoCoordMap[v.name].concat(v.today.confirm),
      children: v.children
    }
  })
  console.log(city)

  const charts = echarts.init(document.querySelector('#china') as HTMLElement)
  // var data = [
  //   {
  //     name: '四川',
  //     // value: [122.24, 29.55, 100],
  //     selected: true,
  //   },
  // ];
  // var mapDate = [
  //   {
  //     name: '青岛',
  //     value: [120.417483, 36.110931],
  //     datas: 1354,
  //   }
  // ];

  charts.setOption({
    // backgroundColor: 'black',
    geo: {
      map: 'china',
      aspectScale: 0.8,
      layoutCenter: ['50%', '50%'],
      layoutSize: '120%',
      itemStyle: {
        // normal: {
          areaColor: {
            type: 'linear-gradient',
            x: 0,
            y: 1200,
            x2: 1000,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#152E6E90', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#0673AD', // 50% 处的颜色
              },
            ],
            global: true, // 缺省为 false
          },
          shadowColor: '#276fce',
          shadowOffsetX: 0,
          shadowOffsetY: 15,
          opacity: 0.5,
        // },
      },
      emphasis: {
        areaColor: '#276fce',
      },
      regions: [
        {
          name: '南海诸岛',
          itemStyle: {
            areaColor: 'rgba(0, 10, 52, 1)',
            borderColor: 'rgba(0, 10, 52, 1)',
            // normal: {
              opacity: 0,
              label: {
                show: false,
                color: '#009cc9',
              },
            // },
          },
          label: {
            show: false,
            color: '#FFFFFF',
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: 'map',
        map: 'china',
        aspectScale: 0.8,
        layoutCenter: ['50%', '50%'], //地图位置
        layoutSize: '120%',
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },
        label: {
          show: true,
          color: '#FFFFFF80',
          fontSize: 12,
        },
        itemStyle: {
          // normal: {
            areaColor: {
              type: 'linear-gradient',
              x: 0,
              y: 1200,
              x2: 1000,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: '#152E6E90', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#0673AD', // 50% 处的颜色
                },
              ],
              global: true, // 缺省为 false
            },
            borderColor: '#1cccff50',
            borderWidth: 1.8,
          // },
        },
        emphasis: {
          // areaColor: '#02102b',
          areaColor: 'rgba(147, 235, 248, 0)',
          // label: {
          //   color: '#fff',
          // },
        },
        data: mapData,
      },
      {
        // tooltip: {
        //   show: false,
        // },
        // type: 'effectScatter',
        type: 'scatter',
        coordinateSystem: 'geo',
        // rippleEffect: {
        //   scale: 10,
        //   brushType: 'stroke',
        // },
        showEffectOn: 'render',
        itemStyle: {
          // normal: {
            shadowColor: '#0ff',
            // shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            // color: function (params) {
            //   var colorList = [
            //     new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            //       {
            //         offset: 0,
            //         color: '#64fbc5',
            //       },
            //       {
            //         offset: 1,
            //         color: '#018ace',
            //       },
            //     ]),

            //   ];
            //   return colorList[params.dataIndex];
            // },
          // },
        },
        label: {
          // normal: {
            show: true,
            color: '#fff',
            formatter(value:any) {
              return value.data.value[2]
            },
          // },
        },
        // symbol: 'circle',
        // symbolSize: [6, 2],
        symbol: 'pin',
        symbolSize: [45, 45],
        data: mapData,
        // zlevel: 1,
      },
      // {
      //   type: 'effectScatter',
      //   coordinateSystem: 'geo',
      //   zlevel: 2,
      //   symbolSize: 10,
      //   rippleEffect: {
      //     period: 13,
      //     scale: 5,
      //     brushType: 'fill',
      //   },
      //   label: {
      //     // normal: {
      //       show: true,
      //       position: 'right',
      //       formatter: '{b}',
      //       color: '#b3e2f2',
      //       fontWeight: 'bold',
      //       fontSize: 18,
      //     // },
      //   },

      //   // data: data,
      //   itemStyle: {
      //     // normal: {
      //       show: true,
      //       color: '#a68625',
      //       shadowBlur: 20,
      //       shadowColor: '#fff',
      //     // },
      //   },
      //   emphasis: {
      //     areaColor: '#f00',
      //   },
      // },
    ],
  })

  charts.on('click', (e: any) => {
    console.log(e)
    store.item = e.data.children
  })
}

const initPie = () => {
  const charts = echarts.init(document.querySelector('.box-left-pie') as HTMLElement)
  charts.setOption({
    backgroundColor: '#223651',
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
          }
        },
        labelLine: {
          show: true
        },
        data: store.cityDetail.map(v => {
          return {
            name: v.city,
            value: v.nowConfirm
          }
        })
      }
    ]
  })
}

const initLine = () => {
  const charts = echarts.init(document.querySelector('.box-left-line') as HTMLElement)
  charts.setOption({
    backgroundColor: '#223651',
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: store.cityDetail.map(v => v.city),
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      }
    },
    label: {
      show: true
    },
    series: [
      {
        data: store.cityDetail.map(v => v.nowConfirm),
        type: 'line',
        smooth: true
      }
    ]
  })
}

</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

@itemColor: #41b0db;
@itemBg: #223651;
@itemBorder: #212028;

.table {
  width: 100%;
  background: #212028;
  tr {
    th {
      padding: 5px;
      white-space: nowrap;
    }
    td {
      padding: 5px 10px;
      width: 100%;
      white-space: nowrap;
    }
  }
}

.box {
  height: 100%;
  display: flex;
  overflow: hidden;

  &-left {
    width: 400px;
    &-card {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: auto auto auto;
      section {
        background: @itemBg;
        border: 1px solid @itemBorder;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        div:nth-child(2) {
          color: @itemColor;
          padding: 10px 0;
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
    &-pie {
      height: 320px;
      margin-top: 20px;
    }
    &-line {
      height: 320px;
      margin-top: 20px;
    }
  }

  &-center {
    flex: 1
  }

  &-right {
    width: 400px;
  }
}
</style>