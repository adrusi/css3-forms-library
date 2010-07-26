$(function() {
	//detect js
	$('html')
		.removeClass('no-js')
		.addClass('js');
	//style radios
	var i = 0;
	$('input[type=radio]').each(function() {
		$(this).attr('data-replacementid', i);
		$(this).after('<span class="radioreplacement" id="' + i +'" data-name="' + $(this).attr('name') + '" style="text-indent:-9999px;">&bull;</span>');
		$(this).hide();
		i++;
	});
	$('.radioreplacement').click(function() {
		var id = $(this).attr('id');
		$('input[type=radio][data-replacementid=' + id + ']').attr('checked', 'checked');
		var color = $(this).css('color');
		$('.radioreplacement[data-name=' + $(this).attr('data-name') + ']').css({
			textIndent: '-9999px'
		});
		$(this).css({
			textIndent: '0'
		});
		$('input[type=radio][name=' + $(this).attr('data-name') + ']').attr('checked', 'false');
	});
	//style checkboxes
	i = 0;
	$('input[type=checkbox]').each(function() {
		$(this).attr('data-replacementid', i);
		if ($(this).attr('checked') === 'checked') {
			var checked = 'checked';
		}
		else {
			var checked = 'false';
		}
		$(this).after('<span class="checkboxreplacement" id="' + i +'" data-name="' + $(this).attr('name') + '" data-checked="' + checked + '" style="text-indent:-9999px;">&#10003;</span>');
		$(this).hide();
		i++;
	});
	$('.checkboxreplacement').click(function() {
		$('input[type=checkbox][data-replacementid=' + $(this).attr('id') + ']').click();
		$(this).toggleClass('checked');
	});
});
