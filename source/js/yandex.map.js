// yandex maps

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("ya-map", {
    center: [59.938880, 30.323068],
    zoom: 17
  });

  var myPlacemark = new ymaps.Placemark([59.939080, 30.322868], {
    hintContent: "Мы находимся здесь",
    balloonContent: "улица Строителей, 15"
  }, {
    iconLayout: "default#image",
    iconImageHref: "img/icon-map-pin.svg",
    iconImageSize: [67, 100]
  });

  myMap.geoObjects.add(myPlacemark);
}
