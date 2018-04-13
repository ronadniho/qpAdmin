/**
 * Created by Administrator on 2018/4/13.
 */

var myChart = echarts.init(document.getElementById('main'));

// var option = {
//     title: {
//         text: '某站点用户访问来源',
//         subtext: '纯属虚构',
//         x: 'center'
//     },
//     tooltip: {
//         trigger: 'item',
//         formatter: "{a} <br/>{b} : {c} ({d}%)"
//     },
//     legend: {
//         orient: 'vertical',
//         x: 'left',
//         data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
//     },
//     toolbox: {
//         show: true,
//         feature: {
//             mark: { show: true },
//             dataView: { show: true, readOnly: false },
//             magicType: {
//                 show: true,
//                 type: ['pie', 'funnel'],
//                 option: {
//                     funnel: {
//                         x: '25%',
//                         width: '50%',
//                         funnelAlign: 'left',
//                         max: 1548
//                     }
//                 }
//             },
//             restore: { show: true },
//             saveAsImage: { show: true }
//         }
//     },
//     calculable: true,
//     series: [
//         {
//             name: '访问来源',
//             type: 'pie',
//             radius: '55%',
//             center: ['50%', '60%'],
//             data: [
//                 { value: 335, name: '直接访问' },
//                 { value: 310, name: '邮件营销' },
//                 { value: 234, name: '联盟广告' },
//                 { value: 135, name: '视频广告' },
//                 { value: 1548, name: '搜索引擎' }
//             ]
//         }
//     ]
// };
var weatherIcons = {
    'Sunny': './data/asset/img/weather/sunny_128.png',
    'Cloudy': './data/asset/img/weather/cloudy_128.png',
    'Showers': './data/asset/img/weather/showers_128.png'
};

option = {
    title: {
        text: '天气情况统计',
        subtext: '虚构数据',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['西凉', '益州','兖州','荆州','幽州']
    },
    series : [
        {
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
                {
                    value:1548,
                    name: '幽州',
                    label: {
                        normal: {
                            formatter: [
                                '{title|{b}}{abg|}',
                                '  {weatherHead|天气}{valueHead|天数}{rateHead|占比}',
                                '{hr|}',
                                '  {Sunny|}{value|202}{rate|55.3%}',
                                '  {Cloudy|}{value|142}{rate|38.9%}',
                                '  {Showers|}{value|21}{rate|5.8%}'
                            ].join('\n'),
                            backgroundColor: '#eee',
                            borderColor: '#777',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                title: {
                                    color: '#eee',
                                    align: 'center'
                                },
                                abg: {
                                    backgroundColor: '#333',
                                    width: '100%',
                                    align: 'right',
                                    height: 25,
                                    borderRadius: [4, 4, 0, 0]
                                },
                                Sunny: {
                                    height: 30,
                                    align: 'left',
                                    backgroundColor: {
                                        image: weatherIcons.Sunny
                                    }
                                },
                                Cloudy: {
                                    height: 30,
                                    align: 'left',
                                    backgroundColor: {
                                        image: weatherIcons.Cloudy
                                    }
                                },
                                Showers: {
                                    height: 30,
                                    align: 'left',
                                    backgroundColor: {
                                        image: weatherIcons.Showers
                                    }
                                },
                                weatherHead: {
                                    color: '#333',
                                    height: 24,
                                    align: 'left'
                                },
                                hr: {
                                    borderColor: '#777',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                value: {
                                    width: 20,
                                    padding: [0, 20, 0, 30],
                                    align: 'left'
                                },
                                valueHead: {
                                    color: '#333',
                                    width: 20,
                                    padding: [0, 20, 0, 30],
                                    align: 'center'
                                },
                                rate: {
                                    width: 40,
                                    align: 'right',
                                    padding: [0, 10, 0, 0]
                                },
                                rateHead: {
                                    color: '#333',
                                    width: 40,
                                    align: 'center',
                                    padding: [0, 10, 0, 0]
                                }
                            }
                        }
                    }
                },
                {value:535, name: '荆州'},
                {value:510, name: '兖州'},
                {value:634, name: '益州'},
                {value:735, name: '西凉'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


// 为echarts对象加载数据
myChart.setOption(option);