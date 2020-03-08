const distint = ( value, index, self) => {
    return self.indexOf(value) !== index;
}
const returnDuplicate = ( arr ) => {

  const results = new Set(arr.filter(distint));

  return [...results];
}

const arr = [2016, 2017, 2017, 2016, 2019, 2018, 2019, 2019];
console.log(returnDuplicate(arr));
