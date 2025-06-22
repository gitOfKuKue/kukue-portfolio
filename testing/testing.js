
const string = `name=Ku Kue
time=2 Days ago
rate=5.7
description=This website is awesome`;

const datas = {

};

const infos = string.split("\n")

for(let i=0; i<infos.length; i++){
  let [key, value] = infos[i].split("=");
  datas[key] = value;
}

console.log(datas);