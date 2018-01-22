
$(function () {
  // nadji sve elemente sa ovom klasom u cssu
  var workThumb = $(".work_thumbnail");

  // prodji kroz grupu elemenata koju sam nasao gore i na svakom pojedinacno
  // uzmi ime fajla iz data-image atributa i apliciraj background image sa tim
  workThumb.each(function(i, el) {
      var imgURL = $(el).attr("data-image");
      $(el).css("background-image", "url('img/work/" + imgURL + "')");
  });

  var workThumbElementGroup = $(".spotlight_work_thumbnails ul li");
  var workName = $(".spotlight_work_name");
  var spotlightTitle = $(".spotlight_text_title");
  var spotlightIntro = $(".spotlight_text_intro");
  var spotlightAbout = $(".spotlight_text_about");
  var spotlightButtonURL = $(".spotlight_text_button");


  workThumbElementGroup.each(function(i, el) {
    var workImg = $(el).find(".work_thumbnail");
    var prviProjekat = $(".work_thumbnail").eq(0);
    spotlightTitle.text(prviProjekat.attr("data-name"));
    spotlightIntro.text(prviProjekat.attr("data-intro"));
    spotlightAbout.text(prviProjekat.attr("data-text"));
    spotlightButtonURL.attr("href", prviProjekat.attr("data-url"));

    workImg.hover(function() {
      workName.text($(this).attr("data-name"));
    }, function(){
      workName.text(" ");
    });

    workImg.click(function(e) {
      spotlightTitle.text($(this).attr("data-name"));
      spotlightIntro.text($(this).attr("data-intro"));
      spotlightAbout.text($(this).attr("data-text"));
      spotlightButtonURL.attr("href", $(this).attr("data-url"));
    });
  })

  // aktiviraj bootstrap tooltip na svim elementima koji imaju data-toggle attribute
  $('[data-toggle="tooltip"]').tooltip();
  $('#tech-logos').webTicker({
      speed: 50,
      height: '30px',
      duplicate: true,
      startEmpty: false,
      hoverpause: false,
      // transition: "ease"
  });


})
