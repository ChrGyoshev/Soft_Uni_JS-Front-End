function solve(data) {
   let n = data.shift();
   let typeOfSong = data.pop()

   let songList = []

   for (const element of data) {
    song = element.split("_")
    
    if (typeOfSong === "all") {
        songList.push(song[1])
    } else if (song[0] === typeOfSong) {
        songList.push(song[1])
    }

    
   }
   console.log(songList.join('\n'));

}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )