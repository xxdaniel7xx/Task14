# Task14

## Стандарты.

### Используемые инструменты:
- html
- css
- Bootstrap
- JavaScript


### Цель работы.

Привести ранее написанный код к стандартам оформления.

### Изменения

#### Верстка сайта Task7.

##### Семантика.

- Добавлен разел **header** в который пренесен логотип и навигационнай панель.
- К логотипу добавлена ссылка.
- Добавлен раздел **main** в который перенесен основной контент сайта.
- Добавлены комментарии.

##### Валидность.

- Добавлено свойство **alt** к тегам **img** там где их не хватало

*Валидатор сайта **W3C** выводит предупреждение о нехватке заголовков (тег **h**) в некоторых секциях (тег **section**) однако, исходя из шаблона задания, заголовков, в данных секциях не предусмотрено.*

##### БЭМ.

- добавлены новые классы в соответствии с методикой БЭМ
- убраны комбинированные селекторы
- убраны идентификаторы, там где это возможно (за исключением одного, который относится к **bootstrap**)

#### Генератор Ползьователей Task13.

*Здесь я воспользовался рекомендациями ментора Ледванова Олега.
Олег, если вы это читаете, спасибо большое за такие подробные и полезные комментарии.
Я заменил логические конструкции **if** на тернарный оператор. Как вы и рекомендовали. Однако, в блоках функций по определению фамилии и отчества, я решил оставить как было, так как, на мой взгляд, в таком случае падает читаемость кода.*

`let surname = (gender === "Мужчина") ? this.randomValue(this.surnameJson) : this.randomValue(this.professionFemaleJson) + 'a';

На мой взгляд классическая логическя конструкция читается легче в данном случае`

##### DRY.

- логичесчкие конструкции функций **randomFirstName()** и **randomProfession** были заменены на тернарный оператор.
- убран генератор случайных чисел из функции **randomBirth()**, для определения пола используется теперь ранее написанный **randomIntNumber()**

##### KISS.

- изменен принцип генерации даты рождения. Теперь генерация дат происходит с использованием **new Date()**
- убран **JSON** список названий месяцев

##### YAGNI.

- убрана кнопка возврата к странице навигации по последным практическим работам
