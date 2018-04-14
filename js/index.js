/**
 * Created by Administrator on 2018/4/13.
 */

var pieChart = echarts.init(document.getElementById('pie'));
var barChart = echarts.init(document.getElementById('bar'));
//饼图
pie.option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        bottom: 'bottom',
        data: ['正常项目', '滞后项目', '严重滞后']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            color: ['#2d9a2d', '#ffa016', '#f24141'],
            data: [
                {value: 95.65, name: '正常项目'},
                {value: 4.35, name: '滞后项目'},
                {value: 0, name: '严重滞后'},
            ]
        }
    ]
}
//柱状图
bar.option = {
    // legend: {},
    tooltip: {},
    color: ['#2d9a2d', '#ffa016', '#f24141'],
    dataset: {
        source: [
            // ['product', '2015', '2016', '2017'],
            ['A', 43.3, 85.8, 93.7],
            ['B', 83.1, 73.4, 55.1],
            ['C', 86.4, 65.2, 82.5],
            ['D', 72.4, 53.9, 39.1],
            ['E', 72.4, 53.9, 39.1],
            ['F', 72.4, 53.9, 39.1],
            ['G', 72.4, 53.9, 39.1],
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};


// 为echarts对象加载数据
setTimeout(function () {
    pieChart.setOption(pie.option);
    barChart.setOption(bar.option);
}, 30)