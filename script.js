// 直接在 JS 里定义飞机数据
const aircraftData = [
  {
    "model": "Boeing 707-320",
    "code": "707",
    "manufacturer": "波音公司",
    "firstFlight": "1957",
    "type": "客机",
    "era": "1950s",
    "range": "5750 km",
    "wingspan": "44.42 m",
    "length": "46.61 m",
    "engines": "4 × Pratt & Whitney JT3D",
    "engineType": "涡扇"
  },
  {
    "model": "Boeing 727-200",
    "code": "727",
    "manufacturer": "波音公司",
    "firstFlight": "1963",
    "type": "客机",
    "era": "1960s",
    "range": "4000 km",
    "wingspan": "32.92 m",
    "length": "46.68 m",
    "engines": "3 × Pratt & Whitney JT8D",
    "engineType": "涡扇"
  },
  {
    "model": "Boeing 737-800",
    "code": "738",
    "manufacturer": "波音公司",
    "firstFlight": "1997",
    "type": "客机",
    "era": "1990s",
    "range": "5436 km",
    "wingspan": "35.8 m",
    "length": "39.5 m",
    "engines": "2 × CFM56",
    "engineType": "涡扇"
  },
  {
    "model": "Boeing 737 MAX 8",
    "code": "7M8",
    "manufacturer": "波音公司",
    "firstFlight": "2016",
    "type": "客机",
    "era": "2010s",
    "range": "6570 km",
    "wingspan": "35.9 m",
    "length": "39.5 m",
    "engines": "2 × LEAP-1B",
    "engineType": "涡扇"
  },
  {
    "model": "Boeing 747-400",
    "code": "744",
    "manufacturer": "波音公司",
    "firstFlight": "1988",
    "type": "客机",
    "era": "1980s",
    "range": "13450 km",
    "wingspan": "64.4 m",
    "length": "70.6 m",
    "engines": "4 × GE CF6 / PW4000 / RB211",
    "engineType": "涡扇"
  },
  {
    "model": "Boeing 747-8I",
    "code": "748",
    "manufacturer": "波音公司",
    "firstFlight": "2010",
    "type": "客机",
    "era": "2010s",
    "range": "14100 km",
    "wingspan": "68.4 m",
    "length": "76.3 m",
    "engines": "4 × GEnx-2B67",
    "engineType": "涡扇"
  },
  {
    "model": "Boeing 757-200",
    "code": "752",
    "manufacturer": "波音公司",
    "firstFlight": "1982",
    "type": "客机",
    "era": "1980s",
    "range": "6295 km",
    "wingspan": "38.05 m",
    "length": "47.3 m",
    "engines": "2 × Rolls-Royce RB211 / PW2000",
    "engineType": "涡扇"
  },
  {
    "model": "Boeing 767-300ER",
    "code": "763",
    "manufacturer": "波音公司",
    "firstFlight": "1986",
    "type": "客机",
    "era": "1980s",
    "range": "11070 km",
    "wingspan": "47.6 m",
    "length": "54.9 m",
    "engines": "2 × GE CF6 / PW4000 / RB211",
    "engineType": "涡扇"
  },
  {
    "model": "Boeing 777-200ER",
    "code": "772",
    "manufacturer": "波音公司",
    "firstFlight": "1994",
    "type": "客机",
    "era": "1990s",
    "range": "14300 km",
    "wingspan": "60.9 m",
    "length": "63.7 m",
    "engines": "2 × GE90 / Trent 800 / PW4000",
    "engineType": "涡扇"
  },
  {
    "model": "Boeing 777-300ER",
    "code": "77W",
    "manufacturer": "波音公司",
    "firstFlight": "2003",
    "type": "客机",
    "era": "2000s",
    "range": "14600 km",
    "wingspan": "64.8 m",
    "length": "73.9 m",
    "engines": "2 × GE90-115B",
    "engineType": "涡扇"
  },
  {
    "model": "Boeing 787-8",
    "code": "788",
    "manufacturer": "波音公司",
    "firstFlight": "2009",
    "type": "客机",
    "era": "2000s",
    "range": "13620 km",
    "wingspan": "60.1 m",
    "length": "56.7 m",
    "engines": "2 × GEnx / Trent 1000",
    "engineType": "涡扇"
  },
  {
    "model": "Boeing 787-9",
    "code": "789",
    "manufacturer": "波音公司",
    "firstFlight": "2013",
    "type": "客机",
    "era": "2010s",
    "range": "14140 km",
    "wingspan": "60.1 m",
    "length": "62.8 m",
    "engines": "2 × GEnx / Trent 1000",
    "engineType": "涡扇"
  },
  {
    "model": "Boeing 787-10",
    "code": "78X",
    "manufacturer": "波音公司",
    "firstFlight": "2017",
    "type": "客机",
    "era": "2010s",
    "range": "11910 km",
    "wingspan": "60.1 m",
    "length": "68.3 m",
    "engines": "2 × GEnx / Trent 1000",
    "engineType": "涡扇"
  },
  {
    "model": "Airbus A300B4",
    "code": "AB3",
    "manufacturer": "空中客车",
    "firstFlight": "1972",
    "type": "客机",
    "era": "1970s",
    "range": "7500 km",
    "wingspan": "44.84 m",
    "length": "54.08 m",
    "engines": "2 × GE CF6 / PW4000",
    "engineType": "涡扇"
  },
  {
    "model": "Airbus A310-300",
    "code": "313",
    "manufacturer": "空中客车",
    "firstFlight": "1982",
    "type": "客机",
    "era": "1980s",
    "range": "8000 km",
    "wingspan": "43.9 m",
    "length": "46.66 m",
    "engines": "2 × GE CF6 / PW4000",
    "engineType": "涡扇"
  },
  {
    "model": "Airbus A320-200",
    "code": "320",
    "manufacturer": "空中客车",
    "firstFlight": "1987",
    "type": "客机",
    "era": "1980s",
    "range": "6300 km",
    "wingspan": "35.8 m",
    "length": "37.57 m",
    "engines": "2 × CFM56 / IAE V2500",
    "engineType": "涡扇"
  },
  {
    "model": "Airbus A321neo",
    "code": "321N",
    "manufacturer": "空中客车",
    "firstFlight": "2016",
    "type": "客机",
    "era": "2010s",
    "range": "7400 km",
    "wingspan": "35.8 m",
    "length": "44.5 m",
    "engines": "2 × CFM LEAP-1A / PW1100G",
    "engineType": "涡扇"
  },
  {
    "model": "Airbus A330-200",
    "code": "332",
    "manufacturer": "空中客车",
    "firstFlight": "1997",
    "type": "客机",
    "era": "1990s",
    "range": "13450 km",
    "wingspan": "60.3 m",
    "length": "58.8 m",
    "engines": "2 × GE CF6 / PW4000 / Trent 700",
    "engineType": "涡扇"
  },
  {
    "model": "Airbus A330-300",
    "code": "333",
    "manufacturer": "空中客车",
    "firstFlight": "1992",
    "type": "客机",
    "era": "1990s",
    "range": "11300 km",
    "wingspan": "60.3 m",
    "length": "63.7 m",
    "engines": "2 × GE CF6 / PW4000 / Trent 700",
    "engineType": "涡扇"
  },
  {
    "model": "Airbus A340-300",
    "code": "343",
    "manufacturer": "空中客车",
    "firstFlight": "1991",
    "type": "客机",
    "era": "1990s",
    "range": "13400 km",
    "wingspan": "60.3 m",
    "length": "63.7 m",
    "engines": "4 × CFM56-5C",
    "engineType": "涡扇"
  },
  {
    "model": "Airbus A340-600",
    "code": "346",
    "manufacturer": "空中客车",
    "firstFlight": "2001",
    "type": "客机",
    "era": "2000s",
    "range": "14600 km",
    "wingspan": "63.45 m",
    "length": "75.3 m",
    "engines": "4 × Rolls-Royce Trent 500",
    "engineType": "涡扇"
  },
  {
    "model": "Airbus A350-900",
    "code": "359",
    "manufacturer": "空中客车",
    "firstFlight": "2013",
    "type": "客机",
    "era": "2010s",
    "range": "15000 km",
    "wingspan": "64.75 m",
    "length": "66.8 m",
    "engines": "2 × Rolls-Royce Trent XWB-84",
    "engineType": "涡扇"
  },
  {
    "model": "Airbus A350-1000",
    "code": "35K",
    "manufacturer": "空中客车",
    "firstFlight": "2016",
    "type": "客机",
    "era": "2010s",
    "range": "16100 km",
    "wingspan": "64.75 m",
    "length": "73.8 m",
    "engines": "2 × Rolls-Royce Trent XWB-97",
    "engineType": "涡扇"
  },
  {
    "model": "Airbus A380-800",
    "code": "388",
    "manufacturer": "空中客车",
    "firstFlight": "2005",
    "type": "客机",
    "era": "2000s",
    "range": "15200 km",
    "wingspan": "79.75 m",
    "length": "72.7 m",
    "engines": "4 × Rolls-Royce Trent 900 / Engine Alliance GP7200",
    "engineType": "涡扇"
  }

// ……这里可以继续补充完整的机型数据
];

// 渲染函数
function renderAircraft(data) {
  const grid = document.getElementById('aircraftGrid');
  grid.innerHTML = '';

  data.forEach(plane => {
    const capsule = document.createElement('div');
    capsule.className = 'capsule';
    capsule.dataset.type = plane.type;
    capsule.dataset.era = plane.era;
    capsule.dataset.maker = plane.manufacturer;
    capsule.dataset.range = plane.range.replace(/[^0-9]/g, '');
    capsule.dataset.engine = plane.engineType;

    capsule.innerHTML = `
      <label class="compareLabel">
        <input type="checkbox" class="compareCheck" data-model="${plane.model}">
        对比
      </label>
      <h3>${plane.model}</h3>
      <div class="details">
        <p><strong>制造商：</strong>${plane.manufacturer}</p>
        <p><strong>首飞：</strong>${plane.firstFlight}</p>
        <p><strong>类型：</strong>${plane.type}</p>
        <p><strong>年代：</strong>${plane.era}</p>
        <p><strong>航程：</strong>${plane.range}</p>
        <p><strong>翼展：</strong>${plane.wingspan}</p>
        <p><strong>机长：</strong>${plane.length}</p>
        <p><strong>发动机：</strong>${plane.engines}</p>
      </div>
    `;

    capsule.addEventListener('click', e => {
      if (!e.target.classList.contains('compareCheck')) {
        capsule.classList.toggle('open');
      }
    });

    grid.appendChild(capsule);
  });

  setupCompare();
}

// 过滤函数
function filter() {
  const query = document.getElementById('search').value.toLowerCase();
  const type = document.getElementById('typeFilter').value;
  const era = document.getElementById('eraFilter').value;
  const maker = document.getElementById('makerFilter').value;
  const engine = document.getElementById('engineFilter').value;
  const minRange = parseInt(document.getElementById('minRange').value) || 0;
  const maxRange = parseInt(document.getElementById('maxRange').value) || Infinity;

  document.querySelectorAll('.capsule').forEach(capsule => {
    const text = capsule.innerText.toLowerCase();
    const range = parseInt(capsule.dataset.range);

    const matchQuery = text.includes(query);
    const matchType = !type || capsule.dataset.type === type;
    const matchEra = !era || capsule.dataset.era === era;
    const matchMaker = !maker || capsule.dataset.maker === maker;
    const matchEngine = !engine || capsule.dataset.engine === engine;
    const matchRange = range >= minRange && range <= maxRange;

    capsule.style.display = (matchQuery && matchType && matchEra && matchMaker && matchEngine && matchRange) ? 'block' : 'none';
  });
}

['search','typeFilter','eraFilter','makerFilter','engineFilter','minRange','maxRange']
  .forEach(id => document.getElementById(id).addEventListener('input', filter));

// 对比功能
function setupCompare() {
  document.querySelectorAll('.compareCheck').forEach(check => {
    check.addEventListener('change', updateCompare);
  });
}

function updateCompare() {
  const selected = Array.from(document.querySelectorAll('.compareCheck:checked'))
    .map(c => c.dataset.model);

  const section = document.getElementById('compareSection');
  const tableDiv = document.getElementById('compareTable');

  if (selected.length === 0) {
    section.style.display = 'none';
    return;
  }

  if (selected.length > 2) {
    alert("最多只能对比两架飞机");
    this.checked = false;
    return;
  }

  const planes = aircraftData.filter(p => selected.includes(p.model));

  if (planes.length === 2) {
    section.style.display = 'block';
    let table = `
      <table>
        <tr><th>参数</th><th>${planes[0].model}</th><th>${planes[1].model}</th></tr>
        ${buildRow("制造商", planes[0].manufacturer, planes[1].manufacturer)}
        ${buildRow("首飞", planes[0].firstFlight, planes[1].firstFlight)}
        ${buildRow("航程", planes[0].range, planes[1].range)}
        ${buildRow("翼展", planes[0].wingspan, planes[1].wingspan)}
        ${buildRow("机长", planes[0].length, planes[1].length)}
        ${buildRow("发动机", planes[0].engines, planes[1].engines)}
      </table>
    `;
    tableDiv.innerHTML = table;
  } else {
    section.style.display = 'none';
  }
}

function buildRow(label, val1, val2) {
  const diff1 = val1 !== val2 ? ' style="background:rgba(255,0,0,0.3)"' : '';
  const diff2 = val1 !== val2 ? ' style="background:rgba(0,255,0,0.3)"' : '';
  return `<tr><td>${label}</td><td${diff1}>${val1}</td><td${diff2}>${val2}</td></tr>`;
}

// 夜间 / 日间模式切换
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// 页面初始化渲染
renderAircraft(aircraftData);