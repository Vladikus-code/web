ymaps.ready(initMap); 
// Функция инициализации карты
function initMap() { 
    var map = new ymaps.Map("map", {
        center: [54.987746, 82.906335], // Координаты 1 корпуса
        zoom: 17
    });
    
    // Создаем массив с данными о корпусах
    var branches = [
        { coordinates: [54.987746, 82.906335], name: 'Корпус 1' },
        { coordinates: [54.986573, 82.905491], name: 'Корпус 2' },
        { coordinates: [54.986656, 82.908536], name: 'Корпус 3' },
        { coordinates: [54.985436, 82.907099], name: 'Корпус 4' },
        { coordinates: [54.985318, 82.905068], name: 'Корпус 5' },
        { coordinates: [54.986413, 82.903721], name: 'Корпус 6' },
        { coordinates: [54.987162, 82.915031], name: 'Корпус 7' },
        { coordinates: [54.986315, 82.907099], name: 'Корпус 8' },
    ];
    
    // Проходимся по массиву корпусов и создаем метки на карте
    for (var i = 0; i < branches.length; i++) {
        var branch = branches[i];
        var placemark = new ymaps.Placemark(branch.coordinates, {
            balloonContent: branch.name
        });
        map.geoObjects.add(placemark);
    }
    
    // Функция обработчика изменения выбранного значения в функцию
    function BranchSelectChange() {
        var selectedBranch = document.getElementById('branchSelect').value;
    
        // Ищем метку на карте, соответствующую выбранному филиалу
        var selectedBranchPlacemark = null;
        map.geoObjects.each(function(obj) {
            if (obj.properties.get('balloonContent') === selectedBranch) {
                selectedBranchPlacemark = obj;
            }
        });
    
        if (selectedBranchPlacemark) {
            selectedBranchPlacemark.balloon.open();
        } else {
            console.error('Метка для выбранного филиала не найдена на карте.');
        }
    }

    // Вызов бработчика изменения выбранного значения в выпадающем списке
    document.getElementById('branchSelect').addEventListener('change', BranchSelectChange);
}