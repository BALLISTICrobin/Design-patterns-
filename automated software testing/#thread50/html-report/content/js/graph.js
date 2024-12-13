/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 50.0, "series": [{"data": [[0.0, 17.0], [300.0, 3.0], [100.0, 27.0], [400.0, 1.0], [200.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "moodle/moodle/mod/forum/view.php-8", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/css/carousel.css-41", "isController": false}, {"data": [[0.0, 49.0], [300.0, 1.0]], "isOverall": false, "label": "home/public/img/program/pg-ai.jpg-91", "isController": false}, {"data": [[0.0, 22.0], [300.0, 2.0], [600.0, 1.0], [100.0, 18.0], [400.0, 1.0], [200.0, 6.0]], "isOverall": false, "label": "home/public/img/icpc.jpg-100", "isController": false}, {"data": [[0.0, 48.0], [200.0, 1.0], [100.0, 1.0]], "isOverall": false, "label": "moodle/moodle/login/index.php-29-0", "isController": false}, {"data": [[0.0, 49.0], [300.0, 1.0]], "isOverall": false, "label": "home/public/img/program/pg-cs.jpg-60", "isController": false}, {"data": [[0.0, 40.0], [300.0, 1.0], [200.0, 3.0], [100.0, 5.0], [400.0, 1.0]], "isOverall": false, "label": "home/web/assets/img/news/icpc20241.png-106", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/css/main.css-40", "isController": false}, {"data": [[0.0, 26.0], [300.0, 4.0], [700.0, 1.0], [100.0, 8.0], [400.0, 5.0], [200.0, 5.0], [500.0, 1.0]], "isOverall": false, "label": "home/public/img/researchlab.jpg-54", "isController": false}, {"data": [[0.0, 43.0], [300.0, 3.0], [100.0, 3.0], [200.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-22", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "moodle/moodle/login/index.php-29-1", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/js/color-modes.js-42", "isController": false}, {"data": [[0.0, 47.0], [200.0, 1.0], [100.0, 2.0]], "isOverall": false, "label": "moodle/moodle/login/index.php-28", "isController": false}, {"data": [[0.0, 48.0], [200.0, 1.0], [100.0, 1.0]], "isOverall": false, "label": "moodle/moodle/login/index.php-29", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/logo.png-77", "isController": false}, {"data": [[0.0, 47.0], [400.0, 1.0], [100.0, 2.0]], "isOverall": false, "label": "notice/public/js/bootstrap.bundle.min.js-120", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "notice/home/notice-129", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "home/public/img/logo.png-79", "isController": false}, {"data": [[0.0, 49.0], [200.0, 1.0]], "isOverall": false, "label": "notice/public/img/logo.png-127", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "home/home/pg_cc-83", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/Arrow-l.png-93", "isController": false}, {"data": [[0.0, 47.0], [300.0, 1.0], [400.0, 1.0], [100.0, 1.0]], "isOverall": false, "label": "notice/home/notice-125", "isController": false}, {"data": [[300.0, 3.0], [100.0, 42.0], [200.0, 5.0]], "isOverall": false, "label": "moodle/moodle/login/logout.php-37", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/home/ug-81", "isController": false}, {"data": [[0.0, 48.0], [200.0, 1.0], [100.0, 1.0]], "isOverall": false, "label": "home/public/js/bootstrap.bundle.min.js-48", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "home/public/img/service/Consultancy.jpg-103", "isController": false}, {"data": [[0.0, 48.0], [100.0, 1.0], [900.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-13-1", "isController": false}, {"data": [[0.0, 42.0], [300.0, 3.0], [100.0, 3.0], [400.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34", "isController": false}, {"data": [[0.0, 46.0], [300.0, 1.0], [200.0, 1.0], [100.0, 2.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-13-2", "isController": false}, {"data": [[0.0, 48.0], [300.0, 1.0], [200.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-17-0", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-17-1", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-17-2", "isController": false}, {"data": [[0.0, 48.0], [200.0, 1.0], [100.0, 1.0]], "isOverall": false, "label": "home/home/aboutus-78", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/program/pg-co.jpg-101", "isController": false}, {"data": [[0.0, 47.0], [100.0, 3.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-33", "isController": false}, {"data": [[0.0, 49.0], [300.0, 1.0]], "isOverall": false, "label": "notice/home/notice-112", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/program/pg-se.jpg-62", "isController": false}, {"data": [[0.0, 48.0], [300.0, 1.0], [200.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-13-0", "isController": false}, {"data": [[0.0, 48.0], [100.0, 2.0]], "isOverall": false, "label": "home/public/img/service/Outreach.jpg-68", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/program/pg-ds.jpg-64", "isController": false}, {"data": [[0.0, 45.0], [300.0, 1.0], [400.0, 2.0], [200.0, 2.0]], "isOverall": false, "label": "moodle/moodle/course/search.php-11", "isController": false}, {"data": [[0.0, 48.0], [100.0, 2.0]], "isOverall": false, "label": "moodle/moodle/pluginfile.php/15688/assignsubmission_file/submission_files/19238/2105019dft_fft_online.zip-35-0", "isController": false}, {"data": [[0.0, 49.0], [400.0, 1.0]], "isOverall": false, "label": "moodle/moodle/pluginfile.php/15688/assignsubmission_file/submission_files/19238/2105019dft_fft_online.zip-35-1", "isController": false}, {"data": [[0.0, 47.0], [300.0, 2.0], [100.0, 1.0]], "isOverall": false, "label": "moodle/moodle/user/view.php-24-1", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/Arrow-r.png-89", "isController": false}, {"data": [[0.0, 36.0], [300.0, 1.0], [100.0, 8.0], [200.0, 5.0]], "isOverall": false, "label": "home/public/img/program2.jpg-95", "isController": false}, {"data": [[0.0, 25.0], [300.0, 4.0], [100.0, 9.0], [400.0, 4.0], [200.0, 5.0], [500.0, 3.0]], "isOverall": false, "label": "home/public/img/gate.jpg-96", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "notice/public/js/jquery-1.11.2.min.js-122", "isController": false}, {"data": [[0.0, 47.0], [300.0, 1.0], [100.0, 2.0]], "isOverall": false, "label": "home/public/img/aboutus/c11.jpg-85", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "notice/favicon.ico-124", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/program/pg-ds.jpg-102", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "notice/public/img/logo3.png-126", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/program/pg-se.jpg-92", "isController": false}, {"data": [[0.0, 48.0], [300.0, 1.0], [100.0, 1.0]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Efficie.jpg-73", "isController": false}, {"data": [[1100.0, 1.0], [300.0, 2.0], [100.0, 39.0], [200.0, 4.0], [400.0, 2.0], [500.0, 2.0]], "isOverall": false, "label": "moodle/moodle/-6", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "home/public/img/aboutus/c21.jpg-57", "isController": false}, {"data": [[0.0, 45.0], [300.0, 3.0], [100.0, 1.0], [200.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/index.php-10", "isController": false}, {"data": [[0.0, 48.0], [300.0, 1.0], [100.0, 1.0]], "isOverall": false, "label": "home/public/img/program/ug.jpg-59", "isController": false}, {"data": [[0.0, 49.0], [400.0, 1.0]], "isOverall": false, "label": "home/public/img/service/Training.jpg-104", "isController": false}, {"data": [[0.0, 49.0], [400.0, 1.0]], "isOverall": false, "label": "home/public/js/main.js-51", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "notice/public/css/carousel.css-114", "isController": false}, {"data": [[0.0, 28.0], [300.0, 6.0], [100.0, 5.0], [800.0, 1.0], [400.0, 3.0], [200.0, 3.0], [900.0, 1.0], [500.0, 3.0]], "isOverall": false, "label": "home/public/img/icpc.jpg-52", "isController": false}, {"data": [[0.0, 48.0], [100.0, 1.0], [200.0, 1.0]], "isOverall": false, "label": "home/public/img/logo3.png-44", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/program/pg-ai.jpg-61", "isController": false}, {"data": [[0.0, 47.0], [100.0, 2.0], [400.0, 1.0]], "isOverall": false, "label": "moodle/moodle/pluginfile.php/15688/assignsubmission_file/submission_files/19238/2105019dft_fft_online.zip-35", "isController": false}, {"data": [[0.0, 49.0], [200.0, 1.0]], "isOverall": false, "label": "home/home-80", "isController": false}, {"data": [[0.0, 42.0], [300.0, 3.0], [400.0, 1.0], [100.0, 3.0], [1000.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-13", "isController": false}, {"data": [[0.0, 49.0], [200.0, 1.0]], "isOverall": false, "label": "home/home-82", "isController": false}, {"data": [[0.0, 48.0], [100.0, 2.0]], "isOverall": false, "label": "home/public/css/bootstrap.min.css-43", "isController": false}, {"data": [[0.0, 44.0], [200.0, 1.0], [100.0, 4.0], [1000.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-15", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/home-84", "isController": false}, {"data": [[0.0, 47.0], [400.0, 1.0], [200.0, 2.0]], "isOverall": false, "label": "moodle/moodle/course/index.php-9", "isController": false}, {"data": [[0.0, 48.0], [100.0, 2.0]], "isOverall": false, "label": "home/public/js/jquery-1.11.2.min.js-49", "isController": false}, {"data": [[0.0, 48.0], [100.0, 2.0]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34-0", "isController": false}, {"data": [[0.0, 48.0], [200.0, 2.0]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34-2", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/Arrow-l.png-65", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/program/pg-co.jpg-63", "isController": false}, {"data": [[0.0, 47.0], [300.0, 1.0], [400.0, 1.0], [200.0, 1.0]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34-1", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "notice/public/img/logo3.png-117", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-33-0", "isController": false}, {"data": [[0.0, 46.0], [300.0, 1.0], [100.0, 2.0], [400.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-17", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "notice/home/notice-131", "isController": false}, {"data": [[0.0, 48.0], [100.0, 2.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-33-2", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-33-1", "isController": false}, {"data": [[0.0, 47.0], [300.0, 2.0], [800.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/index.php-21", "isController": false}, {"data": [[0.0, 47.0], [300.0, 2.0], [100.0, 1.0]], "isOverall": false, "label": "moodle/moodle/my/courses.php-7", "isController": false}, {"data": [[100.0, 45.0], [200.0, 3.0], [400.0, 2.0]], "isOverall": false, "label": "moodle/moodle-26-1", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "moodle/moodle-26-0", "isController": false}, {"data": [[0.0, 48.0], [100.0, 1.0], [200.0, 1.0]], "isOverall": false, "label": "home/public/img/logo.png-45", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "notice/public/img/logo.png-118", "isController": false}, {"data": [[0.0, 34.0], [300.0, 1.0], [100.0, 6.0], [200.0, 7.0], [400.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "home/public/img/CSE-Fest-1.JPG-98", "isController": false}, {"data": [[100.0, 44.0], [200.0, 4.0], [400.0, 2.0]], "isOverall": false, "label": "moodle/moodle-26", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Efficie.jpg-109", "isController": false}, {"data": [[0.0, 48.0], [300.0, 1.0], [100.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/index.php-20", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "moodle/moodle/user/view.php-24-0", "isController": false}, {"data": [[0.0, 49.0], [200.0, 1.0]], "isOverall": false, "label": "notice/public/css/bootstrap.min.css-113", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/aboutus/c22.jpg-86", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/Arrow-r.png-66", "isController": false}, {"data": [[0.0, 6.0], [1100.0, 1.0], [600.0, 2.0], [300.0, 1.0], [700.0, 2.0], [100.0, 25.0], [200.0, 1.0], [800.0, 1.0], [400.0, 1.0], [900.0, 5.0], [500.0, 5.0]], "isOverall": false, "label": "home/public/img/lab.jpg-47", "isController": false}, {"data": [[0.0, 42.0], [300.0, 1.0], [400.0, 1.0], [100.0, 6.0]], "isOverall": false, "label": "notice/home/download/1302-128", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/aboutus/c21.jpg-88", "isController": false}, {"data": [[1100.0, 1.0], [300.0, 5.0], [600.0, 1.0], [100.0, 24.0], [200.0, 17.0], [400.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "home/public/img/researchlab.jpg-99", "isController": false}, {"data": [[0.0, 46.0], [300.0, 1.0], [100.0, 2.0], [400.0, 1.0]], "isOverall": false, "label": "moodle/moodle/my/courses.php-36", "isController": false}, {"data": [[0.0, 48.0], [400.0, 1.0], [100.0, 1.0]], "isOverall": false, "label": "moodle/moodle/my/courses.php-32", "isController": false}, {"data": [[0.0, 48.0], [200.0, 1.0], [100.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-22-0", "isController": false}, {"data": [[0.0, 47.0], [100.0, 2.0], [200.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-22-1", "isController": false}, {"data": [[0.0, 49.0], [300.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-22-2", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Explori.jpg-74", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "notice/public/css/main.css-116", "isController": false}, {"data": [[0.0, 25.0], [600.0, 1.0], [300.0, 2.0], [1300.0, 1.0], [100.0, 7.0], [400.0, 2.0], [200.0, 5.0], [900.0, 1.0], [500.0, 6.0]], "isOverall": false, "label": "home/public/img/gate.jpg-46", "isController": false}, {"data": [[0.0, 48.0], [100.0, 2.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-15-0", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/aboutus/c12.jpg-56", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-15-1", "isController": false}, {"data": [[0.0, 48.0], [200.0, 1.0], [900.0, 1.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-15-2", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "notice/public/js/color-modes.js-115", "isController": false}, {"data": [[0.0, 48.0], [300.0, 1.0], [100.0, 1.0]], "isOverall": false, "label": "home/public/img/program/pg-cs.jpg-90", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Explori.jpg-110", "isController": false}, {"data": [[0.0, 33.0], [100.0, 9.0], [400.0, 1.0], [200.0, 7.0]], "isOverall": false, "label": "home/web/assets/img/news/icpc20241.png-69", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "notice/public/js/jquery-3.7.1.min.js-119", "isController": false}, {"data": [[0.0, 20.0], [600.0, 2.0], [300.0, 3.0], [700.0, 3.0], [100.0, 11.0], [400.0, 4.0], [500.0, 6.0], [1000.0, 1.0]], "isOverall": false, "label": "home/public/img/program2.jpg-50", "isController": false}, {"data": [[0.0, 47.0], [200.0, 1.0], [100.0, 1.0], [1800.0, 1.0]], "isOverall": false, "label": "moodle/moodle/my/courses.php-19", "isController": false}, {"data": [[0.0, 47.0], [100.0, 2.0], [200.0, 1.0]], "isOverall": false, "label": "notice/home/download/1306-123", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/web/assets/img/news/elsiver2022.jpg-108", "isController": false}, {"data": [[300.0, 2.0], [100.0, 43.0], [400.0, 2.0], [200.0, 1.0], [1000.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "moodle/moodle/-12", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "home/public/img/aboutus/c12.jpg-87", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "home/public/img/program/ug.jpg-94", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/service/Training.jpg-70", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/service/Outreach.jpg-105", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "notice/public/js/main.js-121", "isController": false}, {"data": [[0.0, 48.0], [300.0, 1.0], [400.0, 1.0]], "isOverall": false, "label": "notice/home/download/1280-130", "isController": false}, {"data": [[0.0, 49.0], [300.0, 1.0]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_IMPACTS2.jpg-111", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/aboutus/c22.jpg-58", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "home/public/img/service/Consultancy.jpg-67", "isController": false}, {"data": [[0.0, 44.0], [300.0, 1.0], [100.0, 5.0]], "isOverall": false, "label": "home/web/assets/img/news/VIP%20Cup%202023.jpg-107", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/public/img/areabg.png-76", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/web/assets/img/news/elsiver2022.jpg-72", "isController": false}, {"data": [[0.0, 46.0], [300.0, 2.0], [100.0, 2.0]], "isOverall": false, "label": "moodle/moodle/user/view.php-24", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "home/public/img/aboutus/c11.jpg-55", "isController": false}, {"data": [[0.0, 47.0], [300.0, 2.0], [200.0, 1.0]], "isOverall": false, "label": "home/home-39", "isController": false}, {"data": [[0.0, 50.0]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_IMPACTS2.jpg-75", "isController": false}, {"data": [[300.0, 2.0], [100.0, 44.0], [200.0, 4.0]], "isOverall": false, "label": "moodle/moodle/login/logout.php-37-1", "isController": false}, {"data": [[0.0, 49.0], [100.0, 1.0]], "isOverall": false, "label": "moodle/moodle/login/logout.php-37-0", "isController": false}, {"data": [[0.0, 29.0], [600.0, 2.0], [300.0, 5.0], [100.0, 5.0], [400.0, 4.0], [200.0, 3.0], [500.0, 2.0]], "isOverall": false, "label": "home/public/img/CSE-Fest-1.JPG-53", "isController": false}, {"data": [[0.0, 25.0], [300.0, 6.0], [100.0, 10.0], [400.0, 5.0], [200.0, 4.0]], "isOverall": false, "label": "home/public/img/lab.jpg-97", "isController": false}, {"data": [[0.0, 42.0], [100.0, 6.0], [200.0, 2.0]], "isOverall": false, "label": "home/web/assets/img/news/VIP%20Cup%202023.jpg-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 749.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 6501.0, "series": [{"data": [[0.0, 6501.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 749.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 2.085193889541716, "minX": 1.73403654E12, "maxY": 4.285314685314684, "series": [{"data": [[1.73403666E12, 4.285314685314684], [1.73403654E12, 2.085193889541716], [1.7340366E12, 3.449247207382222]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73403666E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 17789.316666666666, "minX": 1.73403654E12, "maxY": 1.8186391783333335E7, "series": [{"data": [[1.73403666E12, 7168402.016666667], [1.73403654E12, 7523305.583333333], [1.7340366E12, 1.8186391783333335E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.73403666E12, 17789.316666666666], [1.73403654E12, 22227.033333333333], [1.7340366E12, 53735.316666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73403666E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 6.909090909090909, "minX": 1.73403654E12, "maxY": 544.8888888888888, "series": [{"data": [[1.73403666E12, 175.14285714285714], [1.73403654E12, 104.84615384615384], [1.7340366E12, 144.7]], "isOverall": false, "label": "moodle/moodle/mod/forum/view.php-8", "isController": false}, {"data": [[1.73403666E12, 8.88888888888889], [1.73403654E12, 8.416666666666666], [1.7340366E12, 8.344827586206897]], "isOverall": false, "label": "home/public/css/carousel.css-41", "isController": false}, {"data": [[1.73403666E12, 13.600000000000001], [1.73403654E12, 9.181818181818182], [1.7340366E12, 23.137931034482758]], "isOverall": false, "label": "home/public/img/program/pg-ai.jpg-91", "isController": false}, {"data": [[1.73403666E12, 170.5], [1.73403654E12, 94.72727272727272], [1.7340366E12, 162.7407407407408]], "isOverall": false, "label": "home/public/img/icpc.jpg-100", "isController": false}, {"data": [[1.73403666E12, 26.375], [1.73403654E12, 28.499999999999996], [1.7340366E12, 35.30000000000001]], "isOverall": false, "label": "moodle/moodle/login/index.php-29-0", "isController": false}, {"data": [[1.73403666E12, 42.2], [1.73403654E12, 10.083333333333334], [1.7340366E12, 12.964285714285715]], "isOverall": false, "label": "home/public/img/program/pg-cs.jpg-60", "isController": false}, {"data": [[1.73403666E12, 125.53846153846153], [1.73403654E12, 58.99999999999999], [1.7340366E12, 93.34615384615385]], "isOverall": false, "label": "home/web/assets/img/news/icpc20241.png-106", "isController": false}, {"data": [[1.73403666E12, 20.22222222222222], [1.73403654E12, 8.833333333333334], [1.7340366E12, 11.482758620689655]], "isOverall": false, "label": "home/public/css/main.css-40", "isController": false}, {"data": [[1.73403666E12, 267.1], [1.73403654E12, 87.75], [1.7340366E12, 194.96428571428575]], "isOverall": false, "label": "home/public/img/researchlab.jpg-54", "isController": false}, {"data": [[1.73403666E12, 150.125], [1.73403654E12, 80.75], [1.7340366E12, 96.96666666666668]], "isOverall": false, "label": "moodle/moodle/course/view.php-22", "isController": false}, {"data": [[1.73403666E12, 32.0], [1.73403654E12, 31.166666666666668], [1.7340366E12, 31.9]], "isOverall": false, "label": "moodle/moodle/login/index.php-29-1", "isController": false}, {"data": [[1.73403666E12, 9.555555555555555], [1.73403654E12, 7.250000000000002], [1.7340366E12, 8.931034482758621]], "isOverall": false, "label": "home/public/js/color-modes.js-42", "isController": false}, {"data": [[1.73403666E12, 83.875], [1.73403654E12, 30.333333333333332], [1.7340366E12, 31.56666666666667]], "isOverall": false, "label": "moodle/moodle/login/index.php-28", "isController": false}, {"data": [[1.73403666E12, 58.37499999999999], [1.73403654E12, 60.166666666666664], [1.7340366E12, 67.4666666666667]], "isOverall": false, "label": "moodle/moodle/login/index.php-29", "isController": false}, {"data": [[1.73403666E12, 9.7], [1.73403654E12, 8.181818181818182], [1.7340366E12, 12.03448275862069]], "isOverall": false, "label": "home/public/img/logo.png-77", "isController": false}, {"data": [[1.73403666E12, 22.076923076923077], [1.73403654E12, 14.363636363636365], [1.7340366E12, 34.42307692307693]], "isOverall": false, "label": "notice/public/js/bootstrap.bundle.min.js-120", "isController": false}, {"data": [[1.73403666E12, 33.46666666666666], [1.73403654E12, 29.09090909090909], [1.7340366E12, 28.458333333333332]], "isOverall": false, "label": "notice/home/notice-129", "isController": false}, {"data": [[1.73403666E12, 17.700000000000003], [1.73403654E12, 7.909090909090908], [1.7340366E12, 15.103448275862068]], "isOverall": false, "label": "home/public/img/logo.png-79", "isController": false}, {"data": [[1.73403666E12, 26.333333333333332], [1.73403654E12, 9.0], [1.7340366E12, 9.541666666666668]], "isOverall": false, "label": "notice/public/img/logo.png-127", "isController": false}, {"data": [[1.73403666E12, 26.2], [1.73403654E12, 15.818181818181818], [1.7340366E12, 17.137931034482758]], "isOverall": false, "label": "home/home/pg_cc-83", "isController": false}, {"data": [[1.73403666E12, 17.2], [1.73403654E12, 7.363636363636364], [1.7340366E12, 8.586206896551724]], "isOverall": false, "label": "home/public/img/Arrow-l.png-93", "isController": false}, {"data": [[1.73403666E12, 27.857142857142854], [1.73403654E12, 27.454545454545453], [1.7340366E12, 56.72]], "isOverall": false, "label": "notice/home/notice-125", "isController": false}, {"data": [[1.73403666E12, 177.00000000000003], [1.73403654E12, 149.66666666666669], [1.7340366E12, 184.55172413793105]], "isOverall": false, "label": "moodle/moodle/login/logout.php-37", "isController": false}, {"data": [[1.73403666E12, 15.9], [1.73403654E12, 16.545454545454547], [1.7340366E12, 17.448275862068968]], "isOverall": false, "label": "home/home/ug-81", "isController": false}, {"data": [[1.73403666E12, 30.66666666666667], [1.73403654E12, 16.5], [1.7340366E12, 32.37931034482758]], "isOverall": false, "label": "home/public/js/bootstrap.bundle.min.js-48", "isController": false}, {"data": [[1.73403666E12, 16.08333333333333], [1.73403654E12, 11.363636363636363], [1.7340366E12, 18.925925925925927]], "isOverall": false, "label": "home/public/img/service/Consultancy.jpg-103", "isController": false}, {"data": [[1.73403666E12, 19.0], [1.73403654E12, 18.53846153846154], [1.7340366E12, 52.266666666666666]], "isOverall": false, "label": "moodle/moodle/course/view.php-13-1", "isController": false}, {"data": [[1.73403666E12, 141.00000000000003], [1.73403654E12, 72.58333333333333], [1.7340366E12, 120.96666666666668]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34", "isController": false}, {"data": [[1.73403666E12, 43.714285714285715], [1.73403654E12, 29.384615384615383], [1.7340366E12, 49.9]], "isOverall": false, "label": "moodle/moodle/course/view.php-13-2", "isController": false}, {"data": [[1.73403666E12, 58.50000000000001], [1.73403654E12, 27.07692307692308], [1.7340366E12, 39.9655172413793]], "isOverall": false, "label": "moodle/moodle/course/view.php-17-0", "isController": false}, {"data": [[1.73403666E12, 17.0], [1.73403654E12, 15.538461538461538], [1.7340366E12, 17.689655172413786]], "isOverall": false, "label": "moodle/moodle/course/view.php-17-1", "isController": false}, {"data": [[1.73403666E12, 29.375], [1.73403654E12, 28.76923076923077], [1.7340366E12, 32.89655172413793]], "isOverall": false, "label": "moodle/moodle/course/view.php-17-2", "isController": false}, {"data": [[1.73403666E12, 29.3], [1.73403654E12, 18.909090909090907], [1.7340366E12, 30.068965517241377]], "isOverall": false, "label": "home/home/aboutus-78", "isController": false}, {"data": [[1.73403666E12, 9.5], [1.73403654E12, 8.272727272727272], [1.7340366E12, 9.655172413793105]], "isOverall": false, "label": "home/public/img/program/pg-co.jpg-101", "isController": false}, {"data": [[1.73403666E12, 84.25], [1.73403654E12, 74.5], [1.7340366E12, 81.20000000000002]], "isOverall": false, "label": "moodle/moodle/course/view.php-33", "isController": false}, {"data": [[1.73403666E12, 27.0], [1.73403654E12, 26.0], [1.7340366E12, 41.153846153846146]], "isOverall": false, "label": "notice/home/notice-112", "isController": false}, {"data": [[1.73403666E12, 9.399999999999999], [1.73403654E12, 8.833333333333332], [1.7340366E12, 10.142857142857142]], "isOverall": false, "label": "home/public/img/program/pg-se.jpg-62", "isController": false}, {"data": [[1.73403666E12, 67.0], [1.73403654E12, 29.0], [1.7340366E12, 42.699999999999996]], "isOverall": false, "label": "moodle/moodle/course/view.php-13-0", "isController": false}, {"data": [[1.73403666E12, 39.699999999999996], [1.73403654E12, 11.5], [1.7340366E12, 15.89285714285714]], "isOverall": false, "label": "home/public/img/service/Outreach.jpg-68", "isController": false}, {"data": [[1.73403666E12, 14.9], [1.73403654E12, 9.750000000000002], [1.7340366E12, 12.535714285714286]], "isOverall": false, "label": "home/public/img/program/pg-ds.jpg-64", "isController": false}, {"data": [[1.73403666E12, 76.85714285714286], [1.73403654E12, 35.53846153846153], [1.7340366E12, 81.70000000000002]], "isOverall": false, "label": "moodle/moodle/course/search.php-11", "isController": false}, {"data": [[1.73403666E12, 31.250000000000004], [1.73403654E12, 20.5], [1.7340366E12, 23.66666666666667]], "isOverall": false, "label": "moodle/moodle/pluginfile.php/15688/assignsubmission_file/submission_files/19238/2105019dft_fft_online.zip-35-0", "isController": false}, {"data": [[1.73403666E12, 29.25], [1.73403654E12, 29.333333333333336], [1.7340366E12, 44.3]], "isOverall": false, "label": "moodle/moodle/pluginfile.php/15688/assignsubmission_file/submission_files/19238/2105019dft_fft_online.zip-35-1", "isController": false}, {"data": [[1.73403666E12, 51.87500000000001], [1.73403654E12, 41.583333333333336], [1.7340366E12, 60.43333333333332]], "isOverall": false, "label": "moodle/moodle/user/view.php-24-1", "isController": false}, {"data": [[1.73403666E12, 8.4], [1.73403654E12, 6.909090909090909], [1.7340366E12, 9.517241379310343]], "isOverall": false, "label": "home/public/img/Arrow-r.png-89", "isController": false}, {"data": [[1.73403666E12, 138.5], [1.73403654E12, 45.63636363636363], [1.7340366E12, 92.72413793103448]], "isOverall": false, "label": "home/public/img/program2.jpg-95", "isController": false}, {"data": [[1.73403666E12, 268.3636363636363], [1.73403654E12, 86.81818181818183], [1.7340366E12, 185.07142857142856]], "isOverall": false, "label": "home/public/img/gate.jpg-96", "isController": false}, {"data": [[1.73403666E12, 24.23076923076923], [1.73403654E12, 17.545454545454543], [1.7340366E12, 16.692307692307693]], "isOverall": false, "label": "notice/public/js/jquery-1.11.2.min.js-122", "isController": false}, {"data": [[1.73403666E12, 16.7], [1.73403654E12, 9.818181818181818], [1.7340366E12, 30.06896551724138]], "isOverall": false, "label": "home/public/img/aboutus/c11.jpg-85", "isController": false}, {"data": [[1.73403666E12, 8.285714285714286], [1.73403654E12, 8.09090909090909], [1.7340366E12, 8.999999999999998]], "isOverall": false, "label": "notice/favicon.ico-124", "isController": false}, {"data": [[1.73403666E12, 13.33333333333333], [1.73403654E12, 10.09090909090909], [1.7340366E12, 12.25925925925926]], "isOverall": false, "label": "home/public/img/program/pg-ds.jpg-102", "isController": false}, {"data": [[1.73403666E12, 10.333333333333334], [1.73403654E12, 8.90909090909091], [1.7340366E12, 9.208333333333332]], "isOverall": false, "label": "notice/public/img/logo3.png-126", "isController": false}, {"data": [[1.73403666E12, 10.0], [1.73403654E12, 8.272727272727273], [1.7340366E12, 11.82758620689655]], "isOverall": false, "label": "home/public/img/program/pg-se.jpg-92", "isController": false}, {"data": [[1.73403666E12, 18.5], [1.73403654E12, 9.083333333333332], [1.7340366E12, 25.928571428571423]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Efficie.jpg-73", "isController": false}, {"data": [[1.73403666E12, 208.57142857142856], [1.73403654E12, 181.15384615384616], [1.7340366E12, 248.73333333333335]], "isOverall": false, "label": "moodle/moodle/-6", "isController": false}, {"data": [[1.73403666E12, 23.9], [1.73403654E12, 10.416666666666666], [1.7340366E12, 12.607142857142858]], "isOverall": false, "label": "home/public/img/aboutus/c21.jpg-57", "isController": false}, {"data": [[1.73403666E12, 96.0], [1.73403654E12, 46.23076923076924], [1.7340366E12, 74.63333333333333]], "isOverall": false, "label": "moodle/moodle/course/index.php-10", "isController": false}, {"data": [[1.73403666E12, 20.200000000000003], [1.73403654E12, 9.41666666666667], [1.7340366E12, 25.67857142857143]], "isOverall": false, "label": "home/public/img/program/ug.jpg-59", "isController": false}, {"data": [[1.73403666E12, 17.166666666666664], [1.73403654E12, 10.818181818181818], [1.7340366E12, 30.185185185185183]], "isOverall": false, "label": "home/public/img/service/Training.jpg-104", "isController": false}, {"data": [[1.73403666E12, 8.555555555555555], [1.73403654E12, 7.083333333333333], [1.7340366E12, 22.24137931034483]], "isOverall": false, "label": "home/public/js/main.js-51", "isController": false}, {"data": [[1.73403666E12, 8.46153846153846], [1.73403654E12, 7.272727272727273], [1.7340366E12, 7.653846153846154]], "isOverall": false, "label": "notice/public/css/carousel.css-114", "isController": false}, {"data": [[1.73403666E12, 308.40000000000003], [1.73403654E12, 92.58333333333333], [1.7340366E12, 227.17857142857142]], "isOverall": false, "label": "home/public/img/icpc.jpg-52", "isController": false}, {"data": [[1.73403666E12, 16.11111111111111], [1.73403654E12, 8.916666666666668], [1.7340366E12, 23.620689655172413]], "isOverall": false, "label": "home/public/img/logo3.png-44", "isController": false}, {"data": [[1.73403666E12, 13.199999999999998], [1.73403654E12, 9.916666666666668], [1.7340366E12, 11.857142857142854]], "isOverall": false, "label": "home/public/img/program/pg-ai.jpg-61", "isController": false}, {"data": [[1.73403666E12, 60.62500000000001], [1.73403654E12, 50.166666666666664], [1.7340366E12, 68.06666666666669]], "isOverall": false, "label": "moodle/moodle/pluginfile.php/15688/assignsubmission_file/submission_files/19238/2105019dft_fft_online.zip-35", "isController": false}, {"data": [[1.73403666E12, 26.6], [1.73403654E12, 24.181818181818183], [1.7340366E12, 31.482758620689655]], "isOverall": false, "label": "home/home-80", "isController": false}, {"data": [[1.73403666E12, 129.71428571428572], [1.73403654E12, 77.61538461538461], [1.7340366E12, 145.16666666666663]], "isOverall": false, "label": "moodle/moodle/course/view.php-13", "isController": false}, {"data": [[1.73403666E12, 48.099999999999994], [1.73403654E12, 21.545454545454547], [1.7340366E12, 22.89655172413793]], "isOverall": false, "label": "home/home-82", "isController": false}, {"data": [[1.73403666E12, 39.44444444444444], [1.73403654E12, 22.333333333333336], [1.7340366E12, 34.20689655172414]], "isOverall": false, "label": "home/public/css/bootstrap.min.css-43", "isController": false}, {"data": [[1.73403666E12, 86.625], [1.73403654E12, 73.53846153846153], [1.7340366E12, 123.68965517241378]], "isOverall": false, "label": "moodle/moodle/course/view.php-15", "isController": false}, {"data": [[1.73403666E12, 23.2], [1.73403654E12, 22.090909090909086], [1.7340366E12, 23.862068965517242]], "isOverall": false, "label": "home/home-84", "isController": false}, {"data": [[1.73403666E12, 46.857142857142854], [1.73403654E12, 48.92307692307692], [1.7340366E12, 74.99999999999997]], "isOverall": false, "label": "moodle/moodle/course/index.php-9", "isController": false}, {"data": [[1.73403666E12, 53.888888888888886], [1.73403654E12, 17.666666666666668], [1.7340366E12, 26.551724137931036]], "isOverall": false, "label": "home/public/js/jquery-1.11.2.min.js-49", "isController": false}, {"data": [[1.73403666E12, 28.75], [1.73403654E12, 27.416666666666664], [1.7340366E12, 38.99999999999999]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34-0", "isController": false}, {"data": [[1.73403666E12, 93.75], [1.73403654E12, 29.75], [1.7340366E12, 31.833333333333336]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34-2", "isController": false}, {"data": [[1.73403666E12, 7.8999999999999995], [1.73403654E12, 7.166666666666666], [1.7340366E12, 9.071428571428571]], "isOverall": false, "label": "home/public/img/Arrow-l.png-65", "isController": false}, {"data": [[1.73403666E12, 9.0], [1.73403654E12, 8.083333333333334], [1.7340366E12, 8.892857142857146]], "isOverall": false, "label": "home/public/img/program/pg-co.jpg-63", "isController": false}, {"data": [[1.73403666E12, 18.5], [1.73403654E12, 15.16666666666667], [1.7340366E12, 49.800000000000004]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34-1", "isController": false}, {"data": [[1.73403666E12, 15.461538461538463], [1.73403654E12, 8.181818181818182], [1.7340366E12, 12.038461538461538]], "isOverall": false, "label": "notice/public/img/logo3.png-117", "isController": false}, {"data": [[1.73403666E12, 38.0], [1.73403654E12, 28.083333333333332], [1.7340366E12, 28.133333333333333]], "isOverall": false, "label": "moodle/moodle/course/view.php-33-0", "isController": false}, {"data": [[1.73403666E12, 104.875], [1.73403654E12, 71.6923076923077], [1.7340366E12, 90.96551724137933]], "isOverall": false, "label": "moodle/moodle/course/view.php-17", "isController": false}, {"data": [[1.73403666E12, 24.93333333333333], [1.73403654E12, 27.454545454545457], [1.7340366E12, 27.375]], "isOverall": false, "label": "notice/home/notice-131", "isController": false}, {"data": [[1.73403666E12, 29.375], [1.73403654E12, 29.166666666666668], [1.7340366E12, 34.63333333333333]], "isOverall": false, "label": "moodle/moodle/course/view.php-33-2", "isController": false}, {"data": [[1.73403666E12, 16.500000000000004], [1.73403654E12, 16.5], [1.7340366E12, 18.133333333333333]], "isOverall": false, "label": "moodle/moodle/course/view.php-33-1", "isController": false}, {"data": [[1.73403666E12, 65.25000000000001], [1.73403654E12, 64.75], [1.7340366E12, 108.69999999999999]], "isOverall": false, "label": "moodle/moodle/course/index.php-21", "isController": false}, {"data": [[1.73403666E12, 65.14285714285715], [1.73403654E12, 52.153846153846146], [1.7340366E12, 72.43333333333332]], "isOverall": false, "label": "moodle/moodle/my/courses.php-7", "isController": false}, {"data": [[1.73403666E12, 163.74999999999997], [1.73403654E12, 139.41666666666666], [1.7340366E12, 159.60000000000005]], "isOverall": false, "label": "moodle/moodle-26-1", "isController": false}, {"data": [[1.73403666E12, 11.624999999999998], [1.73403654E12, 7.916666666666666], [1.7340366E12, 12.233333333333333]], "isOverall": false, "label": "moodle/moodle-26-0", "isController": false}, {"data": [[1.73403666E12, 43.77777777777778], [1.73403654E12, 9.166666666666666], [1.7340366E12, 14.724137931034482]], "isOverall": false, "label": "home/public/img/logo.png-45", "isController": false}, {"data": [[1.73403666E12, 15.53846153846154], [1.73403654E12, 8.454545454545455], [1.7340366E12, 9.615384615384617]], "isOverall": false, "label": "notice/public/img/logo.png-118", "isController": false}, {"data": [[1.73403666E12, 197.75], [1.73403654E12, 73.54545454545455], [1.7340366E12, 124.03703703703704]], "isOverall": false, "label": "home/public/img/CSE-Fest-1.JPG-98", "isController": false}, {"data": [[1.73403666E12, 175.375], [1.73403654E12, 147.58333333333334], [1.7340366E12, 172.13333333333338]], "isOverall": false, "label": "moodle/moodle-26", "isController": false}, {"data": [[1.73403666E12, 9.083333333333334], [1.73403654E12, 8.818181818181818], [1.7340366E12, 10.000000000000002]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Efficie.jpg-109", "isController": false}, {"data": [[1.73403666E12, 56.25], [1.73403654E12, 48.916666666666664], [1.7340366E12, 56.30000000000001]], "isOverall": false, "label": "moodle/moodle/course/index.php-20", "isController": false}, {"data": [[1.73403666E12, 18.375], [1.73403654E12, 15.583333333333332], [1.7340366E12, 19.133333333333336]], "isOverall": false, "label": "moodle/moodle/user/view.php-24-0", "isController": false}, {"data": [[1.73403666E12, 43.230769230769226], [1.73403654E12, 21.09090909090909], [1.7340366E12, 23.961538461538463]], "isOverall": false, "label": "notice/public/css/bootstrap.min.css-113", "isController": false}, {"data": [[1.73403666E12, 18.7], [1.73403654E12, 10.181818181818183], [1.7340366E12, 14.27586206896552]], "isOverall": false, "label": "home/public/img/aboutus/c22.jpg-86", "isController": false}, {"data": [[1.73403666E12, 8.2], [1.73403654E12, 7.0], [1.7340366E12, 7.642857142857143]], "isOverall": false, "label": "home/public/img/Arrow-r.png-66", "isController": false}, {"data": [[1.73403666E12, 544.8888888888888], [1.73403654E12, 124.41666666666667], [1.7340366E12, 366.6896551724138]], "isOverall": false, "label": "home/public/img/lab.jpg-47", "isController": false}, {"data": [[1.73403666E12, 96.00000000000001], [1.73403654E12, 53.36363636363637], [1.7340366E12, 94.875]], "isOverall": false, "label": "notice/home/download/1302-128", "isController": false}, {"data": [[1.73403666E12, 12.8], [1.73403654E12, 9.81818181818182], [1.7340366E12, 12.448275862068966]], "isOverall": false, "label": "home/public/img/aboutus/c21.jpg-88", "isController": false}, {"data": [[1.73403666E12, 328.41666666666674], [1.73403654E12, 179.45454545454544], [1.7340366E12, 236.8518518518519]], "isOverall": false, "label": "home/public/img/researchlab.jpg-99", "isController": false}, {"data": [[1.73403666E12, 61.44444444444445], [1.73403654E12, 51.91666666666667], [1.7340366E12, 78.75862068965517]], "isOverall": false, "label": "moodle/moodle/my/courses.php-36", "isController": false}, {"data": [[1.73403666E12, 62.87500000000001], [1.73403654E12, 51.16666666666668], [1.7340366E12, 67.89999999999999]], "isOverall": false, "label": "moodle/moodle/my/courses.php-32", "isController": false}, {"data": [[1.73403666E12, 70.75], [1.73403654E12, 29.833333333333332], [1.7340366E12, 29.5]], "isOverall": false, "label": "moodle/moodle/course/view.php-22-0", "isController": false}, {"data": [[1.73403666E12, 49.37500000000001], [1.73403654E12, 19.16666666666667], [1.7340366E12, 26.866666666666664]], "isOverall": false, "label": "moodle/moodle/course/view.php-22-1", "isController": false}, {"data": [[1.73403666E12, 29.875], [1.73403654E12, 31.250000000000004], [1.7340366E12, 40.2]], "isOverall": false, "label": "moodle/moodle/course/view.php-22-2", "isController": false}, {"data": [[1.73403666E12, 9.5], [1.73403654E12, 8.916666666666668], [1.7340366E12, 9.357142857142858]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Explori.jpg-74", "isController": false}, {"data": [[1.73403666E12, 16.30769230769231], [1.73403654E12, 9.363636363636365], [1.7340366E12, 10.230769230769232]], "isOverall": false, "label": "notice/public/css/main.css-116", "isController": false}, {"data": [[1.73403666E12, 326.3], [1.73403654E12, 102.00000000000001], [1.7340366E12, 271.21428571428567]], "isOverall": false, "label": "home/public/img/gate.jpg-46", "isController": false}, {"data": [[1.73403666E12, 37.857142857142854], [1.73403654E12, 29.692307692307693], [1.7340366E12, 36.233333333333334]], "isOverall": false, "label": "moodle/moodle/course/view.php-15-0", "isController": false}, {"data": [[1.73403666E12, 16.9], [1.73403654E12, 10.666666666666666], [1.7340366E12, 13.035714285714286]], "isOverall": false, "label": "home/public/img/aboutus/c12.jpg-56", "isController": false}, {"data": [[1.73403666E12, 20.25], [1.73403654E12, 14.923076923076923], [1.7340366E12, 17.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-15-1", "isController": false}, {"data": [[1.73403666E12, 29.75], [1.73403654E12, 28.69230769230769], [1.7340366E12, 69.89655172413794]], "isOverall": false, "label": "moodle/moodle/course/view.php-15-2", "isController": false}, {"data": [[1.73403666E12, 8.230769230769232], [1.73403654E12, 7.181818181818181], [1.7340366E12, 8.769230769230768]], "isOverall": false, "label": "notice/public/js/color-modes.js-115", "isController": false}, {"data": [[1.73403666E12, 42.4], [1.73403654E12, 9.454545454545455], [1.7340366E12, 15.827586206896552]], "isOverall": false, "label": "home/public/img/program/pg-cs.jpg-90", "isController": false}, {"data": [[1.73403666E12, 23.416666666666668], [1.73403654E12, 8.818181818181818], [1.7340366E12, 12.888888888888888]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Explori.jpg-110", "isController": false}, {"data": [[1.73403666E12, 170.79999999999998], [1.73403654E12, 57.18181818181818], [1.7340366E12, 104.99999999999999]], "isOverall": false, "label": "home/web/assets/img/news/icpc20241.png-69", "isController": false}, {"data": [[1.73403666E12, 24.384615384615387], [1.73403654E12, 17.090909090909097], [1.7340366E12, 17.538461538461533]], "isOverall": false, "label": "notice/public/js/jquery-3.7.1.min.js-119", "isController": false}, {"data": [[1.73403666E12, 463.22222222222223], [1.73403654E12, 90.41666666666667], [1.7340366E12, 284.62068965517244]], "isOverall": false, "label": "home/public/img/program2.jpg-50", "isController": false}, {"data": [[1.73403666E12, 63.875], [1.73403654E12, 50.0], [1.7340366E12, 121.4]], "isOverall": false, "label": "moodle/moodle/my/courses.php-19", "isController": false}, {"data": [[1.73403666E12, 70.07142857142857], [1.73403654E12, 39.09090909090909], [1.7340366E12, 47.559999999999995]], "isOverall": false, "label": "notice/home/download/1306-123", "isController": false}, {"data": [[1.73403666E12, 10.75], [1.73403654E12, 8.636363636363637], [1.7340366E12, 11.259259259259256]], "isOverall": false, "label": "home/web/assets/img/news/elsiver2022.jpg-108", "isController": false}, {"data": [[1.73403666E12, 219.0], [1.73403654E12, 131.92307692307693], [1.7340366E12, 201.1666666666666]], "isOverall": false, "label": "moodle/moodle/-12", "isController": false}, {"data": [[1.73403666E12, 23.599999999999998], [1.73403654E12, 9.363636363636363], [1.7340366E12, 13.310344827586206]], "isOverall": false, "label": "home/public/img/aboutus/c12.jpg-87", "isController": false}, {"data": [[1.73403666E12, 10.399999999999999], [1.73403654E12, 10.272727272727273], [1.7340366E12, 14.689655172413794]], "isOverall": false, "label": "home/public/img/program/ug.jpg-94", "isController": false}, {"data": [[1.73403666E12, 21.700000000000003], [1.73403654E12, 12.25], [1.7340366E12, 19.428571428571434]], "isOverall": false, "label": "home/public/img/service/Training.jpg-70", "isController": false}, {"data": [[1.73403666E12, 14.833333333333334], [1.73403654E12, 11.636363636363637], [1.7340366E12, 14.62962962962963]], "isOverall": false, "label": "home/public/img/service/Outreach.jpg-105", "isController": false}, {"data": [[1.73403666E12, 15.538461538461538], [1.73403654E12, 7.909090909090909], [1.7340366E12, 11.461538461538463]], "isOverall": false, "label": "notice/public/js/main.js-121", "isController": false}, {"data": [[1.73403666E12, 24.999999999999996], [1.73403654E12, 18.90909090909091], [1.7340366E12, 54.95833333333333]], "isOverall": false, "label": "notice/home/download/1280-130", "isController": false}, {"data": [[1.73403666E12, 9.25], [1.73403654E12, 9.090909090909088], [1.7340366E12, 20.962962962962965]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_IMPACTS2.jpg-111", "isController": false}, {"data": [[1.73403666E12, 17.8], [1.73403654E12, 10.499999999999998], [1.7340366E12, 14.321428571428571]], "isOverall": false, "label": "home/public/img/aboutus/c22.jpg-58", "isController": false}, {"data": [[1.73403666E12, 18.5], [1.73403654E12, 11.166666666666668], [1.7340366E12, 17.964285714285715]], "isOverall": false, "label": "home/public/img/service/Consultancy.jpg-67", "isController": false}, {"data": [[1.73403666E12, 62.25], [1.73403654E12, 31.999999999999996], [1.7340366E12, 54.0]], "isOverall": false, "label": "home/web/assets/img/news/VIP%20Cup%202023.jpg-107", "isController": false}, {"data": [[1.73403666E12, 9.5], [1.73403654E12, 8.636363636363637], [1.7340366E12, 9.27586206896552]], "isOverall": false, "label": "home/public/img/areabg.png-76", "isController": false}, {"data": [[1.73403666E12, 15.0], [1.73403654E12, 9.083333333333334], [1.7340366E12, 12.464285714285715]], "isOverall": false, "label": "home/web/assets/img/news/elsiver2022.jpg-72", "isController": false}, {"data": [[1.73403666E12, 70.375], [1.73403654E12, 57.333333333333336], [1.7340366E12, 79.63333333333334]], "isOverall": false, "label": "moodle/moodle/user/view.php-24", "isController": false}, {"data": [[1.73403666E12, 29.11111111111111], [1.73403654E12, 12.249999999999998], [1.7340366E12, 22.896551724137936]], "isOverall": false, "label": "home/public/img/aboutus/c11.jpg-55", "isController": false}, {"data": [[1.73403666E12, 97.77777777777777], [1.73403654E12, 25.83333333333333], [1.7340366E12, 41.62068965517242]], "isOverall": false, "label": "home/home-39", "isController": false}, {"data": [[1.73403666E12, 12.1], [1.73403654E12, 8.916666666666666], [1.7340366E12, 10.285714285714286]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_IMPACTS2.jpg-75", "isController": false}, {"data": [[1.73403666E12, 158.77777777777777], [1.73403654E12, 130.75], [1.7340366E12, 161.41379310344828]], "isOverall": false, "label": "moodle/moodle/login/logout.php-37-1", "isController": false}, {"data": [[1.73403666E12, 18.22222222222222], [1.73403654E12, 18.749999999999996], [1.7340366E12, 22.965517241379317]], "isOverall": false, "label": "moodle/moodle/login/logout.php-37-0", "isController": false}, {"data": [[1.73403666E12, 279.5], [1.73403654E12, 82.41666666666669], [1.7340366E12, 204.74999999999997]], "isOverall": false, "label": "home/public/img/CSE-Fest-1.JPG-53", "isController": false}, {"data": [[1.73403666E12, 251.66666666666669], [1.73403654E12, 93.18181818181817], [1.7340366E12, 170.92592592592592]], "isOverall": false, "label": "home/public/img/lab.jpg-97", "isController": false}, {"data": [[1.73403666E12, 95.6], [1.73403654E12, 31.25], [1.7340366E12, 60.214285714285715]], "isOverall": false, "label": "home/web/assets/img/news/VIP%20Cup%202023.jpg-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73403666E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    prepareSeries(infos.data);
