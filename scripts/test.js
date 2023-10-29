function test() {
    let html = "<h1>Результаты анкетирования</h1>";
    let inputs = document.getElementsByClassName("answer");

    function getValRb(name) {
        let rbs = document.getElementsByName(name);
        let res = "";
        for (let i = 0; i < rbs.length; i++) {
            if (rbs[i].checked) {
                res = rbs[i].value;
            }
        }
        return res;
    }

    let answered = 0;
    let noAnswered = 0;
    function safe(text) {
        let res = text;
        if (text.trim() == "") {
            res = "Нет ответа";
            noAnswered++;
        }
        else answered++;
        return res;
    }

    function addParagraph(text, style) {
        if (!style) style = "";
        else style = " style=\"" + style + "\";";
        html += "<p" + style + ">" + text + "</p>";
    }

    html += "<strong>" + safe(document.getElementById("name").value) + "</strong>";
    addParagraph("Контактные данные:");
    for (let i = 1; i < 3; i++) {
        addParagraph(inputs[i].getAttribute("placeholder") + safe(inputs[i].value));
    }
    addParagraph("Пароль: " + safe(document.getElementById("pass").value));
    addParagraph("Данные анкеты:");
    addParagraph("Дата последнего полета: " + safe(document.getElementById("last").value));
    addParagraph("Опоздания: " + safe(getValRb("_late")));
    addParagraph("Усталость: " + safe(document.getElementById("s").value));
    addParagraph("Комфортное время для полета: " + safe(document.getElementById("time").value));
    addParagraph("Покупки на борту: " + safe(getValRb("buy")));
    let color = safe(document.getElementById("color").value);
    if (color == "") color = "black";
    addParagraph("Цвет: ", "display: inline");
    addParagraph("Самолет", "display: inline; color: " + color);
    addParagraph("Рост: " + safe(document.getElementById("height").value));
    addParagraph("Фотография: " + safe(document.getElementById("photo").value));
    let checked = safe(document.getElementById("procpers").value);
    if (checked == "on") checked = "Есть";
    else checked = "Нет";
    addParagraph("Согласие на обработку персональных данных: " + checked);
    addParagraph("Отвечено: " + answered + " из " + (answered + noAnswered) + " (" + noAnswered + " без ответа)");
    document.write(html);
}