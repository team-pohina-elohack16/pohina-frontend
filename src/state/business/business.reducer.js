const INITIAL_STATE = {
  data: [ // Example datasets:
    {
      title: "Peran Putki Oy",
      values: [ 1, 2, 4, 1, 5, 8 ]
    },
    {
      title: "Pertin Putki Oy",
      values: [ 4, 6, 1, 4, 4, 3 ]
    },
    {
      title: "Pöhinä-Putki Oy",
      values: [ 1, 3, 5, 7, 8, 2 ]
    }
  ]
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
