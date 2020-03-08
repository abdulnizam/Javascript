votes =  ["Alex", "Michael", "Harry", "Dave", "Michael", "Victor", "Harry", "Alex", "Mary", "Mary" ];
votes.reverse();
arr = { }
for(let i = 0; i < votes.length; i++){

  if(arr[votes[i]] != null) {
    arr[votes[i]]++;
  } else {
    arr[votes[i]] = 1;
  }
}
var sortable = [];
for (let val in arr) {
    sortable.push([val, arr[val]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
});
//
console.log(sortable[sortable.length-1][0]);

// Map<String, Integer> map = new TreeMap<>(Collections.reverseOrder());
//         for (String vote : votes) {
//             if (map.containsKey(vote)) {
//                 map.put(vote, map.get(vote) + 1);
//             } else {
//                 map.put(vote, 1);
//             }
//         }
//         System.out.println(Collections.max(map.entrySet(), Map.Entry.comparingByValue())
//                 .getKey());
