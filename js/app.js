 // JavaScript Document
 // Iterate over each select element
function select_dropdown() {
	$('.dropdown-field').each(function (e) {
 		// Cache the number of options
 		var $this = $(this),
 		numberOfOptions = $(this).children('option').length;

 		// Hides the select element
 		$this.addClass('s-hidden');

 		// Wrap the select element in a div
 		$this.wrap('<div class="select"></div>');

 		// Insert a styled div to sit over the top of the hidden select element
 		$this.after('<div class="styledSelect"></div>');

 		// Cache the styled div
 		var $styledSelect = $this.next('div.styledSelect');

 		// Show the first select option in the styled div
 		$styledSelect.text($this.children('option').eq(0).text());

 		// Insert an unordered list after the styled div and also cache the list
 		var $list = $('<ul />', {
 				 'class': 'options'
 		}).insertAfter($styledSelect);

 		// Insert a list item into the unordered list for each select option
 		for (var i = 0; i < numberOfOptions; i++) {
 			$('<li />', {
 				text: $this.children('option').eq(i).text(),
 				rel: $this.children('option').eq(i).val()
 			}).appendTo($list);
 		 }

 		// Cache the list items
 		var $listItems = $list.children('li');

 		// Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
 		$styledSelect.click(function (e) {
 			e.stopPropagation();
 			$('div.styledSelect.active').each(function () {
 				$(this).removeClass('active').next('ul.options').hide();
 			});
 			$(this).toggleClass('active').next('ul.options').toggle();
 		});

 		$listItems.click(function (e) {
 			e.stopPropagation();
 			$styledSelect.text($(this).text()).removeClass('active');
 			$this.val($(this).attr('rel'));
 			$list.hide();
 			/* alert($this.val()); Uncomment this for demonstration! */
 		 });

 		// Hides the unordered list when clicking outside of it
 		$(document).click(function () {
 			$styledSelect.removeClass('active');
 			$list.hide();
 		});

 	});
}

$('.box').on('click', function(){
	$('.box.current').removeClass('current');
	$(this).addClass('current');
});


// job offers //

$('#job-offers').on('click', function(){
	$(this).toggleClass('color_green');
	$('.job_offers_menu').toggle();
});

$("ul.job_offers_menu li").on("click", function() {
	var copyText = $(this).text();
	$("#job-offers").text(copyText);
	$('.job_offers_menu').hide();
});

// job offers //

// Ready to begin work in //
$('#begin-work').on('click', function(){
	$(this).toggleClass('color_green');
	$('.begin_work_menu').toggle();
});


$("ul.begin_work_year li").on("click", function() {
	$('.begin_work_year').hide();
});

$("ul.begin_work_menu li").on("click", function() {
	var copyText = $(this).text();
	$("#work-month").text(copyText);
	$('.begin_work_menu').hide();
	$('.begin_work_year').show();
});
$("ul.begin_work_year li").on("click", function() {
	var copyText = $(this).text();
	$("#work-year").text(copyText);
	$('.begin_work_year').hide();
});

// Ready to begin work in //

// EU Citizenship //
$('#eu-citizen').on('click', function(){
	$(this).toggleClass('color_green');
	$('.eu_citizen_opt').toggle();
});

$("ul.eu_citizen_opt li").on("click", function() {
	var copyText = $(this).text();
	$("#eu-citizen").text(copyText);
	$('.eu_citizen_opt').hide();
});
// EU Citizenship //

// Career path //
$('#career-path').on('click', function(){
	$(this).addClass('edit_icon_active');
	$('.career_path_opt').toggle();
	$('.career_path_name').toggle();
});

$("ul.career_path_opt li").on("click", function() {
	var copyText = $(this).text();
	$("#career-path-name").text(copyText);
	$('.career_path_opt').hide();
	$('.career_path_name').show();
});
// Career path //

// Employment Type //
$('#typeof_employ').on('click', function(){
	$(this).toggleClass('edit_icon_active');
	$('.employment_type').show();
	$('.employment_type_opt').toggle();
});

$('input[name="employment"]').on('click', function(){
	var $input = $( this );
	 if( $input.is( ':checked' ) == true ){
	  	$('#employment-type').append('<span id=' + $( this ).val() + '>'+$( this ).val()+'</span>');
	 }
	 if( $input.is( ':checked' ) == false ){

	  $('#' + $( this ).val()).remove();
	 }
});
// Employment Type //

// Areas of interest //
$('input[name="interest"]').on('click', function(){
	var $input = $( this );
	 if( $input.is( ':checked' ) == true ){
		 var n = $( "input:checked" ).length;
	  	$('#interests-list').append('<span id=' + $( this ).val() + '>'+$( this ).val()+'</span>');
	  	$('#interest_text').hide();

		if(n >= 7){
			$( ".check_count" ).show();
		}
		var a = 6;
		var x = n - a;
		$( ".check_count" ).text("+ " + x + " More" );
	 }
	 if( $input.is( ':checked' ) == false ){
	  $('#' + $( this ).val()).remove();
	  $('#interest_text').show();
	 }


});
$( ".check_count" ).on('click', function(){
	$('.interests_list').css('max-height', 'inherit');
	$( ".check_count" ).text("Nothing to show" );
});

// Areas of interest //

// Prefer Location //
$('#prefer-location').on('click', function(){
	$(this).toggleClass('edit_icon_active');
	$('.prefer_location_opt').toggle();
});


// Prefer Location //
