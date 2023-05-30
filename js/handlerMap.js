function handlerMap(subchainList) {
    let nc = document.getElementById("barChart");
    var myChart = this.echarts.init(nc);
    this.echarts.registerMap("山东", { geoJSON: shandong });


    var series = [];
    [["济南市", subchainList]].forEach(function (item, i) {
        series.push(
            {

                type: 'effectScatter',
                symbolSize: 12,
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    brushType: 'stroke',
                    scale: 4
                },
                label: {
                    normal: {
                        formatter: "{b}",
                        position: "right",
                        show: false,
                    },
                    emphasis: {
                        show: true,
                    },
                },
                itemStyle: {
                    normal: {
                        color: "rgb(255,187,96,1)",

                    },
                },
                name: "light",
                // type: "scatter",
                coordinateSystem: "geo",
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem.name,
                        txNum: dataItem.txNum,
                        value: [dataItem.longitude, dataItem.latitude],
                        flag: dataItem.flag == 1 ? '主链' : '子链',
                        org: dataItem.org,
                        type: dataItem.type,
                        runStatus: dataItem.runStatus
                    }
                })
            },
        );
    });


    var option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(0,0,0)',
            borderWidth: 0,
            textStyle: {
                color: 'rgba(0,0,0,0)',
                width: 1,
                fontSize: 1,
            },
            padding: 0,
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0);',

            formatter: function (item) {

                if (item.componentSubType === "lines") {

                    var tipHtml1 = "";
                    tipHtml1 =
                        '<div  style="background:#fff;display:flex ;width:131px ;overflow: hidden;height: 41px; align - items: center; border - radius: 10px; box - shadow: 0 0 2px rgb(88, 222, 251);">' +
                        '<divstyle=" background-color: #FFBB60; width: 40px;height: 41px;display: flex; align-items: center;    text-align: center;    padding-left: 12px;">' +
                        `<img src='./static/sdzwqkl/1969.png' alt='#'>` +
                        '</div>' +
                        '<div style="color: #000;height: 41px;line-height: 41px;width: 93px;font-size:14px; background - color: #fff; text - align: center;">' +
                        '电子证照链' +
                        "</div>" +
                        "</div>";
                    return tipHtml1;
                } else if (item.componentSubType === "effectScatter") {

                    return `<div class='noticeBg' style="width: 180Px;height: 207Px;background-image: url(${'./static/sdzwqkl/noticeBg.png'});opacity: 0.85;;overflow: hidden;padding-left: 22px;padding-right: 10px;">
                                <div style="width:100%;margin-top:31px">
                                    <div style="display:inline-block;height: 20px;
                                    font-size: 16px;line-height:20px;
                                    font-family: Microsoft YaHei;
                                    font-weight: 400;
                                    color: #C9EFF2;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                 ">${item.data.name}</div>
                                <div
                    style="overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;display:inline-block;width: 50px;height: 16px;background: #3EBDCD;border-radius: 8px;line-height:16px;font-size: 12px;color: #040F2D;text-align: center;margin-left:10px">
                    ${item.data.flag}</div>
            </div>
            <div style="width: 164px;
height: 1px;
background: #C9EFF2;
opacity: 0.2;margin-top: 10px;"></div>
            <div style="width: 100%;
            height: 16px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #C9EFF2;
            line-height: 16px;
            margin-top:5px;
            overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;">${item.data.org}</div>
            <div style="width: 100%;
            height: 16px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #C9EFF2;
            line-height: 16px;
            margin-top:5px;
            overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;">${item.data.type}</div>

<div style="margin-top:5px">
    <div style="
            display: inline-block;
            height: 13px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #C9EFF2;
            line-height: 12px;">
            上链数据量：</div>
            <div style="
            display: inline-block;
            height: 13px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #3EBDCD;
            line-height: 12px;margin-left:15px;">
            ${item.data.txNum}</div>
</div>
<div style="width: 164px;
height: 1px;
background: #C9EFF2;
opacity: 0.2;margin-top: 10px;"></div>
<div style="width:100%;text-align:center;margin-top:15px;font-size: 16px;
font-family: Microsoft YaHei;
font-weight: 400;
color: #C9EFF2;">
${item.data.runStatus == 'normal' ? '正常' : item.data.runStatus == 'alarm' ? '警告' : '故障'}
</div>
                    </div>`;
                } else if (item.componentSubType === "scatter") {

                    var tipHtml3 = "";
                    tipHtml3 =
                        '<div  style="background:#fff;display:flex ;width:131px ;overflow: hidden;height: 41px; align-items: center; border-radius: 10px; box-shadow: 0 0 2px rgb(88, 222, 251);">' +
                        '<div style=" background-color: #FFBB60; width: 40px;height: 41px;display: flex; align-items: center;    text-align: center;    padding-left: 12px;">' +
                        `<img src='./static/sdzwqkl/1969.png' alt='#'>` +
                        '</div>' +
                        '<div style="color: #000;height: 41px;line-height: 41px;width: 93px;font-size:14px; background-color: #fff; text-align: center;">' +
                        '电子证照链' +


                        "</div>" +
                        "</div>";
                    return tipHtml3;
                }
            },
            itemStyle: {
                normal: {
                    color: "rgb(255,187,96,1)",
                    borderColor: 'rgb(255,187,96,.5)',
                    borderWidth: 10,
                },
            },
        },
        geo: {
            map: "山东",

            layoutCenter: ["50%", "50%"],
            layoutSize: "140%",

            select: {
                label: {
                    show: true,
                    color: "#fff",
                },
                itemStyle: {
                    areaColor: "rgb(0, 60, 121 ,.7)",
                }
            },

            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                    },
                },
                emphasis: {
                    textStyle: {
                        color: "#fff",
                    },
                },
            },
            roam: false,
            mapLocation: {
                width: "120%",
                height: "100%",
            },

            itemStyle: {
                normal: {
                    borderColor: "rgba(132,188, 223)",
                    borderWidth: 1,
                    areaColor: "rgb(15,72,138,0.5)",

                },
                emphasis: {
                    areaColor: "rgb(0, 60, 121 ,.7)",
                    focus: 'none',
                    disabled: false, //,

                },

            },

        },
        series: series,
    };
    myChart.setOption(option);
    myChart.on("mouseover", function (params) {
        myChart.dispatchAction({
            type: 'downplay'
        });
    });
}

