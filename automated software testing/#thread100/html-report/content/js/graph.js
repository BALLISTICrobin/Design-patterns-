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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 100.0, "series": [{"data": [[0.0, 30.0], [100.0, 70.0]], "isOverall": false, "label": "moodle/moodle/mod/forum/view.php-8", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/css/carousel.css-41", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/program/pg-ai.jpg-91", "isController": false}, {"data": [[0.0, 24.0], [300.0, 1.0], [100.0, 68.0], [200.0, 7.0]], "isOverall": false, "label": "home/public/img/icpc.jpg-100", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/login/index.php-29-0", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/program/pg-cs.jpg-60", "isController": false}, {"data": [[0.0, 76.0], [100.0, 24.0]], "isOverall": false, "label": "home/web/assets/img/news/icpc20241.png-106", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/css/main.css-40", "isController": false}, {"data": [[0.0, 57.0], [100.0, 39.0], [200.0, 4.0]], "isOverall": false, "label": "home/public/img/researchlab.jpg-54", "isController": false}, {"data": [[0.0, 97.0], [100.0, 3.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-22", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/login/index.php-29-1", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/js/color-modes.js-42", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/login/index.php-28", "isController": false}, {"data": [[0.0, 99.0], [100.0, 1.0]], "isOverall": false, "label": "moodle/moodle/login/index.php-29", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/logo.png-77", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/public/js/bootstrap.bundle.min.js-120", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/home/notice-129", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/logo.png-79", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/public/img/logo.png-127", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/home/pg_cc-83", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/Arrow-l.png-93", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/home/notice-125", "isController": false}, {"data": [[100.0, 100.0]], "isOverall": false, "label": "moodle/moodle/login/logout.php-37", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/home/ug-81", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/js/bootstrap.bundle.min.js-48", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/service/Consultancy.jpg-103", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-13-1", "isController": false}, {"data": [[0.0, 80.0], [100.0, 20.0]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-13-2", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-17-0", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-17-1", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-17-2", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/home/aboutus-78", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/program/pg-co.jpg-101", "isController": false}, {"data": [[0.0, 75.0], [100.0, 25.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-33", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/home/notice-112", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/program/pg-se.jpg-62", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-13-0", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/service/Outreach.jpg-68", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/program/pg-ds.jpg-64", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/search.php-11", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/pluginfile.php/15688/assignsubmission_file/submission_files/19238/2105019dft_fft_online.zip-35-0", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/pluginfile.php/15688/assignsubmission_file/submission_files/19238/2105019dft_fft_online.zip-35-1", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/user/view.php-24-1", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/Arrow-r.png-89", "isController": false}, {"data": [[0.0, 95.0], [100.0, 5.0]], "isOverall": false, "label": "home/public/img/program2.jpg-95", "isController": false}, {"data": [[0.0, 40.0], [100.0, 56.0], [200.0, 4.0]], "isOverall": false, "label": "home/public/img/gate.jpg-96", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/public/js/jquery-1.11.2.min.js-122", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/aboutus/c11.jpg-85", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/favicon.ico-124", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/program/pg-ds.jpg-102", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/public/img/logo3.png-126", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/program/pg-se.jpg-92", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Efficie.jpg-73", "isController": false}, {"data": [[400.0, 1.0], [100.0, 90.0], [200.0, 9.0]], "isOverall": false, "label": "moodle/moodle/-6", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/aboutus/c21.jpg-57", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/index.php-10", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/program/ug.jpg-59", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/service/Training.jpg-104", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/js/main.js-51", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/public/css/carousel.css-114", "isController": false}, {"data": [[0.0, 47.0], [100.0, 50.0], [200.0, 3.0]], "isOverall": false, "label": "home/public/img/icpc.jpg-52", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/logo3.png-44", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/program/pg-ai.jpg-61", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/pluginfile.php/15688/assignsubmission_file/submission_files/19238/2105019dft_fft_online.zip-35", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/home-80", "isController": false}, {"data": [[0.0, 79.0], [100.0, 21.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-13", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/home-82", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/css/bootstrap.min.css-43", "isController": false}, {"data": [[0.0, 93.0], [100.0, 7.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-15", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/home-84", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/index.php-9", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/js/jquery-1.11.2.min.js-49", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34-0", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34-2", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/Arrow-l.png-65", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/program/pg-co.jpg-63", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34-1", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/public/img/logo3.png-117", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-33-0", "isController": false}, {"data": [[0.0, 95.0], [100.0, 5.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-17", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/home/notice-131", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-33-2", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-33-1", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/index.php-21", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/my/courses.php-7", "isController": false}, {"data": [[100.0, 100.0]], "isOverall": false, "label": "moodle/moodle-26-1", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle-26-0", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/logo.png-45", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/public/img/logo.png-118", "isController": false}, {"data": [[0.0, 55.0], [100.0, 43.0], [200.0, 2.0]], "isOverall": false, "label": "home/public/img/CSE-Fest-1.JPG-98", "isController": false}, {"data": [[100.0, 100.0]], "isOverall": false, "label": "moodle/moodle-26", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Efficie.jpg-109", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/index.php-20", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/user/view.php-24-0", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/public/css/bootstrap.min.css-113", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/aboutus/c22.jpg-86", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/Arrow-r.png-66", "isController": false}, {"data": [[0.0, 6.0], [300.0, 4.0], [100.0, 69.0], [200.0, 21.0]], "isOverall": false, "label": "home/public/img/lab.jpg-47", "isController": false}, {"data": [[0.0, 96.0], [100.0, 4.0]], "isOverall": false, "label": "notice/home/download/1302-128", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/aboutus/c21.jpg-88", "isController": false}, {"data": [[300.0, 15.0], [100.0, 58.0], [200.0, 27.0]], "isOverall": false, "label": "home/public/img/researchlab.jpg-99", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/my/courses.php-36", "isController": false}, {"data": [[0.0, 99.0], [100.0, 1.0]], "isOverall": false, "label": "moodle/moodle/my/courses.php-32", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-22-0", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-22-1", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-22-2", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Explori.jpg-74", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/public/css/main.css-116", "isController": false}, {"data": [[0.0, 29.0], [200.0, 11.0], [100.0, 60.0]], "isOverall": false, "label": "home/public/img/gate.jpg-46", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-15-0", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/aboutus/c12.jpg-56", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-15-1", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/course/view.php-15-2", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/public/js/color-modes.js-115", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/program/pg-cs.jpg-90", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Explori.jpg-110", "isController": false}, {"data": [[0.0, 86.0], [100.0, 14.0]], "isOverall": false, "label": "home/web/assets/img/news/icpc20241.png-69", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/public/js/jquery-3.7.1.min.js-119", "isController": false}, {"data": [[0.0, 33.0], [100.0, 58.0], [200.0, 9.0]], "isOverall": false, "label": "home/public/img/program2.jpg-50", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/my/courses.php-19", "isController": false}, {"data": [[0.0, 97.0], [100.0, 3.0]], "isOverall": false, "label": "notice/home/download/1306-123", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/web/assets/img/news/elsiver2022.jpg-108", "isController": false}, {"data": [[100.0, 100.0]], "isOverall": false, "label": "moodle/moodle/-12", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/aboutus/c12.jpg-87", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/program/ug.jpg-94", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/service/Training.jpg-70", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/service/Outreach.jpg-105", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/public/js/main.js-121", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "notice/home/download/1280-130", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_IMPACTS2.jpg-111", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/aboutus/c22.jpg-58", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/service/Consultancy.jpg-67", "isController": false}, {"data": [[0.0, 99.0], [100.0, 1.0]], "isOverall": false, "label": "home/web/assets/img/news/VIP%20Cup%202023.jpg-107", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/areabg.png-76", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/web/assets/img/news/elsiver2022.jpg-72", "isController": false}, {"data": [[0.0, 99.0], [100.0, 1.0]], "isOverall": false, "label": "moodle/moodle/user/view.php-24", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/public/img/aboutus/c11.jpg-55", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/home-39", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_IMPACTS2.jpg-75", "isController": false}, {"data": [[100.0, 100.0]], "isOverall": false, "label": "moodle/moodle/login/logout.php-37-1", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "moodle/moodle/login/logout.php-37-0", "isController": false}, {"data": [[0.0, 62.0], [100.0, 37.0], [200.0, 1.0]], "isOverall": false, "label": "home/public/img/CSE-Fest-1.JPG-53", "isController": false}, {"data": [[0.0, 30.0], [100.0, 66.0], [200.0, 4.0]], "isOverall": false, "label": "home/public/img/lab.jpg-97", "isController": false}, {"data": [[0.0, 100.0]], "isOverall": false, "label": "home/web/assets/img/news/VIP%20Cup%202023.jpg-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1144.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 13356.0, "series": [{"data": [[0.0, 13356.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1144.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.920750231145163, "minX": 1.73403756E12, "maxY": 4.9261076634434975, "series": [{"data": [[1.73403762E12, 4.920750231145163], [1.73403756E12, 4.9261076634434975]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73403762E12, "title": "Active Threads Over Time"}},
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
        data : {"result": {"minY": 90170.38333333333, "minX": 1.73403756E12, "maxY": 3.476688161666667E7, "series": [{"data": [[1.73403762E12, 3.476688161666667E7], [1.73403756E12, 3.09893268E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.73403762E12, 97332.95], [1.73403756E12, 90170.38333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73403762E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 8.617021276595745, "minX": 1.73403756E12, "maxY": 213.6170212765957, "series": [{"data": [[1.73403762E12, 105.48], [1.73403756E12, 102.04000000000002]], "isOverall": false, "label": "moodle/moodle/mod/forum/view.php-8", "isController": false}, {"data": [[1.73403762E12, 10.176470588235293], [1.73403756E12, 11.08163265306122]], "isOverall": false, "label": "home/public/css/carousel.css-41", "isController": false}, {"data": [[1.73403762E12, 13.301886792452827], [1.73403756E12, 13.361702127659575]], "isOverall": false, "label": "home/public/img/program/pg-ai.jpg-91", "isController": false}, {"data": [[1.73403762E12, 130.32075471698113], [1.73403756E12, 128.3829787234042]], "isOverall": false, "label": "home/public/img/icpc.jpg-100", "isController": false}, {"data": [[1.73403762E12, 31.15686274509804], [1.73403756E12, 29.387755102040817]], "isOverall": false, "label": "moodle/moodle/login/index.php-29-0", "isController": false}, {"data": [[1.73403762E12, 13.358490566037736], [1.73403756E12, 12.106382978723401]], "isOverall": false, "label": "home/public/img/program/pg-cs.jpg-60", "isController": false}, {"data": [[1.73403762E12, 82.35185185185186], [1.73403756E12, 81.47826086956522]], "isOverall": false, "label": "home/web/assets/img/news/icpc20241.png-106", "isController": false}, {"data": [[1.73403762E12, 12.215686274509805], [1.73403756E12, 11.75510204081633]], "isOverall": false, "label": "home/public/css/main.css-40", "isController": false}, {"data": [[1.73403762E12, 99.16981132075472], [1.73403756E12, 112.9787234042553]], "isOverall": false, "label": "home/public/img/researchlab.jpg-54", "isController": false}, {"data": [[1.73403762E12, 84.58823529411767], [1.73403756E12, 81.73469387755104]], "isOverall": false, "label": "moodle/moodle/course/view.php-22", "isController": false}, {"data": [[1.73403762E12, 34.49019607843138], [1.73403756E12, 33.04081632653061]], "isOverall": false, "label": "moodle/moodle/login/index.php-29-1", "isController": false}, {"data": [[1.73403762E12, 10.705882352941178], [1.73403756E12, 9.979591836734693]], "isOverall": false, "label": "home/public/js/color-modes.js-42", "isController": false}, {"data": [[1.73403762E12, 33.80392156862745], [1.73403756E12, 32.36734693877551]], "isOverall": false, "label": "moodle/moodle/login/index.php-28", "isController": false}, {"data": [[1.73403762E12, 65.8235294117647], [1.73403756E12, 62.63265306122448]], "isOverall": false, "label": "moodle/moodle/login/index.php-29", "isController": false}, {"data": [[1.73403762E12, 10.207547169811317], [1.73403756E12, 9.85106382978723]], "isOverall": false, "label": "home/public/img/logo.png-77", "isController": false}, {"data": [[1.73403762E12, 19.27777777777777], [1.73403756E12, 16.934782608695645]], "isOverall": false, "label": "notice/public/js/bootstrap.bundle.min.js-120", "isController": false}, {"data": [[1.73403762E12, 30.351851851851844], [1.73403756E12, 29.97826086956522]], "isOverall": false, "label": "notice/home/notice-129", "isController": false}, {"data": [[1.73403762E12, 10.81132075471698], [1.73403756E12, 9.234042553191488]], "isOverall": false, "label": "home/public/img/logo.png-79", "isController": false}, {"data": [[1.73403762E12, 11.333333333333332], [1.73403756E12, 10.891304347826084]], "isOverall": false, "label": "notice/public/img/logo.png-127", "isController": false}, {"data": [[1.73403762E12, 18.92452830188679], [1.73403756E12, 17.97872340425532]], "isOverall": false, "label": "home/home/pg_cc-83", "isController": false}, {"data": [[1.73403762E12, 9.716981132075473], [1.73403756E12, 9.914893617021276]], "isOverall": false, "label": "home/public/img/Arrow-l.png-93", "isController": false}, {"data": [[1.73403762E12, 29.481481481481485], [1.73403756E12, 29.282608695652172]], "isOverall": false, "label": "notice/home/notice-125", "isController": false}, {"data": [[1.73403762E12, 159.03921568627447], [1.73403756E12, 155.59183673469389]], "isOverall": false, "label": "moodle/moodle/login/logout.php-37", "isController": false}, {"data": [[1.73403762E12, 19.924528301886795], [1.73403756E12, 18.808510638297864]], "isOverall": false, "label": "home/home/ug-81", "isController": false}, {"data": [[1.73403762E12, 18.807692307692307], [1.73403756E12, 19.4375]], "isOverall": false, "label": "home/public/js/bootstrap.bundle.min.js-48", "isController": false}, {"data": [[1.73403762E12, 13.716981132075476], [1.73403756E12, 13.872340425531915]], "isOverall": false, "label": "home/public/img/service/Consultancy.jpg-103", "isController": false}, {"data": [[1.73403762E12, 23.819999999999997], [1.73403756E12, 20.21999999999999]], "isOverall": false, "label": "moodle/moodle/course/view.php-13-1", "isController": false}, {"data": [[1.73403762E12, 92.0], [1.73403756E12, 88.48979591836734]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34", "isController": false}, {"data": [[1.73403762E12, 34.48], [1.73403756E12, 32.86]], "isOverall": false, "label": "moodle/moodle/course/view.php-13-2", "isController": false}, {"data": [[1.73403762E12, 31.999999999999996], [1.73403756E12, 29.78]], "isOverall": false, "label": "moodle/moodle/course/view.php-17-0", "isController": false}, {"data": [[1.73403762E12, 20.15999999999999], [1.73403756E12, 19.920000000000005]], "isOverall": false, "label": "moodle/moodle/course/view.php-17-1", "isController": false}, {"data": [[1.73403762E12, 33.28], [1.73403756E12, 31.959999999999997]], "isOverall": false, "label": "moodle/moodle/course/view.php-17-2", "isController": false}, {"data": [[1.73403762E12, 21.547169811320753], [1.73403756E12, 21.21276595744681]], "isOverall": false, "label": "home/home/aboutus-78", "isController": false}, {"data": [[1.73403762E12, 11.792452830188678], [1.73403756E12, 11.70212765957447]], "isOverall": false, "label": "home/public/img/program/pg-co.jpg-101", "isController": false}, {"data": [[1.73403762E12, 94.45098039215686], [1.73403756E12, 90.57142857142856]], "isOverall": false, "label": "moodle/moodle/course/view.php-33", "isController": false}, {"data": [[1.73403762E12, 28.0925925925926], [1.73403756E12, 28.32608695652174]], "isOverall": false, "label": "notice/home/notice-112", "isController": false}, {"data": [[1.73403762E12, 11.792452830188678], [1.73403756E12, 11.000000000000002]], "isOverall": false, "label": "home/public/img/program/pg-se.jpg-62", "isController": false}, {"data": [[1.73403762E12, 35.87999999999999], [1.73403756E12, 33.18]], "isOverall": false, "label": "moodle/moodle/course/view.php-13-0", "isController": false}, {"data": [[1.73403762E12, 14.962264150943398], [1.73403756E12, 15.170212765957448]], "isOverall": false, "label": "home/public/img/service/Outreach.jpg-68", "isController": false}, {"data": [[1.73403762E12, 13.339622641509434], [1.73403756E12, 12.19148936170213]], "isOverall": false, "label": "home/public/img/program/pg-ds.jpg-64", "isController": false}, {"data": [[1.73403762E12, 44.080000000000005], [1.73403756E12, 40.6]], "isOverall": false, "label": "moodle/moodle/course/search.php-11", "isController": false}, {"data": [[1.73403762E12, 25.549019607843135], [1.73403756E12, 23.306122448979597]], "isOverall": false, "label": "moodle/moodle/pluginfile.php/15688/assignsubmission_file/submission_files/19238/2105019dft_fft_online.zip-35-0", "isController": false}, {"data": [[1.73403762E12, 33.76470588235294], [1.73403756E12, 32.3469387755102]], "isOverall": false, "label": "moodle/moodle/pluginfile.php/15688/assignsubmission_file/submission_files/19238/2105019dft_fft_online.zip-35-1", "isController": false}, {"data": [[1.73403762E12, 43.70588235294118], [1.73403756E12, 45.10204081632653]], "isOverall": false, "label": "moodle/moodle/user/view.php-24-1", "isController": false}, {"data": [[1.73403762E12, 11.452830188679242], [1.73403756E12, 9.553191489361705]], "isOverall": false, "label": "home/public/img/Arrow-r.png-89", "isController": false}, {"data": [[1.73403762E12, 56.49056603773585], [1.73403756E12, 63.574468085106396]], "isOverall": false, "label": "home/public/img/program2.jpg-95", "isController": false}, {"data": [[1.73403762E12, 102.26415094339622], [1.73403756E12, 119.08510638297875]], "isOverall": false, "label": "home/public/img/gate.jpg-96", "isController": false}, {"data": [[1.73403762E12, 20.925925925925924], [1.73403756E12, 20.565217391304348]], "isOverall": false, "label": "notice/public/js/jquery-1.11.2.min.js-122", "isController": false}, {"data": [[1.73403762E12, 15.094339622641511], [1.73403756E12, 12.978723404255316]], "isOverall": false, "label": "home/public/img/aboutus/c11.jpg-85", "isController": false}, {"data": [[1.73403762E12, 10.314814814814815], [1.73403756E12, 11.3695652173913]], "isOverall": false, "label": "notice/favicon.ico-124", "isController": false}, {"data": [[1.73403762E12, 13.50943396226415], [1.73403756E12, 12.404255319148934]], "isOverall": false, "label": "home/public/img/program/pg-ds.jpg-102", "isController": false}, {"data": [[1.73403762E12, 11.75925925925926], [1.73403756E12, 11.82608695652174]], "isOverall": false, "label": "notice/public/img/logo3.png-126", "isController": false}, {"data": [[1.73403762E12, 12.396226415094338], [1.73403756E12, 12.78723404255319]], "isOverall": false, "label": "home/public/img/program/pg-se.jpg-92", "isController": false}, {"data": [[1.73403762E12, 11.660377358490566], [1.73403756E12, 11.574468085106382]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Efficie.jpg-73", "isController": false}, {"data": [[1.73403762E12, 181.08], [1.73403756E12, 188.38000000000002]], "isOverall": false, "label": "moodle/moodle/-6", "isController": false}, {"data": [[1.73403762E12, 12.41509433962264], [1.73403756E12, 13.425531914893618]], "isOverall": false, "label": "home/public/img/aboutus/c21.jpg-57", "isController": false}, {"data": [[1.73403762E12, 51.42], [1.73403756E12, 49.46000000000001]], "isOverall": false, "label": "moodle/moodle/course/index.php-10", "isController": false}, {"data": [[1.73403762E12, 11.716981132075473], [1.73403756E12, 12.042553191489363]], "isOverall": false, "label": "home/public/img/program/ug.jpg-59", "isController": false}, {"data": [[1.73403762E12, 17.16666666666667], [1.73403756E12, 17.39130434782609]], "isOverall": false, "label": "home/public/img/service/Training.jpg-104", "isController": false}, {"data": [[1.73403762E12, 10.865384615384619], [1.73403756E12, 10.95833333333333]], "isOverall": false, "label": "home/public/js/main.js-51", "isController": false}, {"data": [[1.73403762E12, 10.592592592592592], [1.73403756E12, 9.67391304347826]], "isOverall": false, "label": "notice/public/css/carousel.css-114", "isController": false}, {"data": [[1.73403762E12, 108.15094339622642], [1.73403756E12, 117.44680851063828]], "isOverall": false, "label": "home/public/img/icpc.jpg-52", "isController": false}, {"data": [[1.73403762E12, 11.634615384615383], [1.73403756E12, 11.562500000000002]], "isOverall": false, "label": "home/public/img/logo3.png-44", "isController": false}, {"data": [[1.73403762E12, 12.113207547169809], [1.73403756E12, 11.063829787234045]], "isOverall": false, "label": "home/public/img/program/pg-ai.jpg-61", "isController": false}, {"data": [[1.73403762E12, 59.41176470588236], [1.73403756E12, 55.836734693877546]], "isOverall": false, "label": "moodle/moodle/pluginfile.php/15688/assignsubmission_file/submission_files/19238/2105019dft_fft_online.zip-35", "isController": false}, {"data": [[1.73403762E12, 26.962264150943398], [1.73403756E12, 26.510638297872344]], "isOverall": false, "label": "home/home-80", "isController": false}, {"data": [[1.73403762E12, 94.43999999999997], [1.73403756E12, 86.5]], "isOverall": false, "label": "moodle/moodle/course/view.php-13", "isController": false}, {"data": [[1.73403762E12, 25.88679245283019], [1.73403756E12, 24.6595744680851]], "isOverall": false, "label": "home/home-82", "isController": false}, {"data": [[1.73403762E12, 25.57692307692307], [1.73403756E12, 25.500000000000004]], "isOverall": false, "label": "home/public/css/bootstrap.min.css-43", "isController": false}, {"data": [[1.73403762E12, 84.7], [1.73403756E12, 84.29999999999998]], "isOverall": false, "label": "moodle/moodle/course/view.php-15", "isController": false}, {"data": [[1.73403762E12, 25.94339622641509], [1.73403756E12, 25.723404255319153]], "isOverall": false, "label": "home/home-84", "isController": false}, {"data": [[1.73403762E12, 50.699999999999996], [1.73403756E12, 49.47999999999999]], "isOverall": false, "label": "moodle/moodle/course/index.php-9", "isController": false}, {"data": [[1.73403762E12, 21.692307692307697], [1.73403756E12, 20.22916666666667]], "isOverall": false, "label": "home/public/js/jquery-1.11.2.min.js-49", "isController": false}, {"data": [[1.73403762E12, 34.529411764705884], [1.73403756E12, 34.87755102040816]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34-0", "isController": false}, {"data": [[1.73403762E12, 34.529411764705884], [1.73403756E12, 32.95918367346939]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34-2", "isController": false}, {"data": [[1.73403762E12, 9.830188679245285], [1.73403756E12, 8.617021276595745]], "isOverall": false, "label": "home/public/img/Arrow-l.png-65", "isController": false}, {"data": [[1.73403762E12, 11.716981132075475], [1.73403756E12, 11.319148936170214]], "isOverall": false, "label": "home/public/img/program/pg-co.jpg-63", "isController": false}, {"data": [[1.73403762E12, 22.686274509803926], [1.73403756E12, 20.3265306122449]], "isOverall": false, "label": "moodle/moodle/mod/assign/view.php-34-1", "isController": false}, {"data": [[1.73403762E12, 11.259259259259258], [1.73403756E12, 10.434782608695652]], "isOverall": false, "label": "notice/public/img/logo3.png-117", "isController": false}, {"data": [[1.73403762E12, 35.27450980392157], [1.73403756E12, 34.08163265306123]], "isOverall": false, "label": "moodle/moodle/course/view.php-33-0", "isController": false}, {"data": [[1.73403762E12, 85.56000000000002], [1.73403756E12, 81.98]], "isOverall": false, "label": "moodle/moodle/course/view.php-17", "isController": false}, {"data": [[1.73403762E12, 29.36363636363637], [1.73403756E12, 27.15555555555556]], "isOverall": false, "label": "notice/home/notice-131", "isController": false}, {"data": [[1.73403762E12, 34.372549019607845], [1.73403756E12, 33.959183673469404]], "isOverall": false, "label": "moodle/moodle/course/view.php-33-2", "isController": false}, {"data": [[1.73403762E12, 24.588235294117645], [1.73403756E12, 22.040816326530614]], "isOverall": false, "label": "moodle/moodle/course/view.php-33-1", "isController": false}, {"data": [[1.73403762E12, 67.21568627450982], [1.73403756E12, 66.40816326530614]], "isOverall": false, "label": "moodle/moodle/course/index.php-21", "isController": false}, {"data": [[1.73403762E12, 57.42000000000001], [1.73403756E12, 55.6]], "isOverall": false, "label": "moodle/moodle/my/courses.php-7", "isController": false}, {"data": [[1.73403762E12, 136.7058823529412], [1.73403756E12, 137.46938775510202]], "isOverall": false, "label": "moodle/moodle-26-1", "isController": false}, {"data": [[1.73403762E12, 11.372549019607845], [1.73403756E12, 10.204081632653057]], "isOverall": false, "label": "moodle/moodle-26-0", "isController": false}, {"data": [[1.73403762E12, 11.846153846153845], [1.73403756E12, 11.374999999999998]], "isOverall": false, "label": "home/public/img/logo.png-45", "isController": false}, {"data": [[1.73403762E12, 11.444444444444448], [1.73403756E12, 10.956521739130432]], "isOverall": false, "label": "notice/public/img/logo.png-118", "isController": false}, {"data": [[1.73403762E12, 105.35849056603774], [1.73403756E12, 104.78723404255318]], "isOverall": false, "label": "home/public/img/CSE-Fest-1.JPG-98", "isController": false}, {"data": [[1.73403762E12, 148.13725490196077], [1.73403756E12, 147.8163265306123]], "isOverall": false, "label": "moodle/moodle-26", "isController": false}, {"data": [[1.73403762E12, 12.03703703703704], [1.73403756E12, 12.456521739130437]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Efficie.jpg-109", "isController": false}, {"data": [[1.73403762E12, 51.50980392156863], [1.73403756E12, 48.551020408163254]], "isOverall": false, "label": "moodle/moodle/course/index.php-20", "isController": false}, {"data": [[1.73403762E12, 19.76470588235294], [1.73403756E12, 19.224489795918377]], "isOverall": false, "label": "moodle/moodle/user/view.php-24-0", "isController": false}, {"data": [[1.73403762E12, 25.259259259259256], [1.73403756E12, 23.195652173913043]], "isOverall": false, "label": "notice/public/css/bootstrap.min.css-113", "isController": false}, {"data": [[1.73403762E12, 14.660377358490564], [1.73403756E12, 14.106382978723405]], "isOverall": false, "label": "home/public/img/aboutus/c22.jpg-86", "isController": false}, {"data": [[1.73403762E12, 8.943396226415093], [1.73403756E12, 9.063829787234043]], "isOverall": false, "label": "home/public/img/Arrow-r.png-66", "isController": false}, {"data": [[1.73403762E12, 168.01923076923075], [1.73403756E12, 169.1875]], "isOverall": false, "label": "home/public/img/lab.jpg-47", "isController": false}, {"data": [[1.73403762E12, 69.96296296296299], [1.73403756E12, 70.17391304347827]], "isOverall": false, "label": "notice/home/download/1302-128", "isController": false}, {"data": [[1.73403762E12, 13.433962264150944], [1.73403756E12, 13.382978723404259]], "isOverall": false, "label": "home/public/img/aboutus/c21.jpg-88", "isController": false}, {"data": [[1.73403762E12, 210.24528301886792], [1.73403756E12, 213.6170212765957]], "isOverall": false, "label": "home/public/img/researchlab.jpg-99", "isController": false}, {"data": [[1.73403762E12, 54.980392156862756], [1.73403756E12, 53.530612244897966]], "isOverall": false, "label": "moodle/moodle/my/courses.php-36", "isController": false}, {"data": [[1.73403762E12, 58.54901960784314], [1.73403756E12, 55.040816326530624]], "isOverall": false, "label": "moodle/moodle/my/courses.php-32", "isController": false}, {"data": [[1.73403762E12, 31.392156862745097], [1.73403756E12, 31.204081632653057]], "isOverall": false, "label": "moodle/moodle/course/view.php-22-0", "isController": false}, {"data": [[1.73403762E12, 20.000000000000007], [1.73403756E12, 18.734693877551024]], "isOverall": false, "label": "moodle/moodle/course/view.php-22-1", "isController": false}, {"data": [[1.73403762E12, 32.99999999999999], [1.73403756E12, 31.551020408163264]], "isOverall": false, "label": "moodle/moodle/course/view.php-22-2", "isController": false}, {"data": [[1.73403762E12, 10.509433962264152], [1.73403756E12, 11.723404255319151]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Explori.jpg-74", "isController": false}, {"data": [[1.73403762E12, 12.203703703703704], [1.73403756E12, 11.782608695652176]], "isOverall": false, "label": "notice/public/css/main.css-116", "isController": false}, {"data": [[1.73403762E12, 126.8076923076923], [1.73403756E12, 136.56249999999997]], "isOverall": false, "label": "home/public/img/gate.jpg-46", "isController": false}, {"data": [[1.73403762E12, 31.94], [1.73403756E12, 30.319999999999997]], "isOverall": false, "label": "moodle/moodle/course/view.php-15-0", "isController": false}, {"data": [[1.73403762E12, 13.865384615384617], [1.73403756E12, 14.0]], "isOverall": false, "label": "home/public/img/aboutus/c12.jpg-56", "isController": false}, {"data": [[1.73403762E12, 19.679999999999996], [1.73403756E12, 20.240000000000006]], "isOverall": false, "label": "moodle/moodle/course/view.php-15-1", "isController": false}, {"data": [[1.73403762E12, 32.91999999999999], [1.73403756E12, 33.32]], "isOverall": false, "label": "moodle/moodle/course/view.php-15-2", "isController": false}, {"data": [[1.73403762E12, 11.07407407407407], [1.73403756E12, 10.847826086956523]], "isOverall": false, "label": "notice/public/js/color-modes.js-115", "isController": false}, {"data": [[1.73403762E12, 13.207547169811319], [1.73403756E12, 13.531914893617024]], "isOverall": false, "label": "home/public/img/program/pg-cs.jpg-90", "isController": false}, {"data": [[1.73403762E12, 12.425925925925922], [1.73403756E12, 12.021739130434783]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_Explori.jpg-110", "isController": false}, {"data": [[1.73403762E12, 66.11320754716981], [1.73403756E12, 73.23404255319149]], "isOverall": false, "label": "home/web/assets/img/news/icpc20241.png-69", "isController": false}, {"data": [[1.73403762E12, 21.22222222222223], [1.73403756E12, 20.673913043478258]], "isOverall": false, "label": "notice/public/js/jquery-3.7.1.min.js-119", "isController": false}, {"data": [[1.73403762E12, 128.53846153846155], [1.73403756E12, 126.5625]], "isOverall": false, "label": "home/public/img/program2.jpg-50", "isController": false}, {"data": [[1.73403762E12, 54.499999999999986], [1.73403756E12, 53.860000000000014]], "isOverall": false, "label": "moodle/moodle/my/courses.php-19", "isController": false}, {"data": [[1.73403762E12, 50.018518518518526], [1.73403756E12, 48.41304347826088]], "isOverall": false, "label": "notice/home/download/1306-123", "isController": false}, {"data": [[1.73403762E12, 13.851851851851851], [1.73403756E12, 13.695652173913045]], "isOverall": false, "label": "home/web/assets/img/news/elsiver2022.jpg-108", "isController": false}, {"data": [[1.73403762E12, 138.45999999999992], [1.73403756E12, 135.60000000000002]], "isOverall": false, "label": "moodle/moodle/-12", "isController": false}, {"data": [[1.73403762E12, 14.0], [1.73403756E12, 12.765957446808514]], "isOverall": false, "label": "home/public/img/aboutus/c12.jpg-87", "isController": false}, {"data": [[1.73403762E12, 12.584905660377357], [1.73403756E12, 12.148936170212767]], "isOverall": false, "label": "home/public/img/program/ug.jpg-94", "isController": false}, {"data": [[1.73403762E12, 15.905660377358489], [1.73403756E12, 14.574468085106384]], "isOverall": false, "label": "home/public/img/service/Training.jpg-70", "isController": false}, {"data": [[1.73403762E12, 17.62962962962963], [1.73403756E12, 16.782608695652176]], "isOverall": false, "label": "home/public/img/service/Outreach.jpg-105", "isController": false}, {"data": [[1.73403762E12, 11.592592592592593], [1.73403756E12, 10.869565217391306]], "isOverall": false, "label": "notice/public/js/main.js-121", "isController": false}, {"data": [[1.73403762E12, 24.581818181818186], [1.73403756E12, 23.288888888888884]], "isOverall": false, "label": "notice/home/download/1280-130", "isController": false}, {"data": [[1.73403762E12, 12.88888888888889], [1.73403756E12, 11.956521739130434]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_IMPACTS2.jpg-111", "isController": false}, {"data": [[1.73403762E12, 14.358490566037737], [1.73403756E12, 14.617021276595745]], "isOverall": false, "label": "home/public/img/aboutus/c22.jpg-58", "isController": false}, {"data": [[1.73403762E12, 13.905660377358489], [1.73403756E12, 13.872340425531913]], "isOverall": false, "label": "home/public/img/service/Consultancy.jpg-67", "isController": false}, {"data": [[1.73403762E12, 46.24074074074074], [1.73403756E12, 45.43478260869563]], "isOverall": false, "label": "home/web/assets/img/news/VIP%20Cup%202023.jpg-107", "isController": false}, {"data": [[1.73403762E12, 11.301886792452832], [1.73403756E12, 10.617021276595743]], "isOverall": false, "label": "home/public/img/areabg.png-76", "isController": false}, {"data": [[1.73403762E12, 12.30188679245283], [1.73403756E12, 12.553191489361701]], "isOverall": false, "label": "home/web/assets/img/news/elsiver2022.jpg-72", "isController": false}, {"data": [[1.73403762E12, 63.56862745098038], [1.73403756E12, 64.44897959183676]], "isOverall": false, "label": "moodle/moodle/user/view.php-24", "isController": false}, {"data": [[1.73403762E12, 14.461538461538465], [1.73403756E12, 14.729166666666664]], "isOverall": false, "label": "home/public/img/aboutus/c11.jpg-55", "isController": false}, {"data": [[1.73403762E12, 30.549019607843128], [1.73403756E12, 28.36734693877551]], "isOverall": false, "label": "home/home-39", "isController": false}, {"data": [[1.73403762E12, 11.264150943396226], [1.73403756E12, 11.148936170212767]], "isOverall": false, "label": "home/web/assets/img/news/PG_Seminar_(CSE-BUET):_IMPACTS2.jpg-75", "isController": false}, {"data": [[1.73403762E12, 136.1176470588235], [1.73403756E12, 134.3469387755102]], "isOverall": false, "label": "moodle/moodle/login/logout.php-37-1", "isController": false}, {"data": [[1.73403762E12, 22.784313725490193], [1.73403756E12, 21.142857142857146]], "isOverall": false, "label": "moodle/moodle/login/logout.php-37-0", "isController": false}, {"data": [[1.73403762E12, 96.76923076923077], [1.73403756E12, 107.75]], "isOverall": false, "label": "home/public/img/CSE-Fest-1.JPG-53", "isController": false}, {"data": [[1.73403762E12, 114.71698113207546], [1.73403756E12, 127.27659574468085]], "isOverall": false, "label": "home/public/img/lab.jpg-97", "isController": false}, {"data": [[1.73403762E12, 36.94339622641508], [1.73403756E12, 39.48936170212765]], "isOverall": false, "label": "home/web/assets/img/news/VIP%20Cup%202023.jpg-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73403762E12, "title": "Response Time Over Time"}},
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
        }
};
