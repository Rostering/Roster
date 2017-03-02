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

  $("#scheduler").kendoGrid({
    height: 500,
    rowTemplate: kendo.template($("#template").html()),
    columns: [
        { title: "Staff" },
        { title: "Mon" },
        { title: "Tus" },
        { title: "Wed" },
        { title: "Thu" },
        { title: "Fri" },
        { title: "Sat" },
        { title: "Sun" },
    ],
    dataSource: Staffs,
  });
})
