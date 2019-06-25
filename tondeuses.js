export const tondeuses = function(listeTondeuses) {

  let coins = listeTondeuses[0]["coins"]
  coins = coins.split(" ")
  let coinX = coins[0]
  let coinY = coins[1]
  let sortie = ""
  let tmp = 0

  for( let i = 0; i<listeTondeuses.length; i++){
    for (let j = 0; j < listeTondeuses[i]["code"].length; j++) {

        if(listeTondeuses[i]["code"][j] == 'A') {
          if(listeTondeuses[i]["p"] == 'N' && listeTondeuses[i]["y"]+1 <= coinY ){
            listeTondeuses[i]["y"]++
          }else if(listeTondeuses[i]["p"] == 'S' && listeTondeuses[i]["y"]-1 >= 0){
            listeTondeuses[i]["y"]--
          }
          if(listeTondeuses[i]["p"] == 'E' && listeTondeuses[i]["x"]+1 <= coinX){
            listeTondeuses[i]["x"]++
          }else if(listeTondeuses[i]["p"] == 'W' && listeTondeuses[i]["x"]-1 >= 0){
            listeTondeuses[i]["x"]--
          }


        } else if(listeTondeuses[i]["code"][j] == 'D'){
          if(listeTondeuses[i]["p"] == 'N'){
            tmp = 'E'
          }else if(listeTondeuses[i]["p"] == 'S'){
            tmp = 'W'
          }
          if(listeTondeuses[i]["p"] == 'E'){
            tmp = 'S'
          }else if(listeTondeuses[i]["p"] == 'W'){
            tmp = 'N'
          }
          listeTondeuses[i]["p"] = tmp


        }else if(listeTondeuses[i]["code"][j] == 'G'){
          if(listeTondeuses[i]["p"] == 'N'){
            tmp = 'W'
          }else if(listeTondeuses[i]["p"] == 'S'){
            tmp = 'E'
          }
          if(listeTondeuses[i]["p"] == 'E'){
            tmp = 'N'
          }else if(listeTondeuses[i]["p"] == 'W'){
            tmp = 'S'
          }
          listeTondeuses[i]["p"] = tmp
        }
    }
    sortie+= ""+ listeTondeuses[i]["x"] +" "+ listeTondeuses[i]["y"] +" "+listeTondeuses[i]["p"]+ ";"
  }
  return sortie
};