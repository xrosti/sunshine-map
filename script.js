const locations = {
  limansk:{name:"Лиманск",type:"Локация",danger:"Средняя",loot:"Средний",mobs:"Низкий шанс",radiation:"Низкая",text:"Северная точка карты. Хороший ориентир для маршрутов."},
  kpp:{name:"КПП",type:"Контрольная точка",danger:"Высокая",loot:"Средний",mobs:"Средний шанс",radiation:"Средняя",text:"Опасная проходная зона. Лучше подходить аккуратно."},
  yantar:{name:"Янтарь",type:"Опасная зона",danger:"Высокая",loot:"Средний",mobs:"Снорки, мутанты",radiation:"Средняя",text:"Опасная территория. Новичкам лучше не идти одному."},
  wild:{name:"Дикая территория",type:"Опасная зона",danger:"Высокая",loot:"Высокий",mobs:"Высокий шанс",radiation:"Средняя",text:"Рискованное место с шансом ценного лута."},
  agroprom:{name:"Завод Агропром",type:"Промзона",danger:"Средняя",loot:"Средний",mobs:"Средний шанс",radiation:"Низкая",text:"Можно искать ресурсы и снаряжение."},
  baraholka:{name:"Барахолка",type:"Торговая зона",danger:"Средняя",loot:"Средний",mobs:"Низкий шанс",radiation:"Низкая",text:"Точка активности игроков и торговли."},
  snorks:{name:"Деревня снорков",type:"Деревня",danger:"Средняя",loot:"Низкий",mobs:"Снорки",radiation:"Низкая",text:"Может быть опасно из-за мутантов."},
  water:{name:"Водонапорная станция",type:"Ориентир",danger:"Низкая",loot:"Средний",mobs:"Низкий шанс",radiation:"Низкая",text:"Удобный ориентир на юго-западе."},
  south:{name:"South КПП",type:"Контрольная точка",danger:"Средняя",loot:"Низкий",mobs:"Низкий шанс",radiation:"Низкая",text:"Южная контрольная точка."},
  freedomBase:{name:"База Свободы",type:"База",danger:"Низкая",loot:"Средний",mobs:"Низкий шанс",radiation:"Низкая",text:"Юго-восточная база."}
};

const marks = [
  ["М","Лиманск"],["⚑","КПП"],["☠","Янтарь"],["☠","Дикая территория"],
  ["⚑","Агропром"],["▣","Барахолка"],["☣","Деревня снорков"],
  ["◆","Водонапорная"],["⚑","South КПП"],["☣","База Свободы"]
];

const factions = [
  {name:"Монолит",img:"factions/Монолит.png",text:"Фанатичная группировка, связанная с центром Зоны. Опасны, дисциплинированы, часто действуют жестко."},
  {name:"Грех",img:"factions/грех.png",text:"Опасная группировка с мрачной идеологией. Часто контролирует рискованные территории."},
  {name:"Долг",img:"factions/Долг.png",text:"Военизированная группировка, которая борется с угрозами Зоны и мутантами."},
  {name:"Свобода",img:"factions/Свобода.png",text:"Группировка свободных сталкеров. Ценят независимость и свободу действий."},
  {name:"Наемники",img:"factions/Наемники.png",text:"Профессиональные бойцы, работающие за оплату. Про них обычно известно мало."},
  {name:"Братва",img:"factions/Братва.png",text:"Криминальная группировка. Могут заниматься контролем торговли, рейдами и силовым давлением."},
  {name:"ОКСОП",img:"factions/Оксоп.png",text:"Охрана периметра/военная структура. Контроль КПП и порядок на территории."},
  {name:"Слизни",img:"factions/Слизни.png",text:"Необычная группировка с собственным стилем и символикой."},
  {name:"Военсталлы",img:"factions/Военсталлы.png",text:"Вооруженная структура с военным уклоном."},
  {name:"Тени",img:"factions/Тени.png",text:"Скрытная группировка. Мало информации, действуют осторожно."},
  {name:"ИИГ",img:"factions/ИИГ.png",text:"Исследовательская/научная структура, связанная с изучением Зоны."},
  {name:"Ренегаты",img:"factions/Ренегаты.png",text:"Опасные одиночки и отщепенцы. Могут быть непредсказуемыми."},
  {name:"Учёные",img:"factions/Ученые.png",text:"Изучают аномалии, артефакты и природу Зоны."},
  {name:"Нейтралы",img:"factions/Нейтралы.png",text:"Обычные сталкеры и нейтральные жители Зоны."},
  {name:"Чистое небо",img:"factions/Чистое небо.png",text:"Группировка, связанная с исследованием и стабилизацией Зоны."},
  {name:"Отряд «Альфа»",img:"factions/Альфа.png",text:"Элитный отряд с боевым уклоном."}
];

function setTab(tab){
  document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
  if(tab==="map"){
    document.querySelectorAll(".tab")[0].classList.add("active");
    renderMarks();
  }else{
    document.querySelectorAll(".tab")[1].classList.add("active");
    renderFactions();
  }
}

function renderMarks(){
  document.getElementById("leftTitle").textContent="УСЛОВНЫЕ ОБОЗНАЧЕНИЯ";
  document.getElementById("leftList").innerHTML = marks.map(m=>`
    <div class="list-item">
      <div class="list-icon">${m[0]}</div>
      <span>${m[1]}</span>
    </div>
  `).join("");
}

function renderFactions(){
  document.getElementById("leftTitle").textContent="ФРАКЦИИ";
  document.getElementById("leftList").innerHTML = factions.map((f,i)=>`
    <div class="list-item" onclick="openFaction(${i})">
      <img src="${f.img}" alt="${f.name}">
      <span>${f.name}</span>
    </div>
  `).join("");
}

function dangerClass(danger){
  if(danger==="Высокая") return "danger-high";
  if(danger==="Средняя") return "danger-mid";
  return "danger-low";
}

function openLocation(id){
  const l=locations[id];
  const panel=document.getElementById("infoPanel");
  panel.classList.add("show");
  panel.innerHTML=`
    <button class="close-btn" onclick="closeInfo()">×</button>
    <h2>${l.name}</h2>
    <p><b>Тип:</b> ${l.type}</p>
    <p><b>Опасность:</b> <span class="${dangerClass(l.danger)}">${l.danger}</span></p>
    <p><b>Шанс лута:</b> ${l.loot}</p>
    <p><b>Мобы:</b> ${l.mobs}</p>
    <p><b>Радиация:</b> ${l.radiation}</p>
    <hr>
    <p>${l.text}</p>
  `;
}

function openFaction(i){
  const f=factions[i];
  const panel=document.getElementById("infoPanel");
  panel.classList.add("show");
  panel.innerHTML=`
    <button class="close-btn" onclick="closeInfo()">×</button>
    <h2>${f.name}</h2>
    <img src="${f.img}" alt="${f.name}">
    <p>${f.text}</p>
  `;
}

function closeInfo(){
  document.getElementById("infoPanel").classList.remove("show");
}

renderMarks();
