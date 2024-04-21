$(".box").click((e) => {
  $(".modal-container")
    .delay(300)
    .fadeOut("fast", () => {
      $("#" + $(e.target).attr("data-batch"))
        .css("display", "flex")
        .hide()
        .fadeIn("slow");
    });
});

$(".countdown").each((i, e) => {
  let [year, month, day] = $(e)
    .attr("data-to")
    .split("/")
    .map((e) => parseInt(e));
  let now = Date.now();
  let then = new Date();
  then.setFullYear(year, month - 1, day);
  weeks = Math.ceil((then.getTime() - now) / (7 * 24 * 60 * 60 * 1000));

  $(e).text(weeks + " weeks ");
});
