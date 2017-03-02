$(function(){
  $("#sites").kendoDropDownList({
    filter: "contains",
    dataSource: {
      data: Sites
    },
    dataTextField: "name",
    dataValueField: "id",
    change: function(){
      // console.log(this.value());
    },
  });
  $("#startTime").kendoTimePicker();
  $("#finishTime").kendoTimePicker();
})
