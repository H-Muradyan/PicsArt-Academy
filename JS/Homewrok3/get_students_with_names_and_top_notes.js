function getStudentsWithNamesAndTopNotes(arr) {
  return arr.map((el) => ({
    name: el.name,
    topNote: el.notes.length !== 0 ? Math.max(...el.notes) : 0,
  }));
}

console.log(
  getStudentsWithNamesAndTopNotes([
    { name: "John", notes: [3, 5, 4] },
    { name: "Max", notes: [1, 4, 6] },
    { name: "Zygmund", notes: [1, 2, 3] },
  ])
);
