class renderer {
  constructor(board, scores) {
    this.renderBoard(board, scores);
  }

  renderBoard(board, scores) {
    $("#board").empty();
    this.source = $("#display-table").html();
    this.template = Handlebars.compile(this.source);
    this.newHTML = this.template({ board });
    $("#board").append(this.newHTML);

    $("#Score-container").empty();
    this.source = $("#display-Score").html();
    this.template = Handlebars.compile(this.source);
    this.newHTML = this.template(scores);
    $("#Score-container").append(this.newHTML);
  }
}
