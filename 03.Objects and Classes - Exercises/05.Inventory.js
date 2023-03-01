function inventory(input) {
  let heroesCollection = [];
  for (const data of input) {
    [name, level, items] = data.split(" / ");
    level = Number(level);
    heroesCollection.push({ name: name, level: level, items: items });
  }
  heroesCollection.sort((a, b) => a.level - b.level);

  heroesCollection.forEach((hero) => {
    console.log(
      `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`
    );
  });
}
