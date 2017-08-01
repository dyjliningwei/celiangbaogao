$(function () {

    // 导航点击

    $(".mobile-inner-header-icon").click(function () {
        $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
        $(".mobile-inner-nav").slideToggle(250);
    });

    $(".mobile-inner-nav a").each(function (index) {
        $(this).css({'animation-delay': (index / 10) + 's'});
    });

    // 导航切换
    var a = $('.mobile-inner-nav a');

    $.each(a, function () {
        var index = $(this).index();
        $(this).on('click', function () {
            mySwiper.slideTo(index + 1);
            $(".mobile-inner-header-icon").click();
        })
    })

    // 数据切换

    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        paginationClickable: true,
        initialSlide: 0,
        spaceBetween: 30,
        paginationType: 'bullets',
        hashnav: true,
        hashnavWatchState: true,
        loop: true,
        autoplayDisableOnInteraction: false,
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        },
    })


    // 数据展示／

    var chart = new Highcharts.Chart('line', {
        title: {
            text: '一周体重数据',
            style:{
                fontSize:'15px'
            },
            x: 0
        },
        chart: {
            type: 'areaspline'
        },
        subtitle: {
            text: '',
            x: -20
        },
        colors: ['#758fbf'],
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            labels: {
                enabled: false
            },
            tickWidth: 0
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
            gridLineWidth: 0
        },
        tooltip: {
            valueSuffix: 'kg'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0,
            enabled: false
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                    style: {
                        color: '#808080',
                    }
                },
            },
            series: {
                marker: {
                    enabled: false
                }
            },
        },
        series: [{
            name: '体重',
            data: [0, 100, 130, 120, 100, 140, 120, 130],
        }]
    });

})