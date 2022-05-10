$(".checking__main").change(function() {
    if($(this).is(":checked")) {
        $(".checking").each(function() {
            $(this).prop('checked', true);
        });
    }
    else {
        $(".checking").each(function() {
            $(this).prop('checked', false);
        });
    }       
});

$(".checking").change(function() {
    var allSelected = true;

    $(".checking").each(function() {
        if(!$(this).is(":checked")) {
            $(".checking__main").prop('checked', false);
            allSelected = false;
        }
    });

    if(allSelected)
        $(".checking__main").prop('checked', true);
});