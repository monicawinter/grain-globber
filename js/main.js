var $ul = $('ul');

$ul.addClass('grains-list');

grains.forEach(function (grain) {
  var $li = $('<li>');
  var $figure = $('<figure>');
  var $img = $('<img>');
  var $caption = $('<figcaption>');

  $caption.html(grain.name);
  $img.attr('src', 'images/' + grain.img);

  $figure.append($img, $caption);
  $li.append($figure);
  $ul.append($li);
});
