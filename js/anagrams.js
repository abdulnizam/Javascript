class Anagram {
  constructor(list) {
    this.list = list;
    this.selected = {};
  }

  sorted() {
    return this.list.map(function(x) {
        return x.split('').sort().join('');
    })
  }

  selectedList() {
    let sorted_list = this.sorted();

    for(let v in sorted_list) {
      let elem = sorted_list[v];
      if(!this.selected[elem]){
        this.selected[elem] = [this.list[v]];
      }
      else {
        this.selected[elem].push(this.list[v]);
      }
    }
  }

  printList()
  {
    let list = this.selected;
    console.log(list);
    for(let k in list) {
      let elem = list[k];
      console.log(k+'->'+String(elem));
    }
  }

}

let words = ["ledl", "dell", "cba", "abc"];
let anagrams = new Anagram(words);

anagrams.selectedList();
anagrams.printList();
