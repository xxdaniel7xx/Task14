const personGenerator = {

    //JSON surname list
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    //JSON firstname male list
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    //JSON firstname female list
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александрa",
            "id_2": "Татьяна",
            "id_3": "Наталья",
            "id_4": "Анастасия",
            "id_5": "Екатерина",
            "id_6": "Елизавета",
            "id_7": "Надежда",
            "id_8": "Ксения",
            "id_9": "Дарья",
            "id_10": "Валентина"
        }
    }`,

    //JSON father's name list
    fatherNameJson: `{
        "count": 10,
        "list": {
            "id_1": "Александрович",
            "id_2": "Алексеевич",
            "id_3": "Иванович",
            "id_4": "Васильевич",
            "id_5": "Дмитриевич",
            "id_6": "Андреевич",
            "id_7": "Михайлович",
            "id_8": "Данилович",
            "id_9": "Борисович",
            "id_10": "Валерьевич"
        }
    }`,

    //JSON profession male list
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Мастер",
            "id_2": "Сварщик",
            "id_3": "Крановщик",
            "id_4": "Водитель",
            "id_5": "Матрос",
            "id_6": "Механик",
            "id_7": "Шеф-повар",
            "id_8": "Телохранитель",
            "id_9": "Грузчик",
            "id_10": "Пожарный"
        }
    }`,

    //JSON profession female list
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Визажист",
            "id_2": "Учитель",
            "id_3": "Медсестра",
            "id_4": "Секретарь",
            "id_5": "Актриса",
            "id_6": "Балерина",
            "id_7": "Кассир",
            "id_8": "Бухгалтер",
            "id_9": "Судья",
            "id_10": "Диспетчер"
        }
    }`,

    //random gender function
    randomGender: function() {
        let gender = this.randomIntNumber() == 1 ? 'Мужчина' : 'Женщина';
        return this.gender = gender;
    }
    ,

    //random number function
    randomIntNumber: (max = 1, min = 0) => Math.round(Math.random() * (max - min + 1) + min),

    //random value of selected JSON list
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    //random first name function
    randomFirstName: function(gender) {
        let firstName = (gender === "Мужчина") ? this.firstNameMaleJson : this.firstNameFemaleJson;

        return this.randomValue(firstName);
    }

    ,

    //random surname function
    randomSurname: function(gender) {
        if (gender === 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'а';
        }
    },

    //random father's name function
    randomFatherName: function(gender) {
        if (gender === 'Мужчина') {
            return this.randomValue(this.fatherNameJson);
        } else {
            return this.randomValue(this.fatherNameJson).slice(0,-2) + 'на';
        }
    },

    //random profession function
    randomProfession: function(gender) {
        let profession = (gender === "Мужчина") ? this.professionMaleJson : this.professionFemaleJson;

        return this.randomValue(profession);
    },

    //random date of birth function
    randomBirth: function() {
        let startDate = new Date(1960, 0, 1);
        let endDate = new Date(2003, 11, 31);
        function randomDate(startDate, endDate) {
            let date = new Date(+startDate + Math.random() * (endDate - startDate))
            let options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
            console.log(date);
            return date.toLocaleString("ru", options)
        }
            return randomDate(startDate,endDate)
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender(this.randomIntNumber);
        this.person.firstName = this.randomFirstName(this.gender);
        this.person.surname = this.randomSurname(this.gender);
        this.person.fatherName = this.randomFatherName(this.gender);
        this.person.profession =  this.randomProfession(this.gender);
        this.person.birth = this.randomBirth();
        return this.person;
    }
};
